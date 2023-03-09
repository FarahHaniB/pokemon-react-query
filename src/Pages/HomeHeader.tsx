import React, { ReactNode } from "react";
import { Link, Flex, HStack } from "@chakra-ui/react";

const NavLink = ({ path, children }: { path: string; children: ReactNode }) => {
  return (
    <Link href={path} _hover={{ bg: "lightgrey" }}>
      {children}
    </Link>
  );
};

const HomeHeader = () => {
  return (
    <>
      <Flex justify="space-between">
        <img
          src="https://www.freepnglogos.com/uploads/gotta-catch-em-all-transparent-pokemon-logo-11.png"
          width="200"
          alt="gotta catch em all, transparent pokemon logo"
        />
        <HStack columnGap="20px">
          <NavLink path="/">Home</NavLink>
          <NavLink path="/">About</NavLink>
        </HStack>
      </Flex>
    </>
  );
};

export default HomeHeader;
