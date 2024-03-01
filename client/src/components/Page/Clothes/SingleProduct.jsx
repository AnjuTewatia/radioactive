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
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
// import "../index.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addcart } from "../../../Redux/Cart/Cart.action";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const [product, setProduct] = useState({});
  const [curimg, setImg] = useState(product.image4);

  console.log(product.image4);
  //  useEffect(()=>{
  //   setData(getItem("singleproduct"))
  //  },[])
  //  console.log(data)

  const { id } = useParams();
  console.log(id);
  const url = "https://rich-puce-abalone-gear.cyclic.app/";

  const getData = async () => {
    const res = await axios.get(`${url}/product/${id}`);
    setProduct(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    setImg(product.image4);
  }, [product]);

  return (
    <>
      <Flex pt={"140px"}>
        <Box width={"70%"}>
          <Flex>
            <Box mt={"50px"}>
              <Box width={"130px"}>
                <Image
                  id="hov"
                  mt={"10px"}
                  onClick={() => setImg(product.image1)}
                  src={product.image1}
                />
              </Box>
              <Box width={"130px"}>
                <Image
                  id="hov"
                  mt={"10px"}
                  onClick={() => setImg(product.image2)}
                  src={product.image2}
                />
              </Box>
              <Box width={"130px"}>
                <Image
                  id="hov"
                  mt={"10px"}
                  onClick={() => setImg(product.image3)}
                  src={product.image3}
                />
              </Box>
              {/* <Image onClick={()=>setImg(product.image4)} boxSize={"100px"} src={product.image4} /> */}
            </Box>
            <Box
              style={{
                boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                borderRadius: "10px",
              }}
              mt={"50px"}
              marginLeft={"50px"}
            >
              <Image
                id="hov"
                width={755}
                src={curimg}
                alt=""
                fit={"cover"}
                align={"center"}
                h={{ base: "100%", sm: "400px", lg: "500px" }}
              />
            </Box>
          </Flex>
        </Box>

        <Box
          ml="120px"
          mr="90px"
          paddingTop={"70px"}
          style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
        >
          <Flex gap={"20px"} marginLeft={"30px"}>
            <Box width={"90%"}>
              <Heading as="h2" fontSize="2xl" fontWeight="bold">
                {product.title}
              </Heading>
              <Text mt="20px" fontSize="lg" fontWeight="bold">
                SoldBy:
                {product.soldby}
              </Text>
              <Text mt="20px" fontSize="lg" fontWeight="bold">
                Price:
                {product.price}
              </Text>
              <Text mt="20px" fontSize="lg" fontWeight="bold">
                {`Code: ${product.code}`}
              </Text>
              <Text>
                Rating:
                <Image
                  height={"100px"}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-9-Iu4rY2krOUXQeIgPflMUaBvnMoIY0-uA&usqp=CAU"
                />
              </Text>
              <Link to="/cart">
                <Button
                  mt="20px"
                  width={"100%"}
                  backgroundColor={"blue.200"}
                  onClick={() => dispatch(addcart(product))}
                  color={"black"}
                >
                  Add To Cart
                </Button>{" "}
                <br />
              </Link>
              {/* <Button  mt="20px" width={"100%"} backgroundColor={"blue.300"}>Checkout</Button> */}
            </Box>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default SingleProduct;
