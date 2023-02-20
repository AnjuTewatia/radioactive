import { Flex, Image, Td, Text, Tr, useToast } from "@chakra-ui/react";
import React from "react";
import { BsThreeDotsVertical, BsPencilFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const ADMIN_DELETE_PRODUCT = "admin/product/delete";

const mainUrl = "https://gold-gifted-ladybug.cyclic.app";

export const adminDeleteProduct = (id) => async (dispatch) => {
  try {
    let res = await axios.delete(`${mainUrl}/product/${id}`);
    dispatch({ type: ADMIN_DELETE_PRODUCT, payload: res.data });
    dispatch(adminShowProducts(page));
  } catch (error) {
    console.log(error);
  }
};

const AdminProductShowCard = ({ id, img, title, price, stocks, page }) => {
  const { deletemsg } = useSelector((store) => store.adminShowProduct);
  const toast = useToast();
  const dispatch = useDispatch();
  return (
    <Tr
      textAlign={"center"}
      _hover={{
        bg: "gray.100",
      }}
    >
      <Td width={"10%"}>
        <Image src={img} width={"100%"} />
      </Td>
      <Td>{title}</Td>
      <Td>{price}</Td>
      <Td>{stocks}</Td>
      {stocks < 2 ? (
        <Td>
          <Flex alignItems={"center"} gap={"5px"}>
            <Image
              src="https://img.icons8.com/emoji/48/null/red-circle-emoji.png"
              width={"10%"}
            />

            <Text color={"#EF4444"} fontWeight={"bold"}>
              Out Of Stock
            </Text>
          </Flex>
        </Td>
      ) : (
        <Td>
          <Flex alignItems={"center"} gap={"5px"}>
            <Image
              src="https://img.icons8.com/emoji/48/null/green-circle-emoji.png"
              width={"10%"}
            />
            <Text color={"green"} fontWeight={"bold"}>
              In Stock
            </Text>
          </Flex>
        </Td>
      )}
      <Td>
        <Link to={`/admin/update/${id}`}>{<BsPencilFill />}</Link>
      </Td>
      <Td
        color={"red"}
        cursor={"pointer"}
        onClick={() =>
          dispatch(
            adminDeleteProduct(id),
            toast({
              title: "Product Delete Success",
              status: "success",
              duration: 9000,
              isClosable: true,
              position: "top",
            })
          )
        }
      >
        {<MdDelete />}
      </Td>
    </Tr>
  );
};

export default AdminProductShowCard;
