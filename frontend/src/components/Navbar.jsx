import { Avatar, Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const userdata = JSON.parse(localStorage.getItem("userdata"));
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("userdata");
    navigate("/login");
  }

  return (
    <Box
      h="80px"
      bg={"#4E6E81"}
      color="#fff"
      pos="fixed"
      w={"100%"}
      top="0px"
      zIndex={500}
    >
      <Flex
        justify={"space-between"}
        w="90%"
        h="full"
        align={"center"}
        m="auto"
      >
        <Link to="/">
          <Text fontSize={"25px"}>Home</Text>
        </Link>
        {userdata?.token ? (
          <Flex gap={5}>
            <HStack spacing={2}>
              <Avatar size={"sm"} bg="teal.500" />
              <Text fontSize={"20px"}>Welcome, {userdata?.username}</Text>
            </HStack>
            <Button colorScheme={"red"} onClick={handleLogout}>
              Logout
            </Button>
          </Flex>
        ) : (
          <Flex gap={5}>
            <Link to="/signup">
              <Button colorScheme={"whatsapp"}>Signup</Button>
            </Link>
            <Link to="/login">
              {" "}
              <Button colorScheme={""} variant="outline">
                Login
              </Button>
            </Link>
          </Flex>
        )}
      </Flex>
    </Box>
  );
};

export default Navbar;
