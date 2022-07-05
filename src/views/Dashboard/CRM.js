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

// Chakra Imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Image,
  Spacer,
  Stack,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";

// Images
import CRMimage from "assets/img/CRM-image.png";
import medusa from "assets/img/cardimgfree.png";

// Custom components
import EventCalendar from "components/Calendars/EventCalendar";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import LineChart from "components/Charts/LineChart";
import IconBox from "components/Icons/IconBox";
import TransactionRow from "components/Tables/TransactionRow";

// Icons
import { DocumentIcon, RocketIcon, SettingsIcon } from "components/Icons/Icons";
import { BsArrowRight } from "react-icons/bs";
import { FaPlus, FaRegCalendarAlt } from "react-icons/fa";
import { RiArrowDropRightLine } from "react-icons/ri";

// Data
import { calendarDataCRM } from "variables/calendar";
import {
  lineChartDataCRM1,
  lineChartDataCRM2,
  lineChartOptionsCRM1,
  lineChartOptionsCRM2,
} from "variables/charts";
import { revenueCRM, transactionsCRM } from "variables/general";

function CRM() {
  return (
    <Flex direction='column' pt={{ sm: "120px", md: "75px" }}>
      <Grid
        templateColumns={{ sm: "1fr", lg: "1.6fr 1fr", xl: "2fr 1fr" }}
        gap='24px'
        mb={{ lg: "24px" }}>
        <Grid
          templateColumns='auto'
          templateRows={{ sm: "1fr auto", lg: "1fr 2.5fr" }}
          gap='24px'>
          <Stack direction={{ sm: "column", md: "row" }} spacing='24px'>
            {/* MiniGradient Card */}
            <Card ps='0px' pb='0px'>
              <CardHeader px='22px'>
                <Stat>
                  <StatLabel fontSize='xs' color='gray.400'>
                    Visitors
                  </StatLabel>
                  <Flex>
                    <StatNumber fontSize='lg' me='4px' color='#fff'>
                      $5,927
                    </StatNumber>
                    <StatHelpText
                      color='green.400'
                      size='sm'
                      alignSelf='flex-end'
                      fontWeight='bold'
                      mb='0px'>
                      +55%
                    </StatHelpText>
                  </Flex>
                </Stat>
              </CardHeader>
              <CardBody>
                <Box w='100%' h='100%'>
                  <LineChart
                    chartData={lineChartDataCRM1}
                    chartOptions={lineChartOptionsCRM1}
                  />
                </Box>
              </CardBody>
            </Card>
            {/* MiniGradient Card */}
            <Card ps='0px' pb='0px'>
              <CardHeader px='22px'>
                <Stat>
                  <StatLabel fontSize='xs' color='gray.400'>
                    Income
                  </StatLabel>
                  <Flex>
                    <StatNumber fontSize='lg' me='4px' color='#fff'>
                      $130,912
                    </StatNumber>
                    <StatHelpText
                      color='green.400'
                      size='sm'
                      alignSelf='flex-end'
                      fontWeight='bold'
                      mb='0px'>
                      +90%
                    </StatHelpText>
                  </Flex>
                </Stat>
              </CardHeader>
              <CardBody>
                <Box w='100%'>
                  <LineChart
                    chartData={lineChartDataCRM2}
                    chartOptions={lineChartOptionsCRM2}
                  />
                </Box>
              </CardBody>
            </Card>
            <Card p='0px'>
              <Button
                p='0px'
                w='100%'
                h='100%'
                _hover='none'
                _active='none'
                bg='transparent'
                color='#fff'
                borderRadius='15px'>
                <Flex
                  direction='column'
                  justifyContent='center'
                  align='center'
                  h='120px'>
                  <Icon as={FaPlus} w='30px' h='30px' mb='12px' />
                  <Text fontSize='lg' fontWeight='bold'>
                    New Tab
                  </Text>
                </Flex>
              </Button>
            </Card>
          </Stack>
          <Card
            w={{ sm: "100%" }}
            h='575px'
            bg='linear-gradient(126.97deg, rgba(6, 11, 40, 0.74) 28.26%, rgba(10, 14, 35, 0.71) 91.2%)'>
            <CardHeader pt='6px' mb='8px'>
              <Flex direction='column'>
                <Text fontSize='lg' color='#fff' fontWeight='bold'>
                  Calendar
                </Text>
                <Text fontSize='sm' color='gray.400' fontWeight='500'>
                  Wednesday, 2021
                </Text>
              </Flex>
            </CardHeader>
            <CardBody
              position='relative'
              display='block'
              height='100%'
              color='#fff'>
              <EventCalendar
                initialDate='2021-10-01'
                calendarData={calendarDataCRM}
              />
            </CardBody>
          </Card>
        </Grid>
        <Stack direction='column' spacing='24px'>
          {/* Welcome Card */}
          <Card
            p='0px'
            bgImage={medusa}
            bgSize='cover'
            bgPosition='50%'
            minH='300px'>
            <CardBody w='100%' h='100%'>
              <Flex
                flexDirection={{ sm: "column", lg: "row" }}
                w='100%'
                h='100%'>
                <Flex
                  flexDirection='column'
                  h='100%'
                  p='22px'
                  minW='60%'
                  lineHeight='1.6'>
                  <Text fontSize='sm' color='gray.400' fontWeight='bold'>
                    Welcome back,
                  </Text>
                  <Text
                    fontSize='28px'
                    color='#fff'
                    fontWeight='bold'
                    mb='18px'>
                    Mark Johnson
                  </Text>
                  <Text fontSize='md' color='gray.400' mb='auto'>
                    Glad to see you again! <br />
                    Ask me anything.
                  </Text>
                  <Spacer />
                  <Flex align='center'>
                    <Button
                      p='0px'
                      variant='no-hover'
                      bg='transparent'
                      my={{ sm: "1.5rem", lg: "0px" }}>
                      <Text
                        fontSize='sm'
                        color='#fff'
                        cursor='pointer'
                        transition='all .3s ease'
                        my={{ sm: "1.5rem", lg: "0px" }}
                        _hover={{ me: "4px" }}>
                        Tab to record
                      </Text>
                      <Icon
                        as={BsArrowRight}
                        w='20px'
                        h='20px'
                        color='#fff'
                        fontSize='2xl'
                        transition='all .3s ease'
                        mx='.3rem'
                        cursor='pointer'
                        pt='4px'
                        _hover={{ transform: "translateX(20%)" }}
                      />
                    </Button>
                  </Flex>
                </Flex>
              </Flex>
            </CardBody>
          </Card>
          <Stack
            direction={{ sm: "column", md: "row", lg: "column" }}
            maxW={{ md: "100%" }}
            spacing='24px'>
            {/* Invoices List */}
            <Card>
              <CardHeader>
                <Text fontSize='lg' color='#fff' fontWeight='bold'>
                  Invoices
                </Text>
              </CardHeader>
              <CardBody w='100%' pt='28px'>
                <Stack direction='column' spacing='24px' w='100%'>
                  <Flex align='center' w='100%'>
                    <Flex align='center'>
                      <IconBox
                        as='box'
                        h={"40px"}
                        w={"40px"}
                        bg='brand.200'
                        me='18px'>
                        <RocketIcon h={"20px"} w={"20px"} color={"#fff"} />
                      </IconBox>
                      <Flex direction='column'>
                        <Text fontSize='sm' fontWeight='500' color='#fff'>
                          Devices
                        </Text>
                        <Text color='gray.400' fontWeight='500' fontSize='xs'>
                          250 in stock, <Text as='span'>346+ sold</Text>
                        </Text>
                      </Flex>
                    </Flex>
                    <Spacer />
                    <Button variant='transparent-with-icon' px='0px'>
                      <Icon
                        as={RiArrowDropRightLine}
                        color='gray.400'
                        w='30px'
                        h='30px'
                        cursor='pointer'
                        transition='all .25s ease'
                        _hover={{ transform: "translateX(25%)" }}
                      />
                    </Button>
                  </Flex>
                  <Flex align='center' w='100%'>
                    <Flex align='center'>
                      <IconBox
                        as='box'
                        h={"40px"}
                        w={"40px"}
                        bg='brand.200'
                        me='18px'>
                        <SettingsIcon h={"20px"} w={"20px"} color={"#fff"} />
                      </IconBox>
                      <Flex direction='column'>
                        <Text fontSize='sm' color='#fff'>
                          Tickets
                        </Text>
                        <Text color='gray.400' fontSize='xs'>
                          123 closed, <Text as='span'>15 open</Text>
                        </Text>
                      </Flex>
                    </Flex>
                    <Spacer />
                    <Button variant='transparent-with-icon' px='0px'>
                      <Icon
                        as={RiArrowDropRightLine}
                        color='gray.400'
                        w='30px'
                        h='30px'
                        cursor='pointer'
                        transition='all .25s ease'
                        _hover={{ transform: "translateX(25%)" }}
                      />
                    </Button>
                  </Flex>
                  <Flex align='center' w='100%'>
                    <Flex align='center'>
                      <IconBox
                        as='box'
                        h={"40px"}
                        w={"40px"}
                        bg='brand.200'
                        me='18px'>
                        <DocumentIcon h={"20px"} w={"20px"} color={"#fff"} />
                      </IconBox>
                      <Flex direction='column'>
                        <Text fontSize='sm' color='#fff'>
                          Error logs
                        </Text>
                        <Text color='gray.400' fontSize='xs'>
                          1 is active, <Text as='span'>40 closed</Text>
                        </Text>
                      </Flex>
                    </Flex>
                    <Spacer />
                    <Button variant='transparent-with-icon' px='0px'>
                      <Icon
                        as={RiArrowDropRightLine}
                        color='gray.400'
                        w='30px'
                        h='30px'
                        cursor='pointer'
                        transition='all .25s ease'
                        _hover={{ transform: "translateX(25%)" }}
                      />
                    </Button>
                  </Flex>
                </Stack>
              </CardBody>
            </Card>
            {/* Message Card */}
            <Card maxH={{ md: "130px", lg: "100%" }}>
              <CardBody>
                <Flex>
                  <Box
                    w={{ sm: "65px", lg: "100px", xl: "170px" }}
                    h={{ sm: "65px", lg: "100px", xl: "170px" }}
                    me='36px'>
                    <Image
                      src={CRMimage}
                      w='100%'
                      h='100%'
                      borderRadius='15px'
                    />
                  </Box>
                </Flex>
                <Flex direction='column' justify='center' align='flex-start'>
                  <Text
                    fontSize='sm'
                    color='#fff'
                    fontSize={{ sm: "xs", lg: "md" }}
                    mb={{ sm: "10px", lg: "22px" }}>
                    Today's Martina's Birthday. Wish her the best of luck!
                  </Text>
                  <Button
                    variant='brand'
                    fontSize='10px'
                    h={{ sm: "32px" }}
                    p={{ sm: "0px 32px", lg: "6px 22px" }}>
                    SEND MESSAGE
                  </Button>
                </Flex>
              </CardBody>
            </Card>
          </Stack>
        </Stack>
      </Grid>
      <Stack
        direction={{ sm: "column", lg: "row" }}
        spacing='24px'
        mt={{ sm: "24px", lg: "0px" }}>
        {/* Transactions List */}
        <Card>
          <CardHeader mb='12px'>
            <Flex direction='column' w='100%'>
              <Flex
                direction={{ sm: "column", lg: "row" }}
                justify={{ sm: "center", lg: "space-between" }}
                align={{ sm: "center" }}
                w='100%'
                my={{ md: "12px" }}>
                <Text
                  color='#fff'
                  fontSize={{ sm: "lg", md: "xl", lg: "lg" }}
                  fontWeight='bold'>
                  Your Transactions
                </Text>
                <Flex align='center'>
                  <Icon
                    as={FaRegCalendarAlt}
                    color='gray.400'
                    fontSize='md'
                    me='6px'></Icon>
                  <Text color='gray.400' fontSize='sm' fontWeight='semibold'>
                    23 - 30 March 2021
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </CardHeader>
          <CardBody>
            <Flex direction='column' w='100%' justify='center'>
              {transactionsCRM.map((row, index) => {
                return (
                  <TransactionRow
                    name={row.name}
                    logo={row.logo}
                    date={row.date}
                    price={row.price}
                    key={index}
                  />
                );
              })}
            </Flex>
          </CardBody>
        </Card>
        <Card>
          {/* Revenue List */}
          <CardHeader mb='12px'>
            <Flex direction='column' w='100%'>
              <Flex
                direction={{ sm: "column", lg: "row" }}
                justify={{ sm: "center", lg: "space-between" }}
                align={{ sm: "center" }}
                w='100%'
                my={{ md: "12px" }}>
                <Text
                  color='#fff'
                  fontSize={{ sm: "lg", md: "xl", lg: "lg" }}
                  fontWeight='bold'>
                  Revenue
                </Text>
                <Flex align='center'>
                  <Icon
                    as={FaRegCalendarAlt}
                    color='gray.400'
                    fontSize='md'
                    me='6px'></Icon>
                  <Text color='gray.400' fontSize='sm' fontWeight='semibold'>
                    23 - 30 March 2021
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </CardHeader>
          <CardBody>
            <Flex direction='column' w='100%' justify='center'>
              {revenueCRM.map((row, index) => {
                return (
                  <TransactionRow
                    name={row.name}
                    logo={row.logo}
                    date={row.date}
                    price={row.price}
                    key={index}
                  />
                );
              })}
            </Flex>
          </CardBody>
        </Card>
      </Stack>
    </Flex>
  );
}

export default CRM;
