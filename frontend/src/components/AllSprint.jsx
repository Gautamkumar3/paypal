import { Badge, Box, HStack, Text } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const AllSprint = ({ _id, title, goal, end_date, start_date }) => {
  // const { data, setData } = useContext(AppContext);


  return (
    <Box boxShadow="md" p="3" rounded="md" bg="gray.300" my={2}>
      <Text fontSize={"20px"} fontWeight="600">
        {" "}
        {title}
      </Text>
      <Text>
        <span style={{ color: "green" }}>Goal</span> : {goal}
      </Text>
      <HStack>
        <Badge colorScheme={"yellow"}>start date :{start_date}</Badge>
      </HStack>
      <Badge colorScheme={"yellow"}>end date :{end_date}</Badge>
    </Box>
  );
};

export default AllSprint;
