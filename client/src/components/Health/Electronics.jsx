

import React from 'react'
import { Image,Box,SimpleGrid,Text,Img } from '@chakra-ui/react'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { NavLink } from 'react-router-dom';
// import Gangs from './Gangs';

const Electronics = () => {
    const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let res = await axios.get("https://gold-gifted-ladybug.cyclic.app/product?category=electronics")
      console.log(res);
      setData(res.data);
    };
    getData();
  }, []);

 
  return (
    <>
      <Box className="moment" p="20px" pb="auto"  paddingTop={"125px"}style={{width:"85%",marginLeft:"100px"}}   >
      <Text color="black" 
     fontSize={"35"}>CATEGORIES Of Electronics</Text>
                
        <SimpleGrid columns={[1, 2, 3, 3]} gap={3}  >
          {data.map((items, index) => {
            return (
              <Box
                h="full"
                borderRadius="20px"
                alignItems="center"
                box-shadow= "10px 5px 5px black"
                key={index}
                className="imgs"
                style={{border:"2px solid blue"}}
               >
               <NavLink to="/electronics">
                  <Img
                  boxSize={"350"}
                   
                    src={items.image1}
                    alt=""
                  />
                </NavLink>
               
                <Text align="center" color="black" p="0px 5px" fontWeight="bold">
                  {items.title}
                </Text>

                <Text marginLeft="20px" color="black" p="0px 5px">SoldBy:
                  {items.soldby}
                </Text>

                <Text marginLeft="20px"color="red" p="0px 5px">Price:
                  {items.price}
                </Text>

                <Text marginLeft="20px" color="red" p="0px 5px">Code:
                  {items.code}
                </Text>
                {/* <Text  marginLeft="20px" color="blue" p="0px 5px">Category:
                  {items.category}
                </Text> */}
               <button style={{backgroundColor:"blue",marginLeft:"100px"}}>ADD To Cart</button>
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
     
      
    </>
  )
}

export default Electronics


