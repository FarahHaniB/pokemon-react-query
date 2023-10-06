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
    <Box padding={4}>
      <Text align="center" fontSize="2xl" fontWeight="bold" margin={6}>
        Choose your Pokemon!
      </Text>
      <Flex flexWrap="wrap" gap="20px" justify="space-evenly">
        {data?.results.map((poke: any, i: number) => {
          return (
            <Box
              key={poke.name}
              _hover={{ boxShadow: "dark-lg" }}
              bg="#feffdf"
              backgroundImage="linear-gradient(to bottom right, #feffdf, #ffe79a)"
              w="160px"
              h="200px"
              borderRadius="lg"
              borderWidth="medium"
              borderColor="#8dc6ff"
              mb="20px"
              onClick={() => handleClick(poke.name)}
            >
              <Link href={`/${poke.name}`}>
                <Text key={poke.name} align="center" fontWeight='bold'>
                  {poke.name}
                </Text>
                <RQPokemonImages pokeIds={[i + 1]} />
              </Link>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};

export default RQPokemons;
