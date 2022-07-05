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

import { default as React } from "react";

// Chakra imports
import {
  Box,
  Button,
  DarkMode,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Link,
  Switch,
  Text,
} from "@chakra-ui/react";

// Assets
import illustration from "assets/img/illustration-auth.png";
import AuthFooter from "components/Footer/AuthFooter";

// Custom components
import GradientBorder from "components/GradientBorder/GradientBorder";

function SignUpIllustration() {
  // Chakra color mode
  const titleColor = "white";
  const textColor = "gray.400";
  const illustrationBackground =
    "linear-gradient(135deg, #868CFF 0%, #4318FF 100%)";

  return (
    <Flex position='relative'>
      <Flex
        minH='100vh'
        h={{ base: "140vh", lg: "fit-content" }}
        w='100%'
        maxW='1044px'
        mx='auto'
        pt={{ sm: "100px", md: "0px" }}
        flexDirection='column'
        me={{ base: "auto", lg: "50px", xl: "auto" }}>
        <Flex
          alignItems='center'
          justifyContent='start'
          style={{ userSelect: "none" }}
          mx={{ base: "auto", lg: "unset" }}
          me={{ base: "auto", lg: "auto" }}
          w={{ base: "100%", md: "50%", lg: "450px" }}
          px='50px'>
          <Flex
            direction='column'
            w='100%'
            background='transparent'
            mt={{
              base: "50px",
              md: "150px",
              lg: "160px",
              xl: "185px",
              "2xl": "245px",
            }}
            mb={{ base: "60px", lg: "95px" }}>
            <Heading color={titleColor} fontSize='32px' mb='10px'>
              Sign Up
            </Heading>
            <Text
              mb='36px'
              ms='4px'
              color={textColor}
              fontWeight='bold'
              fontSize='14px'>
              Enter your email and password to sign up
            </Text>
            <FormControl>
              <FormLabel ms='4px' fontSize='sm' fontWeight='500' color='white'>
                Name
              </FormLabel>
              <GradientBorder
                mb='24px'
                w={{ base: "100%", lg: "fit-content" }}
                borderRadius='20px'>
                <Input
                  color='white'
                  bg={{ base: "rgb(19,21,54)", lg: "rgb(19,21,54)" }}
                  border='transparent'
                  borderRadius='20px'
                  fontSize='sm'
                  size='lg'
                  w={{ base: "100%", md: "346px" }}
                  maxW='100%'
                  h='46px'
                  placeholder='Your full name'
                />
              </GradientBorder>
            </FormControl>
            <FormControl>
              <FormLabel ms='4px' fontSize='sm' fontWeight='500' color='white'>
                Email
              </FormLabel>
              <GradientBorder
                mb='24px'
                w={{ base: "100%", lg: "fit-content" }}
                borderRadius='20px'>
                <Input
                  color='white'
                  bg={{ base: "rgb(19,21,54)", lg: "rgb(19,21,54)" }}
                  border='transparent'
                  borderRadius='20px'
                  fontSize='sm'
                  size='lg'
                  w={{ base: "100%", md: "346px" }}
                  maxW='100%'
                  h='46px'
                  placeholder='Your email adress'
                />
              </GradientBorder>
            </FormControl>
            <FormControl>
              <FormLabel ms='4px' fontSize='sm' fontWeight='500' color='white'>
                Password
              </FormLabel>
              <GradientBorder
                mb='24px'
                w={{ base: "100%", lg: "fit-content" }}
                borderRadius='20px'>
                <Input
                  color='white'
                  bg={{ base: "rgb(19,21,54)", lg: "rgb(19,21,54)" }}
                  border='transparent'
                  borderRadius='20px'
                  fontSize='sm'
                  size='lg'
                  w={{ base: "100%", md: "346px" }}
                  maxW='100%'
                  type='password'
                  placeholder='Your password'
                />
              </GradientBorder>
            </FormControl>
            <FormControl display='flex' alignItems='center'>
              <DarkMode>
                <Switch id='remember-login' colorScheme='brand' me='10px' />
              </DarkMode>
              <FormLabel
                htmlFor='remember-login'
                mb='0'
                ms='1'
                fontWeight='500'
                color='white'>
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
              SIGN UP
            </Button>

            <Flex
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
              maxW='100%'
              mt='0px'>
              <Text color={textColor} fontWeight='medium'>
                Don't have an account?
                <Link color={titleColor} as='span' ms='5px' fontWeight='bold'>
                  Sign In
                </Link>
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Box
          display={{ base: "none", md: "block" }}
          overflowX='hidden'
          h='100%'
          w={{ lg: "50vw", "2xl": "50vw" }}
          position='absolute'
          right='0px'>
          <Flex
            bg={illustrationBackground}
            justify='center'
            align='center'
            w='100%'
            h='100%'
            bgSize='cover'
            bgPosition='50%'
            position='absolute'>
            <Image
              w={{ lg: "450px", xl: "550px", "2xl": "690px" }}
              src={illustration}
              alt='illustration'
            />
          </Flex>
        </Box>
        <Box
          w={{ base: "335px", md: "450px" }}
          mx={{ base: "auto", lg: "unset" }}
          me={{ base: "auto", lg: "auto" }}
          mb='80px'>
          <AuthFooter />
        </Box>
      </Flex>
    </Flex>
  );
}

export default SignUpIllustration;
