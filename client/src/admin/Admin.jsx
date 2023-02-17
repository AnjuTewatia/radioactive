// import React from "react";
// import {
//   Box,
//   SimpleGrid,
//   Stack,
//   Flex,
//   Button,
//   useColorModeValue,
//   Table,
//   Thead,
//   Tbody,
//   Tr,ButtonGroup,
//   IconButton,Th,Td
// } from "@chakra-ui/react";

// import {BsBoxArrowUpRight,BsFillTrashFill}  from "react-icons/bs"
// import {AiFillEdit} from "react-icons/ai"
// // import {BsFillTrashFill} fr

// const Admin = () => {
//   const header = ["name", "created", "actions"];
//   const data = [
//     {
//       name: "Daggy",
//       created: "7 days ago",
//     },
//     {
//       name: "Anubra",
//       created: "23 hours ago",
//     },
//     {
//       name: "Josef",
//       created: "A few seconds ago",
//     },
//     {
//       name: "Sage",
//       created: "A few hours ago",
//     },
//   ];
//   const color1 = useColorModeValue("gray.400", "gray.400");
//   const color2 = useColorModeValue("gray.400", "gray.400");
//   return (
//     <Flex
//       w="full"
//       bg="#edf3f8"
//       _dark={{
//         bg: "#3e3e3e",
//       }}
//       p={50}
//       alignItems="center"
//       justifyContent="center"
//     >
//       <Table
//         w="full"
//         bg="white"
//         _dark={{
//           bg: "gray.800",
//         }}
//         display={{
//           base: "block",
//           md: "table",
//         }}
//         sx={{
//           "@media print": {
//             display: "table",
//           },
//         }}
//       >
//         <Thead
//           display={{
//             base: "none",
//             md: "table-header-group",
//           }}
//           sx={{
//             "@media print": {
//               display: "table-header-group",
//             },
//           }}
//         >
//           <Tr>
//             {header.map((x) => (
//               <Th key={x}>{x}</Th>
//             ))}
//           </Tr>
//         </Thead>
//         <Tbody
//           display={{
//             base: "block",
//             lg: "table-row-group",
//           }}
//           sx={{
//             "@media print": {
//               display: "table-row-group",
//             },
//           }}
//         >
//           {data.map((token, tid) => {
//             return (
//               <Tr
//                 key={tid}
//                 display={{
//                   base: "grid",
//                   md: "table-row",
//                 }}
//                 sx={{
//                   "@media print": {
//                     display: "table-row",
//                   },
//                   gridTemplateColumns: "minmax(0px, 35%) minmax(0px, 65%)",
//                   gridGap: "10px",
//                 }}
//               >
//                 {Object.keys(token).map((x) => {
//                   return (
//                     <React.Fragment key={`${tid}${x}`}>
//                       <Td
//                         display={{
//                           base: "table-cell",
//                           md: "none",
//                         }}
//                         sx={{
//                           "@media print": {
//                             display: "none",
//                           },
//                           textTransform: "uppercase",
//                           color: color1,
//                           fontSize: "xs",
//                           fontWeight: "bold",
//                           letterSpacing: "wider",
//                           fontFamily: "heading",
//                         }}
//                       >
//                         {x}
//                       </Td>
//                       <Td
//                         color={"gray.500"}
//                         fontSize="md"
//                         fontWeight="hairline"
//                       >
//                         {token[x]}
//                       </Td>
//                     </React.Fragment>
//                   );
//                 })}
//                 <Td
//                   display={{
//                     base: "table-cell",
//                     md: "none",
//                   }}
//                   sx={{
//                     "@media print": {
//                       display: "none",
//                     },
//                     textTransform: "uppercase",
//                     color: color2,
//                     fontSize: "xs",
//                     fontWeight: "bold",
//                     letterSpacing: "wider",
//                     fontFamily: "heading",
//                   }}
//                 >
//                   Actions
//                 </Td>
//                 <Td>
//                   <ButtonGroup variant="solid" size="sm" spacing={3}>
//                     <IconButton
//                       colorScheme="blue"
//                       icon={<BsBoxArrowUpRight />}
//                       aria-label="Up"
//                     />
//                     <IconButton
//                       colorScheme="green"
//                       icon={<AiFillEdit />}
//                       aria-label="Edit"
//                     />
//                     <IconButton
//                       colorScheme="red"
//                       variant="outline"
//                       icon={<BsFillTrashFill />}
//                       aria-label="Delete"
//                     />
//                   </ButtonGroup>
//                 </Td>
//               </Tr>
//             );
//           })}
//         </Tbody>
//       </Table>
//     </Flex>
//   );
// };

// export default Admin;



import React, { ReactNode } from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from 'react-icons/fi';
import { IconType } from 'react-icons';
import { ReactText } from 'react';


const LinkItems = [
  { name: 'Dashboard' },
  { name: 'All Product' },
  { name: 'Electronics' },
  { name: 'Cosmetics' },
  { name: 'Health' },
];

export default function SimpleSidebar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')} style={{paddingTop:"170px"}}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}



const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Admin Page
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};


const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};


const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  );
};
