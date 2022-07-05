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
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Image,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Stack,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
} from "@chakra-ui/react";

// Images
import productImage1 from "assets/img/product-page-1.png";

// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import Editor from "components/Editor/Editor";
import { useDropzone } from "react-dropzone";

function EditProduct() {
  const [skills, setSkills] = useState([
    {
      name: "chakra-ui",
      id: 1,
    },
    {
      name: "react",
      id: 2,
    },
    {
      name: "javascript",
      id: 3,
    },
  ]);

  const { getRootProps, getInputProps } = useDropzone();
  const textColor = "white";

  // Sets the skills in the text area
  const keyPress = (e) => {
    if (e.keyCode === 13) {
      setSkills([
        ...skills,
        {
          name: e.target.value,
          id: skills.length === 0 ? 1 : skills[skills.length - 1].id + 1,
        },
      ]);
      e.target.value = "";
    }
  };

  return (
    <Flex direction='column' pt={{ sm: "125px", lg: "75px" }}>
      {/* Header */}
      <Flex
        direction={{ sm: "column", lg: "row" }}
        justify='space-between'
        align={{ lg: "center" }}
        w='100%'
        mb={{ sm: "24px", lg: "55px" }}>
        <Flex direction='column'>
          <Text
            color={textColor}
            fontSize={{ sm: "xl", md: "2xl" }}
            fontWeight='bold'
            mb='10px'>
            Make the changes below
          </Text>
          <Text
            fontSize='sm'
            color='gray.400'
            fontWeight='500'
            mb={{ sm: "16px", lg: "0px" }}>
            We’re constantly trying to express ourselves and actualize our
            dreams. If you have the opportunity to play.
          </Text>
        </Flex>
        <Button
          variant='brand'
          w={{ sm: "75px", lg: "100px" }}
          h='35px'
          me='12px'
          alignSelf={{ sm: "flex-start", lg: "auto" }}>
          <Text fontSize='xs' color='#fff' fontWeight='bold'>
            SAVE
          </Text>
        </Button>
      </Flex>
      <Grid templateColumns={{ sm: "1fr", lg: "1fr 1.7fr" }} gap='24px'>
        <Stack direction='column' spacing='24px'>
          {/* Product Image */}
          <Card>
            <CardHeader mb='42px'>
              <Text color={textColor} fontSize='lg' fontWeight='bold'>
                Product Image
              </Text>
            </CardHeader>
            <CardBody>
              <Flex direction='column' w='100%'>
                <Box
                  maxW={{ sm: "280px", md: "670px", lg: "600px" }}
                  maxH={{ sm: "185px", md: "450px", lg: "400px" }}
                  mb='24px'>
                  <Image src={productImage1} w='100%' h='100%' />
                </Box>
                <Flex>
                  <Button
                    variant='no-hover'
                    bg='linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)'
                    w={{ sm: "75px", md: "100px" }}
                    h='35px'
                    me='12px'>
                    <Text fontSize='xs' color='#fff' fontWeight='bold'>
                      EDIT
                    </Text>
                  </Button>
                  <Button
                    variant='no-hover'
                    bg='gray.100'
                    w={{ sm: "75px", md: "100px" }}
                    h='35px'>
                    <Text fontSize='xs' color='gray.700' fontWeight='bold'>
                      REMOVE
                    </Text>
                  </Button>
                </Flex>
              </Flex>
            </CardBody>
          </Card>
          {/* Socials */}
          <Card>
            <CardHeader mb='32px'>
              <Text fontSize='lg' color={textColor} fontWeight='bold'>
                Socials
              </Text>
            </CardHeader>
            <CardBody>
              <Stack direction='column' spacing='20px' w='100%'>
                <FormControl>
                  <FormLabel
                    color='white'
                    fontSize='xs'
                    fontWeight='bold'
                    mb='10px'>
                    Shopify Handle
                  </FormLabel>
                  <Input
                    color='gray.400'
                    bg='#0F1535'
                    border='0.5px solid'
                    borderColor='#E2E8F04D'
                    borderRadius='15px'
                    placeholder='@Vision'
                    fontSize='xs'
                  />
                </FormControl>
                <FormControl>
                  <FormLabel
                    color='white'
                    fontSize='xs'
                    fontWeight='bold'
                    mb='10px'>
                    Facebook Account
                  </FormLabel>
                  <Input
                    color='gray.400'
                    bg='#0F1535'
                    border='0.5px solid'
                    borderColor='#E2E8F04D'
                    borderRadius='15px'
                    placeholder='https://'
                    fontSize='xs'
                  />
                </FormControl>
                <FormControl>
                  <FormLabel
                    color='white'
                    fontSize='xs'
                    fontWeight='bold'
                    mb='10px'>
                    Instagram Account
                  </FormLabel>
                  <Input
                    color='gray.400'
                    bg='#0F1535'
                    border='0.5px solid'
                    borderColor='#E2E8F04D'
                    borderRadius='15px'
                    placeholder='https://'
                    fontSize='xs'
                  />
                </FormControl>
              </Stack>
            </CardBody>
          </Card>
        </Stack>
        <Stack direction='column' spacing='24px'>
          {/* Product Information Card */}
          <Card>
            <CardHeader mb='22px'>
              <Text color={textColor} fontSize='lg' fontWeight='bold'>
                Product Information
              </Text>
            </CardHeader>
            <CardBody>
              <Stack direction='column' spacing='20px' w='100%'>
                <Stack direction={{ sm: "column", md: "row" }} spacing='30px'>
                  <FormControl>
                    <FormLabel
                      color='white'
                      fontSize='xs'
                      fontWeight='bold'
                      mb='10px'>
                      Product Name
                    </FormLabel>
                    <Input
                      color='gray.400'
                      bg='#0F1535'
                      border='0.5px solid'
                      borderColor='#E2E8F04D'
                      borderRadius='15px'
                      placeholder='eg. Modern Luxury Sofa'
                      fontSize='xs'
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel
                      color='white'
                      fontSize='xs'
                      fontWeight='bold'
                      mb='10px'>
                      Weight
                    </FormLabel>
                    <Input
                      color='gray.400'
                      bg='#0F1535'
                      border='0.5px solid'
                      borderColor='#E2E8F04D'
                      borderRadius='15px'
                      placeholder='eg. 42'
                      fontSize='xs'
                    />
                  </FormControl>
                </Stack>
                <Stack direction={{ sm: "column", lg: "row" }} spacing='30px'>
                  <FormControl>
                    <FormLabel
                      color='white'
                      fontSize='xs'
                      fontWeight='bold'
                      mb='10px'>
                      Description
                    </FormLabel>
                    <Editor />
                  </FormControl>
                  <Stack direction='column' spacing='20px' w='100%'>
                    <FormControl>
                      <FormLabel
                        color='white'
                        fontSize='xs'
                        fontWeight='bold'
                        mb='10px'>
                        Category
                      </FormLabel>
                      <Select
                        bg='#0F1535'
                        border='0.5px solid'
                        borderColor='#E2E8F04D'
                        borderRadius='15px'
                        fontSize='xs'
                        placeholder='Furniture'
                        color='gray.400'>
                        <option>Electronics</option>
                        <option>Clothing</option>
                        <option>Real Estate</option>
                        <option>Others</option>
                      </Select>
                    </FormControl>
                    <FormControl>
                      <FormLabel
                        color='white'
                        fontSize='xs'
                        fontWeight='bold'
                        mb='10px'>
                        Color
                      </FormLabel>
                      <Select
                        bg='#0F1535'
                        border='0.5px solid'
                        borderColor='#E2E8F04D'
                        borderRadius='15px'
                        fontSize='xs'
                        placeholder='Green'
                        color='gray.400'>
                        <option>Red</option>
                        <option>Blue</option>
                        <option>Black</option>
                        <option>White</option>
                        <option>Pink</option>
                        <option>Orange</option>
                      </Select>
                    </FormControl>
                  </Stack>
                </Stack>
                <Stack direction={{ sm: "column", md: "row" }} spacing='30px'>
                  <FormControl>
                    <FormLabel
                      color='white'
                      fontSize='xs'
                      fontWeight='bold'
                      mb='10px'>
                      Collection
                    </FormLabel>
                    <Input
                      color='gray.400'
                      bg='#0F1535'
                      border='0.5px solid'
                      borderColor='#E2E8F04D'
                      borderRadius='15px'
                      placeholder='eg. Summer'
                      fontSize='xs'
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel
                      color='white'
                      fontSize='xs'
                      fontWeight='bold'
                      mb='10px'>
                      Quantity
                    </FormLabel>
                    <NumberInput
                      defaultValue={1}
                      min={1}
                      max={20}
                      color='gray.400'
                      fontSize='xs'>
                      <NumberInputField
                        color='gray.400'
                        bg='#0F1535'
                        border='0.5px solid'
                        borderColor='#E2E8F04D'
                        borderRadius='15px'
                      />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                  </FormControl>
                </Stack>
              </Stack>
            </CardBody>
          </Card>
          {/* Pricing Card */}
          <Card>
            <CardHeader mb='32px'>
              <Text fontSize='lg' color={textColor} fontWeight='bold'>
                Pricing
              </Text>
            </CardHeader>
            <CardBody>
              <Stack direction='column' spacing='20px' w='100%'>
                <Stack direction='row' spacing='24px'>
                  <FormControl>
                    <FormLabel
                      color='white'
                      fontSize='xs'
                      fontWeight='bold'
                      mb='10px'>
                      Price
                    </FormLabel>
                    <Input
                      color='gray.400'
                      bg='#0F1535'
                      border='0.5px solid'
                      borderColor='#E2E8F04D'
                      borderRadius='15px'
                      placeholder='eg. $99.99'
                      fontSize='xs'
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel
                      color='white'
                      fontSize='xs'
                      fontWeight='bold'
                      mb='10px'>
                      Currency
                    </FormLabel>
                    <Select
                      bg='#0F1535'
                      border='0.5px solid'
                      borderColor='#E2E8F04D'
                      borderRadius='15px'
                      fontSize='xs'
                      placeholder='USD'
                      color='gray.400'>
                      <option>EUR</option>
                      <option>CNY</option>
                      <option>RON</option>
                      <option>GBP</option>
                      <option>INR</option>
                      <option>CZH</option>
                    </Select>
                  </FormControl>
                  <FormControl>
                    <FormLabel
                      color='white'
                      fontSize='xs'
                      fontWeight='bold'
                      mb='10px'>
                      SKU
                    </FormLabel>
                    <Input
                      color='gray.400'
                      bg='#0F1535'
                      border='0.5px solid'
                      borderColor='#E2E8F04D'
                      borderRadius='15px'
                      placeholder='71283476591'
                      fontSize='xs'
                    />
                  </FormControl>
                </Stack>
                <FormControl>
                  <FormLabel
                    color='white'
                    fontWeight='bold'
                    fontSize='xs'
                    mb='10px'>
                    Tags
                  </FormLabel>
                  <Flex
                    color='gray.400'
                    bg='#0F1535'
                    border='0.5px solid'
                    borderColor='#E2E8F04D'
                    borderRadius='15px'
                    direction='row'
                    px='12px'
                    align='center'
                    _focus={{ borderColor: "teal.300" }}
                    minH='40px'
                    cursor='text'
                    flexWrap='wrap'>
                    {skills.map((skill, index) => {
                      return (
                        <Tag
                          fontSize='xs'
                          h='25px'
                          me='6px'
                          my='6px'
                          minW='fit-content'
                          key={skill.id}
                          borderRadius='12px'
                          variant='solid'
                          bg='brand.200'
                          key={index}>
                          <TagLabel w='100%'>{skill.name}</TagLabel>
                          <TagCloseButton
                            color='white'
                            justifySelf='flex-end'
                            onClick={() =>
                              setSkills([
                                ...skills.filter(
                                  (element) => element.id !== skill.id
                                ),
                              ])
                            }
                          />
                        </Tag>
                      );
                    })}
                    <Input
                      w='50%'
                      border='none'
                      _focus='none'
                      p='0px'
                      onKeyDown={(e) => keyPress(e)}
                      fontSize='xs'
                    />
                  </Flex>
                </FormControl>
              </Stack>
            </CardBody>
          </Card>
          {/* Product Images */}
          <Card>
            <CardHeader>
              <Text color={textColor} fontSize='lg' fontWeight='bold' mb='22px'>
                Product Images
              </Text>
            </CardHeader>
            <CardBody>
              <Flex
                align='center'
                justify='center'
                border='0.5px dashed #E2E8F04D'
                borderRadius='15px'
                w='100%'
                minH='130px'
                cursor='pointer'
                {...getRootProps({ className: "dropzone" })}>
                <Input
                  color='gray.400'
                  bg='#0F1535'
                  border='0.5px solid'
                  borderColor='#E2E8F04D'
                  borderRadius='15px'
                  {...getInputProps()}
                />
                <Button variant='no-hover'>
                  <Text color='gray.400' fontWeight='500'>
                    Drop files here to upload
                  </Text>
                </Button>
              </Flex>
            </CardBody>
          </Card>
        </Stack>
      </Grid>
    </Flex>
  );
}

export default EditProduct;
