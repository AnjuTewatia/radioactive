

import React from 'react'
import { Image,Box,SimpleGrid,Text,Img } from '@chakra-ui/react'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { NavLink } from 'react-router-dom';
// import Gangs from './Gangs';

const Cosmetic = () => {
    const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let res = await axios.get("https://gold-gifted-ladybug.cyclic.app/product?category=cosmetics")
      // console.log(res);
      setData(res.data);
    };
    getData();
  }, []);

 
  return (
    <>
      <Box className="moment" p="20px" pb="auto" mb={"80px"}>
      <Text color="black" 
     fontSize={"35"}>CATEGORIES TO COSMETICS</Text>
     <Image width={"100%"} height={"200px"} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F599a770c-5c56-480c-95ad-d8f1d7d9623a.jpg&w=1920&q=75"/>
                
        <SimpleGrid columns={[1, 2, 3, 4]} gap={10}  >
          {data.map((items, index) => {
            return (
              <Box
                h="full"
                borderRadius="20px"
                alignItems="center"
                box-shadow= "10px 5px 5px black"
                key={index}
                className="imgs"
                style={{boxShadow:"5px 10px #888888" }}
               >
                
               <NavLink to="/cosmetics">
                  <Img
                  // boxSize={"350"}
                   
                    src={items.image1}
                    alt=""
                  />
                </NavLink>
               
                <Text align="center" color="black" p="0px 5px" fontWeight="bold">
                  {items.title}
                </Text>

                {/* <Text marginLeft="20px" color="black" p="0px 5px">SoldBy:
                  {items.soldby}
                </Text>

                <Text marginLeft="20px"color="red" p="0px 5px">Price:
                  {items.price}
                </Text>

                <Text marginLeft="20px" color="red" p="0px 5px">Code:
                  {items.code}
                </Text> */}
                
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
     
      
    </>
  )
}

export default Cosmetic


