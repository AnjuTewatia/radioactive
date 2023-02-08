// import React from "react";

import {
  Flex,
  Link,
  useToast,
  Text,
  Accordion,
  Image,
  AccordionItem,
  AccordionIcon,
  AccordionButton,
  AccordionPanel,
  FormControl,
  FormLabel,
  Input,
  Box,
  FormHelperText,
  FormErrorMessage,
  Checkbox,
  Button,
  Select,
  Toast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate} from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

// const SignUp = () => {




//   const handleSubmit = () => {
//     const payload = { name, email, password, gender, phoneNumber, role };

//     console.log(payload);
//     fetch("https://gold-gifted-ladybug.cyclic.app/user/signup", {
//       method: "POST",
//       body: JSON.stringify(payload),
//       headers: {
//         "content-type": "application/json",
//       },
//     })
//       .then((res) => res.json())
//       .then((res) => console.log(res))
//       .catch((err) => console.log(err));




//   };
// };

// export default SignUp;





import React from 'react'
import axios from "axios";

const SignUp = () => {
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("Guest");
  const toast = useToast();
  const navigateTo = useNavigate();

  

  const handleSubmit = async() => {
        const payload = { name, email, password, gender, phoneNumber, role };
        console.log(payload);
        let res= await axios.post("https://gold-gifted-ladybug.cyclic.app/user/signup",payload)
        console.log(res)
        if ((name, email, password, gender, phoneNumber, role)) {
          toast({
            position: "bottom-left",
            render: () => (
              <Box color="white" p={3} bg="blue.500">
                {`welcome ${name} you have successfully registered`}
              </Box>
            ),
          });
          navigateTo("/login");
        } else {
          toast({
            title: " please add all credentials",
            description: "",
            status: "error",
            duration: 4000,
            isClosable: true,
          });
        }

  }
      return (
      <>
        <Flex>
          <Box>
            <Image
              width={"85%"}
              paddingTop={"150px"}
              src="https://63d7723d8213757904234c0e--visionary-churros-1d6bbc.netlify.app/static/media/MENU_Jeans@2x-min.80d055438aeba71fe9a5.png"
            />

            <Image
              width={"85%"}
              marginTop={"10px"}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc_HbYrGhTdtDeEpRJbfInqBnauMxMm934bA&usqp=CAU"
            />
          </Box>


{/* first half */}



          <Box mr="70px" paddingTop={"150px"}>
            <Text fontWeight={"430"} fontSize={"50px"}>
              {" "}
              Create An Account{" "}
            </Text>

            <hr />
            <Flex>
              <Box>
               
                  <FormControl mt={"20px"}>
                    <FormLabel mt={"20px"} fontSize={"30px"}>
                      Name *
                    </FormLabel>
                    <Input
                    value={name}
                      height="60px"
                      width="550px"
                      fontSize="20px"
                      type="text"
                      onChange={(e)=>setName(e.target.value)}
                      isRequired={true}
                    />

                    <FormLabel mt={"20px"} fontSize={"30px"}>
                      Phone *
                    </FormLabel>
                    <Input
                    value={phoneNumber}
                    onChange={(e)=>setphoneNumber(e.target.value)}
                      height="60px"
                      width="550px"
                      fontSize="20px"
                      type="text"
                      placeholder="Enter Phone Number"
                      isRequired={true}
                    />

                    <FormLabel mt={"20px"} fontSize={"30px"}>
                      Select Gender *
                      <br />
                      <select
                      value={gender}
                      onChange={(e)=>setGender(e.target.value)}
                      
                        style={{
                        
                          height: "60px",
                          width: "550px",
                          fontSize: "20px",
                          border: "1px solid grey",
                        }}
                        placeholder="Gender"
                        isRequired={true}
                      >
                        <option value="">select gender</option>

                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Female</option>
                      </select>
                    </FormLabel>

                    <FormLabel mt={"20px"} fontSize={"30px"}>
                      Select Role *
                      <br />
                      <select
                      value={role}
                      onChange={(e)=>setRole(e.target.value)}
                      
                        style={{
                          height: "60px",
                          width: "550px",
                          fontSize: "20px",
                          border: "1px solid grey",

                        }}
                        placeholder="role"
                        isRequired={true}
                      >
                        <option value="">select Role</option>

                        <option value="Admin">Admin</option>
                        <option value="Guest">Guest</option>
                      </select>
                    </FormLabel>

                    <FormLabel mt={"20px"} fontSize={"30px"}>
                      {" "}
                      E-mail *
                    </FormLabel>
                    <Input
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    isRequired={true}
                    
                
                      height="60px"
                      width="550px"
                      fontSize="20px"
                      type="email"

                    />
                    <FormHelperText>
                      We'll never share your email.
                    </FormHelperText>
                    <FormErrorMessage>Email is required.</FormErrorMessage>

                    <FormLabel mt={"20px"} fontSize={"30px"}>
                      Password *
                    </FormLabel>
                    <Input
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    isRequired={true}
                    
                      height="60px"
                      width="550px"
                      fontSize="20px"
                      type="password"
                      
                    />
                  </FormControl>
                  <Checkbox mt={"20px"} defaultChecked>
                    Please Add Me To Anju Shopping's Email List.
                  </Checkbox>
                  <br />

                  <Button
                    mt={"20px"}
                    height={"50px"}
                    fontSize={"20px"}
                    borderRadius={"20px"}
                    width={"200px"}
                    bgColor={"blue.600"}
                    type="submit"
                    onClick={handleSubmit}
                  >
                    {" "}
                    Apply
                  </Button>
                  
                
              </Box>
              <Box position={"fixed"} mr={"10%"} ml={"30%"}>
                <hr />
                <Box></Box>
              </Box>
            </Flex>
          </Box>
        </Flex>
       
      </>
    );
}

export default SignUp