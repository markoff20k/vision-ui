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

// Chakra Imports
import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Badge,
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Image,
  Input,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

// Images
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar10 from "assets/img/avatars/avatar10.png";
import avatar11 from "assets/img/avatars/avatar11.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";
import avatar4 from "assets/img/avatars/avatar4.png";
import avatar5 from "assets/img/avatars/avatar5.png";
import avatar7 from "assets/img/avatars/avatar7.png";
import avatar8 from "assets/img/avatars/avatar8.png";
import avatar9 from "assets/img/avatars/avatar9.png";
import teamsImage from "assets/img/teams-image.png";

// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import { HSeparator } from "components/Separator/Separator.js";

// Icons
import { AiFillLike, AiOutlinePlus } from "react-icons/ai";
import { InvisionLogo, SlackLogo } from "components/Icons/Icons";
import {
  FaCommentDots,
  FaCube,
  FaPencilAlt,
  FaPenFancy,
  FaPlus,
} from "react-icons/fa";
import { IoIosStar, IoMdShareAlt, IoMdStarHalf } from "react-icons/io";
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

function Teams() {
  const [state, dispatch] = useReducer(reducer, {
    overview: false,
    teams: true,
    projects: false,
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

  return (
    <Flex direction='column' mt={{ sm: "150px", md: "100px" }}>
      <Box
        mb='24px'
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
                leftIcon={<Icon color='white' as={IoDocumentsSharp} me='6px' />}
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
      {/* Stories */}
      <Card px='0px'>
        <CardBody overflowX={{ sm: "scroll", xl: "hidden" }}>
          <Grid
            gap={{ sm: "50px", xl: "30px", "2xl": "70px" }}
            templateColumns={{ sm: "repeat(12, 1fr)", lg: "repeat(12, 1fr)" }}
            overflowX={{ sm: "scroll", xl: "hidden" }}>
            <Flex
              direction='column'
              mx='auto'
              align='center'
              justify='center'
              ms='20px'>
              <Link href='#'>
                <Flex
                  justify='center'
                  align='center'
                  borderRadius='50%'
                  bg='brand.200'
                  w='50px'
                  h='50px'
                  mb='7px'>
                  <Icon as={FaPlus} w='16px' h='16px' color='#fff' />
                </Flex>
              </Link>
              <Text fontSize='xs' color='gray.400' minW='60px'>
                Add Story
              </Text>
            </Flex>
            <Flex direction='column' mx='auto' align='center'>
              <Link
                href='#'
                border='1px solid'
                borderColor='brand.200'
                borderRadius='50%'
                mb='6px'
                p='4px'>
                <Avatar src={avatar4} size='md' />
              </Link>
              <Text fontSize='xs' color='gray.400'>
                Esthera J
              </Text>
            </Flex>
            <Flex direction='column' mx='auto' align='center'>
              <Link
                href='#'
                border='1px solid'
                borderColor='brand.200'
                borderRadius='50%'
                mb='6px'
                p='4px'>
                <Avatar src={avatar3} size='md' />
              </Link>
              <Text fontSize='xs' color='gray.400'>
                Boris U
              </Text>
            </Flex>
            <Flex direction='column' mx='auto' align='center'>
              <Link
                href='#'
                border='1px solid'
                borderColor='brand.200'
                borderRadius='50%'
                mb='6px'
                p='4px'>
                <Avatar src={avatar2} size='md' />
              </Link>
              <Text fontSize='xs' color='gray.400'>
                Tao G
              </Text>
            </Flex>
            <Flex direction='column' mx='auto' align='center'>
              <Link
                href='#'
                border='1px solid'
                borderColor='brand.200'
                borderRadius='50%'
                mb='6px'
                p='4px'>
                <Avatar src={avatar1} size='md' />
              </Link>
              <Text fontSize='xs' color='gray.400'>
                Kay R
              </Text>
            </Flex>
            <Flex direction='column' mx='auto' align='center'>
              <Link
                href='#'
                border='1px solid'
                borderColor='brand.200'
                borderRadius='50%'
                mb='6px'
                p='4px'>
                <Avatar src={avatar5} size='md' />
              </Link>
              <Text fontSize='xs' color='gray.400'>
                Tom M
              </Text>
            </Flex>
            <Flex direction='column' mx='auto' align='center'>
              <Link
                href='#'
                border='1px solid'
                borderColor='brand.200'
                borderRadius='50%'
                mb='6px'
                p='4px'>
                <Avatar src={avatar1} size='md' />
              </Link>
              <Text fontSize='xs' color='gray.400'>
                Nicole N
              </Text>
            </Flex>
            <Flex direction='column' mx='auto' align='center'>
              <Link
                href='#'
                border='1px solid'
                borderColor='brand.200'
                borderRadius='50%'
                mb='6px'
                p='4px'>
                <Avatar src={avatar7} size='md' />
              </Link>
              <Text fontSize='xs' color='gray.400'>
                Emma O
              </Text>
            </Flex>
            <Flex direction='column' mx='auto' align='center'>
              <Link
                href='#'
                border='1px solid'
                borderColor='brand.200'
                borderRadius='50%'
                mb='6px'
                p='4px'>
                <Avatar src={avatar8} size='md' />
              </Link>
              <Text fontSize='xs' color='gray.400'>
                Marie P
              </Text>
            </Flex>
            <Flex direction='column' mx='auto' align='center'>
              <Link
                href='#'
                border='1px solid'
                borderColor='brand.200'
                borderRadius='50%'
                mb='6px'
                p='4px'>
                <Avatar src={avatar9} size='md' />
              </Link>
              <Text fontSize='xs' color='gray.400'>
                Bruce M
              </Text>
            </Flex>
            <Flex direction='column' mx='auto' align='center'>
              <Link
                href='#'
                border='1px solid'
                borderColor='brand.200'
                borderRadius='50%'
                mb='6px'
                p='4px'>
                <Avatar src={avatar10} size='md' />
              </Link>
              <Text fontSize='xs' color='gray.400'>
                Sandra A
              </Text>
            </Flex>
            <Flex direction='column' mx='auto' align='center' me='20px'>
              <Link
                href='#'
                border='1px solid'
                borderColor='brand.200'
                borderRadius='50%'
                mb='6px'
                p='4px'>
                <Avatar src={avatar1} size='md' />
              </Link>
              <Text fontSize='xs' color='gray.400'>
                Katty L
              </Text>
            </Flex>
          </Grid>
        </CardBody>
      </Card>
      <Grid
        templateColumns={{ sm: "1fr", lg: "2.1fr 1fr" }}
        templateRows='auto 1fr'
        mt='24px'
        gap='24px'>
        {/* Post */}
        <Card alignSelf={{ lg: "flex-start", "2xl": "stretch" }}>
          <CardHeader w='100%'>
            <Flex justify='space-between' align='center' w='100%'>
              <Flex>
                <Box>
                  <Avatar
                    src={avatar10}
                    w='38px'
                    h='38px'
                    borderRadius='12px'
                    me='15px'
                  />
                </Box>
                <Flex direction='column'>
                  <Text fontSize='md' color='#fff' fontWeight='bold'>
                    Esthera Jackson
                  </Text>
                  <Text fontSize='sm' color='gray.500'>
                    3 days ago
                  </Text>
                </Flex>
              </Flex>
              <Button variant='brand' p='8px 32px'>
                <Flex align='center' color='#fff' justifyContent='center'>
                  <Icon as={AiOutlinePlus} w='18px' h='18px' me='4px' />
                  <Text fontSize='10px' fontWeight='bold'>
                    FOLLOW
                  </Text>
                </Flex>
              </Button>
            </Flex>
          </CardHeader>
          <HSeparator my='16px' />
          <CardBody>
            <Flex direction='column'>
              <Text color='gray.400' fontWeight='500' fontSize='sm' mb='24px'>
                Personal profiles are the perfect way for you to grab their
                attention and persuade recruiters to continue reading your CV
                because you’re telling them from the off exactly why they should
                hire you.
              </Text>
              <Image
                src={teamsImage}
                minW={{ sm: "270px" }}
                h='auto'
                maxH='590px'
                borderRadius='12px'
              />
              <Flex justify='space-between' align='center' my='6px'>
                <Stack spacing='20px' direction='row' my='18px'>
                  <Flex align='center' color='gray.500'>
                    <Icon
                      as={AiFillLike}
                      w='18px'
                      h='18px'
                      me='4px'
                      color='brand.200'
                      cursor='pointer'
                    />
                    <Text fontSize='md' color='white'>
                      1502
                    </Text>
                  </Flex>
                  <Flex align='center' color='gray.500'>
                    <Icon
                      as={FaCommentDots}
                      w='18px'
                      h='18px'
                      me='4px'
                      cursor='pointer'
                    />
                    <Text fontSize='md'>36</Text>
                  </Flex>
                  <Flex align='center' color='gray.500'>
                    <Icon
                      as={IoMdShareAlt}
                      w='18px'
                      h='18px'
                      me='4px'
                      cursor='pointer'
                    />
                    <Text fontSize='md'>12</Text>
                  </Flex>
                </Stack>
                <Flex
                  align='center'
                  display={{ sm: "none", md: "flex" }}
                  direction='row'>
                  <AvatarGroup size='xs' me='6px'>
                    <Avatar src={avatar1} borderColor='gray.800' />
                    <Avatar src={avatar2} borderColor='gray.800' />
                    <Avatar src={avatar5} borderColor='gray.800' />
                    <Avatar src={avatar8} borderColor='gray.800' />
                  </AvatarGroup>
                  <Text color='gray.500' fontSize='sm'>
                    and 30+ more
                  </Text>
                </Flex>
              </Flex>
              <HSeparator mb='26px' />
              <Flex mb='30px'>
                <Box>
                  <Avatar src={avatar7} w='50px' h='50px' me='15px' />
                </Box>
                <Flex direction='column'>
                  <Text fontSize='sm' color='#fff' fontWeight='bold'>
                    Michael Lewis
                  </Text>
                  <Text
                    color='gray.500'
                    fontSize='sm'
                    fontWeight='500'
                    mt='6px'
                    mb='14px'>
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves!
                  </Text>
                  <Flex>
                    <Flex align='center' color='gray.500' me='21px'>
                      <Icon
                        as={AiFillLike}
                        w='18px'
                        h='18px'
                        me='4px'
                        cursor='pointer'
                      />
                      <Text fontSize='xs' fontWeight='500'>
                        3 likes
                      </Text>
                    </Flex>
                    <Flex align='center' color='gray.500'>
                      <Icon
                        as={IoMdShareAlt}
                        w='18px'
                        h='18px'
                        me='4px'
                        cursor='pointer'
                      />
                      <Text fontSize='xs' fontWeight='500'>
                        2 shares
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
              <Flex mb='30px'>
                <Box>
                  <Avatar src={avatar10} w='50px' h='50px' me='15px' />
                </Box>
                <Flex direction='column'>
                  <Text fontSize='sm' color='#fff' fontWeight='bold'>
                    Jessica Stones
                  </Text>
                  <Text
                    color='gray.500'
                    fontSize='sm'
                    fontWeight='500'
                    mt='6px'
                    mb='14px'>
                    Society has put up so many boundaries, so many limitations
                    on what’s right and wrong that it’s almost impossible to get
                    a pure thought out. It’s like a little kid, a little boy.
                  </Text>
                  <Flex>
                    <Flex align='center' color='gray.500' me='21px'>
                      <Icon
                        as={AiFillLike}
                        w='18px'
                        h='18px'
                        me='4px'
                        cursor='pointer'
                      />
                      <Text fontSize='xs' fontWeight='500'>
                        10 likes
                      </Text>
                    </Flex>
                    <Flex align='center' color='gray.500'>
                      <Icon
                        as={IoMdShareAlt}
                        w='18px'
                        h='18px'
                        me='4px'
                        cursor='pointer'
                      />
                      <Text fontSize='xs' fontWeight='500'>
                        1 share
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
              <Flex align='center'>
                <Box>
                  <Avatar src={avatar4} w='50px' h='50px' me='15px' />
                </Box>
                <Input
                  placeholder='Write your comment...'
                  border='0.5px solid'
                  borderColor='rgba(226, 232, 240, 0.3)'
                  borderRadius='15px'
                  bg='#0F1535'
                  fontSize='xs'
                />
              </Flex>
            </Flex>
          </CardBody>
        </Card>
        <Stack direction='column' spacing='24px'>
          {/* Team Profile Card */}
          <Card>
            <CardHeader>
              <Flex justify='space-between' align='center' w='100%'>
                <Text fontSize='lg' color='#fff' fontWeight='bold'>
                  Digital Marketing
                </Text>
                <Button variant='no-hover' p='0px'>
                  <Menu isOpen={isOpen1} onClose={onClose1}>
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
                </Button>
              </Flex>
            </CardHeader>
            <CardBody>
              <Flex direction='column' mt='16px'>
                <Text color='gray.400' fontSize='sm' mb='20px'>
                  A group of people who collectively are responsible for all of
                  the work necessary to produce working, validated assets.
                </Text>
                <Flex justify='space-between' align='center'>
                  <Text color='gray.400' fontSize='sm' fontWeight='500'>
                    Industry:
                  </Text>
                  <Badge p='12px 16px' fontSize='10px' borderRadius='12px'>
                    MARKETING TEAM
                  </Badge>
                </Flex>
                <HSeparator my='14px' />
                <Flex justify='space-between' align='center'>
                  <Text color='gray.400' fontSize='sm' fontWeight='500'>
                    Rating:
                  </Text>
                  <Stack direction='row' spacing='2px' color='orange.400'>
                    <Icon as={IoIosStar} />
                    <Icon as={IoIosStar} />
                    <Icon as={IoIosStar} />
                    <Icon as={IoIosStar} />
                    <Icon as={IoMdStarHalf} />
                  </Stack>
                </Flex>
                <HSeparator my='14px' />
                <Flex justify='space-between' align='center'>
                  <Text color='gray.400' fontSize='sm' fontWeight='500'>
                    Members:
                  </Text>
                  <AvatarGroup size='sm'>
                    <Avatar src={avatar1} borderColor='gray.800' />
                    <Avatar src={avatar2} borderColor='gray.800' />
                    <Avatar src={avatar5} borderColor='gray.800' />
                    <Avatar src={avatar8} borderColor='gray.800' />
                  </AvatarGroup>
                </Flex>
              </Flex>
            </CardBody>
          </Card>
          {/* Team Profile Card */}
          <Card>
            <CardHeader>
              <Flex justify='space-between' align='center' w='100%'>
                <Text fontSize='lg' color='#fff' fontWeight='bold'>
                  Design
                </Text>
                <Button variant='no-hover' p='0px'>
                  <Menu isOpen={isOpen2} onClose={onClose2}>
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
                </Button>
              </Flex>
            </CardHeader>
            <CardBody>
              <Flex direction='column' mt='16px'>
                <Text color='gray.400' fontSize='sm' mb='20px'>
                  Because it's about motivating the doers. Because I’m here to
                  follow my dreams and inspire other people to follow their
                  dreams, too.
                </Text>
                <Flex justify='space-between' align='center'>
                  <Text color='gray.400' fontSize='sm' fontWeight='500'>
                    Industry:
                  </Text>
                  <Badge p='12px 16px' fontSize='10px' borderRadius='12px'>
                    DESIGN TEAM
                  </Badge>
                </Flex>
                <HSeparator my='14px' />
                <Flex justify='space-between' align='center'>
                  <Text color='gray.400' fontSize='sm' fontWeight='500'>
                    Rating:
                  </Text>
                  <Stack direction='row' spacing='2px' color='orange.400'>
                    <Icon as={IoIosStar} />
                    <Icon as={IoIosStar} />
                    <Icon as={IoIosStar} />
                    <Icon as={IoIosStar} />
                    <Icon as={IoMdStarHalf} />
                  </Stack>
                </Flex>
                <HSeparator my='14px' />
                <Flex justify='space-between' align='center'>
                  <Text color='gray.400' fontSize='sm' fontWeight='500'>
                    Members:
                  </Text>
                  <AvatarGroup size='sm'>
                    <Avatar src={avatar1} borderColor='gray.800' />
                    <Avatar src={avatar2} borderColor='gray.800' />
                    <Avatar src={avatar5} borderColor='gray.800' />
                    <Avatar src={avatar8} borderColor='gray.800' />
                  </AvatarGroup>
                </Flex>
              </Flex>
            </CardBody>
          </Card>
          {/* Event Card */}
          <Card>
            <CardHeader>
              <Flex align='center'>
                <SlackLogo w='34px' h='34px' me='14px' />
                <Flex direction='column'>
                  <Text fontSize='md' color='#fff'>
                    Slack Meet
                  </Text>
                  <Text color='gray.400' fontSize='xs'>
                    11:00 AM
                  </Text>
                </Flex>
              </Flex>
            </CardHeader>
            <CardBody>
              <Flex direction='column' w='100%'>
                <Text color='gray.400' fontSize='sm' mt='16px' mb='12px'>
                  You have an upcoming meet for Marketing Planning
                </Text>
                <Text color='gray.400' fontSize='sm'>
                  Meeting ID:{" "}
                  <Text as='span' color='#fff' fontWeight='bold'>
                    902-128-281
                  </Text>
                </Text>
                <HSeparator mb='14px' mt='22px' />
                <Flex justify='space-between' align='center'>
                  <Button variant='brand' p='0px 40px' h='35px'>
                    <Text fontSize='10px' fontWeight='bold' color='#fff'>
                      JOIN
                    </Text>
                  </Button>
                  <AvatarGroup size='sm'>
                    <Avatar src={avatar1} borderColor='gray.800' />
                    <Avatar src={avatar2} borderColor='gray.800' />
                    <Avatar src={avatar5} borderColor='gray.800' />
                    <Avatar src={avatar8} borderColor='gray.800' />
                  </AvatarGroup>
                </Flex>
              </Flex>
            </CardBody>
          </Card>
          {/* Event Card */}
          <Card>
            <CardHeader>
              <Flex align='center'>
                <InvisionLogo w='34px' h='34px' me='14px' />
                <Flex direction='column'>
                  <Text fontSize='md' color='#fff'>
                    Invision
                  </Text>
                  <Text color='gray.400' fontSize='sm'>
                    04:50 PM
                  </Text>
                </Flex>
              </Flex>
            </CardHeader>
            <CardBody>
              <Flex direction='column' w='100%'>
                <Text color='gray.400' fontSize='sm' mt='16px' mb='12px'>
                  You have an upcoming video call for{" "}
                  <Text as='span' color='#fff'>
                    Chakra Design
                  </Text>{" "}
                  at 04:50 PM.
                </Text>
                <Text color='gray.400' fontSize='sm'>
                  Meeting ID:{" "}
                  <Text as='span' color='#fff' fontWeight='bold'>
                    902-128-281
                  </Text>
                </Text>
                <HSeparator mb='14px' mt='22px' />
                <Flex justify='space-between' align='center'>
                  <Button variant='brand' p='0px 40px' h='35px'>
                    <Text fontSize='10px' fontWeight='bold' color='#fff'>
                      JOIN
                    </Text>
                  </Button>
                  <AvatarGroup size='sm'>
                    <Avatar src={avatar1} borderColor='gray.800' />
                    <Avatar src={avatar2} borderColor='gray.800' />
                    <Avatar src={avatar5} borderColor='gray.800' />
                    <Avatar src={avatar8} borderColor='gray.800' />
                  </AvatarGroup>
                </Flex>
              </Flex>
            </CardBody>
          </Card>
        </Stack>
      </Grid>
    </Flex>
  );
}

export default Teams;
