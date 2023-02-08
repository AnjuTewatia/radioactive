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

import { Link } from "react-router-dom";
// import  './Navbar.module.css'
import { useNavigate } from "react-router-dom";

const Navbar = () => {
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

  return (
    <Box
      className="mainNav"
      position={"fixed"}
      zIndex={"999"}
      bgColor={"black"}
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
                width="80%"
                height={"90px"}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlr4ZxBMXg0EyDACXUmTAkddbEqub6A0eE8Q&usqp=CAU"
              />
            </Link>
          </GridItem>

          <GridItem>
            <HStack spacing="24px">
              <Center h="50px">
                <Link to="/allproduct">
                  <Text fontWeight="extrabold" fontSize={"20px"}>
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


        <Center
          padding="0px 20px"
          //  style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}

          h="50px"
        >
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
