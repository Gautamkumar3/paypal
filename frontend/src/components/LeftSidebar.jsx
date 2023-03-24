import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import AllSprint from "./AllSprint";
import RightSidebar from "./RightSidebar";

const LeftSidebar = () => {
  const arr = [1, 2, 3, 4, 5];

  return (
    <Box>
      <Box
        boxShadow="md"
        p="6"
        rounded="md"
        bg="white"
        pos={"relative"}
        h="90vh"
      >
        <Heading>Sprint</Heading>
        {arr.map((el) => (
          <AllSprint key={el} name={el} />
        ))}
        <Button
          colorScheme={"whatsapp"}
          pos="absolute"
          w={"85%"}
          bottom={"10px"}
        >
          Create Sprint
        </Button>
      </Box>
    </Box>
  );
};

export default LeftSidebar;
