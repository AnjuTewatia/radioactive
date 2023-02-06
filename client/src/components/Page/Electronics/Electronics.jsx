
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
  import React, { useEffect, useState } from "react";
  // import React, {  useState } from "react";
  import { AiOutlineShopping } from "react-icons/ai";
  import { HiOutlineArrowsUpDown } from "react-icons/hi2";
  import { NavLink, useNavigate } from "react-router-dom";
// import Electronics from "../../pages/Electronics";
//   import Loading from "../../Components/Loading";
// import { NavLink } from 'react-router-dom';
//   import FilterModel from "./FilterModel";
  
  const categories = [
    {
    //   id: 1,
    //   name: "Mens",
    //   path: "mens",
    // },
    // {
    //   id: 2,
    //   name: "Womens",
    //   path: "women",
    // },
    // {
    //   id: 3,
    //   name: "Kinds",
    //   path: "kids",
    }
   
     
  ];
  
  const Electronics = () => {
    const [data, setData] = useState([]);
    const [filter, setfilter] = useState("price");
    const navigate = useNavigate();
    //Get Method - is used to display data

    useEffect(() => {
      const fetchData= async (filter)=> {
        console.log(filter)
        await fetch(
          `https://gold-gifted-ladybug.cyclic.app/product?category=electronics&price=${filter}`
        )
          .then((response) => response.json())
          .then((json) => {
            console.log(json);
            setData(json);
          });
      }
      fetchData(filter);
    }, [filter]);
  
    //geting category
    const handleClick = (val) => {
      setfilter(val);
    };
  
    const handleOnNextpage = (id) => {
      navigate(`/electronics/${id}`);
    };
  
    // if (data.length === 0) {
    //   return <Loading />;
    // } else {
      return (
        <div>
          <Box w={"75%"} m="auto" paddingTop={"125px"}>
            {/* //filter Part */}
  
            <Box>
              <Flex justifyContent={"space-between"}>
                <Text fontWeight={"bold"} fontSize="28px">
                  Treanding of Electronics
                </Text>
                {categories.map((e, index) => {
                  return (
                    <Box key={index}>
                      <Text
                        mt="3"
                        fontSize={"16px"}
                        fontWeight="bold"
                        color={"gray.500"}
                        onClick={() => handleClick(e.path)}
                      >
                        {e.name}
                      </Text>
                    </Box>
                  );
                })}
              </Flex>
            </Box>
            <hr />
            <Flex flexDirection={"row"} justifyContent="space-between">
              {/* <FilterModel /> */}
              <Box w="25%">
                <Flex justifyContent={"space-between"} gap={4}>
                  <Box textAlign={"center"}>
                    <Heading fontSize={"20px"} paddingTop={2} color="gray.400">
                      ({data.length}items)
                    </Heading>
                  </Box>
  
                  <Menu>
                    <MenuButton
                      as={Button}
                      colorScheme="blue"
                      w="100%"
                      border={"2px solid black"}
                      bgColor="white"
                      color={"black"}
                      borderRadius={"18px"}
                      rightIcon={<HiOutlineArrowsUpDown color="black" />}
                      gap={12}
                    >
                      Best Seller{" "}
                    </MenuButton>
                    <MenuList
                      borderRadius={"12px"}
                      border="1px solid black"
                      mt={-2}
                      w="100%"
                    >
                      <MenuItem fontWeight="bold">Featured</MenuItem>
                      <hr />
                      <MenuItem fontWeight="bold">Best Seller</MenuItem>
                      <hr />
                      <MenuItem fontWeight="bold">Price High to Low</MenuItem>
                      <hr />
                      <MenuItem fontWeight="bold">Price Low to High</MenuItem>
                      <hr />
                    </MenuList>
                  </Menu>
                </Flex>
              </Box>
            </Flex>
          </Box>
          <SimpleGrid columns={[1, 2, 3,3]} gap={10}  width={"80%"} margin={"auto"} >

            {data.map((item) => {
              return (
                <Box
                //   className="imagecontainer"
                //   w="90%"
                //   m="auto"
                //   align={"center"}
                //   key={item._id}
                //   bgColor="gray.100"
                //   mt={4}
                h="full"
                marginTop={"40px"}
                borderRadius="20px"
                alignItems="center"
                box-shadow= "10px 5px 5px black"
                key={item._id}
                className="imgs"
                style={{boxShadow:" 1px 1px 0px grey,3px 3px 1px black"}}
                  onClick={() => handleOnNextpage(item._id)}
                >
                    <NavLink to ="/electronics">
                  <Image
                    // h="320px"
                    // w={"100%"}
                    // bgColor="gray.200"
                    // src={item.image1}
                    // alt="img"
                    // mt="2"
                    src={item.image1}
                    alt=""
                  />
                  </NavLink>





                <Text align="center" color="black" p="0px 5px" fontWeight="bold">
                  {item.title}
                </Text>

                <Text marginLeft="20px" color="black" p="0px 5px">SoldBy:
                  {item.soldby}
                </Text>

                <Text marginLeft="20px"color="red" p="0px 5px">Price:
                  {item.price}
                </Text>

                <Text marginLeft="20px" color="red" p="0px 5px">Code:
                  {item.code}
                </Text>
  

                  {/* </Box> */}
                </Box>
              );
            })}
          </SimpleGrid>
          {/* </div> */}
        </div>
      );
    }
//   };
  
  export default Electronics;
  