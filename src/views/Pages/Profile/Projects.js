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

import React, { useReducer } from "react";

// Chakra imports
import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
// Assets
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar11 from "assets/img/avatars/avatar11.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";
import avatar4 from "assets/img/avatars/avatar4.png";
import avatar7 from "assets/img/avatars/avatar7.png";
// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import { HSeparator } from "components/Separator/Separator";
import IconBox from "components/Icons/IconBox";

// Icons
import {
  AdobeWhiteIcon,
  AtlassianWhiteIcon,
  InvisionWhiteIcon,
  SlackWhiteIcon,
  SpotifyWhiteIcon,
} from "components/Icons/Icons";
import { BsPlus } from "react-icons/bs";
import { FaCube, FaPencilAlt, FaPenFancy } from "react-icons/fa";
import { IoDocumentsSharp, IoEllipsisVerticalSharp } from "react-icons/io5";

// This reducer changes the active button based on the current state

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

function Projects() {
  const [state, dispatch] = useReducer(reducer, {
    overview: false,
    teams: false,
    projects: true,
  });

  // Ellipsis modals
  const {
    isOpen: isOpen1,
    onOpen: onOpen1,
    onClose: onClose1,
  } = useDisclosure();

  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();

  const {
    isOpen: isOpen3,
    onOpen: onOpen3,
    onClose: onClose3,
  } = useDisclosure();

  const {
    isOpen: isOpen4,
    onOpen: onOpen4,
    onClose: onClose4,
  } = useDisclosure();

  const {
    isOpen: isOpen5,
    onOpen: onOpen5,
    onClose: onClose5,
  } = useDisclosure();

  const {
    isOpen: isOpen6,
    onOpen: onOpen6,
    onClose: onClose6,
  } = useDisclosure();

  const {
    isOpen: isOpen7,
    onOpen: onOpen7,
    onClose: onClose7,
  } = useDisclosure();

  const {
    isOpen: isOpen8,
    onOpen: onOpen8,
    onClose: onClose8,
  } = useDisclosure();

  return (
    <Flex direction='column' mt={{ sm: "150px", md: "100px" }}>
      <Box
        mb='30px'
        borderRadius='15px'
        px='0px'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        align='center'>
        <Box
          borderRadius='15px'
          px='0px'
          display='flex'
          flexDirection='column'
          justifyContent='center'
          align='center'>
          {/* Header */}
          <Card
            direction={{ sm: "column", md: "row" }}
            mx='auto'
            maxH='330px'
            w={{ sm: "90%", xl: "100%" }}
            justifyContent={{ sm: "center", md: "space-between" }}
            align='center'
            p='24px'
            borderRadius='20px'>
            <Flex align='center' direction={{ sm: "column", md: "row" }}>
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
                    <Icon h='12px' w='12px' color='#fff' as={FaPencilAlt} />
                  </AvatarBadge>
                </Avatar>
                <Flex direction='column' maxWidth='100%' my={{ sm: "14px" }}>
                  <Text
                    fontSize={{ sm: "lg", lg: "xl" }}
                    color='#fff'
                    fontWeight='bold'
                    ms={{ sm: "8px", md: "0px" }}>
                    Mark Johnson
                  </Text>
                  <Text fontSize={{ sm: "sm", md: "md" }} color='gray.400'>
                    mark@simmmple.com
                  </Text>
                </Flex>
              </Flex>
              <Flex
                direction={{ sm: "column", lg: "row" }}
                w={{ sm: "100%", md: "50%", lg: "auto" }}>
                <Button
                  borderRadius='12px'
                  transition='background .3s ease'
                  bg={state.overview ? "brand.200" : "transparent"}
                  _hover={{
                    bg: "brand.200",
                  }}
                  _active={{
                    bg: "brand.200",
                  }}
                  me={{ base: "none", lg: "20px" }}
                  leftIcon={<Icon color='white' as={FaCube} me='6px' />}
                  onClick={() =>
                    dispatch({ type: "SWITCH_ACTIVE", payload: "overview" })
                  }
                  minW='135px'>
                  <Text fontSize='xs' color='#fff' fontWeight='bold'>
                    OVERVIEW
                  </Text>
                </Button>
                <Button
                  borderRadius='12px'
                  transition='background .3s ease'
                  bg={state.teams ? "brand.200" : "transparent"}
                  _hover={{
                    bg: "brand.200",
                  }}
                  _active={{
                    bg: "brand.200",
                  }}
                  me={{ base: "none", lg: "20px" }}
                  leftIcon={
                    <Icon color='white' as={IoDocumentsSharp} me='6px' />
                  }
                  onClick={() =>
                    dispatch({ type: "SWITCH_ACTIVE", payload: "teams" })
                  }
                  minW='135px'>
                  <Text fontSize='xs' color='#fff' fontWeight='bold'>
                    TEAMS
                  </Text>
                </Button>
                <Button
                  borderRadius='12px'
                  transition='background .3s ease'
                  bg={state.projects ? "brand.200" : "transparent"}
                  _hover={{
                    bg: "brand.200",
                  }}
                  _active={{
                    bg: "brand.200",
                  }}
                  leftIcon={<Icon color='white' as={FaPenFancy} me='6px' />}
                  onClick={() =>
                    dispatch({ type: "SWITCH_ACTIVE", payload: "projects" })
                  }
                  minW='135px'>
                  <Text fontSize='xs' color='#fff' fontWeight='bold'>
                    PROJECTS
                  </Text>
                </Button>
              </Flex>
            </Flex>
          </Card>
        </Box>
      </Box>
      <Flex direction='column' mb='44px' mt={{ sm: "16px", lg: "0px" }}>
        <Text fontSize='xl' color='#fff' fontWeight='bold' mb='16px'>
          Some of Our Awesome Projects
        </Text>
        <Text fontSize='sm' color='gray.400'>
          This is the paragraph where you can write more details about your
          projects. Keep you user engaged by providing meaningful information.
        </Text>
      </Flex>
      <Grid
        templateColumns={{
          sm: "1fr",
          md: "repeat(2, auto)",
          lg: "repeat(3, auto)",
        }}
        templateRows={{ md: "repeat(3, auto)" }}
        gap='30px'>
        {/* Complex Project Card */}
        <Card h='100%' alignSelf='flex-start'>
          <CardHeader mb='18px'>
            <Flex justify='space-between' w='100%'>
              <Flex>
                <IconBox bg='brand.200' w='70px' h='70px' me='22px'>
                  <SlackWhiteIcon
                    w='40px'
                    h='40px'
                    alignSelf='center'
                    justifySelf='center'
                    transform='translate(5%)'
                  />
                </IconBox>
                <Flex direction='column'>
                  <Text fontSize='md' color='#fff' mb='8px'>
                    Slack Bot
                  </Text>
                  <AvatarGroup size='xs'>
                    <Avatar src={avatar1} borderColor='gray.800' />
                    <Avatar src={avatar2} borderColor='gray.800' />
                    <Avatar src={avatar3} borderColor='gray.800' />
                    <Avatar src={avatar4} borderColor='gray.800' />
                    <Avatar src={avatar7} borderColor='gray.800' />
                  </AvatarGroup>
                </Flex>
              </Flex>
              <Menu placement='left' isOpen={isOpen1} onClose={onClose1}>
                <MenuButton onClick={onOpen1} alignSelf='flex-start'>
                  <Icon
                    as={IoEllipsisVerticalSharp}
                    color='gray.400'
                    w='20px'
                    h='20px'
                  />
                </MenuButton>
                <MenuList
                  border='transparent'
                  backdropFilter='blur(63px)'
                  bg='linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.69) 76.65%)'
                  borderRadius='20px'>
                  <MenuItem
                    borderRadius='8px'
                    _hover={{
                      bg: "transparent",
                    }}
                    _active={{
                      bg: "transparent",
                    }}
                    _focus={{
                      bg: "transparent",
                    }}
                    mb='10px'
                    color='white'>
                    Action
                  </MenuItem>
                  <MenuItem
                    borderRadius='8px'
                    _hover={{
                      bg: "transparent",
                    }}
                    _active={{
                      bg: "transparent",
                    }}
                    _focus={{
                      bg: "transparent",
                    }}
                    mb='10px'
                    color='white'>
                    Another action
                  </MenuItem>
                  <MenuItem
                    borderRadius='8px'
                    _hover={{
                      bg: "transparent",
                    }}
                    _active={{
                      bg: "transparent",
                    }}
                    _focus={{
                      bg: "transparent",
                    }}
                    mb='10px'
                    color='white'>
                    Something else here
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </CardHeader>
          <CardBody>
            <Flex direction='column'>
              <Text color='gray.400' fontSize='sm'>
                If everything I did failed - which it doesn't, I think that it
                actually succeeds.
              </Text>
              <HSeparator my='22px' />
              <Flex justify='space-between' w='100%'>
                <Flex direction='column'>
                  <Text fontSize='xs' color='#fff' mb='6px'>
                    5
                  </Text>
                  <Text color='gray.400' fontSize='sm'>
                    Participants
                  </Text>
                </Flex>
                <Flex direction='column'>
                  <Text fontSize='xs' color='#fff' mb='6px'>
                    02.03.22
                  </Text>
                  <Text color='gray.400' fontSize='sm'>
                    Due Date
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </CardBody>
        </Card>
        {/* Complex Project Card */}
        <Card h='100%' alignSelf='flex-start'>
          <CardHeader mb='18px'>
            <Flex justify='space-between' w='100%'>
              <Flex>
                <IconBox bg='brand.200' w='70px' h='70px' me='22px'>
                  <SpotifyWhiteIcon
                    w='40px'
                    h='40px'
                    alignSelf='center'
                    justifySelf='center'
                    transform='translate(5%)'
                  />
                </IconBox>
                <Flex direction='column'>
                  <Text fontSize='md' color='#fff' mb='8px'>
                    Premium Support
                  </Text>
                  <AvatarGroup size='xs'>
                    <Avatar src={avatar2} borderColor='gray.800' />
                    <Avatar src={avatar3} borderColor='gray.800' />
                    <Avatar src={avatar4} borderColor='gray.800' />
                  </AvatarGroup>
                </Flex>
              </Flex>
              <Menu placement='left' isOpen={isOpen2} onClose={onClose2}>
                <MenuButton onClick={onOpen2} alignSelf='flex-start'>
                  <Icon
                    as={IoEllipsisVerticalSharp}
                    color='gray.400'
                    w='20px'
                    h='20px'
                  />
                </MenuButton>
                <MenuList
                  border='transparent'
                  backdropFilter='blur(63px)'
                  bg='linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.69) 76.65%)'
                  borderRadius='20px'>
                  <MenuItem
                    borderRadius='8px'
                    _hover={{
                      bg: "transparent",
                    }}
                    _active={{
                      bg: "transparent",
                    }}
                    _focus={{
                      bg: "transparent",
                    }}
                    mb='10px'
                    color='white'>
                    Action
                  </MenuItem>
                  <MenuItem
                    borderRadius='8px'
                    _hover={{
                      bg: "transparent",
                    }}
                    _active={{
                      bg: "transparent",
                    }}
                    _focus={{
                      bg: "transparent",
                    }}
                    mb='10px'
                    color='white'>
                    Another action
                  </MenuItem>
                  <MenuItem
                    borderRadius='8px'
                    _hover={{
                      bg: "transparent",
                    }}
                    _active={{
                      bg: "transparent",
                    }}
                    _focus={{
                      bg: "transparent",
                    }}
                    mb='10px'
                    color='white'>
                    Something else here
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </CardHeader>
          <CardBody>
            <Flex direction='column'>
              <Text color='gray.400' fontSize='sm'>
                Pink is obviously a better color. Everyone’s born confident, and
                everything’s taken away from you.
              </Text>
              <HSeparator my='22px' />
              <Flex justify='space-between' w='100%'>
                <Flex direction='column'>
                  <Text fontSize='xs' color='#fff' mb='6px'>
                    3
                  </Text>
                  <Text color='gray.400' fontSize='sm'>
                    Participants
                  </Text>
                </Flex>
                <Flex direction='column'>
                  <Text fontSize='xs' color='#fff' mb='6px'>
                    22.11.22
                  </Text>
                  <Text color='gray.400' fontSize='sm'>
                    Due Date
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </CardBody>
        </Card>
        {/* Complex Project Card */}
        <Card h='100%' alignSelf='flex-start'>
          <CardHeader mb='18px'>
            <Flex justify='space-between' w='100%'>
              <Flex>
                <IconBox bg='brand.200' w='70px' h='70px' me='22px'>
                  <AdobeWhiteIcon
                    w='40px'
                    h='40px'
                    alignSelf='center'
                    justifySelf='center'
                    transform='translate(5%)'
                  />
                </IconBox>
                <Flex direction='column'>
                  <Text fontSize='md' color='#fff' mb='8px'>
                    Design Tools
                  </Text>
                  <AvatarGroup size='xs'>
                    <Avatar src={avatar1} borderColor='gray.800' />
                    <Avatar src={avatar2} borderColor='gray.800' />
                    <Avatar src={avatar3} borderColor='gray.800' />
                    <Avatar src={avatar4} borderColor='gray.800' />
                    <Avatar src={avatar2} borderColor='gray.800' />
                  </AvatarGroup>
                </Flex>
              </Flex>
              <Menu placement='left' isOpen={isOpen3} onClose={onClose3}>
                <MenuButton onClick={onOpen3} alignSelf='flex-start'>
                  <Icon
                    as={IoEllipsisVerticalSharp}
                    color='gray.400'
                    w='20px'
                    h='20px'
                  />
                </MenuButton>
                <MenuList
                  border='transparent'
                  backdropFilter='blur(63px)'
                  bg='linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.69) 76.65%)'
                  borderRadius='20px'>
                  <MenuItem
                    borderRadius='8px'
                    _hover={{
                      bg: "transparent",
                    }}
                    _active={{
                      bg: "transparent",
                    }}
                    _focus={{
                      bg: "transparent",
                    }}
                    mb='10px'
                    color='white'>
                    Action
                  </MenuItem>
                  <MenuItem
                    borderRadius='8px'
                    _hover={{
                      bg: "transparent",
                    }}
                    _active={{
                      bg: "transparent",
                    }}
                    _focus={{
                      bg: "transparent",
                    }}
                    mb='10px'
                    color='white'>
                    Another action
                  </MenuItem>
                  <MenuItem
                    borderRadius='8px'
                    _hover={{
                      bg: "transparent",
                    }}
                    _active={{
                      bg: "transparent",
                    }}
                    _focus={{
                      bg: "transparent",
                    }}
                    mb='10px'
                    color='white'>
                    Something else here
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </CardHeader>
          <CardBody>
            <Flex direction='column'>
              <Text color='gray.400' fontSize='sm'>
                Constantly growing. We’re constantly making mistakes from which
                we learn and improve.
              </Text>
              <HSeparator my='22px' />
              <Flex justify='space-between' w='100%'>
                <Flex direction='column'>
                  <Text fontSize='xs' color='#fff' mb='6px'>
                    4
                  </Text>
                  <Text color='gray.400' fontSize='sm'>
                    Participants
                  </Text>
                </Flex>
                <Flex direction='column'>
                  <Text fontSize='xs' color='#fff' mb='6px'>
                    06.03.21
                  </Text>
                  <Text color='gray.400' fontSize='sm'>
                    Due Date
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </CardBody>
        </Card>
        {/* Complex Project Card */}
        <Card h='100%' alignSelf='flex-start'>
          <CardHeader mb='18px'>
            <Flex justify='space-between' w='100%'>
              <Flex>
                <IconBox bg='brand.200' w='70px' h='70px' me='22px'>
                  <SpotifyWhiteIcon
                    w='40px'
                    h='40px'
                    alignSelf='center'
                    justifySelf='center'
                  />
                </IconBox>
                <Flex direction='column'>
                  <Text fontSize='md' color='#fff' mb='8px'>
                    Looking Great
                  </Text>
                  <AvatarGroup size='xs'>
                    <Avatar src={avatar3} borderColor='gray.800' />
                    <Avatar src={avatar4} borderColor='gray.800' />
                  </AvatarGroup>
                </Flex>
              </Flex>
              <Menu placement='left' isOpen={isOpen4} onClose={onClose4}>
                <MenuButton onClick={onOpen4} alignSelf='flex-start'>
                  <Icon
                    as={IoEllipsisVerticalSharp}
                    color='gray.400'
                    w='20px'
                    h='20px'
                  />
                </MenuButton>
                <MenuList
                  border='transparent'
                  backdropFilter='blur(63px)'
                  bg='linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.69) 76.65%)'
                  borderRadius='20px'>
                  <MenuItem
                    borderRadius='8px'
                    _hover={{
                      bg: "transparent",
                    }}
                    _active={{
                      bg: "transparent",
                    }}
                    _focus={{
                      bg: "transparent",
                    }}
                    mb='10px'
                    color='white'>
                    Action
                  </MenuItem>
                  <MenuItem
                    borderRadius='8px'
                    _hover={{
                      bg: "transparent",
                    }}
                    _active={{
                      bg: "transparent",
                    }}
                    _focus={{
                      bg: "transparent",
                    }}
                    mb='10px'
                    color='white'>
                    Another action
                  </MenuItem>
                  <MenuItem
                    borderRadius='8px'
                    _hover={{
                      bg: "transparent",
                    }}
                    _active={{
                      bg: "transparent",
                    }}
                    _focus={{
                      bg: "transparent",
                    }}
                    mb='10px'
                    color='white'>
                    Something else here
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </CardHeader>
          <CardBody>
            <Flex direction='column'>
              <Text color='gray.400' fontSize='sm'>
                You have the opportunity to play this game of life you need to
                appreciate every moment.
              </Text>
              <HSeparator my='22px' />
              <Flex justify='space-between' w='100%'>
                <Flex direction='column'>
                  <Text fontSize='xs' color='#fff' mb='6px'>
                    6
                  </Text>
                  <Text color='gray.400' fontSize='sm'>
                    Participants
                  </Text>
                </Flex>
                <Flex direction='column'>
                  <Text fontSize='xs' color='#fff' mb='6px'>
                    14.03.24
                  </Text>
                  <Text color='gray.400' fontSize='sm'>
                    Due Date
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </CardBody>
        </Card>
        {/* Complex Project Card */}
        <Card h='100%' alignSelf='flex-start'>
          <CardHeader mb='18px'>
            <Flex justify='space-between' w='100%'>
              <Flex>
                <IconBox bg='brand.200' w='70px' h='70px' me='22px'>
                  <SlackWhiteIcon
                    w='40px'
                    h='40px'
                    alignSelf='center'
                    justifySelf='center'
                  />
                </IconBox>
                <Flex direction='column'>
                  <Text fontSize='md' color='#fff' mb='8px'>
                    Developer First
                  </Text>
                  <AvatarGroup size='xs'>
                    <Avatar src={avatar2} borderColor='gray.800' />
                    <Avatar src={avatar3} borderColor='gray.800' />
                    <Avatar src={avatar4} borderColor='gray.800' />
                  </AvatarGroup>
                </Flex>
              </Flex>
              <Menu placement='left' isOpen={isOpen5} onClose={onClose5}>
                <MenuButton onClick={onOpen5} alignSelf='flex-start'>
                  <Icon
                    as={IoEllipsisVerticalSharp}
                    color='gray.400'
                    w='20px'
                    h='20px'
                  />
                </MenuButton>
                <MenuList
                  border='transparent'
                  backdropFilter='blur(63px)'
                  bg='linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.69) 76.65%)'
                  borderRadius='20px'>
                  <MenuItem
                    borderRadius='8px'
                    _hover={{
                      bg: "transparent",
                    }}
                    _active={{
                      bg: "transparent",
                    }}
                    _focus={{
                      bg: "transparent",
                    }}
                    mb='10px'
                    color='white'>
                    Action
                  </MenuItem>
                  <MenuItem
                    borderRadius='8px'
                    _hover={{
                      bg: "transparent",
                    }}
                    _active={{
                      bg: "transparent",
                    }}
                    _focus={{
                      bg: "transparent",
                    }}
                    mb='10px'
                    color='white'>
                    Another action
                  </MenuItem>
                  <MenuItem
                    borderRadius='8px'
                    _hover={{
                      bg: "transparent",
                    }}
                    _active={{
                      bg: "transparent",
                    }}
                    _focus={{
                      bg: "transparent",
                    }}
                    mb='10px'
                    color='white'>
                    Something else here
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </CardHeader>
          <CardBody>
            <Flex direction='column'>
              <Text color='gray.400' fontSize='sm'>
                For standing out. But the time is now to be okay to be the
                greatest you.
              </Text>
              <HSeparator my='22px' />
              <Flex justify='space-between' w='100%'>
                <Flex direction='column'>
                  <Text fontSize='xs' color='#fff' mb='6px'>
                    4
                  </Text>
                  <Text color='gray.400' fontSize='sm'>
                    Participants
                  </Text>
                </Flex>
                <Flex direction='column'>
                  <Text fontSize='xs' color='#fff' mb='6px'>
                    02.03.22
                  </Text>
                  <Text color='gray.400' fontSize='sm'>
                    Due Date
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </CardBody>
        </Card>
        {/* Complex Project Card */}
        <Card h='100%' alignSelf='flex-start'>
          <CardHeader mb='18px'>
            <Flex justify='space-between' w='100%'>
              <Flex>
                <IconBox bg='brand.200' w='70px' h='70px' me='22px'>
                  <SlackWhiteIcon
                    w='40px'
                    h='40px'
                    alignSelf='center'
                    justifySelf='center'
                  />
                </IconBox>
                <Flex direction='column'>
                  <Text fontSize='md' color='#fff' mb='8px'>
                    Web Development
                  </Text>
                  <AvatarGroup size='xs'>
                    <Avatar src={avatar2} borderColor='gray.800' />
                    <Avatar src={avatar3} borderColor='gray.800' />
                    <Avatar src={avatar4} borderColor='gray.800' />
                  </AvatarGroup>
                </Flex>
              </Flex>
              <Menu placement='left' isOpen={isOpen6} onClose={onClose6}>
                <MenuButton onClick={onOpen6} alignSelf='flex-start'>
                  <Icon
                    as={IoEllipsisVerticalSharp}
                    color='gray.400'
                    w='20px'
                    h='20px'
                  />
                </MenuButton>
                <MenuList
                  border='transparent'
                  backdropFilter='blur(63px)'
                  bg='linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.69) 76.65%)'
                  borderRadius='20px'>
                  <MenuItem
                    borderRadius='8px'
                    _hover={{
                      bg: "transparent",
                    }}
                    _active={{
                      bg: "transparent",
                    }}
                    _focus={{
                      bg: "transparent",
                    }}
                    mb='10px'
                    color='white'>
                    Action
                  </MenuItem>
                  <MenuItem
                    borderRadius='8px'
                    _hover={{
                      bg: "transparent",
                    }}
                    _active={{
                      bg: "transparent",
                    }}
                    _focus={{
                      bg: "transparent",
                    }}
                    mb='10px'
                    color='white'>
                    Another action
                  </MenuItem>
                  <MenuItem
                    borderRadius='8px'
                    _hover={{
                      bg: "transparent",
                    }}
                    _active={{
                      bg: "transparent",
                    }}
                    _focus={{
                      bg: "transparent",
                    }}
                    mb='10px'
                    color='white'>
                    Something else here
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </CardHeader>
          <CardBody>
            <Flex direction='column'>
              <Text color='gray.400' fontSize='sm'>
                Pink is obviously a better color. Everyone’s born confident, and
                everything’s taken away from you.
              </Text>
              <HSeparator my='22px' />
              <Flex justify='space-between' w='100%'>
                <Flex direction='column'>
                  <Text fontSize='xs' color='#fff' mb='6px'>
                    4
                  </Text>
                  <Text color='gray.400' fontSize='sm'>
                    Participants
                  </Text>
                </Flex>
                <Flex direction='column'>
                  <Text fontSize='xs' color='#fff' mb='6px'>
                    06.03.22
                  </Text>
                  <Text color='gray.400' fontSize='sm'>
                    Due Date
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </CardBody>
        </Card>
        {/* Complex Project Card */}
        <Card h='100%' alignSelf='flex-start'>
          <CardHeader mb='18px'>
            <Flex justify='space-between' w='100%'>
              <Flex>
                <IconBox bg='brand.200' w='70px' h='70px' me='22px'>
                  <AtlassianWhiteIcon
                    w='40px'
                    h='40px'
                    alignSelf='center'
                    justifySelf='center'
                  />
                </IconBox>
                <Flex direction='column'>
                  <Text fontSize='md' color='#fff' mb='8px'>
                    Looking Great
                  </Text>
                  <AvatarGroup size='xs'>
                    <Avatar src={avatar2} borderColor='gray.800' />
                    <Avatar src={avatar3} borderColor='gray.800' />
                    <Avatar src={avatar4} borderColor='gray.800' />
                    <Avatar src={avatar3} borderColor='gray.800' />
                    <Avatar src={avatar4} borderColor='gray.800' />
                    <Avatar src={avatar2} borderColor='gray.800' />
                  </AvatarGroup>
                </Flex>
              </Flex>
              <Menu placement='left' isOpen={isOpen7} onClose={onClose7}>
                <MenuButton onClick={onOpen7} alignSelf='flex-start'>
                  <Icon
                    as={IoEllipsisVerticalSharp}
                    color='gray.400'
                    w='20px'
                    h='20px'
                  />
                </MenuButton>
                <MenuList
                  border='transparent'
                  backdropFilter='blur(63px)'
                  bg='linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.69) 76.65%)'
                  borderRadius='20px'>
                  <MenuItem
                    borderRadius='8px'
                    _hover={{
                      bg: "transparent",
                    }}
                    _active={{
                      bg: "transparent",
                    }}
                    _focus={{
                      bg: "transparent",
                    }}
                    mb='10px'
                    color='white'>
                    Action
                  </MenuItem>
                  <MenuItem
                    borderRadius='8px'
                    _hover={{
                      bg: "transparent",
                    }}
                    _active={{
                      bg: "transparent",
                    }}
                    _focus={{
                      bg: "transparent",
                    }}
                    mb='10px'
                    color='white'>
                    Another action
                  </MenuItem>
                  <MenuItem
                    borderRadius='8px'
                    _hover={{
                      bg: "transparent",
                    }}
                    _active={{
                      bg: "transparent",
                    }}
                    _focus={{
                      bg: "transparent",
                    }}
                    mb='10px'
                    color='white'>
                    Something else here
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </CardHeader>
          <CardBody>
            <Flex direction='column'>
              <Text color='gray.400' fontSize='sm'>
                You have the opportunity to play this game of life you need to
                appreciate every moment.
              </Text>
              <HSeparator my='22px' />
              <Flex justify='space-between' w='100%'>
                <Flex direction='column'>
                  <Text fontSize='xs' color='#fff' mb='6px'>
                    6
                  </Text>
                  <Text color='gray.400' fontSize='sm'>
                    Participants
                  </Text>
                </Flex>
                <Flex direction='column'>
                  <Text fontSize='xs' color='#fff' mb='6px'>
                    14.03.22
                  </Text>
                  <Text color='gray.400' fontSize='sm'>
                    Due Date
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </CardBody>
        </Card>
        {/* Complex Project Card */}
        <Card h='100%' alignSelf='flex-start'>
          <CardHeader mb='18px'>
            <Flex justify='space-between' w='100%'>
              <Flex>
                <IconBox bg='brand.200' w='70px' h='70px' me='22px'>
                  <InvisionWhiteIcon
                    w='40px'
                    h='40px'
                    alignSelf='center'
                    justifySelf='center'
                  />
                </IconBox>
                <Flex direction='column'>
                  <Text fontSize='md' color='#fff' mb='8px'>
                    Developer First
                  </Text>
                  <AvatarGroup size='xs'>
                    <Avatar src={avatar2} borderColor='gray.800' />
                    <Avatar src={avatar3} borderColor='gray.800' />
                    <Avatar src={avatar4} borderColor='gray.800' />
                    <Avatar src={avatar3} borderColor='gray.800' />
                  </AvatarGroup>
                </Flex>
              </Flex>
              <Menu placement='left' isOpen={isOpen8} onClose={onClose8}>
                <MenuButton onClick={onOpen8} alignSelf='flex-start'>
                  <Icon
                    as={IoEllipsisVerticalSharp}
                    color='gray.400'
                    w='20px'
                    h='20px'
                  />
                </MenuButton>
                <MenuList
                  border='transparent'
                  backdropFilter='blur(63px)'
                  bg='linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.69) 76.65%)'
                  borderRadius='20px'>
                  <MenuItem
                    borderRadius='8px'
                    _hover={{
                      bg: "transparent",
                    }}
                    _active={{
                      bg: "transparent",
                    }}
                    _focus={{
                      bg: "transparent",
                    }}
                    mb='10px'
                    color='white'>
                    Action
                  </MenuItem>
                  <MenuItem
                    borderRadius='8px'
                    _hover={{
                      bg: "transparent",
                    }}
                    _active={{
                      bg: "transparent",
                    }}
                    _focus={{
                      bg: "transparent",
                    }}
                    mb='10px'
                    color='white'>
                    Another action
                  </MenuItem>
                  <MenuItem
                    borderRadius='8px'
                    _hover={{
                      bg: "transparent",
                    }}
                    _active={{
                      bg: "transparent",
                    }}
                    _focus={{
                      bg: "transparent",
                    }}
                    mb='10px'
                    color='white'>
                    Something else here
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </CardHeader>
          <CardBody>
            <Flex direction='column'>
              <Text color='gray.400' fontSize='sm'>
                For standing out. But the time is now to be okay to be the
                greatest you.
              </Text>
              <HSeparator my='22px' />
              <Flex justify='space-between' w='100%'>
                <Flex direction='column'>
                  <Text fontSize='xs' color='#fff' mb='6px'>
                    4
                  </Text>
                  <Text color='gray.400' fontSize='sm'>
                    Participants
                  </Text>
                </Flex>
                <Flex direction='column'>
                  <Text fontSize='xs' color='#fff' mb='6px'>
                    02.03.22
                  </Text>
                  <Text color='gray.400' fontSize='sm'>
                    Due Date
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </CardBody>
        </Card>
        <Card>
          {/* Complex Project Card */}
          <CardBody h='100%'>
            <Flex w='100%' h='100%'>
              <Button variant='no-hover' w='100%' h='100%'>
                <Flex
                  direction='column'
                  align='center'
                  justify='center'
                  color='#fff'>
                  <Icon as={BsPlus} w='30px' h='30px' mb='12px' />
                  <Text fontSize='lg' fontWeight='bold'>
                    Create a New Project
                  </Text>
                </Flex>
              </Button>
            </Flex>
          </CardBody>
        </Card>
      </Grid>
    </Flex>
  );
}

export default Projects;
