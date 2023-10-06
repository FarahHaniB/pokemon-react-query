import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { useQueries } from "react-query";

const fetchImages = async (pokeId: string | number) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);
  return res.json();
};

interface Images {
  [key: string]: any;
  name?: string;
}

const RQPokemonImages = ({ pokeIds }: { pokeIds: any }) => {
  const queryResults: Images = useQueries(
    pokeIds.map((id: string | number) => {
      return {
        queryKey: ["pokemonImage", id],
        queryFn: () => fetchImages(id),
      };
    })
  );
  return (
    <>
      <Box key={pokeIds}>
        {pokeIds.map((user: any, i: number) => {
          return (
            <Image
              key={i}
              src={queryResults[i].data?.sprites["front_default"]}
              minH="130px"
              width="auto"
              display="block"
              marginLeft="auto"
              marginRight="auto"
              marginTop={4}
            ></Image>
          );
        })}
      </Box>
    </>
  );
};

export default RQPokemonImages;
