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

export const AlertStyles = {
  components: {
    Alert: {
      // 3. We can add a new visual variant
      variants: {
        subtle: {
          borderColor: "red !important",
        },
        "no-hover": {
          _hover: {
            boxShadow: "none",
          },
        },
        brand: {
          bg: "#582CFF",
          _hover: "none",
          color: "#fff",
          _active: "none",
        },
        "transparent-with-icon": {
          bg: "transparent",
          fontWeight: "bold",
          borderRadius: "inherit",
          cursor: "pointer",
          _hover: "none",
          _active: {
            bg: "transparent",
            transform: "none",
            borderColor: "transparent",
          },
          _focus: {
            boxShadow: "none",
          },
          _hover: {
            boxShadow: "none",
          },
        },
      },
      baseStyle: {
        borderRadius: "12px",
        _focus: {
          boxShadow: "none",
        },
      },
    },
  },
};
