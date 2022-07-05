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

import React, { useReducer, useRef, useState } from "react";

// Chakra imports
import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
} from "@chakra-ui/react";

// Images
import avatar11 from "assets/img/avatars/avatar11.png";
import newProductBg from "assets/img/new-product-background.png";

// Custom Components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import Editor from "components/Editor/Editor";
import { useDropzone } from "react-dropzone";

// Icons
import { BsCircleFill } from "react-icons/bs";
import { FaCube, FaPencilAlt, FaPenFancy } from "react-icons/fa";
import { IoDocumentsSharp } from "react-icons/io5";

const reducer = (state, action) => {
  if (action.type === "SWITCH_ACTIVE") {
    if (action.payload === "overview") {
      const newState = {
        overview: true,
        teams: false,
        projects: false,
      };
      return newState;
    } else if (action.payload === "teams") {
      const newState = {
        overview: false,
        teams: true,
        projects: false,
      };
      return newState;
    } else if (action.payload === "projects") {
      const newState = {
        overview: false,
        teams: false,
        projects: true,
      };
      return newState;
    }
  }
  return state;
};

function NewProduct() {
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

  const [state, dispatch] = useReducer(reducer, {
    overview: true,
    teams: false,
    projects: false,
  });

  const [activeBullets, setActiveBullets] = useState({
    productInfo: true,
    media: false,
    socials: false,
    pricing: false,
  });

  const productInfoTab = useRef();
  const mediaTab = useRef();
  const socialsTab = useRef();
  const pricingTab = useRef();

  const { getRootProps, getInputProps } = useDropzone();

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

  // Chakra color mode
  const textColor = "white";
  const bgPrevButton = "gray.100";
  const bgProfile =
    "linear-gradient(112.83deg, rgba(6, 11, 40, 0.94) 0%, rgba(10, 14, 35, 0.62) 110.84%)";
  const borderProfileColor = "transparent";
  const emailColor = "gray.400";

  return (
    <Flex direction='column'>
      <Box
        mb={{ sm: "205px", md: "75px", xl: "70px" }}
        borderRadius='15px'
        px='0px'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        align='center'>
        <Box
          bgImage={newProductBg}
          w='100%'
          h='200px'
          borderRadius='20px'
          bgPosition='50%'
          bgRepeat='no-repeat'
          position='relative'
          display='flex'
          justifyContent='center'
          mt='130px'>
          <Flex
            direction={{ sm: "column", md: "row" }}
            mx='1.5rem'
            maxH='330px'
            w={{ sm: "90%", xl: "95%" }}
            justifyContent={{ sm: "center", md: "space-between" }}
            align='center'
            backdropFilter='saturate(200%) blur(50px)'
            position='absolute'
            boxShadow='0px 2px 5.5px rgba(0, 0, 0, 0.02)'
            border='2px solid'
            borderColor={borderProfileColor}
            bg={bgProfile}
            p='24px'
            borderRadius='20px'
            transform={{
              sm: "translateY(45%)",
              md: "translateY(110%)",
              lg: "translateY(100%)",
            }}>
            <Flex
              align='center'
              mb={{ sm: "10px", md: "0px" }}
              direction={{ sm: "column", md: "row" }}
              w={{ sm: "100%" }}
              textAlign={{ sm: "center", md: "start" }}>
              <Avatar
                me={{ md: "22px" }}
                src={avatar11}
                w='80px'
                h='80px'
                borderRadius='15px'>
                <AvatarBadge
                  cursor='pointer'
                  borderRadius='8px'
                  border='transparent'
                  bg='linear-gradient(138.78deg, rgba(6, 11, 40, 0.94) 17.44%, rgba(10, 14, 35, 0.49) 93.55%, rgba(10, 14, 35, 0.69) 93.55%)'
                  boxSize='26px'
                  backdropFilter='blur(120px)'>
                  <Icon h='9px' w='9px' color='#fff' as={FaPencilAlt} />
                </AvatarBadge>
              </Avatar>
              <Flex direction='column' maxWidth='100%' my={{ sm: "14px" }}>
                <Text
                  fontSize={{ sm: "lg", lg: "xl" }}
                  color={textColor}
                  fontWeight='bold'
                  ms={{ sm: "8px", md: "0px" }}>
                  Mark Johnson
                </Text>
                <Text
                  fontSize={{ sm: "sm", md: "md" }}
                  color={emailColor}
                  fontWeight='500'>
                  mark@simmmple.com
                </Text>
              </Flex>
            </Flex>
            <Flex
              direction={{ sm: "column", lg: "row" }}
              w={{ sm: "100%", md: "50%", lg: "auto" }}>
              <Button p='0px' bg='transparent' variant='transparent-with-icon'>
                <Flex
                  align='center'
                  w={{ sm: "100%", lg: "135px" }}
                  bg={state.overview ? "brand.200" : null}
                  boxShadow={state.overview ? "brand.200" : null}
                  transition='all .5s ease'
                  borderRadius='15px'
                  justifyContent='center'
                  py='10px'
                  cursor='pointer'
                  onClick={() =>
                    dispatch({ type: "SWITCH_ACTIVE", payload: "overview" })
                  }>
                  <Icon color='white' as={FaCube} me='6px' />
                  <Text fontSize='xs' color={textColor} fontWeight='bold'>
                    OVERVIEW
                  </Text>
                </Flex>
              </Button>
              <Button
                p='0px'
                bg='transparent'
                _hover={{ bg: "none" }}
                variant='transparent-with-icon'>
                <Flex
                  align='center'
                  w={{ sm: "100%", lg: "135px" }}
                  bg={state.teams ? "brand.200" : null}
                  boxShadow={state.teams ? "brand.200" : null}
                  borderColor={state.teams ? "black" : null}
                  transition='all .5s ease'
                  borderRadius='15px'
                  justifyContent='center'
                  py='10px'
                  mx={{ lg: "1rem" }}
                  cursor='pointer'
                  onClick={() =>
                    dispatch({ type: "SWITCH_ACTIVE", payload: "teams" })
                  }>
                  <Icon color='white' as={IoDocumentsSharp} me='6px' />
                  <Text fontSize='xs' color={textColor} fontWeight='bold'>
                    TEAMS
                  </Text>
                </Flex>
              </Button>
              <Button
                p='0px'
                bg='transparent'
                _hover={{ bg: "none" }}
                variant='transparent-with-icon'>
                <Flex
                  align='center'
                  w={{ sm: "100%", lg: "135px" }}
                  bg={state.projects ? "brand.200" : null}
                  boxShadow={state.projects ? "brand.200" : null}
                  borderColor={state.projects ? "black" : null}
                  transition='all .5s ease'
                  borderRadius='15px'
                  justifyContent='center'
                  py='10px'
                  cursor='pointer'
                  onClick={() =>
                    dispatch({ type: "SWITCH_ACTIVE", payload: "projects" })
                  }>
                  <Icon color='white' as={FaPenFancy} me='6px' />
                  <Text fontSize='xs' color={textColor} fontWeight='bold'>
                    PROJECTS
                  </Text>
                </Flex>
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Box>
      <Tabs variant='unstyled' mt='24px' alignSelf='center'>
        <TabList display='flex' align='center' justifyContent='center'>
          <Tab
            ref={productInfoTab}
            _focus='none'
            w={{ sm: "80px", md: "200px" }}
            onClick={() =>
              setActiveBullets({
                productInfo: true,
                media: false,
                socials: false,
                pricing: false,
              })
            }>
            <Flex
              direction='column'
              justify='center'
              align='center'
              position='relative'
              _before={{
                content: "''",
                width: { sm: "80px", md: "200px" },
                height: "3px",
                bg: activeBullets.media ? "#fff" : "#182058",
                left: { sm: "12px", md: "32px" },
                top: {
                  sm: activeBullets.productInfo ? "8px" : "6px",
                  md: null,
                },
                position: "absolute",
                bottom: activeBullets.productInfo ? "40px" : "38px",
                zIndex: -1,
                transition: "all .3s ease",
              }}>
              <Icon
                as={BsCircleFill}
                color={activeBullets.productInfo ? "#fff" : "brand.200"}
                w='20px'
                h='20px'
                border={activeBullets.productInfo ? "none" : "1px solid"}
                borderColor={activeBullets.productInfo ? "#fff" : "#182058"}
                borderRadius='50%'
                mb='8px'
              />
              <Text
                color='#fff'
                fontWeight={activeBullets.productInfo ? "bold" : "normal"}
                display={{ sm: "none", md: "block" }}>
                User Info
              </Text>
            </Flex>
          </Tab>
          <Tab
            ref={mediaTab}
            _focus='none'
            w={{ sm: "80px", md: "200px" }}
            onClick={() =>
              setActiveBullets({
                productInfo: true,
                media: true,
                socials: false,
                pricing: false,
              })
            }>
            <Flex
              direction='column'
              justify='center'
              align='center'
              position='relative'
              _before={{
                content: "''",
                width: { sm: "80px", md: "200px" },
                height: "3px",
                bg: activeBullets.socials ? "#fff" : "#182058",
                left: { sm: "12px", md: "32px" },
                top: { sm: activeBullets.media ? "8px" : "8px", md: null },
                position: "absolute",
                bottom: activeBullets.media ? "40px" : "38px",
                zIndex: -1,
                transition: "all .3s ease",
              }}>
              <Icon
                as={BsCircleFill}
                color={activeBullets.media ? "#fff" : "brand.200"}
                w='20px'
                h='20px'
                border={activeBullets.media ? "none" : "1px solid"}
                borderColor={activeBullets.media ? "#fff" : "#182058"}
                borderRadius='50%'
                mb='8px'
              />
              <Text
                color='#fff'
                fontWeight={activeBullets.media ? "bold" : "normal"}
                transition='all .3s ease'
                _hover={{ color: "#fff" }}
                display={{ sm: "none", md: "block" }}>
                Media
              </Text>
            </Flex>
          </Tab>
          <Tab
            ref={socialsTab}
            _focus='none'
            w={{ sm: "80px", md: "200px" }}
            onClick={() =>
              setActiveBullets({
                productInfo: true,
                media: true,
                socials: true,
                pricing: false,
              })
            }>
            <Flex
              direction='column'
              justify='center'
              align='center'
              position='relative'
              _before={{
                content: "''",
                width: { sm: "80px", md: "200px" },
                height: "3px",
                bg: activeBullets.pricing ? "#fff" : "#182058",
                left: { sm: "12px", md: "32px" },
                top: { sm: activeBullets.socials ? "8px" : "8px", md: null },
                position: "absolute",
                bottom: activeBullets.socials ? "40px" : "38px",
                zIndex: -1,
                transition: "all .3s ease",
              }}>
              <Icon
                as={BsCircleFill}
                color={activeBullets.socials ? "#fff" : "brand.200"}
                w='20px'
                h='20px'
                border={activeBullets.socials ? "none" : "1px solid"}
                borderColor={activeBullets.socials ? "#fff" : "#182058"}
                borderRadius='50%'
                mb='8px'
              />
              <Text
                color='#fff'
                fontWeight={activeBullets.socials ? "bold" : "normal"}
                transition='all .3s ease'
                _hover={{ color: "#fff" }}
                display={{ sm: "none", md: "block" }}>
                Socials
              </Text>
            </Flex>
          </Tab>
          <Tab
            ref={pricingTab}
            _focus='none'
            w={{ sm: "80px", md: "200px" }}
            onClick={() =>
              setActiveBullets({
                productInfo: true,
                media: true,
                socials: true,
                pricing: true,
              })
            }>
            <Flex direction='column' justify='center' align='center'>
              <Icon
                as={BsCircleFill}
                color={activeBullets.pricing ? "#fff" : "brand.200"}
                w={activeBullets.pricing ? "20px" : "20px"}
                h={activeBullets.pricing ? "20px" : "20px"}
                border={activeBullets.pricing ? "none" : "1px solid"}
                borderColor={activeBullets.pricing ? "#fff" : "#182058"}
                borderRadius='50%'
                mb='8px'
              />
              <Text
                color='#fff'
                fontWeight={activeBullets.pricing ? "bold" : "normal"}
                transition='all .3s ease'
                _hover={{ color: "#fff" }}
                display={{ sm: "none", md: "block" }}>
                Profile
              </Text>
            </Flex>
          </Tab>
        </TabList>
        <TabPanels mt='24px' maxW={{ md: "90%", lg: "100%" }} mx='auto'>
          <TabPanel>
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
                          color='gray.400'
                          bg='#0F1535'
                          border='0.5px solid'
                          borderColor='#E2E8F04D'
                          borderRadius='15px'
                          fontSize='xs'
                          placeholder='Furniture'
                          color='gray.400'
                          borderRadius='15px'>
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
                          color='gray.400'
                          bg='#0F1535'
                          border='0.5px solid'
                          borderColor='#E2E8F04D'
                          borderRadius='15px'
                          fontSize='xs'
                          placeholder='Green'
                          color='gray.400'
                          borderRadius='15px'>
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
                  <Button
                    variant='brand'
                    alignSelf='flex-end'
                    mt='24px'
                    w='100px'
                    h='35px'
                    onClick={() => mediaTab.current.click()}>
                    <Text fontSize='xs' color='#fff' fontWeight='bold'>
                      NEXT
                    </Text>
                  </Button>
                </Stack>
              </CardBody>
            </Card>
          </TabPanel>
          <TabPanel>
            <Card>
              <CardHeader mb='40px'>
                <Text
                  color={textColor}
                  fontSize='xl'
                  fontWeight='bold'
                  mb='3px'>
                  Media
                </Text>
              </CardHeader>
              <CardBody>
                <Flex direction='column' w='100%'>
                  <Text
                    color={textColor}
                    fontSize='sm'
                    fontWeight='bold'
                    mb='12px'>
                    Product images
                  </Text>
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

                  <Flex justify='space-between'>
                    <Button
                      variant='no-hover'
                      bg={bgPrevButton}
                      alignSelf='flex-end'
                      mt='24px'
                      w='100px'
                      h='35px'
                      onClick={() => productInfoTab.current.click()}>
                      <Text fontSize='xs' color='#313860' fontWeight='bold'>
                        PREV
                      </Text>
                    </Button>
                    <Button
                      variant='brand'
                      alignSelf='flex-end'
                      mt='24px'
                      w='100px'
                      h='35px'
                      onClick={() => socialsTab.current.click()}>
                      <Text fontSize='xs' color='#fff' fontWeight='bold'>
                        NEXT
                      </Text>
                    </Button>
                  </Flex>
                </Flex>
              </CardBody>
            </Card>
          </TabPanel>
          <TabPanel>
            <Card>
              <CardHeader mb='32px'>
                <Text fontSize='lg' color={textColor} fontWeight='bold'>
                  Socials
                </Text>
              </CardHeader>
              <CardBody>
                <Flex direction='column' w='100%'>
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
                  <Flex justify='space-between'>
                    <Button
                      variant='no-hover'
                      bg={bgPrevButton}
                      alignSelf='flex-end'
                      mt='24px'
                      w='100px'
                      h='35px'
                      onClick={() => mediaTab.current.click()}>
                      <Text fontSize='xs' color='#313860' fontWeight='bold'>
                        PREV
                      </Text>
                    </Button>
                    <Button
                      variant='brand'
                      alignSelf='flex-end'
                      mt='24px'
                      w='100px'
                      h='35px'
                      onClick={() => pricingTab.current.click()}>
                      <Text fontSize='xs' color='#fff' fontWeight='bold'>
                        NEXT
                      </Text>
                    </Button>
                  </Flex>
                </Flex>
              </CardBody>
            </Card>
          </TabPanel>
          <TabPanel maxW='800px'>
            <Card>
              <CardHeader mb='32px'>
                <Text fontSize='lg' color={textColor} fontWeight='bold'>
                  Pricing
                </Text>
              </CardHeader>
              <CardBody>
                <Flex direction='column' w='100%'>
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
                          color='gray.400'
                          bg='#0F1535'
                          border='0.5px solid'
                          borderColor='#E2E8F04D'
                          borderRadius='15px'
                          fontSize='xs'
                          placeholder='USD'
                          color='gray.400'
                          borderRadius='15px'>
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
                  <Flex justify='space-between'>
                    <Button
                      variant='no-hover'
                      bg={bgPrevButton}
                      alignSelf='flex-end'
                      mt='24px'
                      w='100px'
                      h='35px'
                      onClick={() => socialsTab.current.click()}>
                      <Text fontSize='xs' color='#313860' fontWeight='bold'>
                        PREV
                      </Text>
                    </Button>
                    <Button
                      variant='brand'
                      alignSelf='flex-end'
                      mt='24px'
                      w='100px'
                      h='35px'>
                      <Text fontSize='xs' color='#fff' fontWeight='bold'>
                        SEND
                      </Text>
                    </Button>
                  </Flex>
                </Flex>
              </CardBody>
            </Card>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}

export default NewProduct;
