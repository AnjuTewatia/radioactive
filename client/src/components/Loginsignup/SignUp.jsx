import React from 'react'
import { Link } from 'react-router-dom'
import {Box,FormLabel,FormControl,FormHelperText,Input,Select,Image,Flex}from "@chakra-ui/react";

const SignUp = () => {
  return (

    <>
    
    <Box paddingTop="125px" >

        <Image  width="100%" height="250px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv5UyzKDrdABNaMUrwbf244DNII08Z_tiKYQ&usqp=CAU"/>
        
         
       
       
       <Box box-Shadow= "10px 5px 5px red" marginLeft="200px" backgroundColor="#blue" >
         
    <FormControl>
    <FormLabel>Enter Yor Name</FormLabel>
    <Input  style={{width:"50%"}} type='email'   placeholder="Enter Your name"/>

    <FormLabel>Email address</FormLabel>
    <Input  style={{width:"50%"}} type='email'   placeholder="Enter Your Email"/>
    <FormHelperText>We'll never share your email.</FormHelperText>

    <FormLabel>Password</FormLabel>
    <Input  style={{width:"50%"}} type='email'   placeholder="Enter Your password"/>

    <FormLabel>Phone Number</FormLabel>
    <Input  style={{width:"50%"}} type='email'   placeholder="Enter Your phone Number"/>

    <FormLabel>Select Your Gender</FormLabel>
    <Select  style={{width:"50%"}} placeholder='Select Your Gender'>
    <option value='option1'> Men</option>
    <option value='option2'>Women </option>
    <option value='option3'>Others </option>
    </Select>


  <FormLabel>Select Your  Role</FormLabel>
    <Select  style={{width:"50%"}} placeholder='Select Role'>
    <option value='option1'>Admin</option>
    <option value='option2'>Guest</option>
    </Select>


    </FormControl>
   </Box>

    </Box>
      
    </>
  )
}

export default SignUp