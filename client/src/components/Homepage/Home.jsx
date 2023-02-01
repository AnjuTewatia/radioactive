import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Box, Img } from "@chakra-ui/react";

const Home = () => {

    const [data0, setData0] = useState(

            "bWFzdGVyfGltYWdlc3w4NjgxOXxpbWFnZS9qcGVnfGltYWdlcy9oYjEvaGE3Lzk5NDk2NTc3NTk3NzQuanBnfDJiNzJkNDIzOWU2YWRkY2I2OTM1ZGYzOTk1NzVmYjI1M2JjYTY4MDA0MzhhMmRlODVkYTE1OGIzYjFhYzk1YjA"
     );
      let data = [
        "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F599a770c-5c56-480c-95ad-d8f1d7d9623a.jpg&w=1920&q=75",
        "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F535971f8-7a7b-4cd7-91f1-2908394cbf8f.jpg&w=1920&q=75",
       "https://img.shop.com/Image/homepage/shop-us-eng-99087-blkhistory-2023-banners-cta1675269969042.jpg",
        
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
  return (

    <>
    <Box className="banner" style={{marginLeft:"50px"}}>
        <Img
          borderRadius="20px"
         
          style={{height: "300px" }}
          src={data0}
          alt="banner"
        />
      </Box>
       
    </>
  )
}

export default Home