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
import routes from "routes.js";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
  HStack,
  Icon,
  Link,
  Menu,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

// Custom components
import IconBox from "components/Icons/IconBox";
import { SidebarResponsive } from "components/Sidebar/Sidebar";

// React icons
import { RocketIcon } from "components/Icons/Icons";
import { AiFillStar } from "react-icons/ai";
import { GoChevronDown } from "react-icons/go";

// Images assets
import bgCard from "assets/img/background-card-reports.png";

export default function AuthNavbar(props) {
  const {
    isOpen: isOpenPages,
    onOpen: onOpenPages,
    onClose: onClosePages,
  } = useDisclosure();

  const {
    isOpen: isOpenAuth,
    onOpen: onOpenAuth,
    onClose: onCloseAuth,
  } = useDisclosure();

  const {
    isOpen: isOpenApplication,
    onOpen: onOpenApplication,
    onClose: onCloseApplication,
  } = useDisclosure();

  const {
    isOpen: isOpenEcommerce,
    onOpen: onOpenEcommerce,
    onClose: onCloseEcommerce,
  } = useDisclosure();
  const { logo, logoText, secondary, ...rest } = props;

  let authObject = {};
  routes.forEach((route) => {
    if (route.items) {
      authObject = route.items.find((link) => link.name === "Authentication");
    }
  });

  let applicationsObject = {};
  routes.forEach((route) => {
    if (route.items) {
      applicationsObject = route.items.find(
        (link) => link.name === "Applications"
      );
    }
  });

  let ecommerceObject = {};
  routes.forEach((route) => {
    if (route.items) {
      ecommerceObject = route.items.find((link) => link.name === "Ecommerce");
    }
  });

  let extraArr = [];
  routes.forEach((route) => {
    route.items.forEach((item) => {
      if (item.items && item.name === "Pages") {
        extraArr = item.items.filter((link) => !link.collapse);
      }
    });
  });

  // verifies if routeName is the one active (in browser input)

  // Chakra color mode
  let mainText = "#fff";
  let navbarBg =
    "linear-gradient(123.64deg, rgba(255, 255, 255, 0) -22.38%, rgba(255, 255, 255, 0.039) 70.38%)";
  let navbarBorder = "rgba(226, 232, 240, 0.3)";
  let navbarShadow = useColorModeValue(
    "0px 7px 23px rgba(0, 0, 0, 0.05)",
    "none"
  );
  let navbarFilter = useColorModeValue(
    "none",
    "drop-shadow(0px 7px 23px rgba(0, 0, 0, 0.05))"
  );
  let navbarBackdrop = "blur(42px)";
  let bgButton = "#582CFF";
  let navbarPosition = "fixed";
  let colorButton = "#fff";
  if (props.secondary === true) {
    navbarBg = "none";
    navbarBorder = "none";
    navbarShadow = "initial";
    navbarFilter = "initial";
    navbarBackdrop = "none";
    bgButton = "#fff";
    colorButton = "#2D3748";
    mainText = "#fff";
    navbarPosition = "absolute";
  }

  const createPagesLinks = (routes) => {
    return routes.map((link) => {
      if (
        link.name === "Applications" ||
        link.name === "Ecommerce" ||
        link.name === "Authentication" ||
        link.name === "RTL" ||
        link.name === "Widgets" ||
        link.name === "Charts" ||
        link.name === "Alerts"
      ) {
        return;
      }
      if (link.name === "Pricing Page") {
        return (
          <Stack direction='column'>
            <Stack
              direction='row'
              spacing='6px'
              align='center'
              mb='6px'
              cursor='default'>
              <IconBox bg='brand.200' color='white' h='30px' w='30px'>
                <RocketIcon color='inherit' />
              </IconBox>
              <Text fontWeight='bold' fontSize='sm' color='#fff'>
                Extra
              </Text>
            </Stack>
            {createExtraLinks(extraArr)}
          </Stack>
        );
      }
      if (link.authIcon) {
        return (
          <Stack direction='column'>
            <Stack
              direction='row'
              spacing='6px'
              align='center'
              mb='6px'
              cursor='default'>
              <IconBox bg='brand.200' color='white' h='30px' w='30px'>
                {link.authIcon}
              </IconBox>
              <Text fontWeight='bold' fontSize='sm' color='#fff'>
                {link.name}
              </Text>
            </Stack>
            {createPagesLinks(link.items)}
          </Stack>
        );
      } else {
        if (link.component) {
          return (
            <NavLink to={link.layout + link.path}>
              <MenuItem
                ps='36px'
                py='0px'
                _hover={{ boxShadow: "none", bg: "none" }}
                borderRadius='12px'>
                <Text color='gray.400' fontSize='sm' fontWeight='500'>
                  {link.name}
                </Text>
              </MenuItem>
            </NavLink>
          );
        } else {
          return <>{createPagesLinks(link.items)}</>;
        }
      }
    });
  };

  const createExtraLinks = (routes) => {
    return routes.map((link) => {
      return (
        <NavLink to={link.layout + link.path}>
          <MenuItem
            ps='36px'
            py='0px'
            _hover={{ boxShadow: "none", bg: "none" }}
            borderRadius='12px'>
            <Text color='gray.400' fontSize='sm' fontWeight='500'>
              {link.name}
            </Text>
          </MenuItem>
        </NavLink>
      );
    });
  };

  const createAuthLinks = (routes) => {
    return routes.map((link) => {
      if (link.authIcon) {
        return (
          <Stack direction='column'>
            <Stack
              direction='row'
              spacing='6px'
              align='center'
              mb='6px'
              cursor='default'>
              <IconBox bg='brand.200' color='white' h='30px' w='30px'>
                {link.authIcon}
              </IconBox>
              <Text fontWeight='700' fontSize='sm' color='#fff'>
                {link.name}
              </Text>
            </Stack>
            {createAuthLinks(link.items)}
          </Stack>
        );
      } else {
        return (
          <NavLink to={link.layout + link.path}>
            <MenuItem
              ps='36px'
              py='0px'
              _hover={{ boxShadow: "none", bg: "none" }}
              borderRadius='12px'>
              <Text color='gray.400' fontSize='sm' fontWeight='500'>
                {link.name}
              </Text>
            </MenuItem>
          </NavLink>
        );
      }
    });
  };

  const createApplicationLinks = (routes) => {
    return routes.map((link) => {
      return (
        <NavLink to={link.layout + link.path}>
          <Stack direction='row' spacing='12px' align='center' cursor='pointer'>
            <IconBox bg='brand.200' color='white' h='30px' w='30px'>
              {link.authIcon}
            </IconBox>
            <Text fontWeight='bold' fontSize='sm' color='#fff'>
              {link.name}
            </Text>
          </Stack>
        </NavLink>
      );
    });
  };

  const createEcommerceLinks = (routes) => {
    return routes.map((link) => {
      if (link.authIcon) {
        return (
          <Stack direction='column'>
            <Stack
              direction='row'
              spacing='6px'
              align='center'
              mb='6px'
              cursor='default'>
              <IconBox bg='brand.200' color='white' h='30px' w='30px'>
                {link.authIcon}
              </IconBox>
              <Text fontWeight='bold' fontSize='sm' color='#fff'>
                {link.name}
              </Text>
            </Stack>
            {createPagesLinks(link.items)}
          </Stack>
        );
      } else {
        if (link.component) {
          return (
            <NavLink to={link.layout + link.path}>
              <MenuItem
                ps='36px'
                py='0px'
                _hover={{ boxShadow: "none", bg: "none" }}
                borderRadius='12px'>
                <Text color='gray.400' fontSize='sm' fontWeight='500'>
                  {link.name}
                </Text>
              </MenuItem>
            </NavLink>
          );
        } else {
          return <>{createPagesLinks(link.items)}</>;
        }
      }
    });
  };

  var brand = (
    <Link
      href={`${process.env.PUBLIC_URL}/#/`}
      target='_blank'
      display='flex'
      lineHeight='100%'
      fontWeight='bold'
      justifyContent='center'
      alignItems='center'
      color={mainText}>
      <Box
        bg='linear-gradient(97.89deg, #FFFFFF 70.67%, rgba(117, 122, 140, 0) 108.55%)'
        bgClip='text'
        ms='12px'>
        <Text
          fontSize='sm'
          fontWeight='500'
          color='transparent'
          letterSpacing='0.18em'>
          {logoText}
        </Text>
      </Box>
    </Link>
  );

  const linksAuth = (
    <HStack display={{ sm: "none", lg: "flex" }} spacing='17px'>
      <Stack
        direction='row'
        spacing='4px'
        align='center'
        color='#fff'
        fontWeight='bold'
        onMouseEnter={onOpenPages}
        onMouseLeave={onClosePages}
        cursor='pointer'
        position='relative'>
        <Text
          fontSize='10px'
          fontWeight='500'
          letterSpacing='.5px'
          color={mainText}>
          PAGES
        </Text>
        <Icon
          as={GoChevronDown}
          color={mainText}
          w='11px'
          h='11px'
          fontWeight='2000'
        />
        <Menu isOpen={isOpenPages}>
          <MenuList
            border='none'
            bg='#060B28'
            p='22px'
            minW='550px'
            cursor='default'
            borderRadius='15px'
            position='absolute'
            top='30px'
            left='-10px'>
            <Grid templateColumns='repeat(3, 1fr)' gap='16px'>
              {createPagesLinks(routes)}
            </Grid>
          </MenuList>
        </Menu>
      </Stack>
      <Stack
        direction='row'
        spacing='4px'
        align='center'
        color='#fff'
        fontWeight='bold'
        onMouseEnter={onOpenAuth}
        onMouseLeave={onCloseAuth}
        cursor='pointer'
        position='relative'>
        <Text
          fontSize='10px'
          fontWeight='500'
          letterSpacing='.5px'
          color={mainText}>
          AUTHENTICATIONS
        </Text>
        <Icon
          as={GoChevronDown}
          color={mainText}
          w='11px'
          h='11px'
          fontWeight='2000'
        />
        <Menu isOpen={isOpenAuth}>
          <MenuList
            border='none'
            bg='#060B28'
            p='22px'
            minW='450px'
            cursor='default'
            borderRadius='15px'
            position='absolute'
            top='30px'
            left='-10px'>
            <Stack direction='row' spacing='24px'>
              <Flex
                direction='column'
                justify='center'
                align='center'
                bgImage={bgCard}
                maxW='220px'
                minH='230px'
                borderRadius='15px'>
                <IconBox
                  bg='white'
                  color='white'
                  borderRadius='50%'
                  h='50px'
                  w='50px'
                  mb='12px'>
                  <Icon as={AiFillStar} w='25px' h='25px' color='brand.200' />
                </IconBox>
                <Text
                  fontSize='xl'
                  fontWeight='bold'
                  color='#fff'
                  maxW='80%'
                  textAlign='center'>
                  Explore our utilities pages
                </Text>
              </Flex>
              <Grid templateColumns='1fr' gap='16px'>
                {createAuthLinks(authObject.items)}
              </Grid>
            </Stack>
          </MenuList>
        </Menu>
      </Stack>
      <Stack
        direction='row'
        spacing='4px'
        align='center'
        color='#fff'
        fontWeight='bold'
        onMouseEnter={onOpenApplication}
        onMouseLeave={onCloseApplication}
        cursor='pointer'
        position='relative'>
        <Text
          fontSize='10px'
          fontWeight='500'
          letterSpacing='.5px'
          color={mainText}>
          APPLICATION
        </Text>
        <Icon
          as={GoChevronDown}
          color={mainText}
          w='11px'
          h='11px'
          fontWeight='2000'
        />
        <Menu isOpen={isOpenApplication}>
          <MenuList
            border='none'
            bg='#060B28'
            p='22px'
            cursor='default'
            borderRadius='15px'
            position='absolute'
            top='30px'
            left='-10px'>
            <Grid templateColumns='1fr' gap='16px'>
              {createApplicationLinks(applicationsObject.items)}
            </Grid>
          </MenuList>
        </Menu>
      </Stack>
      <Stack
        direction='row'
        spacing='4px'
        align='center'
        color='#fff'
        fontWeight='bold'
        onMouseEnter={onOpenEcommerce}
        onMouseLeave={onCloseEcommerce}
        cursor='pointer'
        position='relative'>
        <Text
          fontSize='10px'
          fontWeight='500'
          letterSpacing='.5px'
          color={mainText}>
          ECOMMERCE
        </Text>
        <Icon
          as={GoChevronDown}
          color={mainText}
          w='11px'
          h='11px'
          fontWeight='2000'
        />
        <Menu isOpen={isOpenEcommerce}>
          <MenuList
            border='none'
            bg='#060B28'
            p='22px'
            minW='350px'
            cursor='default'
            borderRadius='15px'
            position='absolute'
            top='30px'
            left='-10px'>
            <Grid templateColumns='repeat(2, 1fr)' gap='16px'>
              {createEcommerceLinks(ecommerceObject.items)}
            </Grid>
          </MenuList>
        </Menu>
      </Stack>
    </HStack>
  );
  return (
    <Flex
      position={navbarPosition}
      top='16px'
      left='50%'
      transform='translate(-50%, 0px)'
      background={navbarBg}
      border={props.secondary ? "none" : "2px solid"}
      borderColor={navbarBorder}
      boxShadow={navbarShadow}
      filter={navbarFilter}
      backdropFilter={navbarBackdrop}
      borderRadius='15px'
      px='16px'
      py='22px'
      mx='auto'
      width='1044px'
      maxW='90%'
      alignItems='center'>
      <Flex w='100%' justifyContent={{ sm: "start", lg: "space-between" }}>
        {brand}
        <Box ms={{ base: "auto", lg: "0px" }} display={{ lg: "none" }}>
          <SidebarResponsive
            logoText={props.logoText}
            secondary={props.secondary}
            routes={routes}
            {...rest}
          />
        </Box>
        {linksAuth}
        <Link href='https://www.creative-tim.com/product/vision-ui-dashboard-pro-chakra'>
          <Button
            variant='brand'
            fontSize='10px'
            fontWeight='bold'
            borderRadius='35px'
            px='30px'
            display={{
              sm: "none",
              lg: "flex",
            }}>
            BUY NOW
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}

AuthNavbar.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  brandText: PropTypes.string,
};
