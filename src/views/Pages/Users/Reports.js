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
  Grid,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Progress,
  LightMode,
  Stack,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

// Images
import bgCardReports from "assets/img/background-card-reports.png";

// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import IconBox from "components/Icons/IconBox";
import TablesReportsRow from "components/Tables/TablesReportsRow";

// Icons
import { CartIcon, RocketIcon } from "components/Icons/Icons";
import { AiFillLike } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";

// Data
import { tablesReportsData } from "variables/general";

function Reports() {
  // Ellipsis Modals
  const {
    isOpen: isOpen1,
    onOpen: onOpen1,
    onClose: onClose1,
  } = useDisclosure();

  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();

  const {
    isOpen: isOpen3,
    onOpen: onOpen3,
    onClose: onClose3,
  } = useDisclosure();

  const {
    isOpen: isOpen4,
    onOpen: onOpen4,
    onClose: onClose4,
  } = useDisclosure();

  return (
    <Flex direction='column' pt={{ base: "150px", lg: "75px" }}>
      <Grid templateColumns={{ md: "repeat(2, 1fr)" }} gap='24px' mb='24px'>
        <Grid
          templateColumns={{ md: "repeat(2, 1fr)" }}
          templateRows={{ md: "repeat(2, 1fr)" }}
          gap='24px'>
          {/* Complex Statistics Card */}
          <Card backgroundImage={bgCardReports} minH='168px'>
            <CardBody h='100%'>
              <Flex
                direction='column'
                justify='space-between'
                w='100%'
                h='100%'>
                <Flex justify='space-between' w='100%'>
                  <IconBox bg='brand.200' w='50px' h='50px'>
                    <Icon as={FaUser} w='25px' h='25px' color='#fff' />
                  </IconBox>
                  <Menu isOpen={isOpen1} onClose={onClose1}>
                    <MenuButton onClick={onOpen1} alignSelf='flex-start'>
                      <Icon
                        as={IoEllipsisHorizontalSharp}
                        color='gray.400'
                        w='20px'
                        h='20px'
                      />
                    </MenuButton>
                    <MenuList
                      border='transparent'
                      backdropFilter='blur(63px)'
                      bg='linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.69) 76.65%)'
                      borderRadius='20px'>
                      <MenuItem
                        borderRadius='8px'
                        _hover={{
                          bg: "transparent",
                        }}
                        _active={{
                          bg: "transparent",
                        }}
                        _focus={{
                          bg: "transparent",
                        }}
                        mb='10px'
                        color='white'>
                        Action
                      </MenuItem>
                      <MenuItem
                        borderRadius='8px'
                        _hover={{
                          bg: "transparent",
                        }}
                        _active={{
                          bg: "transparent",
                        }}
                        _focus={{
                          bg: "transparent",
                        }}
                        mb='10px'
                        color='white'>
                        Another action
                      </MenuItem>
                      <MenuItem
                        borderRadius='8px'
                        _hover={{
                          bg: "transparent",
                        }}
                        _active={{
                          bg: "transparent",
                        }}
                        _focus={{
                          bg: "transparent",
                        }}
                        mb='10px'
                        color='white'>
                        Something else here
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Flex>
                <Flex justify='space-between' w='100%'>
                  <Flex direction='column'>
                    <Text color='#fff' fontWeight='bold' fontSize='md'>
                      1600
                    </Text>
                    <Text color='gray.400' fontWeight='500' fontSize='xs'>
                      Users Active
                    </Text>
                  </Flex>
                  <Text
                    color='#fff'
                    fontWeight='bold'
                    fontSize='xs'
                    alignSelf='flex-end'>
                    +55%
                  </Text>
                </Flex>
              </Flex>
            </CardBody>
          </Card>
          {/* Complex Statistics Card */}
          <Card backgroundImage={bgCardReports} minH='168px'>
            <CardBody h='100%'>
              <Flex
                direction='column'
                justify='space-between'
                w='100%'
                h='100%'>
                <Flex justify='space-between' w='100%'>
                  <IconBox bg='brand.200' w='50px' h='50px'>
                    <Icon as={RocketIcon} w='25px' h='25px' color='#fff' />
                  </IconBox>
                  <Menu isOpen={isOpen2} onClose={onClose2}>
                    <MenuButton onClick={onOpen2} alignSelf='flex-start'>
                      <Icon
                        as={IoEllipsisHorizontalSharp}
                        color='gray.400'
                        w='20px'
                        h='20px'
                      />
                    </MenuButton>
                    <MenuList
                      border='transparent'
                      backdropFilter='blur(63px)'
                      bg='linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.69) 76.65%)'
                      borderRadius='20px'>
                      <MenuItem
                        borderRadius='8px'
                        _hover={{
                          bg: "transparent",
                        }}
                        _active={{
                          bg: "transparent",
                        }}
                        _focus={{
                          bg: "transparent",
                        }}
                        mb='10px'
                        color='white'>
                        Action
                      </MenuItem>
                      <MenuItem
                        borderRadius='8px'
                        _hover={{
                          bg: "transparent",
                        }}
                        _active={{
                          bg: "transparent",
                        }}
                        _focus={{
                          bg: "transparent",
                        }}
                        mb='10px'
                        color='white'>
                        Another action
                      </MenuItem>
                      <MenuItem
                        borderRadius='8px'
                        _hover={{
                          bg: "transparent",
                        }}
                        _active={{
                          bg: "transparent",
                        }}
                        _focus={{
                          bg: "transparent",
                        }}
                        mb='10px'
                        color='white'>
                        Something else here
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Flex>
                <Flex justify='space-between' w='100%'>
                  <Flex direction='column'>
                    <Text color='#fff' fontWeight='bold' fontSize='md'>
                      357
                    </Text>
                    <Text color='gray.400' fontWeight='500' fontSize='xs'>
                      Click Events
                    </Text>
                  </Flex>
                  <Text
                    color='#fff'
                    fontWeight='bold'
                    fontSize='xs'
                    alignSelf='flex-end'>
                    +124%
                  </Text>
                </Flex>
              </Flex>
            </CardBody>
          </Card>
          {/* Complex Statistics Card */}
          <Card backgroundImage={bgCardReports} minH='168px'>
            <CardBody h='100%'>
              <Flex
                direction='column'
                justify='space-between'
                w='100%'
                h='100%'>
                <Flex justify='space-between' w='100%'>
                  <IconBox bg='brand.200' w='50px' h='50px'>
                    <Icon as={CartIcon} w='25px' h='25px' color='#fff' />
                  </IconBox>
                  <Menu isOpen={isOpen3} onClose={onClose3}>
                    <MenuButton onClick={onOpen3} alignSelf='flex-start'>
                      <Icon
                        as={IoEllipsisHorizontalSharp}
                        color='gray.400'
                        w='20px'
                        h='20px'
                      />
                    </MenuButton>
                    <MenuList
                      border='transparent'
                      backdropFilter='blur(63px)'
                      bg='linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.69) 76.65%)'
                      borderRadius='20px'>
                      <MenuItem
                        borderRadius='8px'
                        _hover={{
                          bg: "transparent",
                        }}
                        _active={{
                          bg: "transparent",
                        }}
                        _focus={{
                          bg: "transparent",
                        }}
                        mb='10px'
                        color='white'>
                        Action
                      </MenuItem>
                      <MenuItem
                        borderRadius='8px'
                        _hover={{
                          bg: "transparent",
                        }}
                        _active={{
                          bg: "transparent",
                        }}
                        _focus={{
                          bg: "transparent",
                        }}
                        mb='10px'
                        color='white'>
                        Another action
                      </MenuItem>
                      <MenuItem
                        borderRadius='8px'
                        _hover={{
                          bg: "transparent",
                        }}
                        _active={{
                          bg: "transparent",
                        }}
                        _focus={{
                          bg: "transparent",
                        }}
                        mb='10px'
                        color='white'>
                        Something else here
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Flex>
                <Flex justify='space-between' w='100%'>
                  <Flex direction='column'>
                    <Text color='#fff' fontWeight='bold' fontSize='md'>
                      2340
                    </Text>
                    <Text color='gray.400' fontWeight='500' fontSize='xs'>
                      Purchases
                    </Text>
                  </Flex>
                  <Text
                    color='#fff'
                    fontWeight='bold'
                    fontSize='xs'
                    alignSelf='flex-end'>
                    +14%
                  </Text>
                </Flex>
              </Flex>
            </CardBody>
          </Card>
          {/* Complex Statistics Card */}
          <Card backgroundImage={bgCardReports} bgPosition='cover' minH='168px'>
            <CardBody h='100%'>
              <Flex
                direction='column'
                justify='space-between'
                w='100%'
                h='100%'>
                <Flex justify='space-between' w='100%'>
                  <IconBox bg='brand.200' w='50px' h='50px'>
                    <Icon as={AiFillLike} w='25px' h='25px' color='#fff' />
                  </IconBox>
                  <Menu isOpen={isOpen4} onClose={onClose4}>
                    <MenuButton onClick={onOpen4} alignSelf='flex-start'>
                      <Icon
                        as={IoEllipsisHorizontalSharp}
                        color='gray.400'
                        w='20px'
                        h='20px'
                      />
                    </MenuButton>
                    <MenuList
                      border='transparent'
                      backdropFilter='blur(63px)'
                      bg='linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.69) 76.65%)'
                      borderRadius='20px'>
                      <MenuItem
                        borderRadius='8px'
                        _hover={{
                          bg: "transparent",
                        }}
                        _active={{
                          bg: "transparent",
                        }}
                        _focus={{
                          bg: "transparent",
                        }}
                        mb='10px'
                        color='white'>
                        Action
                      </MenuItem>
                      <MenuItem
                        borderRadius='8px'
                        _hover={{
                          bg: "transparent",
                        }}
                        _active={{
                          bg: "transparent",
                        }}
                        _focus={{
                          bg: "transparent",
                        }}
                        mb='10px'
                        color='white'>
                        Another action
                      </MenuItem>
                      <MenuItem
                        borderRadius='8px'
                        _hover={{
                          bg: "transparent",
                        }}
                        _active={{
                          bg: "transparent",
                        }}
                        _focus={{
                          bg: "transparent",
                        }}
                        mb='10px'
                        color='white'>
                        Something else here
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Flex>
                <Flex justify='space-between' w='100%'>
                  <Flex direction='column'>
                    <Text color='#fff' fontWeight='bold' fontSize='md'>
                      940
                    </Text>
                    <Text color='gray.400' fontWeight='500' fontSize='xs'>
                      Likes
                    </Text>
                  </Flex>
                  <Text
                    color='#fff'
                    fontWeight='bold'
                    fontSize='xs'
                    alignSelf='flex-end'>
                    +90%
                  </Text>
                </Flex>
              </Flex>
            </CardBody>
          </Card>
        </Grid>
        {/* Reviews */}
        <Card>
          <CardHeader mb='24px'>
            <Text fontSize='lg' color='#fff' fontWeight='bold'>
              Reviews
            </Text>
          </CardHeader>
          <CardBody h='100%'>
            <Flex direction='column' w='100%' h='100%'>
              <Stack direction='column' spacing='28px' w='100%' mb='auto'>
                <Flex direction='column'>
                  <Flex justify='space-between' mb='8px'>
                    <Text fontSize='xs' color='gray.400' fontWeight='500'>
                      Positive Reviews
                    </Text>
                    <Text fontSize='xs' color='gray.400' fontWeight='500'>
                      80%
                    </Text>
                  </Flex>
                  <LightMode>
                    <Progress
                      bg='#2D2E5F'
                      colorScheme='brand'
                      size='xs'
                      value={80}
                      borderRadius='15px'></Progress>
                  </LightMode>
                </Flex>
                <Flex direction='column'>
                  <Flex justify='space-between' mb='8px'>
                    <Text fontSize='xs' color='gray.400' fontWeight='500'>
                      Neutral Reviews
                    </Text>
                    <Text fontSize='xs' color='gray.400' fontWeight='500'>
                      17%
                    </Text>
                  </Flex>
                  <LightMode>
                    <Progress
                      bg='#2D2E5F'
                      colorScheme='gray'
                      size='xs'
                      value={17}
                      borderRadius='15px'></Progress>
                  </LightMode>
                </Flex>
                <Flex direction='column'>
                  <Flex justify='space-between' mb='8px'>
                    <Text fontSize='xs' color='gray.400' fontWeight='500'>
                      Negative Reviews
                    </Text>
                    <Text fontSize='xs' color='gray.400' fontWeight='500'>
                      3%
                    </Text>
                  </Flex>
                  <LightMode>
                    <Progress
                      bg='#2D2E5F'
                      colorScheme='red'
                      size='xs'
                      value={3}
                      borderRadius='15px'></Progress>
                  </LightMode>
                </Flex>
              </Stack>
              <Flex
                justify='space-between'
                w='100%'
                alignSelf='flex-end'
                direction={{ sm: "column", lg: "row" }}>
                <Text
                  color='gray.400'
                  fontSize='sm'
                  maxW={{ lg: "65%" }}
                  mb={{ sm: "16px", lg: "0px" }}>
                  More than{" "}
                  <Text as='span' color='#fff' fontWeight='500'>
                    1,500,000 developers
                  </Text>{" "}
                  used Creative Tim's products and over{" "}
                  <Text as='span' color='#fff' fontWeight='500'>
                    700,000 projects
                  </Text>{" "}
                  were created.
                </Text>
                <Button
                  variant='brand'
                  borderRadius='12px'
                  p='12px 24px'
                  alignSelf='flex-end'>
                  <Text color='#fff' fontSize='xs'>
                    VIEW ALL REVIEWS
                  </Text>
                </Button>
              </Flex>
            </Flex>
          </CardBody>
        </Card>
      </Grid>
      {/* Table */}
      <Card overflowX={{ sm: "scroll", lg: "hidden" }}>
        <CardBody>
          <Table variant='simple' color='#fff'>
            <Thead>
              <Tr my='.8rem' ps='0px' color='gray.400'>
                <Th
                  ps='0px'
                  color='gray.400'
                  fontFamily='Plus Jakarta Display'
                  borderColor='#56577A'>
                  Name
                </Th>
                <Th
                  color='gray.400'
                  fontFamily='Plus Jakarta Display'
                  borderColor='#56577A'>
                  Function
                </Th>
                <Th
                  color='gray.400'
                  fontFamily='Plus Jakarta Display'
                  borderColor='#56577A'>
                  Review
                </Th>
                <Th
                  color='gray.400'
                  fontFamily='Plus Jakarta Display'
                  borderColor='#56577A'>
                  Email
                </Th>
                <Th
                  color='gray.400'
                  fontFamily='Plus Jakarta Display'
                  borderColor='#56577A'>
                  Employed
                </Th>
                <Th
                  color='gray.400'
                  fontFamily='Plus Jakarta Display'
                  borderColor='#56577A'>
                  Id
                </Th>
              </Tr>
            </Thead>
            <Tbody pb='0px'>
              {tablesReportsData.map((row, index, arr) => {
                return (
                  <TablesReportsRow
                    name={row.name}
                    image={row.image}
                    email={row.email}
                    domain={row.domain}
                    review={row.review}
                    employed={row.employed}
                    id={row.id}
                    isLast={index === arr.length - 1 ? true : false}
                    key={index}
                  />
                );
              })}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default Reports;
