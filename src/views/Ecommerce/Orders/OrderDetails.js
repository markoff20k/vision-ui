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
  Badge,
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Image,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";

// Images
import productImage1 from "assets/img/product-page-1.png";

// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import IconBox from "components/Icons/IconBox";
import { HSeparator } from "components/Separator/Separator";

// Icons
import { MastercardIcon } from "components/Icons/Icons";
import { CgShapeCircle } from "react-icons/cg";
import { FaPencilAlt } from "react-icons/fa";

function OrderDetails() {
  // Chakra color mode
  const textColor = "white";
  const bgColor =
    "linear-gradient(126.97deg, rgba(6, 11, 40, 0.74) 28.26%, rgba(10, 14, 35, 0.71) 91.2%)";
  const nameColor = "white";

  return (
    <Flex pt={{ sm: "125px", lg: "75px" }} justify='center' mx='auto'>
      <Card
        bg='linear-gradient(126.97deg, rgba(6, 11, 40, 0.74) 28.26%, rgba(10, 14, 35, 0.71) 91.2%)'
        maxW={{ lg: "800px" }}>
        <CardHeader>
          <Flex direction='column' w='100%'>
            <Text color={textColor} fontSize='lg' fontWeight='bold' mb='22px'>
              Order Details
            </Text>
            <Flex justify='space-between' w='100%'>
              <Flex direction='column'>
                <Text fontSize='sm' color='gray.400' fontWeight='500'>
                  Order no.{" "}
                  <Text as='span' color='white' fontWeight='bold'>
                    241342
                  </Text>{" "}
                  from{" "}
                  <Text as='span' color={textColor} fontWeight='500'>
                    23.02.2021
                  </Text>
                </Text>
                <Text fontSize='sm' color='gray.400' fontWeight='500'>
                  Code:{" "}
                  <Text as='span' color={textColor} fontWeight='bold'>
                    KF332
                  </Text>
                </Text>
              </Flex>
              <Button
                variant='outlineWhite'
                w='100px'
                h='35px'
                borderRadius='12px'
                fontSize='10px'
                fontWeight='bold'>
                INVOICE
              </Button>
            </Flex>
          </Flex>
        </CardHeader>
        <CardBody>
          <Flex direction='column' w='100%'>
            <HSeparator my='22px' />
            <Flex
              direction={{ sm: "column", md: "row" }}
              justify='space-between'
              w='100%'
              align='center'>
              <Flex align='center'>
                <Box
                  minW='110px'
                  h='110px'
                  me='30px'
                  alignSelf={{ sm: "flex-start", md: "auto" }}>
                  <Image
                    src={productImage1}
                    w='100%'
                    h='100%'
                    borderRadius='12px'
                  />
                </Box>
                <Flex direction='column'>
                  <Text
                    color={textColor}
                    fontSize='lg'
                    fontWeight='bold'
                    mb='6px'>
                    Modern Luxury Sofa
                  </Text>
                  <Text
                    color='gray.400'
                    fontSize='sm'
                    fontWeight='500'
                    mb='16px'>
                    Order was delivered 2 days ago.
                  </Text>
                  <Badge
                    color='#01B574'
                    bg='#C9FBD5'
                    w='95px'
                    h='28px'
                    borderRadius='8px'
                    display='flex'
                    alignItems='center'
                    alignSelf={{ sm: "center", md: "auto" }}
                    justifyContent='center'
                    mb={{ sm: "6px", md: "0px" }}>
                    DELIVERED
                  </Badge>
                </Flex>
              </Flex>
              <Flex direction='column' align='flex-end'>
                <Button
                  variant='no-hover'
                  bg='brand.200'
                  w='125px'
                  h='35px'
                  color='#fff'
                  fontSize='10px'
                  fontWeight='bold'
                  borderRadius='12px'
                  mb={{ sm: "12px", md: "36px" }}>
                  CONTACT US
                </Button>
                <Text color='gray.400' fontSize='xs' fontWeight='500'>
                  Do you like the product? Leave us a review here.
                </Text>
              </Flex>
            </Flex>
            <HSeparator my='22px' />
            <Grid
              templateColumns={{
                sm: "1fr",
                md: "1fr 1fr",
                lg: "1fr 1.7fr 1fr",
              }}
              gap={{ sm: "24px", lg: "54px" }}>
              <Flex direction='column'>
                <Text color={textColor} fontWeight='bold' mb='22px'>
                  Track Order
                </Text>
                <Flex
                  alignItems='center'
                  minH='70px'
                  justifyContent='start'
                  //   mb="5px"
                >
                  <Flex direction='column' align='center' h='100%' me='20px'>
                    <Icon
                      as={CgShapeCircle}
                      color='brand.200'
                      h={"24px"}
                      w={"24px"}
                      zIndex='1'
                      position='relative'
                    />
                    <Box w='2px' bg='#2D2E5F' h='100%'></Box>
                  </Flex>
                  <Flex direction='column' justifyContent='flex-start' h='100%'>
                    <Text fontSize='sm' color={textColor} fontWeight='bold'>
                      Order received
                    </Text>
                    <Text
                      fontSize='sm'
                      color='gray.400'
                      fontWeight='500'
                      mb='14px'>
                      22 DEC 7:20 AM
                    </Text>
                  </Flex>
                </Flex>
                <Flex alignItems='center' minH='70px' justifyContent='start'>
                  <Flex direction='column' align='center' h='100%' me='20px'>
                    <Icon
                      as={CgShapeCircle}
                      color='brand.200'
                      h={"24px"}
                      w={"24px"}
                      zIndex='1'
                      position='relative'
                    />
                    <Box w='2px' bg='#2D2E5F' h='100%'></Box>
                  </Flex>
                  <Flex direction='column' justifyContent='flex-start' h='100%'>
                    <Text fontSize='sm' color={textColor} fontWeight='bold'>
                      Generate order id #1832412
                    </Text>
                    <Text
                      fontSize='sm'
                      color='gray.400'
                      fontWeight='500'
                      mb='14px'>
                      22 DEC 7:21 AM
                    </Text>
                  </Flex>
                </Flex>
                <Flex alignItems='center' minH='70px' justifyContent='start'>
                  <Flex direction='column' align='center' h='100%' me='20px'>
                    <Icon
                      as={CgShapeCircle}
                      color='brand.200'
                      h={"24px"}
                      w={"24px"}
                      zIndex='1'
                      position='relative'
                    />
                    <Box w='2px' bg='#2D2E5F' h='100%'></Box>
                  </Flex>
                  <Flex direction='column' justifyContent='flex-start' h='100%'>
                    <Text fontSize='sm' color={textColor} fontWeight='bold'>
                      Order transmited to courier
                    </Text>
                    <Text
                      fontSize='sm'
                      color='gray.400'
                      fontWeight='500'
                      mb='14px'>
                      22 DEC 8:10 AM
                    </Text>
                  </Flex>
                </Flex>
                <Flex alignItems='center' minH='70px' justifyContent='start'>
                  <Flex direction='column' align='center' h='100%' me='20px'>
                    <Icon
                      as={CgShapeCircle}
                      color='brand.200'
                      h={"24px"}
                      w={"24px"}
                      zIndex='1'
                      position='relative'
                    />
                    <Box w='2px' bg='#2D2E5F' h='100%'></Box>
                  </Flex>
                  <Flex direction='column' justifyContent='flex-start' h='100%'>
                    <Text fontSize='sm' color={textColor} fontWeight='bold'>
                      Order delivered
                    </Text>
                    <Text
                      fontSize='sm'
                      color='gray.400'
                      fontWeight='500'
                      mb='14px'>
                      22 DEC 4:54 PM
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
              <Flex direction='column'>
                <Flex direction='column' mb='32px'>
                  <Text
                    color={textColor}
                    fontSize='md'
                    fontWeight='bold'
                    mb='22px'>
                    Payment Details
                  </Text>
                  <Flex
                    p='16px'
                    bg={bgColor}
                    borderRadius='20px'
                    width='100%'
                    align='center'>
                    <IconBox me='10px' w='25px' h='22px'>
                      <MastercardIcon w='100%' h='100%' />
                    </IconBox>
                    <Text color='white' fontSize='sm' fontWeight='500'>
                      7812 2139 0823 XXXX
                    </Text>
                    <Spacer />
                    <Button
                      p='0px'
                      bg='transparent'
                      w='16px'
                      h='16px'
                      variant='no-hover'>
                      <Icon color='white' as={FaPencilAlt} />
                    </Button>
                  </Flex>
                </Flex>
                <Flex direction='column'>
                  <Text
                    color={textColor}
                    fontSize='md'
                    fontWeight='bold'
                    mb='22px'>
                    Billing Information
                  </Text>
                  <Box p='24px' bg={bgColor} borderRadius='12px'>
                    <Flex justify='space-between' w='100%'>
                      <Flex direction='column'>
                        <Text
                          color={nameColor}
                          fontSize='md'
                          fontWeight='bold'
                          mb='10px'>
                          Oliver Liam
                        </Text>
                        <Text color='gray.400' fontSize='sm' fontWeight='500'>
                          Company Name: <Text as='span'>Viking Burrito</Text>
                        </Text>
                        <Text color='gray.400' fontSize='sm' fontWeight='500'>
                          Email Address:{" "}
                          <Text as='span'>oliver@burrito.com</Text>
                        </Text>
                        <Text color='gray.400' fontSize='sm' fontWeight='500'>
                          VAT Number: <Text as='span'>FRB1235476</Text>
                        </Text>
                      </Flex>
                    </Flex>
                  </Box>
                </Flex>
              </Flex>
              <Flex direction='column' gridColumn={{ md: "1 / 3", lg: "auto" }}>
                <Text
                  color={textColor}
                  fontSize='md'
                  fontWeight='bold'
                  mb='22px'>
                  Order Summary
                </Text>
                <Stack direction='column' spacing='12px'>
                  <Flex align='center' justify='space-between'>
                    <Text fontSize='sm' color='gray.400' fontWeight='500'>
                      Product Price:
                    </Text>
                    <Text fontSize='sm' color={textColor} fontWeight='bold'>
                      $90
                    </Text>
                  </Flex>
                  <Flex align='center' justify='space-between'>
                    <Text fontSize='sm' color='gray.400' fontWeight='500'>
                      Delivery:
                    </Text>
                    <Text fontSize='sm' color={textColor} fontWeight='bold'>
                      $15
                    </Text>
                  </Flex>
                  <Flex align='center' justify='space-between'>
                    <Text fontSize='sm' color='gray.400' fontWeight='500'>
                      Taxes:
                    </Text>
                    <Text fontSize='sm' color={textColor} fontWeight='bold'>
                      $1.95
                    </Text>
                  </Flex>
                </Stack>
                <Flex align='center' justify='space-between' mt='24px'>
                  <Text fontSize='md' color='gray.400' fontWeight='500'>
                    Total:
                  </Text>
                  <Text fontSize='md' color={textColor} fontWeight='bold'>
                    $105.95
                  </Text>
                </Flex>
              </Flex>
            </Grid>
          </Flex>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default OrderDetails;
