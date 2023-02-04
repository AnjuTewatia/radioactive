

import React from 'react'
import { Image,Box,SimpleGrid,Text,Img } from '@chakra-ui/react'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { NavLink } from 'react-router-dom';
// import Gangs from './Gangs';

const Women = () => {
    const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let res = await axios.get("https://gold-gifted-ladybug.cyclic.app/product?category=Womens")
      console.log(res);
      setData(res.data);
    };
    getData();
  }, []);

 
  return (
    <>
      <Box className="moment" p="20px" pb="auto">
      <Text color="black" 
     fontSize={"35"}>CATEGORIES TO  WOMENS</Text>
                
        <SimpleGrid columns={[1, 2, 3, 4]} gap={3}  >
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
               <NavLink to="/cosmetics">
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
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
     
      
    </>
  )
}

export default Women


