import { Box, Button, Heading, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import axios from "axios";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const toast = useToast();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("https://paypal-api.onrender.com/user/signup", data)
      .then((res) => {
        console.log(res.data);
        toast({
          title: "Account created.",
          description: `${res.data.message}`,
          status: "success",
          duration: 4000,
          isClosable: true,
          position: "top",
        });
        navigate("/login");
      })
      .catch((er) => {
        console.log(er);
        toast({
          title: `${er.response.data.message || "Signup Failed"}`,
          status: "error",
          duration: 4000,
          isClosable: true,
          position: "top",
        });
      });
  };

  return (
    <Box
      width={"30%"}
      padding={5}
      m="auto"
      boxShadow="md"
      p="6"
      rounded="md"
      bg="white"
      mt={"10%"}
    >
      <Heading my={3} color="brown" textAlign={"center"}>
        Signup Form
      </Heading>
      <form onSubmit={handleSubmit} required>
        <Input
          type={"text"}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <br />
        <br />
        <Input
          type={"email"}
          name="email"
          placeholder="email"
          onChange={handleChange}
        />
        <br />
        <br />
        <Input
          type={"password"}
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <br />
        <br />
        <Button type="submit" colorScheme={"whatsapp"} w="full">
          Signup
        </Button>
      </form>
    </Box>
  );
};

export default Signup;
