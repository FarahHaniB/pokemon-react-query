import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import RQPokemons from "../components/RQPokemons";
import RQPokemonDetails from "../components/RQPokemonDetails";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

const HomeBody = () => {
  return (
    <Box padding='15px' bg='#e4f1fe'>
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
