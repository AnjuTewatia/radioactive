import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Button,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiRightArrowAlt } from "react-icons/bi";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

// And react-slick as our Carousel Lib
import { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import { AiFillDollarCircle } from "react-icons/ai";
import { setItem } from "../utility/localStorage";
import { useNavigate } from "react-router";
import {
  Text,
  Card,
  CardBody,
  Link,
  Image,
  Stack,
  Flex,
} from "@chakra-ui/react";

// Settings for the slider
const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
};

const Electronics = () => {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(1);
  const navigate = useNavigate();
  const handleClick = (item) => {
    setItem("singleproduct", item);
    navigate("/electronics");
  };

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  // These are the images used in the slide
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://rich-puce-abalone-gear.cyclic.app/product?category=electronics"
      )
      .then((response) => {
        console.log("res", response.data);
        setData(response.data);
      });
  }, []);

  return (
    <>
      <Text color="black" fontSize={"35"}>
        CATEGORIES Of ELECTRONICS
      </Text>
      <Image
        width={"100%"}
        height={"300px"}
        src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F069d0c1c-f78c-4d80-94f9-e65f3bbdda73.jpg&w=1920&q=75"
      />

      <Box
        position={"relative"}
        height={"600px"}
        width={"100%"}
        overflow={"hidden"}
      >
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          colorScheme="messenger"
          borderRadius="full"
          position="absolute"
          left={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        >
          <Button backgroundColor={"blue.300"}>
            <AiFillCaretLeft color="black" />
          </Button>
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          colorScheme="messenger"
          borderRadius="full"
          position="absolute"
          right={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <Button backgroundColor={"blue.300"}>
            <AiFillCaretRight color="black" />
          </Button>
        </IconButton>
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {data.map((el, index) => (
            <Card
              cursor="pointer"
              columns={[1, 2, 2, 2]}
              gap={10}
              height="460px"
              onClick={() => handleClick(el)}
              maxW="sm"
              mt={"30px"}
              mb="10px"
              boxShadow="rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
              ml="53px"
              _hover={{ backgroundColor: "blue.100" }}
            >
              <CardBody>
                <Image
                  id="hov"
                  ml="50px"
                  width="250px"
                  height="200px"
                  src={el.image1}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack spacing="2">
                  <Text noOfLines={[1]} fontWeight="bold" size="xs">
                    {el.title}
                  </Text>
                  <Text fontWeight="bold" fontSize="lg">
                    {" "}
                    Price: ${el.price}
                  </Text>
                  <Box mb="15px">
                    {Array(5)
                      .fill("")
                      .map((_, i) => {
                        let rating = Math.ceil(Math.random() * 3);

                        return (
                          <Icon
                            as={AiFillStar}
                            key={i}
                            color={i <= rating ? "gold" : "gray.300"}
                          />
                        );
                      })}
                  </Box>

                  <Text ml="30px" textAlign="center" fontSize="lg">
                    <Flex ml="80px">
                      sold-by - <Text fontWeight="bold">{el.soldby}</Text>
                    </Flex>
                  </Text>
                  <Box>
                    <Flex marginLeft="80px" textAlign="bottom">
                      <Text mr="5px">$1.00/2</Text>
                      <AiFillDollarCircle
                        mr="5px"
                        mt="2px"
                        width="30px"
                        height="30px"
                        color="teal"
                      />
                      <Text ml="5px">Cashback</Text>
                    </Flex>
                  </Box>
                  <Text color="teal" mb="30px">
                    Free shipping with $99 orders
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          ))}
        </Slider>
      </Box>
    </>
  );
};

export default Electronics;
