import { ReactNode } from 'react';

import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';


const Footer=() => {
  return (
    <Box
      bg={useColorModeValue('blue.100', 'blue.300')}
      color={useColorModeValue('gray.700', 'gray.200')}
      paddingTop="15px" 
      width="100%" marginTop={"45px"}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={6}>
            {/* <Box>
              <Logo color={useColorModeValue('gray.700', 'white')} />
            </Box> */}
            <Text fontSize={'sm'}>
             Shopping website . All rights reserved
            </Text>
          </Stack>
          <Stack align={'flex-start'}>
            <Text fontSize={"25px"}>Clothes</Text>
            <Link to="/clothes">
            <Text>

            Mens
            </Text>
            </Link>
            <Link to="/women">Womens</Link>
            <Link to="/kids">Kids</Link>
           
          </Stack>
          <Stack align={'flex-start'}>
            <Text fontSize={"25px"}>Products</Text>
            <Link to="/health">Health</Link>
            <Link to="/cosmetics">cosmetics</Link>
            <Link to="/electronics">Electronics</Link>
            <Link to="/jewellery">jewelery</Link>


            
          </Stack>


          
          <Stack align={'flex-start'}>
            <Text fontSize={"25px"}>Support</Text>
            <Link href={'#'}>Help Center</Link>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Legal</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Status</Link>
            <Link to="/signup">Contact</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <Text fontSize={"25px"}>Follow Us</Text>
            <Link href={'#'}>Facebook</Link>
            <Link href={'#'}>Twitter</Link>
            <Link href={'#'}>Dribbble</Link>
            <Link href={'#'}>Instagram</Link>
            <Link href={'#'}>LinkedIn</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Footer