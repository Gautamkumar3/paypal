import { Box, Text } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const AllSprint = ({ name }) => {
  const handleClick = (id) => {
    setData(id);
  };

  const { data, setData } = useContext(AppContext);

  return (
    <Box
      color={data === name ? "red" : "green"}
      onClick={() => handleClick(name)}
    >
      <Text>Sprint {name}</Text>
    </Box>
  );
};

export default AllSprint;
