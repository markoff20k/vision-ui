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

// Chakra imports
import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
} from "@chakra-ui/react";

// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import SearchTable2 from "components/Tables/SearchTable2";

// Icons
import { IoIosArrowDown } from "react-icons/io";

// Data
import { columnsData2 } from "variables/columnsData";
import tableData2 from "variables/tableData2.json";

function OrderList() {
  return (
    <Flex direction='column' pt={{ sm: "125px", md: "75px" }}>
      <Flex
        direction={{ sm: "column", md: "row" }}
        justify='space-between'
        align='center'
        w='100%'
        mb='24px'>
        <Button
          variant='brand'
          w='125px'
          h='35px'
          fontSize='xs'
          fontWeight='bold'
          alignSelf={{ sm: "flex-start", lg: null }}
          mb={{ sm: "12px", md: "0px" }}>
          NEW ORDER
        </Button>
        <Stack
          direction='row'
          spacing='10px'
          alignSelf={{ sm: "flex-start", lg: "auto" }}>
          <Menu>
            <MenuButton
              as={Button}
              variant='outlineWhite'
              w='125px'
              h='35px'
              fontSize='xs'
              fontWeight='bold'
              rightIcon={<IoIosArrowDown />}>
              FILTERS
            </MenuButton>
            <MenuList
              border='transparent'
              backdropFilter='blur(63px)'
              bg='linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.69) 76.65%)'
              borderRadius='20px'>
              <MenuItem color='gray.500'>Status: Paid</MenuItem>
              <MenuItem color='gray.500'>Status: Refunded</MenuItem>
              <MenuItem color='gray.500'>Status: Canceled</MenuItem>
              <MenuDivider />
              <MenuItem color='red.300'>Remove filter</MenuItem>
            </MenuList>
          </Menu>
          <Button
            variant='outlineWhite'
            w='100px'
            h='35px'
            borderRadius='12px'
            fontSize='10px'
            fontWeight='bold'>
            EXPORT CSV
          </Button>
        </Stack>
      </Flex>
      <Card px='0px'>
        <CardBody>
          <SearchTable2 tableData={tableData2} columnsData={columnsData2} />
        </CardBody>
      </Card>
    </Flex>
  );
}

export default OrderList;
