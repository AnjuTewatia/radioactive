import React from "react";
import {
  Image,
  Box,
  Text,
  SimpleGrid,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Heading,
} from "@chakra-ui/react";

import { NavLink, useNavigate } from "react-router-dom";

const Prooductcomp = ({ item }) => {
  
  const  navigate=useNavigate()

  const handleClick =(id)=>{
    navigate(`/singleproduct/${id}`);
  }
  return (
    <>
      <Box
        h="full"
        marginTop={"40px"}
        borderRadius="20px"
        alignItems="center"
        box-shadow="10px 5px 5px black"
        key={item._id}
        className="imgs"
        style={{ boxShadow: " 1px 1px 0px grey,3px 3px 1px yellow" }}
        // onClick={() => console.log(item._id)}
        onClick={() => handleClick(item._id)}
        
      >
       
          <Image src={item.image1} alt="" />
       

        <Text align="center" color="black" p="0px 5px" fontWeight="bold">
          {item.title}
        </Text>

        <Text marginLeft="20px" color="black" p="0px 5px">
          SoldBy:
          {item.soldby}
        </Text>

        <Text marginLeft="20px" color="red" p="0px 5px">
          Price:
          {item.price}
        </Text>

        <Text marginLeft="20px" color="red" p="0px 5px">
          Code:
          {item.code}
        </Text>

        {/* </Box> */}
      </Box>
    </>
  );
};

export default Prooductcomp;
