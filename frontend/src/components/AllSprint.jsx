import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Flex,
  Heading,
  HStack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteSprintData, getSprintData } from "../store/sprint/Sprint.action";
import { getTaskData } from "../store/task/Task.action";
import UpdateSprintModal from "./UpdateSprintModal";

const AllSprint = ({ _id, title, goal, end_date, start_date }) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const userdata = JSON.parse(localStorage.getItem("userdata"));

  const handleTask = (id) => {
    dispatch(getTaskData(id));
    localStorage.setItem("sprintId", id);
  };

  const handleDelete = (id) => {
    dispatch(deleteSprintData(id))
      .then((res) => {
        if (res.data.status === "success") {
          dispatch(getSprintData(userdata.token));
          toast({
            title: "Sprint deleted successfully",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "top",
          });
        } else {
          toast({
            title: "Something went wrong",
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "top",
          });
        }
      })
      .catch((er) => {
        toast({
          title: `Something went wrong`,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      });
  };

  return (
    <Box
      boxShadow="md"
      p="3"
      rounded="md"
      bg="gray.300"
      my={2}
      _hover={{ cursor: "pointer" }}
      onClick={() => handleTask(_id)}
    >
      <Text fontSize={"20px"} fontWeight="600">
        {" "}
        {title}
      </Text>
      <Text>
        <span style={{ color: "green" }}>Goal</span> : {goal}
      </Text>
      <HStack>
        <Box>
          <Badge colorScheme={"yellow"}>
            start date : {start_date?.split("T")[0]}
          </Badge>
          <Badge colorScheme={"yellow"}>
            end date :{end_date?.split("T")[0]}
          </Badge>
        </Box>
        <Flex gap={3}>
          <DeleteIcon
            w={6}
            onClick={() => handleDelete(_id)}
            h={6}
            _hover={{ cursor: "pointer" }}
          />
          <UpdateSprintModal id={_id} />
        </Flex>
      </HStack>
    </Box>
  );
};

export default AllSprint;
