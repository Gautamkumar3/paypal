import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Select,
  useDisclosure,
  FormLabel,
  Button,
  useToast,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { getTaskData, updateTaskData } from "../store/task/Task.action";

const UpdateTaskModal = ({ id }) => {
  const [status, setStatus] = useState({ status: "" });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const sprintId = localStorage.getItem("sprintId");

  const handleChange = (e) => {
    setStatus({ status: e.target.value });
  };

  const dispatch = useDispatch();
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTaskData(sprintId, id, status))
      .then((res) => {
        console.log(res);

        if (res.data.status === "success") {
          dispatch(getTaskData(sprintId));
          toast({
            title: "Task updated successfully",
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
    <>
      <EditIcon onClick={onOpen} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <FormLabel>Status</FormLabel>
              <Select
                placeholder="Select status"
                name="status"
                onChange={handleChange}
              >
                <option value="todo">Todo</option>
                <option value="in progress">In Progress</option>
                <option value="code review">Code Review</option>
                <option value="testing">Testing</option>
                <option value="done">Done</option>
              </Select>{" "}
              <Button
                onClick={onClose}
                my={3}
                type="submit"
                colorScheme={"whatsapp"}
                w="full"
              >
                Update Task
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdateTaskModal;
