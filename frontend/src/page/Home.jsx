import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import { getSprintData } from "../store/sprint/Sprint.action";

const Home = () => {
  const dispatch = useDispatch();
  const userdata = JSON.parse(localStorage.getItem("userdata"));
  useEffect(() => {
    dispatch(getSprintData(userdata?.token));
    localStorage.removeItem("sprintId");
  }, []);

  return (
    <Flex gap={10} mt="8%">
      <Box w="25%" pos={"sticky"} top="200px">
        <LeftSidebar />
      </Box>
      <Box width={"70%"}>
        <RightSidebar />
      </Box>
    </Flex>
  );
};

export default Home;
