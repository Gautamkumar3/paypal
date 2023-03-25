import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSprintData } from "../store/sprint/Sprint.action";
import AllSprint from "./AllSprint";

const LeftSidebar = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store.sprintData);

  console.log(data);

  useEffect(() => {
    dispatch(getSprintData());
  }, []);

  return (
    <Box>
      <Box
        boxShadow="md"
        p="6"
        rounded="md"
        bg="white"
        pos={"relative"}
        h="85vh"
        overflow={"scroll"}
      >
        <Heading my={5} textAlign="center" borderBottom={"2px solid black"}>
          Sprint
        </Heading>
        {data?.map((el) => (
          <AllSprint key={el._id} {...el} />
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
