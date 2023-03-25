import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Center,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import AddTaskModal from "./AddTaskModal";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { deleteTaskData, getTaskData } from "../store/task/Task.action";
import UpdateTaskModal from "./UpdateTaskModal";

const TaskTable = () => {
  const { data } = useSelector((store) => store.taskData);
  const dispatch = useDispatch();
  const toast = useToast();

  function handleDelete(id) {
    dispatch(deleteTaskData(id))
      .then((res) => {
        console.log(res);

        if (res.data.status === "success") {
          dispatch(getTaskData());
          toast({
            title: "Task deleted successfully",
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
  }
  return (
    <Box>
      <Center my={3}>
        <AddTaskModal />
      </Center>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead bg={"whatsapp.300"}>
            <Tr>
              <Th>Title</Th>
              <Th>Description</Th>
              <Th>Type</Th>
              <Th>Status</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((task) => (
              <Tr key={task._id}>
                <Td>{task.title}</Td>
                <Td>{task.description}</Td>
                <Td>{task.type}</Td>
                <Td>{task.status}</Td>
                <Td>
                  <UpdateTaskModal id={task._id} />
                </Td>
                <Td>
                  <DeleteIcon
                    w={6}
                    onClick={() => handleDelete(task._id)}
                    h={6}
                    _hover={{ cursor: "pointer" }}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TaskTable;
