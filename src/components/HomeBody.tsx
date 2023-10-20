import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import RQPokemons from "./RQPokemons";
import RQPokemonDetails from './RQPokemonDetails';
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

const HomeBody = () => {
  return (
    <Box padding='15px' bg='#d5def5'>
      <QueryClientProvider client={queryClient} />
      <Router>
        <Routes>
          <Route path="/" element={<RQPokemons />} />
          <Route path="/:pokeId" element={<RQPokemonDetails />} />
        </Routes>
      </Router>
    </Box>
  );
};

export default HomeBody;
