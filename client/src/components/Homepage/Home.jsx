import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
// import axios from "axios";
import { Box, Img } from "@chakra-ui/react";
import Bags from "../pages/page"
import Health from '../Pages/Health';
import Women from "../Pages/Women"
import Cosmetics from "../Pages/Cosmetics"
import Electronics from "../Pages/Electronics"
// import Carousel from"../Carousel/Mens"
// import Carousel from "../Carousel"
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "50%",
        margin: "auto",
        width: "50px",
        height: "50px",
        position: "absolute",
        zIndex: "1",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "black",
        borderRadius: "50%",
        margin: "auto",
        width: "50px",
        height: "50px",
        position: "absolute",
        zIndex: "1",
      }}
      onClick={onClick}
    />
  );
}

const Home = () => {

    const [data0, setData0] = useState(
      "https://health-mart-frontend.vercel.app/static/media/bnr_2282186_o.b75bd66a26d64f2e3ebf.webp"

     );
      let data = [
        "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F599a770c-5c56-480c-95ad-d8f1d7d9623a.jpg&w=1920&q=75",
        "https://health-mart-frontend.vercel.app/static/media/bnr_2282186_o.b75bd66a26d64f2e3ebf.webp",
        "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F069d0c1c-f78c-4d80-94f9-e65f3bbdda73.jpg&w=1920&q=75",
        "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F069d0c1c-f78c-4d80-94f9-e65f3bbdda73.jpg&w=1920&q=75",
        "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F7afcfbe2-9c24-4624-8662-ecd24d0d1f2a.jpg&w=1920&q=75",
        "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F069d0c1c-f78c-4d80-94f9-e65f3bbdda73.jpg&w=1920&q=75",
        "https://health-mart-frontend.vercel.app/static/media/bnr_2282186_o.b75bd66a26d64f2e3ebf.webp",
        "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F599a770c-5c56-480c-95ad-d8f1d7d9623a.jpg&w=1920&q=75",

        
      ];
      useEffect(() => {
        let a = -1;
        setInterval(() => {
          if (a === 7) {
            a = 0;
          } else {
            a = a + 1;
          }
    
          setData0(data[a]);
        }, 3000);
      }, []);


      const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
              nextArrow: <SampleNextArrow />,
              prevArrow: <SamplePrevArrow />,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              nextArrow: <SampleNextArrow />,
              prevArrow: <SamplePrevArrow />,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              nextArrow: <SampleNextArrow />,
              prevArrow: <SamplePrevArrow />,
            },
          },
        ],
      };
  return (

    <>
    <Box className="banner" >
        <Img
          borderRadius="20px"
          paddingTop={"125px"}
          width={"100%"}
          style={{height:"400px"}}

          src={data0}
          alt="banner"
        />
      </Box>


      {/* <Carousel/> */}
      <Bags/>
      <Women/>
      <Health/>
      <Electronics/>
      <Cosmetics/>
     
       
    </>
  )
}

export default Home