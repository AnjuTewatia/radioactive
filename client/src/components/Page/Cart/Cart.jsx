import React from "react";
import { useState } from "react";
import { SimpleGrid, Text, Image, Box, Button, Flex } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const [data, setData] = useState("");

  const { cart } = useSelector((store) => store);
  console.log(cart);

  return (
    <div>
      <Flex>
        <Box
          paddingTop={"170px"}
          boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
          ml={"300px"}
          width={"50%"}
        >
          <Text fontSize={"4xl"} ml={"200px"} mb="40px" color={"blue"}>
            Cart Page{" "}
          </Text>
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            marginLeft={"180px"}
            spacing={{}}
          >
            {cart.map((item) => (
              <Box key={item.id}>
                <Box>
                  <Image
                    // width={"70%"}
                    boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                    src={item.image1}
                    alt={item.name}
                  />
                </Box>
                <Box>
                  <Text
                    fontSize="1xl"
                    fontWeight="bold"
                    mt={"20px"}
                    color={"black"}
                  >
                    Title:
                    {item.title}
                  </Text>
                  <Text
                    fontSize="xl"
                    fontWeight="bold"
                    mt={"20px"}
                    color={"black"}
                  >
                    Price:
                    {item.price}
                  </Text>
                 
                  <Link to={"/checkout"}>
                    {" "}
                    <Button
                      mt="20px"
                      width={"100%"}
                      backgroundColor={"blue.300"}
                    >
                      Checkout
                    </Button>
                  </Link>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Flex>
    </div>
  );
};

export default Cart;
