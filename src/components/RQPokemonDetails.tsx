import { useNavigate } from "react-router-dom";
import React from "react";
import { useQuery } from "react-query";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import RQPokemonImages from "./RQPokemonImages";

const fetchDetails = async (pokeAbility: string) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeAbility}`);
  return res.json();
};

interface Details {
  data: any;
  abilities: string[];
  types: string[];
}

const RQPokemonDetails = () => {
  const navigate = useNavigate();

  const { pokeId } = useParams();
  const { isLoading, isFetching, data, error, isError } = useQuery<
    Details,
    Error
  >({
    queryKey: ["pokemonImages", pokeId],
    queryFn: () => fetchDetails(pokeId!),
  });

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Error! {error?.message}</h2>;
  }
  return (
    <>
      <Flex
        direction="column"
        h="80vh"
        justifyContent="space-evenly"
        align="center"
      >
        <Text as="b" fontSize="3xl">
          I'm {pokeId}!
        </Text>{" "}
        <Box
          minHeight="60vh"
          minWidth="80vw"
          borderWidth="1px"
          borderRadius="lg"
        >
          <Flex align="center" direction="column" mt={4}>
            <RQPokemonImages pokeIds={[pokeId]} />

            <Flex mt={6}>
              <Text as="b">Abilities: </Text>
              <Box>
                {data?.abilities.map((pokeAbility: any) => (
                  <Text
                    p="8px"
                    m="5px"
                    width="150px"
                    bg="lightblue"
                    borderRadius="md"
                    align="center"
                    key={pokeAbility.ability.name}
                  >
                    {pokeAbility.ability.name}
                  </Text>
                ))}
              </Box>
            </Flex>
            <Flex mt={6}>
              <Text as="b">Types: </Text>
              <Box>
                {data?.types.map((pokeType: any) => (
                  <Text
                    p="8px"
                    m="5px"
                    width="150px"
                    bg="burlywood"
                    borderRadius="md"
                    align="center"
                    key={pokeType.type.name}
                  >
                    {pokeType.type.name}
                  </Text>
                ))}
              </Box>{" "}
            </Flex>
          </Flex>
        </Box>
        <Button onClick={() => navigate(-1)}>Back</Button>
      </Flex>
    </>
  );
};

export default RQPokemonDetails;
