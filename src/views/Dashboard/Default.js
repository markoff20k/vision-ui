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
  Box,
  Flex,
  Grid,
  Progress,
  SimpleGrid,
  Spacer,
  Stack,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";

// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import BarChart from "components/Charts/BarChart";
import LineChart from "components/Charts/LineChart";
import Globe from "components/Globe/Globe";
import IconBox from "components/Icons/IconBox";
import {
  barChartDataDashboard,
  barChartOptionsDashboard,
  lineChartDataDashboard,
  lineChartOptionsDashboard,
} from "variables/charts";

// Custom icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  RocketIcon,
  StatsIcon,
  WalletIcon,
} from "components/Icons/Icons.js";

export default function Default() {
  // Chakra Color Mode
  const iconBoxInside = useColorModeValue("white", "white");
  return (
    <Flex flexDirection='column' pt={{ base: "120px", md: "75px" }}>
      <Text color='#fff' fontWeight='bold' fontSize='3xl' mb='30px' ps='20px'>
        General Statistics
      </Text>
      <Grid
        templateColumns={{ sm: "4fr 1fr", xl: "1.2fr 1fr" }}
        gap='32px'
        maxW='100%'
        w='100%'>
        {/* ThreeJS Globe */}
        <Box
          minW='700px'
          h='700px'
          position='absolute'
          right='30px'
          top='14%'
          display={{ sm: "none", md: "block" }}>
          <Globe />
        </Box>
        <Stack
          direction='column'
          spacing='24px'
          w='100%'
          mb='24px'
          maxW={{ sm: "315px", md: "100%" }}
          zIndex='0'>
          {/* Mini Statistics */}
          <SimpleGrid columns={{ sm: "1", md: "2" }} spacing='24px'>
            <Card minH='83px'>
              <CardBody>
                <Flex
                  flexDirection='row'
                  align='center'
                  justify='center'
                  w='100%'>
                  <Stat me='auto'>
                    <StatLabel fontSize='xs' color='gray.400' pb='2px'>
                      Today's Money
                    </StatLabel>
                    <Flex>
                      <StatNumber fontSize='lg' color='#fff'>
                        $53,000
                      </StatNumber>
                      <StatHelpText
                        alignSelf='flex-end'
                        justifySelf='flex-end'
                        m='0px'
                        color='green.400'
                        fontWeight='bold'
                        ps='3px'
                        fontSize='sm'>
                        +55%
                      </StatHelpText>
                    </Flex>
                  </Stat>
                  <IconBox as='box' h={"45px"} w={"45px"} bg='brand.200'>
                    <WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />
                  </IconBox>
                </Flex>
              </CardBody>
            </Card>
            <Card minH='83px'>
              <CardBody>
                <Flex
                  flexDirection='row'
                  align='center'
                  justify='center'
                  w='100%'>
                  <Stat>
                    <StatLabel fontSize='xs' color='gray.400' pb='2px'>
                      New Clients
                    </StatLabel>
                    <Flex>
                      <StatNumber fontSize='lg' color='#fff'>
                        +$3,020
                      </StatNumber>
                      <StatHelpText
                        alignSelf='flex-end'
                        justifySelf='flex-end'
                        m='0px'
                        color='red.500'
                        fontWeight='bold'
                        ps='3px'
                        fontSize='sm'>
                        -14%
                      </StatHelpText>
                    </Flex>
                  </Stat>
                  <Spacer />
                  <IconBox as='box' h={"45px"} w={"45px"} bg='brand.200'>
                    <DocumentIcon h={"24px"} w={"24px"} color={iconBoxInside} />
                  </IconBox>
                </Flex>
              </CardBody>
            </Card>
            <Card minH='83px'>
              <CardBody>
                <Flex
                  flexDirection='row'
                  align='center'
                  justify='center'
                  w='100%'>
                  <Stat me='auto'>
                    <StatLabel fontSize='xs' color='gray.400' pb='2px'>
                      Today's Users
                    </StatLabel>
                    <Flex>
                      <StatNumber fontSize='lg' color='#fff'>
                        2,300
                      </StatNumber>
                      <StatHelpText
                        alignSelf='flex-end'
                        justifySelf='flex-end'
                        m='0px'
                        color='green.400'
                        fontWeight='bold'
                        ps='3px'
                        fontSize='sm'>
                        +5%
                      </StatHelpText>
                    </Flex>
                  </Stat>
                  <IconBox as='box' h={"45px"} w={"45px"} bg='brand.200'>
                    <GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />
                  </IconBox>
                </Flex>
              </CardBody>
            </Card>
            <Card minH='83px'>
              <CardBody>
                <Flex
                  flexDirection='row'
                  align='center'
                  justify='center'
                  w='100%'>
                  <Stat me='auto'>
                    <StatLabel fontSize='xs' color='gray.400' pb='2px'>
                      Total Sales
                    </StatLabel>
                    <Flex>
                      <StatNumber fontSize='lg' color='#fff' fontWeight='bold'>
                        173,000
                      </StatNumber>
                      <StatHelpText
                        alignSelf='flex-end'
                        justifySelf='flex-end'
                        m='0px'
                        color='green.400'
                        fontWeight='bold'
                        ps='3px'
                        fontSize='sm'>
                        +8%
                      </StatHelpText>
                    </Flex>
                  </Stat>
                  <IconBox as='box' h={"45px"} w={"45px"} bg='brand.200'>
                    <CartIcon h={"24px"} w={"24px"} color={iconBoxInside} />
                  </IconBox>
                </Flex>
              </CardBody>
            </Card>
          </SimpleGrid>
          {/* Sales table */}
          <Card px='0px'>
            <CardHeader px='22px' mb='32px'>
              <Text color='#fff' fontSize='lg' fontWeight='bold'>
                Sales by Country
              </Text>
            </CardHeader>
            <CardBody overflowX={{ sm: "scroll", md: "hidden" }}>
              <Table variant='simple'>
                <Thead>
                  <Tr>
                    <Th
                      color='gray.400'
                      fontSize='10px'
                      fontFamily='Plus Jakarta Display'
                      borderColor='#56577A'>
                      Country:
                    </Th>
                    <Th
                      color='gray.400'
                      fontSize='10px'
                      fontFamily='Plus Jakarta Display'
                      borderColor='#56577A'>
                      Sales:
                    </Th>
                    <Th
                      color='gray.400'
                      fontSize='10px'
                      fontFamily='Plus Jakarta Display'
                      borderColor='#56577A'>
                      Value:
                    </Th>
                    <Th
                      color='gray.400'
                      fontSize='10px'
                      fontFamily='Plus Jakarta Display'
                      borderColor='#56577A'>
                      Bounce:
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td minW='180px' borderColor='#56577A'>
                      <Stack direction='row' spacing='16px'>
                        <Text>🇺🇸</Text>
                        <Text color='#fff' fontSize='sm' fontWeight='bold'>
                          United States
                        </Text>
                      </Stack>
                    </Td>
                    <Td borderColor='#56577A'>
                      <Text color='#fff' fontSize='sm' fontWeight='bold'>
                        2500
                      </Text>
                    </Td>
                    <Td borderColor='#56577A'>
                      <Text color='#fff' fontSize='sm' fontWeight='bold'>
                        $214,000
                      </Text>
                    </Td>
                    <Td borderColor='#56577A'>
                      <Text color='#fff' fontSize='sm' fontWeight='bold'>
                        40,22%
                      </Text>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td borderColor='#56577A'>
                      <Stack direction='row' spacing='16px'>
                        <Text>🇩🇪</Text>
                        <Text color='#fff' fontSize='sm' fontWeight='bold'>
                          Germany
                        </Text>
                      </Stack>
                    </Td>
                    <Td borderColor='#56577A'>
                      <Text color='#fff' fontSize='sm' fontWeight='bold'>
                        3900
                      </Text>
                    </Td>
                    <Td borderColor='#56577A'>
                      <Text color='#fff' fontSize='sm' fontWeight='bold'>
                        $446,700
                      </Text>
                    </Td>
                    <Td borderColor='#56577A'>
                      <Text color='#fff' fontSize='sm' fontWeight='bold'>
                        19,22%
                      </Text>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td borderColor='#56577A'>
                      <Stack direction='row' spacing='16px'>
                        <Text>🇬🇧</Text>
                        <Text color='#fff' fontSize='sm' fontWeight='bold'>
                          Great Britain
                        </Text>
                      </Stack>
                    </Td>
                    <Td borderColor='#56577A'>
                      <Text color='#fff' fontSize='sm' fontWeight='bold'>
                        1300
                      </Text>
                    </Td>
                    <Td borderColor='#56577A'>
                      <Text color='#fff' fontSize='sm' fontWeight='bold'>
                        $121,900
                      </Text>
                    </Td>
                    <Td borderColor='#56577A'>
                      <Text color='#fff' fontSize='sm' fontWeight='bold'>
                        39,22%
                      </Text>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td border='none'>
                      <Stack direction='row' spacing='16px'>
                        <Text>🇧🇷</Text>
                        <Text color='#fff' fontSize='sm' fontWeight='bold'>
                          Brasil
                        </Text>
                      </Stack>
                    </Td>
                    <Td border='none'>
                      <Text color='#fff' fontSize='sm' fontWeight='bold'>
                        920
                      </Text>
                    </Td>
                    <Td border='none'>
                      <Text color='#fff' fontSize='sm' fontWeight='bold'>
                        $52,100
                      </Text>
                    </Td>
                    <Td border='none'>
                      {" "}
                      <Text color='#fff' fontSize='sm' fontWeight='bold'>
                        29,9%
                      </Text>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </CardBody>
          </Card>
        </Stack>
      </Grid>
      <Grid
        templateColumns={{ sm: "1fr", lg: "1.3fr 1.7fr" }}
        maxW={{ sm: "350px", md: "100%" }}
        gap='24px'
        mb='24px'>
        {/* Active users */}
        <Card p='16px'>
          <CardBody>
            <Flex direction='column' w='100%'>
              <Box
                bg='linear-gradient(126.97deg, #060C29 28.26%, rgba(4, 12, 48, 0.5) 91.2%)'
                borderRadius='20px'
                display={{ sm: "flex", md: "block" }}
                justify={{ sm: "center", md: "flex-start" }}
                align={{ sm: "center", md: "flex-start" }}
                minH={{ sm: "180px", md: "220px" }}
                p={{ sm: "0px", md: "22px" }}>
                <BarChart
                  chartOptions={barChartOptionsDashboard}
                  chartData={barChartDataDashboard}
                />
              </Box>
              <Flex
                direction='column'
                mt='24px'
                mb='36px'
                alignSelf='flex-start'>
                <Text fontSize='lg' color='#fff' fontWeight='bold' mb='6px'>
                  Active Users
                </Text>
                <Text fontSize='md' fontWeight='medium' color='gray.400'>
                  <Text as='span' color='green.400' fontWeight='bold'>
                    (+23%)
                  </Text>{" "}
                  than last week
                </Text>
              </Flex>
              <SimpleGrid gap={{ sm: "12px" }} columns={4}>
                <Flex direction='column'>
                  <Flex alignItems='center'>
                    <IconBox
                      as='box'
                      h={"30px"}
                      w={"30px"}
                      bg='brand.200'
                      me='6px'>
                      <WalletIcon h={"15px"} w={"15px"} color='#fff' />
                    </IconBox>
                    <Text fontSize='sm' color='gray.400'>
                      Users
                    </Text>
                  </Flex>
                  <Text
                    fontSize={{ sm: "md", lg: "lg" }}
                    color='#fff'
                    fontWeight='bold'
                    mb='6px'
                    my='6px'>
                    32,984
                  </Text>
                  <Progress
                    colorScheme='brand'
                    bg='#2D2E5F'
                    borderRadius='30px'
                    h='5px'
                    value={20}
                  />
                </Flex>
                <Flex direction='column'>
                  <Flex alignItems='center'>
                    <IconBox
                      as='box'
                      h={"30px"}
                      w={"30px"}
                      bg='brand.200'
                      me='6px'>
                      <RocketIcon h={"15px"} w={"15px"} color='#fff' />
                    </IconBox>
                    <Text fontSize='sm' color='gray.400'>
                      Clicks
                    </Text>
                  </Flex>
                  <Text
                    fontSize={{ sm: "md", lg: "lg" }}
                    color='#fff'
                    fontWeight='bold'
                    mb='6px'
                    my='6px'>
                    2.42m
                  </Text>
                  <Progress
                    colorScheme='brand'
                    bg='#2D2E5F'
                    borderRadius='30px'
                    h='5px'
                    value={90}
                  />
                </Flex>
                <Flex direction='column'>
                  <Flex alignItems='center'>
                    <IconBox
                      as='box'
                      h={"30px"}
                      w={"30px"}
                      bg='brand.200'
                      me='6px'>
                      <CartIcon h={"15px"} w={"15px"} color='#fff' />
                    </IconBox>
                    <Text fontSize='sm' color='gray.400'>
                      Sales
                    </Text>
                  </Flex>
                  <Text
                    fontSize={{ sm: "md", lg: "lg" }}
                    color='#fff'
                    fontWeight='bold'
                    mb='6px'
                    my='6px'>
                    2,400$
                  </Text>
                  <Progress
                    colorScheme='brand'
                    bg='#2D2E5F'
                    borderRadius='30px'
                    h='5px'
                    value={30}
                  />
                </Flex>
                <Flex direction='column'>
                  <Flex alignItems='center'>
                    <IconBox
                      as='box'
                      h={"30px"}
                      w={"30px"}
                      bg='brand.200'
                      me='6px'>
                      <StatsIcon h={"15px"} w={"15px"} color='#fff' />
                    </IconBox>
                    <Text fontSize='sm' color='gray.400'>
                      Items
                    </Text>
                  </Flex>
                  <Text
                    fontSize={{ sm: "md", lg: "lg" }}
                    color='#fff'
                    fontWeight='bold'
                    mb='6px'
                    my='6px'>
                    320
                  </Text>
                  <Progress
                    colorScheme='brand'
                    bg='#2D2E5F'
                    borderRadius='30px'
                    h='5px'
                    value={50}
                  />
                </Flex>
              </SimpleGrid>
            </Flex>
          </CardBody>
        </Card>
        {/* Sales overview */}
        <Card p='28px 0px 0px 0px'>
          <CardHeader mb='20px' ps='22px'>
            <Flex direction='column' alignSelf='flex-start'>
              <Text fontSize='lg' color='#fff' fontWeight='bold' mb='6px'>
                Sales Overview
              </Text>
              <Text fontSize='md' fontWeight='medium' color='gray.400'>
                <Text as='span' color='green.400' fontWeight='bold'>
                  (+5%) more
                </Text>{" "}
                in 2021
              </Text>
            </Flex>
          </CardHeader>
          <Box w='100%' minH={{ sm: "300px" }}>
            <LineChart
              chartData={lineChartDataDashboard}
              chartOptions={lineChartOptionsDashboard}
            />
          </Box>
        </Card>
      </Grid>
    </Flex>
  );
}
