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
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addSprintData, getSprintData } from "../store/sprint/Sprint.action";

const CreateSprintModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [data, setData] = useState({
    title: "",
    goal: "",
    start_date: "",
    end_date: "",
  });

  const toast = useToast();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addSprintData(data))
      .then((res) => {
        if (res.data.status === "success") {
          dispatch(getSprintData());
          toast({
            title: "Sprint create successfully",
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
      <Button
        ml={"10%"}
        colorScheme={"whatsapp"}
        w="full"
        bottom={"10px"}
        onClick={onOpen}
      >
        Create Sprint
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
                  w="50%"
                  type={"text"}
                  name="title"
                  placeholder="title"
                  onChange={handleChange}
                />
              </HStack>
              <HStack my={2} spacing="45px">
                <FormLabel>Goal </FormLabel>
                <Input
                  w="50%"
                  type={"text"}
                  name="goal"
                  placeholder="goal"
                  onChange={handleChange}
                />
              </HStack>
              <HStack>
                <FormLabel>Start date</FormLabel>
                <Input
                  type={"date"}
                  w="50%"
                  name="start_date"
                  placeholder="start date"
                  onChange={handleChange}
                />
              </HStack>
              <HStack my={2} spacing={4}>
                <FormLabel>End date</FormLabel>
                <Input
                  type={"date"}
                  w="50%"
                  name="end_date"
                  placeholder="end date"
                  onChange={handleChange}
                />
              </HStack>

              <Button
                onClick={onClose}
                my={3}
                type="submit"
                colorScheme={"whatsapp"}
                w="full"
              >
                Create Sprint
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateSprintModal;
