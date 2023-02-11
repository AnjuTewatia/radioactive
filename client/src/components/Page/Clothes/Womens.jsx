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
import React, { useEffect, useState } from "react";
// import "./Pagination.css";

// import React, {  useState } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import { NavLink, Link, useNavigate } from "react-router-dom";
import Loading from "../Loading";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../../../Redux/Product/Product.action";
import Prooductcomp from "./Prooductcomp";

const Womens = () => {
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);
  const [input, setInput] = useState("");
  const { loading, product } = useSelector((store) => store.product);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Product("Womens", page, sort, input));
  }, [category, page, sort, input]);

  console.log(product);

  const handleCategory = (cat) => {
    setCategory(cat);
  };

  const handleSort = (sort) => {
    console.log(sort);
    setSort(sort);
  };

  const handleInput = (input) => {
    setInput(input);
  };

  const hamdlePagination = () => {
    setPage(page + 1);
  };

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div>
        <Box w={"75%"} m="auto" paddingTop={"125px"}>
          <Box>
            <Flex justifyContent={"space-between"}>
              <Text fontWeight={"bold"} fontSize="28px">
                Clothes
              </Text>
            </Flex>
          </Box>
          <hr />
          <Flex flexDirection={"row"} justifyContent="space-between">
            <Box w="25%">
              <Flex justifyContent={"space-between"} gap={4}>
                <Box textAlign={"center"}>
                  <Heading fontSize={"20px"} paddingTop={2} color="gray.400">
                    ({product.length}items)
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
                    {/* <MenuItem fontWeight="bold">Best Seller</MenuItem> */}
                    <hr />
                    <MenuItem
                      fontWeight="bold"
                      onClick={() => handleSort("desc")}
                    >
                      Price High to Low
                    </MenuItem>
                    <hr />
                    <MenuItem
                      fontWeight="bold"
                      onClick={() => handleSort("asc")}
                    >
                      Price Low to High
                    </MenuItem>
                    <hr />
                  </MenuList>
                </Menu>
              </Flex>
            </Box>

            <div className="pagination">
              <button disabled={page === 1} onClick={() => setPage(page - 1)}>
                PREV
              </button>
              <button>{page}</button>
              <button onClick={() => setPage(page + 1)}> NEXT</button>
            </div>
          </Flex>
        </Box>

        <SimpleGrid
          columns={[1, 2, 3, 3]}
          gap={10}
          width={"80%"}
          margin={"auto"}
        >
          {product.length > 0 &&
            product.map((item) => {
              return <Prooductcomp item={item} key={item._id} />;
            })}
        </SimpleGrid>
      </div>
    );
  }
};

export default Womens;
