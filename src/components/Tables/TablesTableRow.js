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
  Avatar,
  Badge,
  Button,
  Flex,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

function TablesTableRow(props) {
  const { logo, name, email, subdomain, domain, status, date } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");

  return (
    <Tr>
      <Td minWidth={{ sm: "250px" }} ps='0px'>
        <Flex align='center' py='.8rem' minWidth='100%' flexWrap='nowrap'>
          <Avatar src={logo} w='50px' borderRadius='12px' me='18px' />
          <Flex direction='column'>
            <Text
              fontSize='md'
              color={textColor}
              fontWeight='bold'
              minWidth='100%'>
              {name}
            </Text>
            <Text fontSize='sm' color='gray.400' fontWeight='500'>
              {email}
            </Text>
          </Flex>
        </Flex>
      </Td>

      <Td>
        <Flex direction='column'>
          <Text fontSize='md' color={textColor} fontWeight='bold'>
            {domain}
          </Text>
          <Text fontSize='sm' color='gray.400' fontWeight='500'>
            {subdomain}
          </Text>
        </Flex>
      </Td>
      <Td>
        <Badge
          bg={status === "Online" ? "green.400" : bgStatus}
          color={status === "Online" ? "white" : colorStatus}
          fontSize='16px'
          p='3px 10px'
          borderRadius='8px'>
          {status}
        </Badge>
      </Td>
      <Td>
        <Text fontSize='md' color={textColor} fontWeight='bold' pb='.5rem'>
          {date}
        </Text>
      </Td>
      <Td>
        <Button p='0px' bg='transparent' variant='no-hover'>
          <Text
            fontSize='md'
            color='gray.400'
            fontWeight='bold'
            cursor='pointer'>
            Edit
          </Text>
        </Button>
      </Td>
    </Tr>
  );
}

export default TablesTableRow;
