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

import { Avatar, Flex, Icon, Td, Text, Tr } from "@chakra-ui/react";
import React from "react";
import { BsCircleFill } from "react-icons/bs";

function TablesReportsRow(props) {
  const { image, name, email, domain, review, employed, id, isLast } = props;

  return (
    <Tr border='none'>
      <Td
        minWidth={{ sm: "250px" }}
        ps='0px'
        border={isLast ? "none" : null}
        borderColor='#56577A'>
        <Flex align='center' py='.8rem' minWidth='100%' flexWrap='nowrap'>
          <Avatar src={image} w='50px' borderRadius='12px' me='18px' />
          <Text fontWeight='500' fontSize='sm' color='#fff' minWidth='100%'>
            {name}
          </Text>
        </Flex>
      </Td>

      <Td border={isLast ? "none" : null} borderColor='#56577A'>
        <Flex direction='column'>
          <Text fontWeight='500' fontSize='sm' color='#fff'>
            {domain}
          </Text>
        </Flex>
      </Td>
      <Td border={isLast ? "none" : null} borderColor='#56577A'>
        <Flex align='center'>
          <Icon
            as={BsCircleFill}
            w='8px'
            h='8px'
            color={
              review === "Positive"
                ? "brand.200"
                : review === "Negative"
                ? "red.500"
                : "#fff"
            }
            me='6px'
          />
          <Text fontWeight='500' color='#fff' fontSize='sm'>
            {review}
          </Text>
        </Flex>
      </Td>
      <Td border={isLast ? "none" : null} borderColor='#56577A'>
        <Text fontWeight='500' fontSize='sm' color='#fff' pb='.5rem'>
          {email}
        </Text>
      </Td>
      <Td border={isLast ? "none" : null} borderColor='#56577A'>
        <Text fontWeight='500' fontSize='sm' color='#fff' pb='.5rem'>
          {employed}
        </Text>
      </Td>
      <Td border={isLast ? "none" : null} borderColor='#56577A'>
        <Text fontWeight='500' fontSize='sm' color='#fff' pb='.5rem'>
          {id}
        </Text>
      </Td>
    </Tr>
  );
}

export default TablesReportsRow;
