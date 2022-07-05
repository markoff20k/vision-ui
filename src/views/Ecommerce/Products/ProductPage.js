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

import React, { useState } from "react";

// Chakra imports
import {
  Badge,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Image,
  ListItem,
  Progress,
  Select,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  UnorderedList,
} from "@chakra-ui/react";

// Images
import productPage1 from "assets/img/product-page-1.png";
import productPage2 from "assets/img/product-page-2.png";
import productPage3 from "assets/img/product-page-3.png";
import productPage4 from "assets/img/product-page-4.png";
import productPage5 from "assets/img/product-page-5.png";

// Custom Components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";

// Icons
import { BsStarFill, BsStarHalf } from "react-icons/bs";

function ProductPage() {
  const [currentImage, setCurrentImage] = useState(productPage1);
  const textColor = "gray.400";

  return (
    <Card
      mt={{ sm: "125px", md: "75px" }}
      bg='linear-gradient(126.97deg, rgba(6, 11, 40, 0.74) 28.26%, rgba(10, 14, 35, 0.71) 91.2%)'>
      <CardHeader mb='42px'>
        <Text color={"white"} fontSize='lg' fontWeight='bold'>
          Product Details
        </Text>
      </CardHeader>
      <CardBody>
        <Flex direction='column' w='100%'>
          <Flex
            direction={{ sm: "column", lg: "row" }}
            mb={{ sm: "42px", lg: "84px" }}>
            <Flex
              direction='column'
              me={{ lg: "70px", xl: "120px" }}
              mb={{ sm: "24px", lg: "0px" }}>
              <Box
                w={{ sm: "275px", md: "670px", lg: "450px", xl: "600px" }}
                h={{ sm: "200px", md: "500px", lg: "330px", xl: "500px" }}
                mb='26px'
                mx={{ sm: "auto", lg: "0px" }}>
                <Image
                  src={currentImage}
                  w='100%'
                  h='100%'
                  borderRadius='15px'
                />
              </Box>
              <Stack
                direction='row'
                spacing={{ sm: "20px", md: "35px", lg: "20px" }}
                mx='auto'
                mb={{ sm: "24px", lg: "0px" }}>
                <Box
                  w={{ sm: "36px", md: "90px", lg: "60px" }}
                  h={{ sm: "36px", md: "90px", lg: "60px" }}>
                  <Image
                    src={productPage1}
                    w='100%'
                    h='100%'
                    borderRadius='15px'
                    cursor='pointer'
                    onClick={(e) => setCurrentImage(e.target.src)}
                  />
                </Box>
                <Box
                  w={{ sm: "36px", md: "90px", lg: "60px" }}
                  h={{ sm: "36px", md: "90px", lg: "60px" }}>
                  <Image
                    src={productPage2}
                    w='100%'
                    h='100%'
                    borderRadius='15px'
                    cursor='pointer'
                    onClick={(e) => setCurrentImage(e.target.src)}
                  />
                </Box>
                <Box
                  w={{ sm: "36px", md: "90px", lg: "60px" }}
                  h={{ sm: "36px", md: "90px", lg: "60px" }}>
                  <Image
                    src={productPage3}
                    w='100%'
                    h='100%'
                    borderRadius='15px'
                    cursor='pointer'
                    onClick={(e) => setCurrentImage(e.target.src)}
                  />
                </Box>
                <Box
                  w={{ sm: "36px", md: "90px", lg: "60px" }}
                  h={{ sm: "36px", md: "90px", lg: "60px" }}>
                  <Image
                    src={productPage4}
                    w='100%'
                    h='100%'
                    borderRadius='15px'
                    cursor='pointer'
                    onClick={(e) => setCurrentImage(e.target.src)}
                  />
                </Box>
                <Box
                  w={{ sm: "36px", md: "90px", lg: "60px" }}
                  h={{ sm: "36px", md: "90px", lg: "60px" }}>
                  <Image
                    src={productPage5}
                    w='100%'
                    h='100%'
                    borderRadius='15px'
                    cursor='pointer'
                    onClick={(e) => setCurrentImage(e.target.src)}
                  />
                </Box>
              </Stack>
            </Flex>
            <Flex direction='column'>
              <Text color={"white"} fontSize='3xl' fontWeight='bold' mb='12px'>
                Modern Luxury Sofa
              </Text>
              <Stack
                direction='row'
                spacing='12px'
                color='orange.300'
                mb='30px'>
                <Icon as={BsStarFill} color='#FFB547' w='26px' h='26px' />
                <Icon as={BsStarFill} color='#FFB547' w='26px' h='26px' />
                <Icon as={BsStarFill} color='#FFB547' w='26px' h='26px' />
                <Icon as={BsStarFill} color='#FFB547' w='26px' h='26px' />
                <Icon as={BsStarHalf} w='26px' h='26px' />
              </Stack>
              <Text color='gray.400' fontWeight='500' fontSize='sm'>
                Price
              </Text>
              <Text color={"white"} fontWeight='bold' fontSize='3xl' mb='12px'>
                $2,599.00
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
                mb='40px'>
                IN STOCK
              </Badge>
              <Text color='white' fonSize='sm' fontWeight='500' mb='8px'>
                Description
              </Text>
              <UnorderedList spacing='8px' mb='40px'>
                <ListItem fontSize='md' color={textColor} fontWeight='500'>
                  The most beautiful curves of this swivel stool adds an elegant
                  touch to any environment
                </ListItem>
                <ListItem fontSize='md' color={textColor} fontWeight='500'>
                  Memory swivel seat returns to original seat position
                </ListItem>
                <ListItem fontSize='md' color={textColor} fontWeight='500'>
                  Comfortable integrated layered chair seat cushion design
                </ListItem>
                <ListItem fontSize='md' color={textColor} fontWeight='500'>
                  Fully assembled! No assembly required
                </ListItem>
              </UnorderedList>
              <Stack
                direction={{ sm: "column", lg: "row" }}
                spacing='24px'
                mb='40px'>
                <FormControl>
                  <FormLabel fontWeight='bold' fontSize='xs' color={"white"}>
                    Frame Material
                  </FormLabel>
                  <Select
                    bg='#0F1535'
                    border='0.5px solid'
                    borderColor='#E2E8F04D'
                    borderRadius='15px'
                    placeholder='Wood'
                    fontSize='xs'
                    cursor='pointer'
                    color='gray.400'>
                    <option>Aluminium</option>
                    <option>Carbon</option>
                    <option>Steel</option>
                    <option>Brasil</option>
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel fontWeight='bold' fontSize='xs' color={"white"}>
                    Color
                  </FormLabel>
                  <Select
                    bg='#0F1535'
                    border='0.5px solid'
                    borderColor='#E2E8F04D'
                    borderRadius='15px'
                    placeholder='White'
                    fontSize='xs'
                    cursor='pointer'
                    color='gray.400'>
                    <option>Blue</option>
                    <option>Gray</option>
                    <option>Pink</option>
                    <option>Red</option>
                    <option>Green</option>
                    <option>Black</option>
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel fontWeight='bold' fontSize='xs' color={"white"}>
                    Quantity
                  </FormLabel>
                  <Select
                    bg='#0F1535'
                    border='0.5px solid'
                    borderColor='#E2E8F04D'
                    borderRadius='15px'
                    placeholder='1'
                    fontSize='xs'
                    cursor='pointer'
                    color='gray.400'
                    maxW={{ lg: "75px" }}>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                  </Select>
                </FormControl>
              </Stack>
              <Button
                variant='brand'
                w={{ sm: "240px", md: "100%", lg: "240px" }}
                h='50px'
                mx={{ sm: "auto", md: "0px" }}
                fontSize='xs'
                fontWeight='bold'>
                ADD TO CART
              </Button>
            </Flex>
          </Flex>
          <Box w='100%' overflowX={{ sm: "scroll", lg: "hidden" }}>
            <Table variant='simple' w='100%'>
              <Thead>
                <Tr>
                  <Th borderColor='#56577A' color='gray.400' fontSize='xs'>
                    Name
                  </Th>
                  <Th borderColor='#56577A' color='gray.400' fontSize='xs'>
                    Price
                  </Th>
                  <Th borderColor='#56577A' color='gray.400' fontSize='xs'>
                    Review
                  </Th>
                  <Th borderColor='#56577A' color='gray.400' fontSize='xs'>
                    Availability
                  </Th>
                  <Th borderColor='#56577A' color='gray.400' fontSize='xs'>
                    id
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td borderColor='#56577A' minW='300px'>
                    <Flex align='center'>
                      <Box w='40px' h='40px' me='14px'>
                        <Image
                          src={productPage2}
                          w='100%'
                          h='100%'
                          borderRadius='12px'
                        />
                      </Box>
                      <Text color='white' fontSize='sm' fontWeight='bold'>
                        Christopher Knight Home
                      </Text>
                    </Flex>
                  </Td>
                  <Td borderColor='#56577A'>
                    <Text color={"white"} fontSize='sm' fontWeight='bold'>
                      $89.53
                    </Text>
                  </Td>
                  <Td borderColor='#56577A'>
                    <Stack direction='row' color='gray.700' spacing='2px'>
                      <Icon as={BsStarFill} color='#FFB547' w='10px' h='10px' />
                      <Icon as={BsStarFill} color='#FFB547' w='10px' h='10px' />
                      <Icon as={BsStarFill} color='#FFB547' w='10px' h='10px' />
                      <Icon as={BsStarFill} color='#FFB547' w='10px' h='10px' />
                      <Icon as={BsStarHalf} w='10px' h='10px' />
                    </Stack>
                  </Td>
                  <Td borderColor='#56577A'>
                    <Progress
                      size='xs'
                      colorScheme='brand'
                      bg='#2D2E5F'
                      value={70}
                      borderRadius='12px'
                    />
                  </Td>
                  <Td borderColor='#56577A'>
                    <Text color={"white"} fontSize='sm' fontWeight='500'>
                      230019
                    </Text>
                  </Td>
                </Tr>
                <Tr>
                  <Td borderColor='#56577A'>
                    <Flex align='center'>
                      <Box w='40px' h='40px' me='14px'>
                        <Image
                          src={productPage3}
                          w='100%'
                          h='100%'
                          borderRadius='12px'
                        />
                      </Box>
                      <Text color='white' fontSize='sm' fontWeight='bold'>
                        Bar Height Swivel Barstool
                      </Text>
                    </Flex>
                  </Td>
                  <Td borderColor='#56577A'>
                    <Text color={"white"} fontSize='sm' fontWeight='bold'>
                      $89.53
                    </Text>
                  </Td>
                  <Td borderColor='#56577A'>
                    <Stack direction='row' color='gray.700' spacing='2px'>
                      <Icon as={BsStarFill} color='#FFB547' w='10px' h='10px' />
                      <Icon as={BsStarFill} color='#FFB547' w='10px' h='10px' />
                      <Icon as={BsStarFill} color='#FFB547' w='10px' h='10px' />
                      <Icon as={BsStarFill} color='#FFB547' w='10px' h='10px' />
                      <Icon as={BsStarFill} color='#FFB547' w='10px' h='10px' />
                    </Stack>
                  </Td>
                  <Td borderColor='#56577A'>
                    <Progress
                      size='xs'
                      colorScheme='brand'
                      bg='#2D2E5F'
                      value={90}
                      borderRadius='12px'
                    />
                  </Td>
                  <Td borderColor='#56577A'>
                    <Text color={"white"} fontSize='sm' fontWeight='500'>
                      230019
                    </Text>
                  </Td>
                </Tr>
                <Tr>
                  <Td borderColor='#56577A'>
                    <Flex align='center'>
                      <Box w='40px' h='40px' me='14px'>
                        <Image
                          src={productPage4}
                          w='100%'
                          h='100%'
                          borderRadius='12px'
                        />
                      </Box>
                      <Text color='white' fontSize='sm' fontWeight='bold'>
                        Signature Design by Ashley
                      </Text>
                    </Flex>
                  </Td>
                  <Td borderColor='#56577A'>
                    <Text color={"white"} fontSize='sm' fontWeight='bold'>
                      $89.53
                    </Text>
                  </Td>
                  <Td borderColor='#56577A'>
                    <Stack direction='row' color='gray.700' spacing='2px'>
                      <Icon as={BsStarFill} color='#FFB547' w='10px' h='10px' />
                      <Icon as={BsStarFill} color='#FFB547' w='10px' h='10px' />
                      <Icon as={BsStarFill} color='#FFB547' w='10px' h='10px' />
                      <Icon as={BsStarFill} color='#FFB547' w='10px' h='10px' />
                      <Icon as={BsStarFill} color='#FFB547' w='10px' h='10px' />
                    </Stack>
                  </Td>
                  <Td borderColor='#56577A'>
                    <Progress
                      size='xs'
                      colorScheme='brand'
                      bg='#2D2E5F'
                      value={40}
                      borderRadius='12px'
                    />
                  </Td>
                  <Td borderColor='#56577A'>
                    <Text color={"white"} fontSize='sm' fontWeight='500'>
                      230019
                    </Text>
                  </Td>
                </Tr>
                <Tr>
                  <Td border='none'>
                    <Flex align='center'>
                      <Box w='40px' h='40px' me='14px'>
                        <Image
                          src={productPage5}
                          w='100%'
                          h='100%'
                          borderRadius='12px'
                        />
                      </Box>
                      <Text color='white' fontSize='sm' fontWeight='bold'>
                        Modern Square
                      </Text>
                    </Flex>
                  </Td>
                  <Td border='none'>
                    <Text color={"white"} fontSize='sm' fontWeight='bold'>
                      $89.53
                    </Text>
                  </Td>
                  <Td border='none'>
                    <Stack direction='row' color='gray.700' spacing='2px'>
                      <Icon as={BsStarFill} color='#FFB547' w='10px' h='10px' />
                      <Icon as={BsStarFill} color='#FFB547' w='10px' h='10px' />
                      <Icon as={BsStarFill} color='#FFB547' w='10px' h='10px' />
                      <Icon as={BsStarFill} color='#FFB547' w='10px' h='10px' />
                      <Icon as={BsStarHalf} w='10px' h='10px' />
                    </Stack>
                  </Td>
                  <Td border='none'>
                    <Progress
                      size='xs'
                      colorScheme='brand'
                      bg='#2D2E5F'
                      value={15}
                      borderRadius='12px'
                    />
                  </Td>
                  <Td border='none'>
                    <Text color={"white"} fontSize='sm' fontWeight='500'>
                      230019
                    </Text>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
}

export default ProductPage;
