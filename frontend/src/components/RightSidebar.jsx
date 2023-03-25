import { Box, Heading } from "@chakra-ui/react";
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import TaskTable from "./TaskTable";

const RightSidebar = ({ id }) => {
  const { data } = useContext(AppContext);
  const sprint = localStorage.getItem("sprintId");
  return (
    <Box boxShadow="md" p="6" rounded="md" bg="white">
      <Heading my={5} textAlign={"center"}>
        Task
      </Heading>
      {sprint ? <TaskTable /> : <Heading>Click on sprint</Heading>}{" "}
    </Box>
  );
};

export default RightSidebar;
