import { Box, Container, useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";
import AdminDashbord from "../../AdminComponents/AdminDashboard/AdminDashbord";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const AdminDshboardPage = () => {

  return (
    <div>
      {/* <Navbar /> */}
      {(<Box minH="100vh" bg={"gray.100"} pt="80px">
        <Container
          maxW={"80%"}
          margin={"auto"}
          mr={"25px"}
        >
          <AdminDashbord />
        </Container>
      </Box>)}
    </div>
  );
};

export default AdminDshboardPage;
