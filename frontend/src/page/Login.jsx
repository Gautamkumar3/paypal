import { Box, Button, Heading, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { getSprintData } from "../store/sprint/Sprint.action";
import { useDispatch } from "react-redux";

const Login = () => {
  const [data, setData] = useState({
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
      .post("https://paypal-api.onrender.com/user/login", data)
      .then((res) => {
        localStorage.setItem(
          "userdata",
          JSON.stringify({
            username: res.data.userName,
            token: res.data.token,
          })
        );
        toast({
          title: "Login successfull",
          status: "success",
          duration: 4000,
          isClosable: true,
          position: "top",
        });
        navigate("/");
      })
      .catch((er) => {
        toast({
          title: `${er.response.data.message || "Login Failed"}`,
          status: `${er.response.data.status || "error"}`,
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
      mt={"5%"}
    >
      <Heading my={5} color="brown" textAlign={"center"}>
        Login Form
      </Heading>
      <form onSubmit={handleSubmit}>
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
          Login
        </Button>
      </form>
    </Box>
  );
};

export default Login;
