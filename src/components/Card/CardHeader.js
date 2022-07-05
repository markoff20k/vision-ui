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

import { Box, useStyleConfig } from "@chakra-ui/react";
function CardHeader(props) {
  const { variant, children, ...rest } = props;
  const styles = useStyleConfig("CardHeader", { variant });
  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
}

export default CardHeader;
