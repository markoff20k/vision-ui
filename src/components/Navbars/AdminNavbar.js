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

// Chakra Imports
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Icon,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { SidebarContext } from "contexts/SidebarContext";
import PropTypes from "prop-types";
import React, { useContext, useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import AdminNavbarLinks from "./AdminNavbarLinks";

export default function AdminNavbar(props) {
  const [scrolled, setScrolled] = useState(false);
  const {
    sidebarWidth,
    setSidebarWidth,
    toggleSidebar,
    setToggleSidebar,
  } = useContext(SidebarContext);
  const {
    variant,
    children,
    fixed,
    secondary,
    brandText,
    onOpen,
    ...rest
  } = props;

  // Here are all the props that may change depending on navbar's type or state.(secondary, variant, scrolled)
  let mainText = "white";
  let secondaryText = "gray.400";
  let navbarPosition = "absolute";
  let navbarFilter = "none";
  let navbarBackdrop = "unset";
  let navbarShadow = "none";
  let navbarBg = "none";
  let navbarBorder = "transparent";
  let secondaryMargin = "0px";
  let paddingS = "15px";
  let paddingX = "15px";
  if (props.secondary) {
    navbarBackdrop = "none";
  }
  if (props.fixed === true)
    if (scrolled === true) {
      navbarPosition = "fixed";
      navbarShadow = "0px 7px 23px rgba(0, 0, 0, 0.05)";
      navbarBg =
        "linear-gradient(rgba(255, 255, 255, 0) 0% rgba(255, 255, 255, 0.39) @ 100%)";
      navbarBorder = "rgba(226, 232, 240, 0.3)";
      navbarFilter = "drop-shadow(0px 7px 23px rgba(0, 0, 0, 0.05))";
      navbarBackdrop = "blur(42px)";
    }
  const changeNavbar = () => {
    if (window.scrollY > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  window.addEventListener("scroll", changeNavbar);
  return (
    <Flex
      position={navbarPosition}
      boxShadow={navbarShadow}
      bg={navbarBg}
      borderColor={navbarBorder}
      filter={navbarFilter}
      backdropFilter={navbarBackdrop}
      borderWidth='1.5px'
      borderStyle='solid'
      transitionDelay='0s, 0s, 0s, 0s'
      transitionDuration=' 0.25s, 0.25s, 0.25s, 0s'
      transition-property='box-shadow, background-color, filter, border'
      transitionTimingFunction='linear, linear, linear, linear'
      alignItems={{ xl: "center" }}
      borderRadius='16px'
      display='flex'
      minH='75px'
      left={document.documentElement.dir === "rtl" ? "30px" : ""}
      right={document.documentElement.dir === "rtl" ? "" : "30px"}
      justifyContent={{ xl: "center" }}
      lineHeight='25.6px'
      mx='auto'
      mt={secondaryMargin}
      pb='8px'
      px={{
        sm: paddingX,
        md: "30px",
      }}
      ps={{
        sm: paddingS,
        md: "20px",
      }}
      pt='8px'
      top='18px'
      w={{
        sm: "calc(100vw - 30px)",
        xl: `calc(100vw - 75px - ${sidebarWidth}px)`,
      }}>
      <Flex
        w='100%'
        flexDirection={{
          sm: "column",
          md: "row",
        }}
        alignItems={{ xl: "center" }}>
        <Box mb={{ sm: "8px", md: "0px" }}>
          <Breadcrumb>
            <BreadcrumbItem color={mainText}>
              <BreadcrumbLink href='#' color={secondaryText}>
                Pages
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem color={mainText}>
              <BreadcrumbLink href='#' color={mainText}>
                {brandText}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          {/* Here we create navbar brand, based on route name */}
          <Link
            color={mainText}
            href='#'
            bg='inherit'
            borderRadius='inherit'
            fontWeight='700'
            _hover={{ color: { mainText } }}
            _active={{
              bg: "inherit",
              transform: "none",
              borderColor: "transparent",
            }}
            _focus={{
              boxShadow: "none",
            }}>
            {brandText}
          </Link>
        </Box>
        {toggleSidebar ? (
          <Icon
            as={CgMenuRight}
            w='100px'
            h='20px'
            ms='20px'
            color={props.fixed ? (scrolled ? "#333" : "#fff") : "#fff"}
            cursor='pointer'
            display={{ sm: "none", xl: "block" }}
            onClick={() => {
              setSidebarWidth(sidebarWidth === 275 ? 120 : 275);
              setToggleSidebar(!toggleSidebar);
            }}
          />
        ) : (
          <HamburgerIcon
            w='100px'
            h='20px'
            ms='20px'
            color='#fff'
            cursor='pointer'
            display={{ sm: "none", xl: "block" }}
            onClick={() => {
              setSidebarWidth(sidebarWidth === 275 ? 120 : 275);
              setToggleSidebar(!toggleSidebar);
            }}
          />
        )}
        <Box ms='auto' w={{ sm: "100%", md: "unset" }}>
          <AdminNavbarLinks
            onOpen={props.onOpen}
            logoText={props.logoText}
            secondary={props.secondary}
            fixed={props.fixed}
          />
        </Box>
      </Flex>
    </Flex>
  );
}

AdminNavbar.propTypes = {
  brandText: PropTypes.string,
  variant: PropTypes.string,
  secondary: PropTypes.bool,
  fixed: PropTypes.bool,
  onOpen: PropTypes.func,
};
