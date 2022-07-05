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
  Avatar,
  Badge,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Input,
  Select,
  Stack,
  Switch,
  Table,
  Tag,
  TagCloseButton,
  TagLabel,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
  LightMode,
  DarkMode,
} from "@chakra-ui/react";

// Images
import avatar11 from "assets/img/avatars/avatar11.png";

// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import { HSeparator } from "components/Separator/Separator";
import { Element, Link } from "react-scroll";

// Icons
import {
  AtlassianLogo,
  InvisionLogo,
  SlackLogo,
  SpotifyLogo,
} from "components/Icons/Icons";

import { AiFillDelete } from "react-icons/ai";
import { BsArrowRight, BsCircleFill, BsToggleOn } from "react-icons/bs";
import { FaCube, FaUser } from "react-icons/fa";
import { GiSmartphone } from "react-icons/gi";
import { IoIosArrowUp, IoIosRocket, IoMdNotifications } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";
import { MdPowerSettingsNew } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";

function Settings() {
  const bgActiveButton = "brand.200";
  const bgHoverLinks = "brand.200";
  const bgVerificationCard = "#0F1535";

  // sets the active button based on the current state
  const [activeButtons, setActiveButtons] = useState({
    messages: true,
    social: false,
    notifications: false,
    backup: false,
  });

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

  const [toggle, setToggle] = useState(false);

  // Creates the skills in the text area
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
      <Box w='100%'>
        {/* Buttons */}
        <Stack
          direction={{ sm: "column", lg: "row" }}
          spacing={{ sm: "8px", lg: "38px" }}
          w={{ sm: "100%", lg: null }}>
          <Button
            borderRadius='12px'
            boxShadow={
              activeButtons.messages
                ? "0px 2px 5.5px rgba(0, 0, 0, 0.06)"
                : "none"
            }
            bg={activeButtons.messages ? bgActiveButton : "transparent"}
            transition='all .5s ease'
            w={{ sm: "100%", lg: "135px" }}
            h='35px'
            _hover='none'
            _focus={{ boxShadow: "0px 2px 5.5px rgba(0, 0, 0, 0.06)" }}
            _active={{
              boxShadow: activeButtons.messages
                ? "0px 2px 5.5px rgba(0, 0, 0, 0.06)"
                : "none",
            }}
            onClick={() =>
              setActiveButtons({
                messages: true,
                social: false,
                notifications: false,
                backup: false,
              })
            }>
            <Text color='#fff' fontSize='10px' fontWeight='bold'>
              MESSAGES
            </Text>
          </Button>
          <Button
            borderRadius='12px'
            boxShadow={
              activeButtons.social
                ? "0px 2px 5.5px rgba(0, 0, 0, 0.06)"
                : "none"
            }
            bg={activeButtons.social ? bgActiveButton : "transparent"}
            transition='all .5s ease'
            w={{ sm: "100%", lg: "135px" }}
            h='35px'
            _hover='none'
            _focus={{ boxShadow: "0px 2px 5.5px rgba(0, 0, 0, 0.06)" }}
            _active={{
              boxShadow: activeButtons.social
                ? "0px 2px 5.5px rgba(0, 0, 0, 0.06)"
                : "none",
            }}
            onClick={() =>
              setActiveButtons({
                messages: false,
                social: true,
                notifications: false,
                backup: false,
              })
            }>
            <Text color='#fff' fontSize='10px' fontWeight='bold'>
              SOCIAL
            </Text>
          </Button>
          <Button
            borderRadius='12px'
            boxShadow={
              activeButtons.notifications
                ? "0px 2px 5.5px rgba(0, 0, 0, 0.06)"
                : "none"
            }
            bg={activeButtons.notifications ? bgActiveButton : "transparent"}
            transition='all .5s ease'
            w={{ sm: "100%", lg: "135px" }}
            h='35px'
            _hover='none'
            _focus={{ boxShadow: "0px 2px 5.5px rgba(0, 0, 0, 0.06)" }}
            _active={{
              boxShadow: activeButtons.notifications
                ? "0px 2px 5.5px rgba(0, 0, 0, 0.06)"
                : "none",
            }}
            onClick={() =>
              setActiveButtons({
                messages: false,
                social: false,
                notifications: true,
                backup: false,
              })
            }>
            <Text color='#fff' fontSize='10px' fontWeight='bold'>
              NOTIFICATIONS
            </Text>
          </Button>
          <Button
            borderRadius='12px'
            boxShadow={
              activeButtons.backup
                ? "0px 2px 5.5px rgba(0, 0, 0, 0.06)"
                : "none"
            }
            bg={activeButtons.backup ? bgActiveButton : "transparent"}
            transition='all .5s ease'
            w={{ sm: "100%", lg: "135px" }}
            h='35px'
            _hover='none'
            _focus={{ boxShadow: "0px 2px 5.5px rgba(0, 0, 0, 0.06)" }}
            _active={{
              boxShadow: activeButtons.backup
                ? "0px 2px 5.5px rgba(0, 0, 0, 0.06)"
                : "none",
            }}
            onClick={() =>
              setActiveButtons({
                messages: false,
                social: false,
                notifications: false,
                backup: true,
              })
            }>
            <Text color='#fff' fontSize='10px' fontWeight='bold'>
              BACKUP
            </Text>
          </Button>
        </Stack>
      </Box>
      {/* Menu */}
      <Card
        w={{ sm: "100%", lg: "262px", xl: "21%", "2xl": "23.4%" }}
        mt={{ sm: "30px", lg: "0px" }}
        position={{ lg: "fixed" }}
        top={{ lg: "180px" }}>
        <CardBody>
          <Stack direction='column' spacing='8px' w='100%' color='gray.500'>
            <Link to='profile' spy={true} smooth={true} duration={500}>
              <Button
                variant='transparent-with-icon'
                borderRadius='15px'
                _hover={{ bg: bgHoverLinks }}
                w='100%'>
                <Flex align='center' justifySelf='flex-start' w='100%'>
                  <Icon
                    as={IoIosRocket}
                    me='12px'
                    w='18px'
                    h='18px'
                    color='#fff'
                  />
                  <Text color='#fff' fontWeight='500' fontSize='xs'>
                    Profile
                  </Text>
                </Flex>
              </Button>
            </Link>
            <Link to='info' spy={true} smooth={true} duration={500}>
              <Button
                variant='transparent-with-icon'
                borderRadius='15px'
                _hover={{ bg: bgHoverLinks }}
                w='100%'>
                <Flex align='center' justifySelf='flex-start' w='100%'>
                  <Icon
                    as={IoDocumentText}
                    me='12px'
                    w='18px'
                    h='18px'
                    color='#fff'
                  />
                  <Text color='#fff' fontWeight='500' fontSize='xs'>
                    Basic Info
                  </Text>
                </Flex>
              </Button>
            </Link>
            <Link to='change-password' spy={true} smooth={true} duration={500}>
              <Button
                variant='transparent-with-icon'
                borderRadius='15px'
                _hover={{ bg: bgHoverLinks }}
                w='100%'>
                <Flex align='center' justifySelf='flex-start' w='100%'>
                  <Icon as={FaCube} me='12px' w='18px' h='18px' color='#fff' />
                  <Text color='#fff' fontWeight='500' fontSize='xs'>
                    Change Password
                  </Text>
                </Flex>
              </Button>
            </Link>
            <Link to='2fa' spy={true} smooth={true} duration={500}>
              <Button
                variant='transparent-with-icon'
                borderRadius='15px'
                _hover={{ bg: bgHoverLinks }}
                w='100%'>
                <Flex align='center' justifySelf='flex-start' w='100%'>
                  <Icon
                    as={BsToggleOn}
                    me='12px'
                    w='18px'
                    h='18px'
                    color='#fff'
                  />
                  <Text color='#fff' fontWeight='500' fontSize='xs'>
                    2FA
                  </Text>
                </Flex>
              </Button>
            </Link>
            <Link to='accounts' spy={true} smooth={true} duration={500}>
              <Button
                variant='transparent-with-icon'
                borderRadius='15px'
                _hover={{ bg: bgHoverLinks }}
                w='100%'>
                <Flex align='center' justifySelf='flex-start' w='100%'>
                  <Icon as={FaUser} me='12px' w='18px' h='18px' color='#fff' />
                  <Text color='#fff' fontWeight='500' fontSize='xs'>
                    Accounts
                  </Text>
                </Flex>
              </Button>
            </Link>
            <Link to='notifications' spy={true} smooth={true} duration={500}>
              <Button
                variant='transparent-with-icon'
                borderRadius='15px'
                _hover={{ bg: bgHoverLinks }}
                w='100%'>
                <Flex align='center' justifySelf='flex-start' w='100%'>
                  <Icon
                    as={IoMdNotifications}
                    me='12px'
                    w='18px'
                    h='18px'
                    color='#fff'
                  />
                  <Text color='#fff' fontWeight='500' fontSize='xs'>
                    Notifications
                  </Text>
                </Flex>
              </Button>
            </Link>
            <Link to='sessions' spy={true} smooth={true} duration={500}>
              <Button
                variant='transparent-with-icon'
                borderRadius='15px'
                _hover={{ bg: bgHoverLinks }}
                w='100%'>
                <Flex align='center' justifySelf='flex-start' w='100%'>
                  <Icon
                    as={MdPowerSettingsNew}
                    me='12px'
                    w='18px'
                    h='18px'
                    color='#fff'
                  />
                  <Text color='#fff' fontWeight='500' fontSize='xs'>
                    Sessions
                  </Text>
                </Flex>
              </Button>
            </Link>
            <Link to='delete-account' spy={true} smooth={true} duration={500}>
              <Button
                variant='transparent-with-icon'
                borderRadius='15px'
                _hover={{ bg: bgHoverLinks }}
                w='100%'>
                <Flex align='center' justifySelf='flex-start' w='100%'>
                  <Icon
                    as={AiFillDelete}
                    me='12px'
                    w='18px'
                    h='18px'
                    color='#fff'
                  />
                  <Text color='#fff' fontWeight='500' fontSize='xs'>
                    Delete Account
                  </Text>
                </Flex>
              </Button>
            </Link>
          </Stack>
        </CardBody>
      </Card>
      <Stack
        direction='column'
        spacing='24px'
        mt='40px'
        align={{ lg: "flex-end" }}
        justify={{ lg: "flex-end" }}
        w='100%'>
        {/* Header */}
        <Card
          w={{ sm: "100%", lg: "70%" }}
          alignSelf={{ lg: "flex-end" }}
          justifySelf={{ lg: "flex-end" }}>
          <Element id='profile' name='profile'>
            <CardBody>
              <Flex
                direction={{ sm: "column", md: "row" }}
                justify='space-between'
                align='center'
                w='100%'>
                <Flex align='center'>
                  <Avatar
                    src={avatar11}
                    w='80px'
                    h='80px'
                    me='22px'
                    borderRadius='15px'
                  />
                  <Flex direction='column'>
                    <Text color='#fff' fontWeight='bold' fontSize='lg'>
                      Mark Johnson
                    </Text>
                    <Text color='gray.400' fontWeight='500' fontSize='sm'>
                      mark@simmmple.com
                    </Text>
                  </Flex>
                </Flex>
                <Flex
                  align='center'
                  alignSelf={{ sm: "flex-start", lg: null }}
                  mt={{ sm: "16px", lg: null }}
                  ms={{ sm: "6px", lg: null }}>
                  <Text color='#fff' fontWeight='500' me='14px' fontSize='sm'>
                    Switch to {toggle ? "invisible" : "visible"}
                  </Text>
                  <DarkMode>
                    <Switch
                      colorScheme='brand'
                      onChange={() => setToggle(!toggle)}
                    />
                  </DarkMode>
                </Flex>
              </Flex>
            </CardBody>
          </Element>
        </Card>
        {/* Basic Info Card*/}
        <Card
          w={{ sm: "100%", lg: "70%" }}
          alignSelf='flex-end'
          justifySelf='flex-end'>
          <Element id='info' name='info'>
            <CardHeader mb='40px'>
              <Text color='#fff' fontSize='lg' fontWeight='bold'>
                Basic Info
              </Text>
            </CardHeader>
            <CardBody>
              <Stack direction='column' spacing='20px' w='100%'>
                <Stack direction='row' spacing={{ sm: "24px", lg: "30px" }}>
                  <FormControl>
                    <FormLabel
                      fontWeight='bold'
                      color='#fff'
                      fontSize='xs'
                      mb='10px'>
                      First Name
                    </FormLabel>
                    <Input
                      border='.5px solid'
                      borderColor='rgba(226, 232, 240, 0.3)'
                      _hover='none'
                      color='#fff'
                      bg='#0F1535'
                      borderRadius='15px'
                      placeholder='eg. Michael'
                      fontSize='xs'
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel
                      fontWeight='bold'
                      color='#fff'
                      fontSize='xs'
                      mb='10px'>
                      Last Name
                    </FormLabel>
                    <Input
                      border='.5px solid'
                      borderColor='rgba(226, 232, 240, 0.3)'
                      _hover='none'
                      color='#fff'
                      bg='#0F1535'
                      borderRadius='15px'
                      placeholder='eg. Jackson'
                      fontSize='xs'
                    />
                  </FormControl>
                </Stack>
                <Stack
                  direction={{ sm: "column", lg: "row" }}
                  spacing={{ sm: "24px", lg: "30px" }}>
                  <FormControl w='40%'>
                    <FormLabel
                      fontWeight='bold'
                      color='#fff'
                      fontSize='xs'
                      mb='10px'>
                      I'm
                    </FormLabel>
                    <Select
                      border='.5px solid'
                      borderColor='rgba(226, 232, 240, 0.3)'
                      _hover='none'
                      color='#fff'
                      bg='#0F1535'
                      borderRadius='15px'
                      placeholder='Male'
                      color='gray.400'
                      fontSize='xs'>
                      <option value='option2'>Female</option>
                    </Select>
                  </FormControl>
                  <Stack
                    direction='row'
                    spacing={{ sm: "24px", lg: "30px" }}
                    w='100%'
                    align='flex-end'>
                    <FormControl minW={{ sm: "35%", lg: null }}>
                      <FormLabel
                        fontWeight='bold'
                        color='#fff'
                        fontSize='xs'
                        mb='10px'>
                        Birth Date
                      </FormLabel>
                      <Select
                        border='.5px solid'
                        borderColor='rgba(226, 232, 240, 0.3)'
                        _hover='none'
                        color='#fff'
                        bg='#0F1535'
                        borderRadius='15px'
                        color='gray.400'
                        fontSize='sm'
                        fontSize='xs'>
                        <option value='option1'>January</option>
                        <option value='option2'>February</option>
                        <option value='option3'>March</option>
                        <option value='option4'>April</option>
                        <option value='option5'>May</option>
                        <option value='option6'>June</option>
                        <option value='option7'>July</option>
                        <option value='option8'>August</option>
                        <option value='option9'>September</option>
                        <option value='option10'>October</option>
                        <option value='option11'>November</option>
                        <option value='option12'>December</option>
                      </Select>
                    </FormControl>
                    <FormControl>
                      <Select
                        border='.5px solid'
                        borderColor='rgba(226, 232, 240, 0.3)'
                        _hover='none'
                        color='#fff'
                        bg='#0F1535'
                        borderRadius='15px'
                        color='gray.400'
                        placeholder='1'
                        fontSize='xs'>
                        <option value='option2'>2</option>
                        <option value='option3'>3</option>
                        <option value='option4'>4</option>
                        <option value='option5'>5</option>
                        <option value='option6'>6</option>
                        <option value='option7'>7</option>
                        <option value='option8'>-</option>
                      </Select>
                    </FormControl>
                    <FormControl>
                      <Select
                        border='.5px solid'
                        borderColor='rgba(226, 232, 240, 0.3)'
                        _hover='none'
                        color='#fff'
                        bg='#0F1535'
                        borderRadius='15px'
                        color='gray.400'
                        placeholder='2010'
                        fontSize='xs'>
                        <option value='option2'>2011</option>
                        <option value='option3'>2012</option>
                        <option value='option4'>2013</option>
                        <option value='option5'>2014</option>
                        <option value='option6'>2015</option>
                        <option value='option7'>2016</option>
                        <option value='option8'>2018</option>
                        <option value='option8'>2019</option>
                        <option value='option8'>2020</option>
                        <option value='option8'>2021</option>
                      </Select>
                    </FormControl>
                  </Stack>
                </Stack>
                <Stack direction='row' spacing={{ sm: "24px", lg: "30px" }}>
                  <FormControl>
                    <FormLabel
                      fontWeight='bold'
                      color='#fff'
                      fontSize='xs'
                      mb='10px'>
                      Email Address
                    </FormLabel>
                    <Input
                      border='.5px solid'
                      borderColor='rgba(226, 232, 240, 0.3)'
                      _hover='none'
                      color='#fff'
                      bg='#0F1535'
                      borderRadius='15px'
                      placeholder='eg. esthera@address.com'
                      fontSize='xs'
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel
                      fontWeight='bold'
                      color='#fff'
                      fontSize='xs'
                      mb='10px'>
                      Confirmation Email
                    </FormLabel>
                    <Input
                      border='.5px solid'
                      borderColor='rgba(226, 232, 240, 0.3)'
                      _hover='none'
                      color='#fff'
                      bg='#0F1535'
                      borderRadius='15px'
                      placeholder='eg. esthera@address.com'
                      fontSize='xs'
                    />
                  </FormControl>
                </Stack>
                <Stack direction='row' spacing={{ sm: "24px", lg: "30px" }}>
                  <FormControl>
                    <FormLabel
                      fontWeight='bold'
                      color='#fff'
                      fontSize='xs'
                      mb='10px'>
                      Your Location
                    </FormLabel>
                    <Input
                      border='.5px solid'
                      borderColor='rgba(226, 232, 240, 0.3)'
                      _hover='none'
                      color='#fff'
                      bg='#0F1535'
                      borderRadius='15px'
                      placeholder='eg. Bucharest'
                      fontSize='xs'
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel
                      fontWeight='bold'
                      color='#fff'
                      fontSize='xs'
                      mb='10px'>
                      Phone Number
                    </FormLabel>
                    <Input
                      border='.5px solid'
                      borderColor='rgba(226, 232, 240, 0.3)'
                      _hover='none'
                      color='#fff'
                      bg='#0F1535'
                      borderRadius='15px'
                      placeholder='eg. +40 941 353 292'
                      fontSize='xs'
                    />
                  </FormControl>
                </Stack>
                <Stack
                  direction={{ sm: "column", lg: "row" }}
                  spacing={{ sm: "24px", lg: "30px" }}>
                  <FormControl>
                    <FormLabel
                      fontWeight='bold'
                      color='#fff'
                      fontSize='xs'
                      mb='10px'>
                      Language
                    </FormLabel>
                    <Select
                      border='.5px solid'
                      borderColor='rgba(226, 232, 240, 0.3)'
                      _hover='none'
                      color='#fff'
                      bg='#0F1535'
                      borderRadius='15px'
                      placeholder='English'
                      color='gray.400'
                      fontSize='xs'>
                      <option value='option1'>French</option>
                      <option value='option2'>Spanish</option>
                      <option value='option3'>Romanian</option>
                    </Select>
                  </FormControl>
                  <FormControl>
                    <FormLabel
                      fontWeight='bold'
                      color='#fff'
                      fontSize='xs'
                      mb='10px'>
                      Skills
                    </FormLabel>
                    <Flex
                      direction='row'
                      p='12px'
                      wrap='wrap'
                      borderRadius='15px'
                      _focus={{ borderColor: "brand.200" }}
                      minH='60px'
                      cursor='text'
                      border='.5px solid'
                      borderColor='rgba(226, 232, 240, 0.3)'
                      _hover='none'
                      color='#fff'>
                      {skills.map((skill, index) => {
                        return (
                          <Tag
                            minW='80px'
                            fontSize='xs'
                            h='25px'
                            mb='6px'
                            me='6px'
                            key={skill.id}
                            borderRadius='12px'
                            variant='solid'
                            bg='brand.200'
                            key={index}>
                            <TagLabel w='100%'>{skill.name}</TagLabel>
                            <TagCloseButton
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
                        borderRadius='15px'
                        border='none'
                        _focus='none'
                        p='0px'
                        onKeyDown={(e) => keyPress(e)}
                        fontSize='xs'
                      />
                    </Flex>
                  </FormControl>
                </Stack>
              </Stack>
            </CardBody>
          </Element>
        </Card>
        {/* Change Password Card */}
        <Card
          w={{ sm: "100%", lg: "70%" }}
          alignSelf='flex-end'
          justifySelf='flex-end'>
          <Element id='change-password' name='change-password'>
            <CardHeader mb='40px'>
              <Text color='#fff' fontSize='lg' color='#fff' fontWeight='bold'>
                Change Password
              </Text>
            </CardHeader>
            <CardBody>
              <Stack direction='column' spacing='20px' w='100%'>
                <FormControl>
                  <FormLabel
                    fontWeight='bold'
                    color='#fff'
                    fontSize='xs'
                    mb='10px'>
                    Current Password
                  </FormLabel>
                  <Input
                    border='.5px solid'
                    borderColor='rgba(226, 232, 240, 0.3)'
                    _hover='none'
                    color='#fff'
                    bg='#0F1535'
                    borderRadius='15px'
                    placeholder='Current Password'
                    fontSize='xs'
                  />
                </FormControl>
                <FormControl>
                  <FormLabel
                    fontWeight='bold'
                    color='#fff'
                    fontSize='xs'
                    mb='10px'>
                    New Password
                  </FormLabel>
                  <Input
                    border='.5px solid'
                    borderColor='rgba(226, 232, 240, 0.3)'
                    _hover='none'
                    color='#fff'
                    bg='#0F1535'
                    borderRadius='15px'
                    placeholder='New Password'
                    fontSize='xs'
                  />
                </FormControl>
                <FormControl>
                  <FormLabel
                    fontWeight='bold'
                    color='#fff'
                    fontSize='xs'
                    mb='10px'>
                    Confirm New Password
                  </FormLabel>
                  <Input
                    border='.5px solid'
                    borderColor='rgba(226, 232, 240, 0.3)'
                    _hover='none'
                    color='#fff'
                    bg='#0F1535'
                    borderRadius='15px'
                    placeholder='Confirm New Password'
                    fontSize='xs'
                  />
                </FormControl>
                <Flex direction='column'>
                  <Text
                    color='#fff'
                    fontWeight='bold'
                    fontSize='lg'
                    mb='4px'
                    mt='40px'>
                    Password Requirements
                  </Text>
                  <Text color='gray.400' fontWeight='400' fontSize='sm'>
                    Please follow this guide for a strong password.
                  </Text>
                </Flex>
                <Flex
                  direction={{ sm: "column", lg: "row" }}
                  justify='space-between'
                  w='100%'>
                  <Stack
                    direction='column'
                    spacing='6px'
                    mb={{ sm: "12px", lg: "0px" }}>
                    <Flex align='center'>
                      <Icon
                        as={BsCircleFill}
                        w='6px'
                        h='6px'
                        color='#fff'
                        me='6px'
                      />
                      <Text color='gray.500' fontWeight='500' fontSize='xs'>
                        One special characters
                      </Text>
                    </Flex>
                    <Flex align='center'>
                      <Icon
                        as={BsCircleFill}
                        w='6px'
                        h='6px'
                        color='gray.500'
                        me='6px'
                      />
                      <Text color='gray.500' fontWeight='500' fontSize='xs'>
                        Min 6 characters
                      </Text>
                    </Flex>
                    <Flex align='center'>
                      <Icon
                        as={BsCircleFill}
                        w='6px'
                        h='6px'
                        color='gray.500'
                        me='6px'
                      />
                      <Text color='gray.500' fontWeight='500' fontSize='xs'>
                        One number (2 are recommended)
                      </Text>
                    </Flex>
                    <Flex align='center'>
                      <Icon
                        as={BsCircleFill}
                        w='6px'
                        h='6px'
                        color='gray.500'
                        me='6px'
                      />
                      <Text color='gray.500' fontWeight='500' fontSize='xs'>
                        Change it often
                      </Text>
                    </Flex>
                  </Stack>
                  <Button
                    variant='brand'
                    w='150px'
                    h='35px'
                    alignSelf='flex-end'>
                    <Text fontSize='10px' color='#fff' fontWeight='bold'>
                      UPDATE PASSWORD
                    </Text>
                  </Button>
                </Flex>
              </Stack>
            </CardBody>
          </Element>
        </Card>
        {/* Two Factor Auth Card */}
        <Card
          w={{ sm: "100%", lg: "70%" }}
          alignSelf='flex-end'
          justifySelf='flex-end'>
          <Element id='2fa' name='2fa'>
            <CardHeader mb='32px'>
              <Flex justify='space-between' w='100%'>
                <Text fontSize='lg' fontWeight='bold' color='#fff'>
                  Two-Factor Authentication
                </Text>
                <Badge
                  colorScheme='green'
                  borderRadius='12px'
                  p='12px'
                  alignSelf={{ sm: "flex-start", lg: null }}>
                  ENABLED
                </Badge>
              </Flex>
            </CardHeader>
            <CardBody>
              <Stack direction='column' spacing='22px' w='100%'>
                <Flex
                  direction={{ sm: "column", md: "row" }}
                  justify='space-between'
                  align='center'>
                  <Text
                    color='gray.400'
                    fontSize='sm'
                    alignSelf={{ sm: "center", lg: null }}
                    mb={{ sm: "12px", lg: null }}>
                    Security keys
                  </Text>
                  <Flex align='center'>
                    <Text
                      color='gray.500'
                      fontWeight='500'
                      fontSize='sm'
                      me='28px'>
                      No Security keys
                    </Text>
                    <Button variant='brand' w='90px' h='35px' fontSize='10px'>
                      ADD
                    </Button>
                  </Flex>
                </Flex>
                <HSeparator />
                <Flex
                  direction={{ sm: "column", md: "row" }}
                  justify='space-between'
                  align='center'>
                  <Text
                    color='gray.400'
                    fontSize='sm'
                    alignSelf={{ sm: "center", lg: null }}
                    mb={{ sm: "12px", lg: null }}>
                    SMS Number
                  </Text>
                  <Flex align='center'>
                    <Text
                      color='gray.500'
                      fontWeight='500'
                      fontSize='sm'
                      me='28px'>
                      +40 941 264 232
                    </Text>
                    <Button variant='brand' w='90px' h='35px' fontSize='10px'>
                      EDIT
                    </Button>
                  </Flex>
                </Flex>
                <HSeparator />
                <Flex
                  direction={{ sm: "column", md: "row" }}
                  justify='space-between'
                  align='center'>
                  <Text
                    color='gray.400'
                    fontSize='sm'
                    alignSelf={{ sm: "center", lg: null }}
                    mb={{ sm: "12px", lg: null }}>
                    Authenticator App
                  </Text>
                  <Flex align='center'>
                    <Text
                      color='gray.500'
                      fontWeight='500'
                      fontSize='sm'
                      me='28px'>
                      Not Configured
                    </Text>
                    <Button variant='brand' w='90px' h='35px' fontSize='10px'>
                      SET UP
                    </Button>
                  </Flex>
                </Flex>
              </Stack>
            </CardBody>
          </Element>
        </Card>
        {/* Accounts Card */}
        <Card
          w={{ sm: "100%", lg: "70%" }}
          alignSelf='flex-end'
          justifySelf='flex-end'>
          <Element to='accounts' name='accounts'>
            <CardHeader mb='40px'>
              <Flex direction='column'>
                <Text color='#fff' fontSize='lg' fontWeight='bold' mb='4px'>
                  Accounts
                </Text>
                <Text color='gray.400' fontWeight='400' fontSize='sm'>
                  Here you can setup and manage your integration settings
                </Text>
              </Flex>
            </CardHeader>
            <CardBody>
              <Stack direction='column' spacing='22px' w='100%'>
                <Flex direction='column'>
                  <Flex justify='space-between' mb='16px'>
                    <Flex align='center'>
                      <Icon as={SlackLogo} w='34px' h='34px' me='14px' />
                      <Flex direction='column'>
                        <Text fontSize='md' color='#fff' fontWeight='bold'>
                          Slack
                        </Text>
                        <Flex align='center'>
                          <Text
                            color='gray.400'
                            fontWeight='500'
                            fontSize='xs'
                            me='6px'>
                            Show Less
                          </Text>
                          <Icon as={IoIosArrowUp} color='gray.400' />
                        </Flex>
                      </Flex>
                    </Flex>
                    <Flex align='center'>
                      <Text
                        color='gray.500'
                        fontWeight='500'
                        me='17px'
                        fontSize='xs'>
                        Enabled
                      </Text>
                      <DarkMode>
                        <Switch colorScheme='brand' defaultIsChecked />
                      </DarkMode>
                    </Flex>
                  </Flex>
                  <Stack direction='column' w='100%' spacing='18px' ps='50px'>
                    <Text color='gray.400' fontWeight='400' fontSize='sm'>
                      You haven't added your Slack yet or you aren't authorized.
                      Please add our Slack Bot to your account by clicking on
                      here. When you've added the bot, send your verification
                      code that you have received.
                    </Text>
                    <Flex
                      direction={{ sm: "column", md: "row" }}
                      justify='space-between'
                      bg={bgVerificationCard}
                      borderRadius='12px'
                      w='100%'
                      align='center'
                      p='10px 12px'>
                      <Text
                        color='gray.500'
                        fontSize='sm'
                        mb={{ sm: "8px", lg: null }}>
                        Verification Code
                      </Text>
                      <Tooltip
                        hasArrow
                        label='Copy!'
                        bg='brand.200'
                        placement='top'>
                        <Input
                          border='.5px solid'
                          borderColor='rgba(226, 232, 240, 0.3)'
                          _hover='none'
                          color='#fff'
                          bg='#0F1535'
                          borderRadius='15px'
                          value='1172913'
                          bg='#fff'
                          maxW='200px'
                          borderRadius='12px'
                          color='gray.400'
                        />
                      </Tooltip>
                    </Flex>
                    <Flex
                      direction={{ sm: "column", md: "row" }}
                      align='flex-start'
                      justify='space-between'
                      bg={bgVerificationCard}
                      borderRadius='12px'
                      w='100%'
                      align='center'
                      p='10px 12px'>
                      <Text color='gray.500' fontSize='sm'>
                        Connected Account
                      </Text>
                      <Flex
                        align='center'
                        direction={{ sm: "column", md: "row" }}
                        justify={{ sm: "center", lg: null }}>
                        <Text
                          color='gray.500'
                          fontSize='sm'
                          me='18px'
                          my={{ sm: "6px", lg: null }}>
                          hello@microsoft-ui.com
                        </Text>
                        <LightMode>
                          <Button
                            variant='solid'
                            colorScheme='red'
                            w='100px'
                            h='35px'
                            fontSize='10px'>
                            DELETE
                          </Button>
                        </LightMode>
                      </Flex>
                    </Flex>
                  </Stack>
                </Flex>
                <HSeparator />
                <Flex justify='space-between'>
                  <Flex align='center'>
                    <Icon as={SpotifyLogo} w='34px' h='34px' me='14px' />
                    <Flex direction='column'>
                      <Text fontSize='md' color='#fff' fontWeight='bold'>
                        Spotify
                      </Text>
                      <Text color='gray.400' fontWeight='400' fontSize='xs'>
                        Music
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex align='center'>
                    <Text
                      color='gray.500'
                      fontWeight='500'
                      me='17px'
                      fontSize='xs'>
                      Enabled
                    </Text>
                    <DarkMode>
                      <Switch colorScheme='brand' defaultIsChecked />
                    </DarkMode>
                  </Flex>
                </Flex>
                <HSeparator />
                <Flex justify='space-between'>
                  <Flex align='center'>
                    <Icon as={AtlassianLogo} w='34px' h='34px' me='14px' />
                    <Flex direction='column'>
                      <Text fontSize='md' color='#fff' fontWeight='bold'>
                        Atlassian
                      </Text>
                      <Text color='gray.400' fontWeight='400' fontSize='xs'>
                        Payment Vendor
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex align='center'>
                    <Text
                      color='gray.500'
                      fontWeight='500'
                      me='17px'
                      fontSize='xs'>
                      Enabled
                    </Text>
                    <DarkMode>
                      <Switch colorScheme='brand' defaultIsChecked />
                    </DarkMode>
                  </Flex>
                </Flex>
                <HSeparator />
                <Flex justify='space-between'>
                  <Flex align='center'>
                    <Icon as={InvisionLogo} w='34px' h='34px' me='14px' />
                    <Flex direction='column'>
                      <Text fontSize='md' color='#fff' fontWeight='bold'>
                        Invision
                      </Text>
                      <Text color='gray.400' fontWeight='400' fontSize='xs'>
                        Design Better
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex align='center'>
                    <DarkMode>
                      <Switch colorScheme='brand' defaultIsChecked />
                    </DarkMode>
                  </Flex>
                </Flex>
              </Stack>
            </CardBody>
          </Element>
        </Card>
        {/* Notifications Card */}
        <Card
          pb='0px'
          w={{ sm: "100%", lg: "70%" }}
          alignSelf='flex-end'
          justifySelf='flex-end'>
          <Element to='notifications' name='notifications'>
            <CardHeader mb='40px'>
              <Flex direction='column'>
                <Text color='#fff' fontSize='lg' fontWeight='bold' mb='4px'>
                  Notifications
                </Text>
                <Text color='gray.400' fontWeight='400' fontSize='sm'>
                  Choose how you receive notifications. These notification
                  settings apply to the things you’re watching.
                </Text>
              </Flex>
            </CardHeader>
            <CardBody overflowX={{ sm: "scroll", lg: "hidden" }}>
              <Table>
                <Thead>
                  <Tr>
                    <Th
                      color='gray.400'
                      fontSize='sm'
                      borderColor='gray.500'
                      borderColor='gray.500'
                      fontWeight='500'
                      ps='0px'
                      textTransform='capitalise'>
                      Activity
                    </Th>
                    <Th
                      color='gray.400'
                      fontSize='sm'
                      borderColor='gray.500'
                      fontWeight='500'
                      textTransform='capitalise'>
                      Email
                    </Th>
                    <Th
                      color='gray.400'
                      fontSize='sm'
                      borderColor='gray.500'
                      fontWeight='500'
                      textTransform='capitalise'>
                      Push
                    </Th>
                    <Th
                      color='gray.400'
                      fontSize='sm'
                      borderColor='gray.500'
                      fontWeight='500'
                      textTransform='capitalise'>
                      SMS
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td borderColor='gray.500' ps='0px' minW={{ sm: "300px" }}>
                      <Flex direction='column'>
                        <Text
                          color='#fff'
                          fontWeight='500'
                          fontSize='sm'
                          mb='4px'>
                          Mentions
                        </Text>
                        <Text color='gray.400' fontSize='xs' fontWeight='400'>
                          Notify when another user mentions you in a comment
                        </Text>
                      </Flex>
                    </Td>
                    <Td borderColor='gray.500'>
                      <DarkMode>
                        <Switch colorScheme='brand' />
                      </DarkMode>
                    </Td>
                    <Td borderColor='gray.500'>
                      <DarkMode>
                        <Switch defaultIsChecked colorScheme='brand' />
                      </DarkMode>
                    </Td>
                    <Td borderColor='gray.500'>
                      <DarkMode>
                        <Switch defaultIsChecked colorScheme='brand' />
                      </DarkMode>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td borderColor='gray.500' ps='0px' minW={{ sm: "300px" }}>
                      <Flex direction='column'>
                        <Text
                          color='#fff'
                          fontWeight='500'
                          fontSize='sm'
                          mb='4px'>
                          Comments
                        </Text>
                        <Text color='gray.400' fontSize='xs' fontWeight='400'>
                          Notify when another user comments your item.
                        </Text>
                      </Flex>
                    </Td>
                    <Td borderColor='gray.500'>
                      <DarkMode>
                        <Switch defaultIsChecked colorScheme='brand' />
                      </DarkMode>
                    </Td>
                    <Td borderColor='gray.500'>
                      <DarkMode>
                        <Switch defaultIsChecked colorScheme='brand' />
                      </DarkMode>
                    </Td>
                    <Td borderColor='gray.500'>
                      <DarkMode>
                        <Switch colorScheme='brand' />
                      </DarkMode>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td borderColor='gray.500' ps='0px' minW={{ sm: "300px" }}>
                      <Flex direction='column'>
                        <Text
                          color='#fff'
                          fontWeight='500'
                          fontSize='sm'
                          mb='4px'>
                          Follows
                        </Text>
                        <Text color='gray.400' fontSize='xs' fontWeight='400'>
                          Notify when another user follows you.
                        </Text>
                      </Flex>
                    </Td>
                    <Td borderColor='gray.500'>
                      <DarkMode>
                        <Switch defaultIsChecked colorScheme='brand' />
                      </DarkMode>
                    </Td>
                    <Td borderColor='gray.500'>
                      <DarkMode>
                        <Switch colorScheme='brand' />
                      </DarkMode>
                    </Td>
                    <Td borderColor='gray.500'>
                      <DarkMode>
                        <Switch defaultIsChecked colorScheme='brand' />
                      </DarkMode>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td
                      borderColor='gray.500'
                      border='none'
                      ps='0px'
                      py='24px'
                      minW={{ sm: "300px" }}>
                      <Flex direction='column'>
                        <Text
                          color='#fff'
                          fontWeight='500'
                          fontSize='xs'
                          mb='4px'>
                          Log in from a new device
                        </Text>
                      </Flex>
                    </Td>
                    <Td borderColor='gray.500' border='none'>
                      <DarkMode>
                        <Switch colorScheme='brand' />
                      </DarkMode>
                    </Td>
                    <Td borderColor='gray.500' border='none'>
                      <DarkMode>
                        <Switch defaultIsChecked colorScheme='brand' />
                      </DarkMode>
                    </Td>
                    <Td borderColor='gray.500' border='none'>
                      <DarkMode>
                        <Switch colorScheme='brand' />
                      </DarkMode>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </CardBody>
          </Element>
        </Card>
        {/* Sessions Card */}
        <Card
          w={{ sm: "100%", lg: "70%" }}
          alignSelf='flex-end'
          justifySelf='flex-end'>
          <Element id='sessions' name='sessions'>
            <CardHeader mb='40px'>
              <Flex direction='column'>
                <Text
                  color='#fff'
                  fontSize='lg'
                  fontWeight='bold'
                  color='#fff'
                  mb='4px'>
                  Sessions
                </Text>
                <Text color='gray.400' fontWeight='400' fontSize='sm'>
                  This is a list of devices that have logged into your account.
                  Remove those that you do not recognize.
                </Text>
              </Flex>
            </CardHeader>
            <CardBody>
              <Stack direction='column' spacing='18px' w='100%'>
                <Flex
                  direction={{ sm: "column", md: "row" }}
                  justify='space-between'
                  w='100%'>
                  <Flex align='center'>
                    <Icon
                      as={RiComputerLine}
                      me='30px'
                      w='28px'
                      h='28px'
                      color='gray.400'
                    />
                    <Flex direction='column' mb={{ sm: "8px", lg: null }}>
                      <Text color='#fff' fontWeight='500' fontSize='sm'>
                        Bucharest 68.133.163.201
                      </Text>
                      <Text color='gray.400' fontSize='xs' fontWeight='500'>
                        Your current session
                      </Text>
                    </Flex>
                  </Flex>
                  <Stack
                    direction='row'
                    spacing='24px'
                    align='center'
                    alignSelf={{ sm: "flex-end", lg: null }}
                    minW={{ lg: "280px" }}>
                    <LightMode>
                      <Badge colorScheme='green' borderRadius='12px' p='12px'>
                        ACTIVE
                      </Badge>
                    </LightMode>
                    <Text color='gray.400' fontSize='md' fontWeight='500'>
                      EU
                    </Text>
                    <Button variant='transparent-with-icon' color='brand.200'>
                      <Flex
                        align='center'
                        color='brand.200'
                        w='100%'
                        fontSize='sm'>
                        <Text
                          me='6px'
                          transition='all .3s ease'
                          _hover={{ me: "14px" }}
                          fontSize='xs'
                          color='#01B574'>
                          See more
                        </Text>
                        <Icon
                          as={BsArrowRight}
                          color='#01B574'
                          w='12px'
                          h='12px'
                          transition='all .3s ease'
                          _hover={{ transform: "translateX(50%)" }}
                        />
                      </Flex>
                    </Button>
                  </Stack>
                </Flex>
                <HSeparator />
                <Flex
                  direction={{ sm: "column", md: "row" }}
                  justify='space-between'
                  w='100%'>
                  <Flex align='center'>
                    <Icon
                      as={RiComputerLine}
                      me='30px'
                      w='28px'
                      h='28px'
                      color='gray.400'
                    />
                    <Flex direction='column'>
                      <Text color='#fff' fontWeight='500' fontSize='sm'>
                        Chrome on macOS
                      </Text>
                    </Flex>
                  </Flex>
                  <Stack
                    direction='row'
                    spacing='24px'
                    align='center'
                    alignSelf={{ sm: "flex-end", lg: null }}
                    minW={{ lg: "185px" }}>
                    <Text color='gray.400' fontSize='md' fontWeight='500'>
                      US
                    </Text>
                    <Button variant='transparent-with-icon' color='brand.200'>
                      <Flex
                        align='center'
                        color='brand.200'
                        w='100%'
                        fontSize='sm'>
                        <Text
                          me='6px'
                          transition='all .3s ease'
                          _hover={{ me: "14px" }}
                          fontSize='xs'
                          color='#01B574'>
                          See more
                        </Text>
                        <Icon
                          as={BsArrowRight}
                          color='#01B574'
                          w='12px'
                          h='12px'
                          transition='all .3s ease'
                          _hover={{ transform: "translateX(50%)" }}
                        />
                      </Flex>
                    </Button>
                  </Stack>
                </Flex>
                <HSeparator />
                <Flex
                  direction={{ sm: "column", md: "row" }}
                  justify='space-between'
                  w='100%'>
                  <Flex align='center'>
                    <Icon
                      as={GiSmartphone}
                      me='30px'
                      w='28px'
                      h='28px'
                      color='gray.400'
                    />
                    <Flex direction='column'>
                      <Text color='#fff' fontWeight='500' fontSize='sm'>
                        Safari on iPhone
                      </Text>
                    </Flex>
                  </Flex>
                  <Stack
                    direction='row'
                    spacing='24px'
                    align='center'
                    alignSelf={{ sm: "flex-end", lg: null }}
                    justifySelf='flex-end'
                    minW={{ lg: "185px" }}>
                    <Text color='gray.400' fontSize='md' fontWeight='500'>
                      US
                    </Text>
                    <Button variant='transparent-with-icon' color='brand.200'>
                      <Flex
                        align='center'
                        color='brand.200'
                        w='100%'
                        fontSize='sm'>
                        <Text
                          me='6px'
                          transition='all .3s ease'
                          _hover={{ me: "14px" }}
                          fontSize='xs'
                          color='#01B574'>
                          See more
                        </Text>
                        <Icon
                          as={BsArrowRight}
                          color='#01B574'
                          w='12px'
                          h='12px'
                          transition='all .3s ease'
                          _hover={{ transform: "translateX(50%)" }}
                        />
                      </Flex>
                    </Button>
                  </Stack>
                </Flex>
              </Stack>
            </CardBody>
          </Element>
        </Card>
        {/* Delete Account Card */}
        <Card
          w={{ sm: "100%", lg: "70%" }}
          alignSelf='flex-end'
          justifySelf='flex-end'>
          <Element id='delete-account' name='delete-account'>
            <CardHeader mb='40px'>
              <Flex direction='column'>
                <Text color='#fff' fontSize='lg' fontWeight='bold' mb='4px'>
                  Delete Account
                </Text>
                <Text color='gray.400' fontWeight='500' fontSize='sm'>
                  Once you delete your account, there is no going back. Please
                  be certain.
                </Text>
              </Flex>
            </CardHeader>
            <CardBody>
              <Flex
                direction={{ sm: "column", md: "row" }}
                justify='space-between'
                align='start'
                w='100%'>
                <Flex align='center' mb={{ sm: "16px", lg: null }}>
                  <DarkMode>
                    <Switch colorScheme='brand' me='22px' />
                  </DarkMode>
                  <Flex direction='column'>
                    <Text fontSize='sm' color='#fff' mb='4px' color='#fff'>
                      Confirm
                    </Text>
                    <Text color='gray.400' fontWeight='regular' fontSize='xs'>
                      I want to delete my account.
                    </Text>
                  </Flex>
                </Flex>
                <Flex align='center'>
                  <LightMode>
                    <Button
                      variant='outline'
                      colorScheme='gray'
                      color='#fff'
                      w='120px'
                      h='35px'
                      fontSize='10px'
                      me='14px'>
                      DEACTIVATE
                    </Button>
                  </LightMode>
                  <LightMode>
                    <Button
                      variant='solid'
                      colorScheme='red'
                      w='150px'
                      h='35px'
                      fontSize='10px'>
                      DELETE ACCOUNT
                    </Button>
                  </LightMode>
                </Flex>
              </Flex>
            </CardBody>
          </Element>
        </Card>
      </Stack>
    </Flex>
  );
}

export default Settings;
