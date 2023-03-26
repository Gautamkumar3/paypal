import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import TaskTable from "./TaskTable";

const RightSidebar = ({ id }) => {
  return (
    <Box boxShadow="md" p="6" rounded="md" bg="white">
      <Heading my={5} textAlign={"center"}>
        Task
      </Heading>
      <TaskTable />
    </Box>
  );
};

export default RightSidebar;
