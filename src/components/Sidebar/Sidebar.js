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

/*eslint-disable*/
import { HamburgerIcon, QuestionIcon } from "@chakra-ui/icons";
// chakra imports
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  Icon,
  Link,
  List,
  ListItem,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import SidebarHelpImage from "assets/img/SidebarHelpImage.png";
import IconBox from "components/Icons/IconBox";
import { SimmmpleLogoWhite } from "components/Icons/Icons";
import {
  renderThumb,
  renderTrack,
  renderTrackRTL,
  renderView,
  renderViewRTL,
} from "components/Scrollbar/Scrollbar";
import { HSeparator } from "components/Separator/Separator";
import { SidebarContext } from "contexts/SidebarContext";
import PropTypes from "prop-types";
import React from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { FaCircle } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";

// FUNCTIONS

function Sidebar(props) {
  // to check for active links and opened collapses
  let location = useLocation();
  // this is for the rest of the collapses
  const { sidebarWidth, setSidebarWidth, toggleSidebar } = React.useContext(
    SidebarContext
  );
  const mainPanel = React.useRef();
  let variantChange = "all 0.2s linear";
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName);
  };
  // this function creates the links and collapses that appear in the sidebar (left menu)
  const createLinks = (routes) => {
    const { sidebarVariant } = props;
    let inactiveBg = "#1A1F37";
    let activeColor = "white";
    let inactiveColor = "white";
    let sidebarActiveShadow = "none";
    let activeBg = "brand.200";
    let activeAccordionBg = "#1A1F37";
    let inactiveColorIcon = "brand.200";
    let activeColorIcon = "#fff";
    return routes.map((prop, index) => {
      if (prop.category) {
        return (
          <>
            <Text
              fontSize='xs'
              color={activeColor}
              fontWeight='500'
              mx='auto'
              ps={{
                sm: "10px",
                xl: "16px",
              }}
              my='24px'
              key={index}>
              {prop.name}
            </Text>
            {createLinks(prop.items)}
          </>
        );
      }
      if (prop.collapse) {
        return (
          <Accordion allowToggle>
            <AccordionItem border='none'>
              <AccordionButton
                display='flex'
                align='center'
                justify='center'
                boxShadow={
                  activeRoute(prop.path) && prop.icon
                    ? sidebarActiveShadow
                    : null
                }
                _hover={{
                  boxShadow:
                    activeRoute(prop.path) && prop.icon
                      ? sidebarActiveShadow
                      : null,
                }}
                _focus={{
                  boxShadow: "none",
                }}
                borderRadius='15px'
                w={sidebarWidth === 275 ? "100%" : "77%"}
                px={prop.icon ? null : "0px"}
                py={prop.icon ? "12px" : null}
                bg={
                  activeRoute(prop.path) && prop.icon
                    ? activeAccordionBg
                    : "transparent"
                }>
                {activeRoute(prop.path) ? (
                  <Button
                    boxSize='initial'
                    justifyContent='flex-start'
                    alignItems='center'
                    bg='transparent'
                    transition={variantChange}
                    mx={{
                      xl: "auto",
                    }}
                    px='0px'
                    borderRadius='15px'
                    w='100%'
                    _hover='none'
                    _active={{
                      bg: "inherit",
                      transform: "none",
                      borderColor: "transparent",
                      border: "none",
                    }}
                    _focus={{
                      transform: "none",
                      borderColor: "transparent",
                      border: "none",
                    }}>
                    {prop.icon ? (
                      <Flex>
                        <IconBox
                          bg={activeBg}
                          color={activeColorIcon}
                          h='30px'
                          w='30px'
                          me='12px'
                          transition={variantChange}>
                          {prop.icon}
                        </IconBox>
                        <Text
                          fontWeight='500'
                          color={activeColor}
                          my='auto'
                          fontSize='sm'
                          display={sidebarWidth === 275 ? "block" : "none"}>
                          {prop.name}
                        </Text>
                      </Flex>
                    ) : (
                      <HStack
                        spacing={sidebarWidth === 275 ? "22px" : "0px"}
                        ps={sidebarWidth === 275 ? "10px" : "0px"}
                        ms={sidebarWidth === 275 ? "0px" : "8px"}>
                        <Icon
                          as={FaCircle}
                          w='10px'
                          color='brand.200'
                          display={sidebarWidth === 275 ? "block" : "none"}
                        />
                        <Text
                          fontWeight='500'
                          color={activeColor}
                          my='auto'
                          fontSize='sm'>
                          {sidebarWidth === 275 ? prop.name : prop.name[0]}
                        </Text>
                      </HStack>
                    )}
                  </Button>
                ) : (
                  <Button
                    boxSize='initial'
                    justifyContent='flex-start'
                    alignItems='center'
                    bg='transparent'
                    mx={{
                      xl: "auto",
                    }}
                    px='0px'
                    borderRadius='15px'
                    w='100%'
                    _hover='none'
                    _active={{
                      bg: "inherit",
                      transform: "none",
                      borderColor: "transparent",
                    }}
                    _focus={{
                      borderColor: "transparent",
                      boxShadow: "none",
                    }}>
                    {prop.icon ? (
                      <Flex>
                        <IconBox
                          bg={inactiveBg}
                          color={inactiveColorIcon}
                          h='30px'
                          w='30px'
                          me='12px'
                          transition={variantChange}
                          boxShadow={sidebarActiveShadow}
                          _hover={{ boxShadow: sidebarActiveShadow }}>
                          {prop.icon}
                        </IconBox>
                        <Text
                          fontWeight='500'
                          color={inactiveColor}
                          my='auto'
                          fontSize='sm'
                          display={sidebarWidth === 275 ? "block" : "none"}>
                          {prop.name}
                        </Text>
                      </Flex>
                    ) : (
                      <HStack
                        spacing={sidebarWidth === 275 ? "26px" : "0px"}
                        ps={sidebarWidth === 275 ? "10px" : "0px"}
                        ms={sidebarWidth === 275 ? "0px" : "8px"}>
                        <Icon
                          as={FaCircle}
                          w='6px'
                          color='brand.200'
                          display={sidebarWidth === 275 ? "block" : "none"}
                        />
                        <Text
                          color={inactiveColor}
                          my='auto'
                          fontSize='sm'
                          fontWeight='500'>
                          {sidebarWidth === 275 ? prop.name : prop.name[0]}
                        </Text>
                      </HStack>
                    )}
                  </Button>
                )}
                <AccordionIcon
                  color='gray.400'
                  display={
                    prop.icon
                      ? sidebarWidth === 275
                        ? "block"
                        : "none"
                      : "block"
                  }
                  transform={
                    prop.icon
                      ? null
                      : sidebarWidth === 275
                      ? null
                      : "translateX(-70%)"
                  }
                />
              </AccordionButton>
              <AccordionPanel
                pe={prop.icon ? null : "0px"}
                pb='8px'
                ps={prop.icon ? null : sidebarWidth === 275 ? null : "8px"}>
                <List>
                  {
                    prop.icon
                      ? createLinks(prop.items) // for bullet accordion links
                      : createAccordionLinks(prop.items) // for non-bullet accordion links
                  }
                </List>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        );
      } else {
        return (
          <NavLink to={prop.layout + prop.path}>
            {prop.icon ? (
              <Box>
                <HStack spacing='14px' py='15px' px='15px'>
                  <IconBox
                    bg='brand.200'
                    color='white'
                    h='30px'
                    w='30px'
                    transition={variantChange}>
                    {prop.icon}
                  </IconBox>
                  <Text
                    fontWeight='500'
                    color={
                      activeRoute(prop.path.toLowerCase())
                        ? activeColor
                        : inactiveColor
                    }
                    fontSize='sm'>
                    {prop.name}
                  </Text>
                </HStack>
              </Box>
            ) : (
              <ListItem>
                <HStack
                  spacing={
                    sidebarWidth === 275
                      ? activeRoute(prop.path.toLowerCase())
                        ? "22px"
                        : "26px"
                      : "8px"
                  }
                  py='5px'
                  px={sidebarWidth === 275 ? "10px" : "0px"}>
                  <Icon
                    as={FaCircle}
                    w={activeRoute(prop.path.toLowerCase()) ? "10px" : "6px"}
                    color='brand.200'
                    display={sidebarWidth === 275 ? "block" : "none"}
                  />
                  <Text
                    fontWeight='500'
                    color={
                      activeRoute(prop.path.toLowerCase())
                        ? activeColor
                        : inactiveColor
                    }
                    fontSize='xs'>
                    {sidebarWidth === 275 ? prop.name : prop.name[0]}
                  </Text>
                </HStack>
              </ListItem>
            )}
          </NavLink>
        );
      }
    });
  };

  const createAccordionLinks = (routes) => {
    let inactiveColor = "#fff";
    let activeColor = "#fff";
    return routes.map((prop, index) => {
      return (
        <NavLink to={prop.layout + prop.path}>
          <ListItem
            pt='5px'
            ms={sidebarWidth === 275 ? "26px" : "0px"}
            key={index}>
            <Text
              fontWeight='500'
              mb='4px'
              color={
                activeRoute(prop.path.toLowerCase())
                  ? activeColor
                  : inactiveColor
              }
              fontSize='xs'>
              {sidebarWidth === 275 ? prop.name : prop.name[0]}
            </Text>
          </ListItem>
        </NavLink>
      );
    });
  };
  const { logoText, routes, sidebarVariant } = props;
  let isWindows = navigator.platform.startsWith("Win");
  let links = <>{createLinks(routes)}</>;
  //  BRAND
  //  Chakra Color Mode
  let sidebarBg =
    "linear-gradient(178.68deg, rgba(6, 11, 38, 0.94) 31.88%, rgba(26, 31, 55, 0) 100%)";
  let sidebarRadius = "20px";
  let sidebarMargins = "10px";
  if (sidebarVariant === "opaque") {
    sidebarMargins = "16px 0px 16px 16px";
  }
  let brand = (
    <Box pt={"25px"} mb='12px'>
      <Link
        href={`${process.env.PUBLIC_URL}/#/`}
        target='_blank'
        display='flex'
        lineHeight='100%'
        mb='32px'
        fontWeight='700'
        justifyContent='center'
        alignItems='center'>
        <SimmmpleLogoWhite
          w={sidebarWidth === 275 ? "32px" : "40px"}
          h={sidebarWidth === 275 ? "32px" : "40px"}
          me='10px'
        />
        <Box
          bg='linear-gradient(97.89deg, #FFFFFF 70.67%, rgba(117, 122, 140, 0) 108.55%)'
          bgClip='text'>
          <Text
            fontWeight='500'
            fontSize='sm'
            mt='3px'
            display={sidebarWidth === 275 ? "block" : "none"}
            color='transparent'
            letterSpacing='0.18em'>
            {logoText}
          </Text>
        </Box>
      </Link>
      <HSeparator />
    </Box>
  );

  let sidebarContent = (
    <Flex
      justify='space-beetween'
      direction='column'
      h='100%'
      w={sidebarWidth === 275 ? "220px" : "80px"}>
      <Flex direction='column'>
        <Box mb='20px'>{brand}</Box>
        <Box mb='20px'>{links}</Box>
      </Flex>

      <Flex
        borderRadius='15px'
        direction='column'
        bgImage={SidebarHelpImage}
        bgSize='cover'
        justifyContent='flex-start'
        alignItems='start'
        mt='auto'
        mb='10px'
        boxSize='border-box'
        p={sidebarWidth === 275 ? "16px" : "12px"}
        h={sidebarWidth === 275 ? "170px" : "auto"}
        w={sidebarWidth === 275 ? "100%" : "77%"}>
        <IconBox width='35px' h='35px' bg='white' mb='auto'>
          <QuestionIcon color='brand.200' h='18px' w='18px' />
        </IconBox>
        <Text
          fontSize='sm'
          color='white'
          fontWeight='700'
          display={sidebarWidth === 275 ? "block" : "none"}>
          Need help?
        </Text>
        <Text
          fontWeight='500'
          fontSize='xs'
          color='white'
          mb='10px'
          display={sidebarWidth === 275 ? "block" : "none"}>
          Please check our docs
        </Text>
        <Link
          w='100%'
          href='https://demos.creative-tim.com/docs-vision-ui-dashboard-pro-chakra/'>
          <Button
            fontSize='10px'
            fontWeight='700'
            w='100%'
            bg='linear-gradient(126.97deg, rgba(6, 11, 40, 0.74) 28.26%, rgba(10, 14, 35, 0.71) 91.2%)'
            _hover='none'
            _active={{
              bg:
                "linear-gradient(126.97deg, rgba(6, 11, 40, 0.74) 28.26%, rgba(10, 14, 35, 0.71) 91.2%)",
              transform: "none",
              borderColor: "transparent",
            }}
            _focus={{
              boxShadow: "none",
            }}
            color='#fff'
            display={sidebarWidth === 275 ? "block" : "none"}>
            DOCUMENTATION
          </Button>
        </Link>
      </Flex>
    </Flex>
  );

  // SIDEBAR
  return (
    <Box
      ref={mainPanel}
      onMouseEnter={
        toggleSidebar
          ? () => setSidebarWidth(sidebarWidth === 120 ? 275 : 120)
          : null
      }
      onMouseLeave={
        toggleSidebar
          ? () => setSidebarWidth(sidebarWidth === 275 ? 120 : 275)
          : null
      }>
      <Box
        display={{ sm: "none", xl: "block" }}
        position='fixed'
        maxH='calc(100% - 20px)'>
        <Box
          bg={sidebarBg}
          backdropFilter='blur(30px)'
          w={`${sidebarWidth}px`}
          h='calc(100vh - 16px)'
          ps='20px'
          transition='all .2s'
          m={sidebarMargins}
          borderRadius={sidebarRadius}>
          {isWindows ? (
            <Scrollbars
              autoHide
              renderTrackVertical={
                document.documentElement.dir === "rtl"
                  ? renderTrackRTL
                  : renderTrack
              }
              renderThumbVertical={renderThumb}
              renderView={
                document.documentElement.dir === "rtl"
                  ? renderViewRTL
                  : renderView
              }>
              {sidebarContent}
            </Scrollbars>
          ) : (
            <Box id='sidebarScrollRemove' overflowY='scroll' height='100%'>
              {sidebarContent}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}

// FUNCTIONS

export function SidebarResponsive(props) {
  // to check for active links and opened collapses
  let location = useLocation();
  // this is for the rest of the collapses
  const mainPanel = React.useRef();
  let variantChange = "0.2s linear";
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName);
  };
  // this function creates the links and collapses that appear in the sidebar (left menu)
  const createLinks = (routes) => {
    // Chakra Color Modeconst activeBg = "#1A1F37";
    let inactiveBg = "#1A1F37";
    let activeColor = "white";
    let inactiveColor = "white";
    let activeBg = "brand.200";
    let activeAccordionBg = "gray.700";
    let inactiveColorIcon = "brand.200";
    let activeColorIcon = "white";
    return routes.map((prop, index) => {
      if (prop.category) {
        return (
          <>
            <Text
              fontSize={"md"}
              color={activeColor}
              mx='auto'
              ps={{
                sm: "10px",
                xl: "16px",
              }}
              py='12px'
              key={index}>
              {prop.name}
            </Text>
            {createLinks(prop.items)}
          </>
        );
      }
      if (prop.collapse) {
        return (
          <Accordion allowToggle>
            <AccordionItem border='none'>
              <AccordionButton
                display='flex'
                align='center'
                justify='center'
                key={index}
                borderRadius='15px'
                _focus={{ boxShadow: "none" }}
                _hover={{ boxShadow: "none" }}
                px={prop.icon ? null : "0px"}
                py={prop.icon ? "12px" : null}
                bg={
                  activeRoute(prop.path) && prop.icon
                    ? activeAccordionBg
                    : "transparent"
                }>
                {activeRoute(prop.path) ? (
                  <Button
                    boxSize='initial'
                    justifyContent='flex-start'
                    alignItems='center'
                    bg='transparent'
                    transition={variantChange}
                    mx={{
                      xl: "auto",
                    }}
                    px='0px'
                    borderRadius='15px'
                    _hover='none'
                    w='100%'
                    _active={{
                      bg: "inherit",
                      transform: "none",
                      borderColor: "transparent",
                    }}>
                    {prop.icon ? (
                      <Flex>
                        <IconBox
                          bg={activeBg}
                          color={activeColorIcon}
                          h='30px'
                          w='30px'
                          me='12px'
                          transition={variantChange}>
                          {prop.icon}
                        </IconBox>
                        <Text
                          color={activeColor}
                          my='auto'
                          fontSize='sm'
                          display={"block"}>
                          {prop.name}
                        </Text>
                      </Flex>
                    ) : (
                      <HStack spacing={"22px"} ps='10px' ms='0px'>
                        <Icon as={FaCircle} w='10px' color='brand.200' />
                        <Text color={activeColor} my='auto' fontSize='sm'>
                          {prop.name}
                        </Text>
                      </HStack>
                    )}
                  </Button>
                ) : (
                  <Button
                    boxSize='initial'
                    justifyContent='flex-start'
                    alignItems='center'
                    bg='transparent'
                    mx={{
                      xl: "auto",
                    }}
                    px='0px'
                    borderRadius='15px'
                    _hover='none'
                    w='100%'
                    _active={{
                      bg: "inherit",
                      transform: "none",
                      borderColor: "transparent",
                    }}
                    _focus={{
                      boxShadow: "none",
                    }}>
                    {prop.icon ? (
                      <Flex>
                        <IconBox
                          bg={inactiveBg}
                          color={inactiveColorIcon}
                          h='30px'
                          w='30px'
                          me='12px'
                          transition={variantChange}>
                          {prop.icon}
                        </IconBox>
                        <Text color={inactiveColor} my='auto' fontSize='sm'>
                          {prop.name}
                        </Text>
                      </Flex>
                    ) : (
                      <HStack spacing={"26px"} ps={"10px"} ms={"0px"}>
                        <Icon as={FaCircle} w='6px' color='brand.200' />
                        <Text
                          color={inactiveColor}
                          my='auto'
                          fontSize='md'
                          fontWeight='500'>
                          {prop.name}
                        </Text>
                      </HStack>
                    )}
                  </Button>
                )}
                <AccordionIcon color='gray.400' />
              </AccordionButton>
              <AccordionPanel pe={prop.icon ? null : "0px"} pb='8px'>
                <List>
                  {
                    prop.icon
                      ? createLinks(prop.items) // for bullet accordion links
                      : createAccordionLinks(prop.items) // for non-bullet accordion links
                  }
                </List>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        );
      } else {
        return (
          <NavLink to={prop.layout + prop.path}>
            {prop.icon ? (
              <Box>
                <HStack spacing='14px' py='15px' px='15px'>
                  <IconBox
                    bg='brand.200'
                    color='white'
                    h='30px'
                    w='30px'
                    transition={variantChange}>
                    {prop.icon}
                  </IconBox>
                  <Text
                    color={
                      activeRoute(prop.path.toLowerCase())
                        ? activeColor
                        : inactiveColor
                    }
                    fontSize='sm'>
                    {prop.name}
                  </Text>
                </HStack>
              </Box>
            ) : (
              <ListItem>
                <HStack spacing='22px' py='5px' px='10px'>
                  <Icon
                    as={FaCircle}
                    w={activeRoute(prop.path.toLowerCase()) ? "10px" : "6px"}
                    color='brand.200'
                  />
                  <Text
                    color={
                      activeRoute(prop.path.toLowerCase())
                        ? activeColor
                        : inactiveColor
                    }>
                    {prop.name}
                  </Text>
                </HStack>
              </ListItem>
            )}
          </NavLink>
        );
      }
    });
  };

  const createAccordionLinks = (routes) => {
    let inactiveColor = "gray.400";
    let activeColor = "white";
    return routes.map((prop, index) => {
      return (
        <NavLink to={prop.layout + prop.path}>
          <ListItem pt='5px' ms='26px' key={index}>
            <Text
              color={
                activeRoute(prop.path.toLowerCase())
                  ? activeColor
                  : inactiveColor
              }
              fontSize='sm'>
              {prop.name}
            </Text>
          </ListItem>
        </NavLink>
      );
    });
  };
  const { logoText, routes } = props;

  var links = <>{createLinks(routes)}</>;
  //  BRAND
  //  Chakra Color Mode
  let hamburgerColor = "white";
  var brand = (
    <Box pt={"35px"} mb='8px'>
      <Link
        href={`${process.env.PUBLIC_URL}/#/`}
        target='_blank'
        display='flex'
        lineHeight='100%'
        mb='30px'
        fontWeight='700'
        justifyContent='center'
        alignItems='center'
        fontSize='11px'>
        <SimmmpleLogoWhite w='32px' h='32px' me='10px' />
        <Box
          bg='linear-gradient(97.89deg, #FFFFFF 70.67%, rgba(117, 122, 140, 0) 108.55%)'
          bgClip='text'>
          <Text
            fontWeight='500'
            fontSize='sm'
            mt='3px'
            color='transparent'
            letterSpacing='0.18em'>
            {logoText}
          </Text>
        </Box>
      </Link>
      <HSeparator />
    </Box>
  );

  // SIDEBAR
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  // Color variables
  return (
    <Box ref={mainPanel} display={props.display}>
      <Box display={{ sm: "block", xl: "none" }}>
        <>
          <HamburgerIcon
            color={hamburgerColor}
            w='18px'
            h='18px'
            me='16px'
            ref={btnRef}
            colorScheme='brand'
            cursor='pointer'
            onClick={onOpen}
          />
          <Drawer
            placement={
              document.documentElement.dir === "rtl" ? "right" : "left"
            }
            isOpen={isOpen}
            onClose={onClose}
            finalFocusRef={btnRef}>
            <DrawerOverlay />
            <DrawerContent
              backdropFilter='blur(10px)'
              bg='linear-gradient(111.84deg, rgba(6, 11, 38, 0.94) 59.3%, rgba(26, 31, 55, 0) 100%); '
              w='250px'
              maxW='250px'
              ms={{
                sm: "16px",
              }}
              my={{
                sm: "16px",
              }}
              borderRadius='16px'>
              <DrawerCloseButton
                _focus={{ boxShadow: "none" }}
                _hover={{ boxShadow: "none" }}
              />
              <DrawerBody maxW='250px' px='1rem'>
                <Box maxW='100%' h='100vh'>
                  <Box mb='20px'>{brand}</Box>
                  <Stack direction='column' mb='40px'>
                    <Box>{links}</Box>
                  </Stack>
                  <Flex
                    borderRadius='15px'
                    flexDirection='column'
                    bgImage={SidebarHelpImage}
                    justifyContent='flex-start'
                    alignItems='start'
                    boxSize='border-box'
                    p='16px'
                    h='170px'
                    w='100%'>
                    <IconBox width='35px' h='35px' bg='white' mb='auto'>
                      <QuestionIcon color='brand.200' h='18px' w='18px' />
                    </IconBox>
                    <Text
                      fontSize='sm'
                      color='white'
                      fontWeight='700'
                      display='block'>
                      Need help?
                    </Text>
                    <Text fontSize='xs' color='white' mb='10px' display='block'>
                      Please check our docs
                    </Text>
                    <Link
                      w='100%'
                      href='https://demos.creative-tim.com/docs-vision-ui-dashboard-pro-chakra/'>
                      <Button
                        fontSize='10px'
                        fontWeight='700'
                        w='100%'
                        bg='linear-gradient(126.97deg, rgba(6, 11, 40, 0.74) 28.26%, rgba(10, 14, 35, 0.71) 91.2%)'
                        _hover='none'
                        _active={{
                          bg:
                            "linear-gradient(126.97deg, rgba(6, 11, 40, 0.74) 28.26%, rgba(10, 14, 35, 0.71) 91.2%)",
                          transform: "none",
                          borderColor: "transparent",
                        }}
                        _focus={{
                          boxShadow: "none",
                        }}
                        color='white'
                        display='block'>
                        DOCUMENTATION
                      </Button>
                    </Link>
                  </Flex>
                </Box>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      </Box>
    </Box>
  );
}
// PROPS

Sidebar.propTypes = {
  logoText: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
  variant: PropTypes.string,
};
SidebarResponsive.propTypes = {
  logoText: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
};

export default Sidebar;
