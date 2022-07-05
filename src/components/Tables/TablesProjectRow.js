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

import {
  Button,
  Flex,
  Icon,
  Progress,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FaEllipsisV } from "react-icons/fa";

function DashboardTableRow(props) {
  const { logo, name, status, budget, progression } = props;
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Tr>
      <Td minWidth={{ sm: "250px" }} ps='0px'>
        <Flex alignItems='center' py='.8rem' minWidth='100%' flexWrap='nowrap'>
          <Icon as={logo} h={"24px"} w={"24px"} me='18px' />
          <Text
            fontSize='md'
            color={textColor}
            fontWeight='bold'
            minWidth='100%'>
            {name}
          </Text>
        </Flex>
      </Td>
      <Td>
        <Text fontSize='md' color={textColor} fontWeight='bold' pb='.5rem'>
          {budget}
        </Text>
      </Td>
      <Td>
        <Text fontSize='md' color={textColor} fontWeight='bold' pb='.5rem'>
          {status}
        </Text>
      </Td>
      <Td>
        <Flex direction='column'>
          <Text
            fontSize='md'
            color='teal.300'
            fontWeight='bold'
            pb='.2rem'>{`${progression}%`}</Text>
          <Progress
            colorScheme={progression === 100 ? "teal" : "cyan"}
            size='xs'
            bg='#2D2E5F'
            value={progression}
            borderRadius='15px'
          />
        </Flex>
      </Td>
      <Td>
        <Button p='0px' bg='transparent'>
          <Icon as={FaEllipsisV} color='gray.400' cursor='pointer' />
        </Button>
      </Td>
    </Tr>
  );
}

export default DashboardTableRow;
