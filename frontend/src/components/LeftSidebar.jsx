import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSprintData } from "../store/sprint/Sprint.action";
import AllSprint from "./AllSprint";
import CreateSprintModal from "./CreateSprintModal";

const LeftSidebar = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store.sprintData);

  console.log(data);

  useEffect(() => {
    dispatch(getSprintData());
  }, []);

  return (
    <Box>
      <Heading textAlign="center" borderBottom={"2px solid black"}>
        Sprint
      </Heading>
      <Box
        boxShadow="md"
        p="6"
        rounded="md"
        bg="white"
        h="70vh"
        overflow={"scroll"}
      >
        {data?.map((el) => (
          <AllSprint key={el._id} {...el} />
        ))}
      </Box>
      <Box w={"80%"}>
        <CreateSprintModal />
      </Box>
    </Box>
  );
};

export default LeftSidebar;
