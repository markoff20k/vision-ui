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
  AvatarGroup,
  Flex,
  Icon,
  Progress,
  Td,
  Text,
  Tr,
  LightMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

function DashboardTableRow(props) {
  const { logo, name, members, budget, progression } = props;
  const textColor = "white";
  return (
    <Tr>
      <Td borderColor='#56577A' minWidth={{ sm: "250px" }} ps='0px'>
        <Flex align='center' py='.8rem' minWidth='100%' flexWrap='nowrap'>
          <Icon as={logo} h={"24px"} w={"24px"} pe='5px' />
          <Text
            fontSize='md'
            color={textColor}
            fontWeight='bold'
            minWidth='100%'>
            {name}
          </Text>
        </Flex>
      </Td>

      <Td borderColor='#56577A'>
        <AvatarGroup size='sm'>
          {members.map((member, index) => {
            return (
              <Avatar
                borderColor='gray.800'
                name='Ryan Florence'
                src={member}
                _hover={{ zIndex: "3", cursor: "pointer" }}
                key={index}
              />
            );
          })}
        </AvatarGroup>
      </Td>
      <Td borderColor='#56577A'>
        <Text fontSize='md' color={textColor} fontWeight='bold' pb='.5rem'>
          {budget}
        </Text>
      </Td>
      <Td borderColor='#56577A'>
        <Flex direction='column'>
          <Text
            fontSize='md'
            color='teal.300'
            fontWeight='bold'
            pb='.2rem'>{`${progression}%`}</Text>
          <LightMode>
            <Progress
              colorScheme={progression === 100 ? "teal" : "cyan"}
              bg='#2D2E5F'
              size='xs'
              value={progression}
              borderRadius='15px'
            />
          </LightMode>
        </Flex>
      </Td>
    </Tr>
  );
}

export default DashboardTableRow;
