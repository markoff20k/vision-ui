/*!

=========================================================
* Vision UI PRO Chakra - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-dashboard-pro-chakra
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";
// Chakra imports
import {
  Box,
  Button,
  DarkMode,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Link,
  Switch,
  Text,
} from "@chakra-ui/react";

// Assets
import basic from "assets/img/basic-auth.png";

// Custom components
import GradientBorder from "components/GradientBorder/GradientBorder";

// Icons
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";

// Footer
import Footer from "components/Footer/Footer";

function SignInBasic() {
  const titleColor = "white";
  const textColor = "gray.400";
  return (
    <Flex
      direction='column'
      alignSelf='center'
      justifySelf='center'
      overflow='hidden'>
      <Box
        position='absolute'
        minH={{ base: "70vh", md: "50vh" }}
        w={{ md: "calc(100vw - 50px)" }}
        borderRadius={{ md: "15px" }}
        left='0'
        right='0'
        bgRepeat='no-repeat'
        overflow='hidden'
        zIndex='-1'
        top='0'
        bgImage={basic}
        bgSize='cover'
        mx={{ md: "auto" }}
        mt={{ md: "14px" }}></Box>
      <Flex
        alignItems='center'
        justifyContent='start'
        style={{ userSelect: "none" }}
        flexDirection='column'
        mx={{ base: "auto" }}
        mb={{ base: "0px", md: "50px" }}
        w={{ base: "100%", md: "50%", lg: "42%" }}>
        <Flex
          direction='column'
          textAlign='center'
          justifyContent='center'
          align='center'
          mt={{ base: "120px", md: "120px", lg: "150px" }}
          mb='50px'
          mx='10px'>
          <Text
            fontSize='4xl'
            lineHeight='39px'
            color='white'
            fontWeight='bold'>
            Welcome back!
          </Text>
          <Text
            fontSize='md'
            color='white'
            fontWeight='500'
            mt='10px'
            w={{ base: "100%", md: "90%", lg: "90%", xl: "70%" }}>
            Use these awesome forms to login or create new account in your
            project for free.
          </Text>
        </Flex>
        <GradientBorder
          p='2px'
          me={{ base: "none", lg: "30px", xl: "none" }}
          mb={{ base: "50px", lg: "150px" }}>
          <Flex
            background='transparent'
            borderRadius='30px'
            direction='column'
            p='40px'
            minW={{ base: "unset", md: "430px", xl: "450px" }}
            w='100%'
            mx={{ base: "0px" }}
            bg={{
              base: "rgb(19,21,56)",
            }}>
            <Text
              fontSize='xl'
              color='white'
              fontWeight='bold'
              textAlign='center'
              mb='22px'>
              Sign In with
            </Text>
            <HStack spacing='15px' justify='center' mb='22px'>
              <GradientBorder borderRadius='15px'>
                <Flex
                  _hover={{ filter: "brightness(120%)" }}
                  transition='all .25s ease'
                  cursor='pointer'
                  justify='center'
                  align='center'
                  bg='rgb(19,21,54)'
                  w='71px'
                  h='71px'
                  borderRadius='15px'>
                  <Link href='#'>
                    <Icon
                      color={titleColor}
                      as={FaFacebook}
                      w='30px'
                      h='30px'
                      _hover={{ filter: "brightness(120%)" }}
                    />
                  </Link>
                </Flex>
              </GradientBorder>
              <GradientBorder borderRadius='15px'>
                <Flex
                  _hover={{ filter: "brightness(120%)" }}
                  transition='all .25s ease'
                  cursor='pointer'
                  justify='center'
                  align='center'
                  bg='rgb(19,21,54)'
                  w='71px'
                  h='71px'
                  borderRadius='15px'>
                  <Link href='#'>
                    <Icon
                      color={titleColor}
                      as={FaApple}
                      w='30px'
                      h='30px'
                      _hover={{ filter: "brightness(120%)" }}
                    />
                  </Link>
                </Flex>
              </GradientBorder>
              <GradientBorder borderRadius='15px'>
                <Flex
                  _hover={{ filter: "brightness(120%)" }}
                  transition='all .25s ease'
                  cursor='pointer'
                  justify='center'
                  align='center'
                  bg='rgb(19,21,54)'
                  w='71px'
                  h='71px'
                  borderRadius='15px'>
                  <Link href='#'>
                    <Icon
                      color={titleColor}
                      as={FaGoogle}
                      w='30px'
                      h='30px'
                      _hover={{ filter: "brightness(120%)" }}
                    />
                  </Link>
                </Flex>
              </GradientBorder>
            </HStack>
            <Text
              fontSize='lg'
              color='gray.400'
              fontWeight='bold'
              textAlign='center'
              mb='22px'>
              or
            </Text>
            <FormControl>
              <FormLabel
                for='email'
                color={titleColor}
                ms='4px'
                fontSize='sm'
                fontWeight='500'>
                Email
              </FormLabel>
              <GradientBorder
                mb='24px'
                h='50px'
                w={{ base: "100%", lg: "fit-content" }}
                borderRadius='20px'>
                <Input
                  id='email'
                  color={titleColor}
                  bg={{
                    base: "rgb(19,21,54)",
                  }}
                  border='transparent'
                  borderRadius='20px'
                  fontSize='sm'
                  size='lg'
                  w={{ base: "100%", md: "346px" }}
                  maxW='100%'
                  h='46px'
                  type='email'
                  placeholder='Your email address'
                />
              </GradientBorder>
              <FormLabel
                for='pass'
                color={titleColor}
                ms='4px'
                fontSize='sm'
                fontWeight='500'>
                Password
              </FormLabel>
              <GradientBorder
                mb='24px'
                h='50px'
                w={{ base: "100%", lg: "fit-content" }}
                borderRadius='20px'>
                <Input
                  id='pass'
                  color={titleColor}
                  bg={{
                    base: "rgb(19,21,54)",
                  }}
                  border='transparent'
                  borderRadius='20px'
                  fontSize='sm'
                  size='lg'
                  w={{ base: "100%", md: "346px" }}
                  maxW='100%'
                  h='46px'
                  type='password'
                  placeholder='Your password'
                />
              </GradientBorder>
              <FormControl display='flex' alignItems='center' mb='24px'>
                <DarkMode>
                  <Switch id='remember-login' colorScheme='brand' me='10px' />
                </DarkMode>

                <FormLabel
                  color={titleColor}
                  htmlFor='remember-login'
                  mb='0'
                  fontWeight='500'>
                  Remember me
                </FormLabel>
              </FormControl>
              <Button
                variant='brand'
                fontSize='10px'
                type='submit'
                w='100%'
                h='45'
                mb='20px'>
                SIGN IN
              </Button>
            </FormControl>
            <Flex
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
              maxW='100%'
              mt='0px'>
              <Text color={textColor} fontWeight='medium'>
                Don't have an account?
                <Link
                  color={titleColor}
                  as='span'
                  ms='5px'
                  href='#'
                  fontWeight='bold'>
                  Sign Up
                </Link>
              </Text>
            </Flex>
          </Flex>
        </GradientBorder>
      </Flex>
      <Box
        maxW='100%'
        w={{ base: "335px", md: "1044px" }}
        mx={{ base: "auto" }}>
        <Footer />
      </Box>
    </Flex>
  );
}

export default SignInBasic;
