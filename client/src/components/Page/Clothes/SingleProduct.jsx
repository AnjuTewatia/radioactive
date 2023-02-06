import React from "react";
import axios from "axios";
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
  HStack,
  Center,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  console.log(id)
  const [product, setProduct] = useState({});
  const url = "https://gold-gifted-ladybug.cyclic.app/";

  const getData = async () => {
    const res = await axios.get(`${url}/product/${id}`);
    setProduct(res.data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Flex>
        <Box border={"2px solid red"} width={"70%"}>
          <Box>
            <Image boxSize={"500px"} src={product.image1} />
            <Image boxSize={"100px"} src={product.image2} />
            <Image boxSize={"100px"} src={product.image3} />
            <Image boxSize={"100px"} src={product.image4} />
          </Box>
        </Box>

        <Box mr="70px" paddingTop={"150px"}>
          <Flex>
            <Box border={"2px solid blue"} width={"100%"}>
              <Heading as="h2" fontSize="2xl" fontWeight="bold">
                Title:
                {product.title}
              </Heading>
              <Text fontSize="lg" fontWeight="bold">
                SoldBy:
                {product.soldby}
              </Text>
              <Text fontSize="lg" fontWeight="bold">
                Price:
                {product.price}
              </Text>
              <Text fontSize="lg" fontWeight="bold">
                Code:
                {product.code}
              </Text>
              <Text fontSize="lg" fontWeight="bold">
                Category:
                {product.categoery}
              </Text>
              <button>Add To Cart</button> <br />
              <button>Checkout</button>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default SingleProduct;
