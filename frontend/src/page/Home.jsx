import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";

const Home = () => {
  return (
    <Flex gap={10}>
      <Box w="25%">
        <LeftSidebar />
      </Box>
      <Box width={"70%"}>
        <RightSidebar />
      </Box>
    </Flex>
  );
};

export default Home;
