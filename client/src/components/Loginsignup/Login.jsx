// import React, { useState } from "react";

// import {
//   Flex,
//   Link,
//   useToast,
//   Text,
//   Accordion,
//   Image,
//   AccordionItem,
//   AccordionIcon,
//   AccordionButton,
//   AccordionPanel,
//   FormControl,
//   FormLabel,
//   Input,
//   Box,
//   FormHelperText,
//   FormErrorMessage,
//   Checkbox,
//   Button,
//   Select,
//   Toast,
// } from "@chakra-ui/react";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [phoneNumber, setPhoneNUmber] = useState();
//   const [password, setPassword] = useState("");

//   return (
//     <div>
//       <Flex>
//         <Box marginLeft={"250px"} style={{ border:"2px solid grey" , height:"500px"}} >
//           <Text fontSize={"40px"} style={{marginLeft:"200px",color:"red"}}>Login</Text>

//           <FormControl mt={"20px"} ml={"30px"}>
//             <FormLabel mt={"20px"} fontSize={"20px"}>
//               Enter your Registered Email
//             </FormLabel>
//             <Input
//               // value={email}
//               isRequired
//               height="50px"
//               width="400px"
//               fontSize="20px"
//               type="text"
//               placeholder="Enter your email"

//             />

//             <FormLabel mt={"20px"} fontSize={"20px"}>
//               Registered Phone Number
//             </FormLabel>
//             <Input
//               // value={phoneNumber}
//               height="50px"
//               width="400px"
//               fontSize="20px"
//               type="number"
//               placeholder="Enter Phone Number"
//             />
//             <FormLabel mt={"20px"} fontSize={"20px"}>
//               Enter Your Password
//             </FormLabel>
//             <Input
//               // value={password}
//               height="50px"
//               width="400px"
//               fontSize="20px"
//               type="text"
//               placeholder="Enter Phone Number"
//             />
//           </FormControl>
           
//         <Button width={"550px"} backgroundColor={"blue.200"} marginTop={"30px"}>Login</Button>
//         </Box>
//       </Flex>
//     </div>
//   );
// };

// export default Login;



import React from "react";
import { Link } from 'react-router-dom'
import {
  Flex,
  useToast,
  Text,
  Image,
  FormControl,
  FormLabel,
  Input,
  Box,
  FormHelperText,
  FormErrorMessage,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const toast = useToast();

  const [email, setEmail] = useState("");
  const [phoneNumber,setPhoneNUmber]=useState()
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { email, password };

    // console.log(payload);

    fetch("https://gold-gifted-ladybug.cyclic.app/user/login", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.token);
        if (localStorage.getItem("token")) {
          localStorage.setItem("email", payload.email);
          setTimeout(() => {
            toast({
              
              position: "bottom-left",
              render: () => (
                <Box color="white" p={3} bg="blue.500">
                  {`welcome ${email} `}
                </Box>
              ),
            });
          }, 1000);
          navigateTo("/");

        } else if(!payload.password){
          toast({
            position: "bottom-left",
            render: () => (
              <Box color="white" p={3} bg="blue.500">
                {`Wrong password`}
              </Box>
            ),
          });
       

    }
        else {

          toast({
            position: "bottom-left",
            render: () => (
              <Box color="white" p={3} bg="blue.500">
                {`please register first`}
              </Box>
            ),
          });
        }
      })
      .catch((err) => console.log(err));


  };

  const navigateTo = useNavigate();
  const GoTo = (path) => {
    console.log("path", path);
    navigateTo(path);
  };
  return (
    <>
      <Box>
        <Flex>
          <Box marginLeft={"25%"}>
            <Text fontWeight={700} mt={"20px"} fontSize={"30px"}>
              Returning Customers
            </Text>
            <Text mt={"20px"} fontSize={"20px"}>
              If you are a registered user,
              <br /> please enter your email and password.
            </Text>

            <FormControl mt={"20px"}>
              <FormLabel mt={"20px"} fontSize={"30px"}>
                {" "}
                E-mail *
              </FormLabel>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                height="60px"
                width="400px"
                fontSize="20px"
                type="email"
              />
              <FormHelperText>We'll never share your email.</FormHelperText>
              <FormErrorMessage>Email is required.</FormErrorMessage>

              <FormLabel mt={"20px"} fontSize={"30px"}>
                Password *
              </FormLabel>
              <Input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                height="60px"
                width="400px"
                fontSize="20px"
                type="password"
              />

              <Flex>
                <Box>
                  <Checkbox mt={"20px"} defaultChecked>
                    {" "}
                    <Text>Remember Me</Text>{" "}
                  </Checkbox>
                </Box>
                <Box mt={"20px"} ml={"40%"}>
                  <Text>Forget Password ?</Text>
                </Box>
              </Flex>
              <Link to="/">
              <Button
                onClick={handleSubmit}
                _hover={{ color: "black" }}
                mt={"20px"}
                height={"50px"}
                fontSize={"20px"}
                borderRadius={"10px"}
                width={"200px"}
                color="white"
                bgColor={"blue.700"}
              >
                {" "}
                Sign In
              </Button>
              </Link>

              <Text mt={"30px"} color={"gray"}>
                or log in from your account from
              </Text>
              <Box mt={"15px"} border={"1px solid black"} width="250px">
                {" "}
                <Flex>
                  <Image
                    ml={"20px"}
                    src="https://www.aeropostale.com/on/demandware.static/Sites-aeropostale-Site/-/default/dw1c2fbe2a/images/Facebook.png"
                    alt="abc"
                  />
                  <Text fontSize={"17px"} ml={"5px"} mt={"10px"}>
                    LOGIN WITH FACEBOOK
                  </Text>
                </Flex>
              </Box>

              {/* <Box mt={"20px"}>
                <Text color={"gray"} fontSize={"14px"}>
                  Please see our Privacy Policy. California residents, see our
                  California Privacy <br /> Notice and Do Not Sell My Personal
                  Information page.
                </Text>
              </Box> */}
            </FormControl>
          </Box>
          {/* <hr
            style={{
              border: "none",
              borderLeft: "1px solid hsla(200, 10%, 50%,100)",
              height: "100vh",
              width: "1px",
              marginLeft: "10%",
              marginTop: "30px",
            }}
          /> */}

          
        </Flex>
      </Box>
    </>
  );
};

export default Login;
