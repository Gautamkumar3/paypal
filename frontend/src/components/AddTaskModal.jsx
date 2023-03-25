// import React from 'react'

// const AddTaskModal = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default AddTaskModal

import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Input,
  useToast,
  FormLabel,
  HStack,
  Select,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addTaskData, getTaskData } from "../store/task/Task.action";

const AddTaskModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [data, setData] = useState({
    title: "",
    description: "",
    type: "",
    status: "",
  });

  const toast = useToast();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTaskData(data))
      .then((res) => {
        console.log(res);

        if (res.data.status === "success") {
          dispatch(getTaskData());
          toast({
            title: "Task create successfully",
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
      <Button colorScheme={"whatsapp"} bottom={"10px"} onClick={onOpen}>
        Create Task
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit} required>
              <HStack mt={"30px"} spacing="45px">
                <FormLabel>Title </FormLabel>
                <Input
                  mt={8}
                  w="60%"
                  type={"text"}
                  name="title"
                  placeholder="title"
                  onChange={handleChange}
                />
              </HStack>
              <HStack my={2}>
                <FormLabel>Description </FormLabel>
                <Input
                  w="60%"
                  type={"text"}
                  name="description"
                  placeholder="description"
                  onChange={handleChange}
                />
              </HStack>
              <HStack spacing={"50px"}>
                <FormLabel>Type</FormLabel>

                <Select
                  placeholder="Select type"
                  name="type"
                  onChange={handleChange}
                  w="50%"
                >
                  <option value="bug">Bug</option>
                  <option value="feature">Feature</option>
                  <option value="story">Story</option>
                </Select>
              </HStack>
              <HStack my={2} spacing={"40px"}>
                <FormLabel>Status</FormLabel>
                <Select
                  placeholder="Select status"
                  name="status"
                  onChange={handleChange}
                  w="50%"
                >
                  <option value="todo">Todo</option>
                  <option value="in progress">In Progress</option>
                  <option value="code review">Code Review</option>
                  <option value="testing">Testing</option>
                  <option value="done">Done</option>
                </Select>
              </HStack>

              <Button
                onClick={onClose}
                my={3}
                type="submit"
                colorScheme={"whatsapp"}
                w="full"
              >
                Create Task
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddTaskModal;
