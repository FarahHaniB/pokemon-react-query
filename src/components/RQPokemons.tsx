import React from "react";
import { useQuery } from "react-query";
import { Image, Box, Text, Link, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import RQPokemonImages from "./RQPokemonImages";

const fetchPokemons = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon");
  return res.json();
};

interface Pokemons {
  name: string;
  data: any;
  results: any;
}

const RQPokemons = () => {
  const navigate = useNavigate();

  const { isLoading, data, isError, error, isFetching } = useQuery<
    Pokemons,
    Error
  >("catchPokemons", fetchPokemons, { cacheTime: 10000 });

  console.log({ isLoading, isFetching });

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Error! {error?.message}</h2>;
  }
  // console.log(data);

  const handleClick = (clickedPoke: string) => {
    navigate(`/${clickedPoke}`, { state: { clickedPoke } });
    // console.log("clicked", clickedPoke);
  };
  return (
    <Flex flexWrap="wrap" gap="20px" justify="space-evenly">
      {data?.results.map((poke: any, i: number) => {
        return (
          <Box
            key={poke.name}
            _hover={{ boxShadow: "dark-lg" }}
            bg="lightblue"
            w="100px"
            h="130px"
            borderRadius="md"
            mb="20px"
            onClick={() => handleClick(poke.name)}
          >
            <Link href={`/${poke.name}`}>
              <Text key={poke.name} align="center">
                {poke.name}
              </Text>
              <RQPokemonImages pokeIds={[i + 1]} />
            </Link>
          </Box>
        );
      })}
    </Flex>
  );
};

export default RQPokemons;
