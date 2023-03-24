import { Box, Heading } from "@chakra-ui/react";
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const RightSidebar = ({ id }) => {
  const { data } = useContext(AppContext);
  console.log(data);
  return (
    <Box>
      <Heading>Tasks {data}</Heading>
    </Box>
  );
};

export default RightSidebar;
