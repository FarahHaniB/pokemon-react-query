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
  moves: string[];
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
        h="100%"
        // h="80vh"
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

            <Flex align="center" mt={10}>
              <Text as="b" marginBottom={2} marginRight={4}>
                Abilities:{" "}
              </Text>
              {data?.abilities.map((pokeAbility: any) => (
                <Text
                  p="8px"
                  m="5px"
                  minWidth="150px"
                  bg="#5e63b6"
                  color='white'
                  borderRadius="md"
                  align="center"
                  key={pokeAbility.ability.name}
                >
                  {pokeAbility.ability.name}
                </Text>
              ))}
            </Flex>
            <Flex align="center" mt={10}>
              <Text as="b" marginBottom={2} marginRight={4}>
                Types:{" "}
              </Text>
              {data?.types.map((pokeType: any) => (
                <Text
                  p="8px"
                  m="5px"
                  minWidth="150px"
                  bg="#a393eb"
                  borderRadius="md"
                  align="center"
                  key={pokeType.type.name}
                >
                  {pokeType.type.name}
                </Text>
              ))}
            </Flex>

            <Flex align="center" mt={10} direction="column">
              <Text as="b" marginBottom={2}>
                Moves:{" "}
              </Text>
              <Flex flexWrap="wrap" justifyContent="center">
                {data?.moves.map((pokeMove: any) => (
                  <Text
                    p="8px"
                    m="5px"
                    minWidth="150px"
                    bg="#ffebbb"
                    borderRadius="md"
                    align="center"
                    key={pokeMove.move.name}
                  >
                    {pokeMove.move.name}
                  </Text>
                ))}
              </Flex>{" "}
            </Flex>
          </Flex>
        </Box>
        <Box marginY={10}>
          <Button onClick={() => navigate(-1)} color="black">
            Back
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default RQPokemonDetails;
