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

import { Box, Flex, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import React from "react";

function TimelineRow(props) {
  const {
    logo,
    title,
    titleColor,
    date,
    color,
    index,
    tags,
    description,
    arrLength,
  } = props;

  return (
    <Flex alignItems='center' minH='78px' justifyContent='start' mb='5px'>
      <Flex direction='column' h='100%'>
        <Icon
          as={logo}
          color={color}
          h={"30px"}
          w={"26px"}
          pe='6px'
          zIndex='1'
          position='relative'
          right={document.documentElement.dir === "rtl" ? "-8px" : ""}
          left={document.documentElement.dir === "rtl" ? "" : "-8px"}
        />
        <Box
          w='2px'
          bg='transparent'
          h={index === arrLength - 1 ? "15px" : "100%"}></Box>
      </Flex>
      <Flex direction='column' justifyContent='flex-start' h='100%'>
        <Text
          fontWeight='700'
          fontSize='sm'
          color={titleColor !== undefined ? titleColor : "#fff"}>
          {title}
        </Text>
        <Text
          fontSize='xs'
          color={titleColor === "#fff" ? "#fff" : "gray.400"}
          mb='14px'
          fontWeight='500'>
          {date}
        </Text>
        {description !== undefined ? (
          <Text fontSize='sm' color='gray.400' mb='18px' maxW='70%'>
            {description}
          </Text>
        ) : null}
        {tags !== undefined ? (
          <Stack direction='row' spacing='6px'>
            {tags.map((tag, index) => {
              return (
                <Tag
                  bg={tag.bgTag}
                  fontSize='10px'
                  size='lg'
                  color={tag.bgTag === "#fff" ? "brand.200" : "#fff"}
                  mb='16px'
                  borderRadius='15px'
                  alignSelf='flex-start'
                  key={index}>
                  {tag.titleTag}
                </Tag>
              );
            })}
          </Stack>
        ) : null}
      </Flex>
    </Flex>
  );
}

export default TimelineRow;
