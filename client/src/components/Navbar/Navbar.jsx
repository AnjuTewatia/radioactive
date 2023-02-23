import {
  VStack,
  Box,
  Grid,
  GridItem,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Image,
  Center,
  Text,
  Flex,
  Wrap,
  position,
} from "@chakra-ui/react";

import { SearchIcon, CalendarIcon } from "@chakra-ui/icons";

import React from "react";
import { useState } from "react";

import { Link, Navigate } from "react-router-dom";
// import  './Navbar.module.css'
import { useNavigate } from "react-router-dom";
 import logo from "../../assets/logo.jpg"


const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const activeStyle = {
    color: "black",
    backgroundColor: "#fdd835",
    // position:"fixed"
  };

  const defaultStyle = {
    color: "black",
    backgroundColor: "#fdd835",
    // position:"fixed",
    // zIndex:"999"
  };

  const handleClick = (e) => {
    setSearch(e.target.value);
    if (e.code == "Enter") {
      navigate(`/search/${search}`);
    }
  };

  return (
    <Box
      className="mainNav"
      position={"fixed"}
      zIndex={"999"}
      bgColor={"blue.400"}
      width={"100%"}
      color={"white"}
    >
      <Wrap justify="center">
        <Grid
          className="NavbarCNav"
          templateColumns="repeat(3, 20% 30% 40%)"
          gap={2}
        >
          <GridItem>
            <Link to="/">
              <Image
                width="40%"
                height={"50px"}
                // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlr4ZxBMXg0EyDACXUmTAkddbEqub6A0eE8Q&usqp=CAU"
              src={logo}

              />
            </Link>
          </GridItem>

          <GridItem>
            <HStack spacing="24px">
              <Center h="50px">
                <Link to="/allproduct">
                  <Text fontWeight="extrabold" fontSize={"20px"} ml="40px">
                    {" "}
                    All Products
                  </Text>
                </Link>
              </Center>
            </HStack>
          </GridItem>

          <GridItem style={{ marginRight: "100px" }}>
            <HStack spacing="24px">
              <InputGroup>
                <Input
                  w={700}
                  backgroundColor={"white"}
                  color={"black"}
                  placeholder="Search By Product"
                  onKeyUp={(e) => handleClick(e)}
                />
                <InputLeftElement
                  pointerEvents="none"
                  children={<SearchIcon color="gray.300" />}
                />
              </InputGroup>

              <Center h="50px">
                <Text fontWeight="extrabold" fontSize={"14px"}>
                  {" "}
                  |
                </Text>
              </Center>

              <Center h="50px">
                <Link to="/login">
                  <Text fontWeight="extrabold" fontSize={"14px"}>
                    {" "}
                    Login
                  </Text>
                </Link>
              </Center>
              <Center h="50px">
                <Link to="/signup">
                  <Text fontWeight="extrabold" fontSize={"14px"}>
                    {" "}
                    SignUP
                  </Text>
                </Link>
              </Center>

              <Center h="50px">
                <Link to="/cart">
                  <CalendarIcon fontWeight="extrabold" fontSize={"20px"}>
                    {" "}
                  </CalendarIcon>
                </Link>
              </Center>

              <Center h="50px">
                <Link to="/admin/login">
                  <Text fontWeight="extrabold" fontSize={"14px"}>
                    {" "}
                    Admin
                  </Text>
                </Link>
              </Center>
            </HStack>
          </GridItem>
        </Grid>
      </Wrap>
      <hr />

      <HStack justify="center" spacing="24px">
        <Center h="50px">
          <Link to="/clothes">
            <Text fontWeight="extrabold" fontSize={"20px"}>
              {" "}
              Mens
            </Text>
          </Link>
        </Center>

        <Center h="50px">
          <Link to="/women">
            <Text fontWeight="extrabold" fontSize={"20px"}>
              {" "}
              Women
            </Text>
          </Link>
        </Center>

        <Center h="50px">
          <Link to="/kids">
            <Text fontWeight="extrabold" fontSize={"20px"}>
              {" "}
              Kids
            </Text>
          </Link>
        </Center>

        <Center padding="0px 20px" h="50px">
          <Link to="/health">
            <Text fontWeight="extrabold" fontSize={"20px"}>
              {" "}
              Health
            </Text>
          </Link>
        </Center>

        <Center h="50px">
          <Link to="/electronics">
            <Text fontWeight="extrabold" fontSize={"20px"}>
              {" "}
              Electronics
            </Text>
          </Link>
        </Center>

        <Center h="50px">
          <Link to="/cosmetics">
            <Text fontWeight="extrabold" fontSize={"20px"}>
              {" "}
              Cosmetics
            </Text>
          </Link>
        </Center>

        <Center h="50px">
          <Link to="/jewellery">
            <Text fontWeight="extrabold" fontSize={"20px"}>
              {" "}
              Jewellery
            </Text>
          </Link>
        </Center>
      </HStack>
    </Box>
  );
};

export default Navbar;
