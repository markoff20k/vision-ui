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

import React, { useState } from "react";

// Chakra imports
import {
  Badge,
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Progress,
  Spacer,
  Stack,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Switch,
  Text,
  DarkMode,
  LightMode,
} from "@chakra-ui/react";

// Images
import BackgroundCard1 from "assets/img/background-widgets-card.png";
import BgMusicCard from "assets/img/background-widgets-music.png";

// Custom Components
import EventCalendar from "components/Calendars/EventCalendar";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import LineChart from "components/Charts/LineChart";
import IconBox from "components/Icons/IconBox";
import { HSeparator } from "components/Separator/Separator";
import TimelineRow from "components/Tables/TimelineRow";

// Icons
import {
  ClockIcon,
  DocumentIcon,
  RocketIcon,
  SettingsIcon,
  WalletIcon,
} from "components/Icons/Icons";

// Icons
import { AiFillBackward, AiFillForward } from "react-icons/ai";
import { BsBatteryCharging, BsMusicNoteBeamed } from "react-icons/bs";
import {
  FaCheckCircle,
  FaLightbulb,
  FaPaypal,
  FaPlay,
  FaRegLightbulb,
  FaShare,
  FaUser,
  FaWallet,
} from "react-icons/fa";
import { RiArrowDropRightLine, RiMastercardFill } from "react-icons/ri";

// Data
import { calendarDataWidgets } from "variables/calendar";
import {
  lineChartDataWidgets1,
  lineChartDataWidgets2,
  lineChartDataWidgets3,
  lineChartOptionsWidgets1,
  lineChartOptionsWidgets2,
  lineChartOptionsWidgets3,
} from "variables/charts";
import { timelineData } from "variables/general";

function Widgets() {
  const [toggleSwitch, setToggleSwitch] = useState(false);

  return (
    <Flex direction='column' pt={{ sm: "125px", lg: "75px" }}>
      <Grid
        templateColumns={{ sm: "1fr", md: "1fr 1fr", lg: "1fr 1fr 2fr" }}
        templateRows='1fr'
        gap='24px'
        mb='24px'>
        <Stack direction='column' spacing='24px' h='100%'>
          {/* MiniStatistics Card */}
          <Card h='100%'>
            <CardBody>
              <Flex justify='space-between' w='100%' align='center'>
                <Flex direction='column'>
                  <Text fontSize='xs' color='gray.400' mb='2px'>
                    Battery Health
                  </Text>
                  <Text fontSize='lg' color='#fff' fontWeight='bold'>
                    99%
                  </Text>
                </Flex>
                <IconBox as='box' h={"45px"} w={"45px"} bg='brand.200'>
                  <Icon
                    as={BsBatteryCharging}
                    h={"24px"}
                    w={"24px"}
                    color='#fff'
                  />
                </IconBox>
              </Flex>
            </CardBody>
          </Card>
          {/* MiniStatistics Card */}
          <Card h='100%'>
            <CardBody>
              <Flex justify='space-between' w='100%' align='center'>
                <Flex direction='column'>
                  <Text fontSize='xs' color='gray.400' mb='2px'>
                    Music Volume
                  </Text>
                  <Text fontSize='lg' color='#fff' fontWeight='bold'>
                    15/100
                  </Text>
                </Flex>
                <IconBox as='box' h={"45px"} w={"45px"} bg='brand.200'>
                  <Icon
                    as={BsMusicNoteBeamed}
                    h={"24px"}
                    w={"24px"}
                    color='#fff'
                  />
                </IconBox>
              </Flex>
            </CardBody>
          </Card>
        </Stack>
        {/* Income Chart */}
        <Card ps='0px' maxH='230px'>
          <CardHeader px='22px'>
            <Stat me='auto'>
              <StatLabel fontSize='sm' color='#fff'>
                Income
              </StatLabel>
              <Flex>
                <StatNumber fontSize='lg' color='#fff'>
                  $130,912
                </StatNumber>
                <StatHelpText
                  alignSelf='flex-end'
                  justifySelf='flex-end'
                  m='0px'
                  ps='4px'
                  color='green.400'
                  fontWeight='bold'
                  fontSize='sm'>
                  +90%
                </StatHelpText>
              </Flex>
            </Stat>
          </CardHeader>
          <CardBody>
            <Box w='100%'>
              <LineChart
                chartData={lineChartDataWidgets1}
                chartOptions={lineChartOptionsWidgets1}
              />
            </Box>
          </CardBody>
        </Card>
        {/* Tasks Chart */}
        <Card
          px='0px'
          maxH='230px'
          pb='0px'
          gridColumn={{ md: "1 / 3", lg: "auto" }}>
          <CardHeader px='22px'>
            <Flex justify='space-between' w='100%'>
              <Flex align='center'>
                <IconBox
                  as='box'
                  h={"45px"}
                  w={"45px"}
                  bg='brand.200'
                  me='16px'>
                  <Icon as={FaCheckCircle} h={"24px"} w={"24px"} color='#fff' />
                </IconBox>
                <Flex direction='column'>
                  <Text color='#fff' fontSize='sm'>
                    Tasks
                  </Text>
                  <Text color='#fff' fontSize='lg' fontWeight='bold'>
                    480
                  </Text>
                </Flex>
              </Flex>
              <Flex direction='column' minW='125px' alignSelf='flex-end'>
                <Text color='gray.400' fontSize='xs' mb='8px'>
                  60%
                </Text>
                <Progress
                  colorScheme='brand'
                  borderRadius='15px'
                  size='xs'
                  bg='#2D2E5F'
                  value={60}
                />
              </Flex>
            </Flex>
          </CardHeader>
          <CardBody>
            <Box w='100%'>
              <LineChart
                chartData={lineChartDataWidgets2}
                chartOptions={lineChartOptionsWidgets2}
              />
            </Box>
          </CardBody>
        </Card>
      </Grid>
      <Grid
        templateColumns={{
          sm: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap='24px'
        mb='24px'>
        {/* Upcoming Events */}
        <Card>
          <CardHeader mb='16px'>
            <Flex direction='column'>
              <Text color='#fff' fontSize='lg' fontWeight='bold' mb='4px'>
                Upcoming events
              </Text>
              <Text color='gray.400' fontSize='sm'>
                Joined
              </Text>
            </Flex>
          </CardHeader>
          <CardBody>
            <Flex direction='column'>
              <Flex align='center' mb='22px'>
                <IconBox
                  as='box'
                  h={"45px"}
                  w={"45px"}
                  bg='brand.200'
                  me='16px'>
                  <Icon as={WalletIcon} h={"24px"} w={"24px"} color='#fff' />
                </IconBox>
                <Flex direction='column'>
                  <Text color='#fff' fontSize='sm' fontWeight='bold'>
                    Cyber Week
                  </Text>
                  <Text color='gray.400' fontSize='xs'>
                    27 March 2020, at 12:30 PM
                  </Text>
                </Flex>
              </Flex>
              <Flex align='center'>
                <IconBox
                  as='box'
                  h={"45px"}
                  w={"45px"}
                  bg='brand.200'
                  me='16px'>
                  <Icon as={ClockIcon} h={"24px"} w={"24px"} color='#fff' />
                </IconBox>
                <Flex direction='column'>
                  <Text color='#fff' fontSize='sm' fontWeight='bold'>
                    Meeting with Marry
                  </Text>
                  <Text color='gray.400' fontSize='xs'>
                    24 March 2020, at 10:00 PM
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </CardBody>
        </Card>
        <Stack direction={{ sm: "column", md: "row" }} spacing='24px'>
          {/* Info Card */}
          <Card p='16px' display='flex' align='center' justify='center'>
            <CardBody>
              <Flex direction='column' align='center' w='100%' py='14px'>
                <IconBox as='box' h={"60px"} w={"60px"} bg='brand.200'>
                  <Icon h={"24px"} w={"24px"} color='white' as={FaWallet} />
                </IconBox>
                <Flex
                  direction='column'
                  m='14px'
                  justify='center'
                  textAlign='center'
                  align='center'
                  w='100%'>
                  <Text fontSize='lg' color='#fff' fontWeight='bold'>
                    Salary
                  </Text>
                  <Text mb='12px' fontSize='xs' color='gray.400'>
                    Belong Interactive
                  </Text>
                  <HSeparator />
                </Flex>
                <Text fontSize='lg' color='#fff' fontWeight='bold'>
                  +$2000
                </Text>
              </Flex>
            </CardBody>
          </Card>
          {/* Info Card */}
          <Card p='16px' display='flex' align='center' justify='center'>
            <CardBody>
              <Flex
                direction='column'
                align='center'
                justify='center'
                w='100%'
                py='14px'>
                <IconBox as='box' h={"60px"} w={"60px"} bg='brand.200'>
                  <Icon h={"24px"} w={"24px"} color='white' as={FaPaypal} />
                </IconBox>
                <Flex
                  direction='column'
                  m='14px'
                  justify='center'
                  textAlign='center'
                  align='center'
                  w='100%'>
                  <Text fontSize='lg' color='#fff' fontWeight='bold'>
                    Paypal
                  </Text>
                  <Text mb='12px' fontSize='xs' color='gray.400'>
                    Freelance Payment
                  </Text>
                  <HSeparator />
                </Flex>
                <Text fontSize='lg' color='#fff' fontWeight='bold'>
                  $455.00
                </Text>
              </Flex>
            </CardBody>
          </Card>
        </Stack>
        {/* MasterCard */}
        <Card
          backgroundImage={BackgroundCard1}
          background='cover'
          p='16px'
          h={{ sm: "220px", xl: "100%" }}
          gridColumn={{ md: "1 / 3", lg: "auto" }}>
          <CardBody h='100%' w='100%'>
            <Flex
              direction='column'
              color='white'
              h='100%'
              p='0px 10px 20px 10px'
              w='100%'>
              <Flex justify='space-between' align='center'>
                <Text fontSize='lg' fontWeight='bold'>
                  Vision UI
                </Text>
                <Icon
                  as={RiMastercardFill}
                  w='48px'
                  h='auto'
                  color='gray.400'
                />
              </Flex>
              <Spacer />
              <Flex direction='column'>
                <Box>
                  <Text
                    fontSize={{ sm: "18px", md: "24px" }}
                    letterSpacing='2px'
                    fontWeight='bold'>
                    7812 2139 0823 XXXX
                  </Text>
                </Box>
                <Flex mt='14px'>
                  <Flex direction='column' me='34px'>
                    <Text fontSize='10px'>VALID THRU</Text>
                    <Text fontSize='sm' fontWeight='bold'>
                      05/24
                    </Text>
                  </Flex>
                  <Flex direction='column'>
                    <Text fontSize='10px'>CVV</Text>
                    <Text fontSize='sm' fontWeight='bold'>
                      09X
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </CardBody>
        </Card>
      </Grid>
      <Grid
        templateColumns={{
          sm: "1fr",
          md: "1fr 1fr",
          lg: "1.5fr 1fr 1.2fr 1fr 1fr",
        }}
        gap='24px'
        mb='24px'>
        {/* Full Body */}
        <Card>
          <CardHeader mb='24px'>
            <Flex justify='space-between' w='100%' align='center'>
              <Text color='#fff' fontWeight='bold' fontSize='lg'>
                Full Body
              </Text>
              <LightMode>
                <Badge
                  colorScheme='green'
                  w='85px'
                  py='6px'
                  borderRadius='12px'
                  textAlign='center'>
                  MODERATE
                </Badge>
              </LightMode>
            </Flex>
          </CardHeader>
          <CardBody>
            <Text color='gray.400' fontSize='sm'>
              What matters is the people who are sparked by it. And the people
              who are liked.
            </Text>
          </CardBody>
        </Card>
        {/* Toggle Light */}
        <Card>
          <CardHeader mb='22px'>
            <Flex justify='space-between' align='center' w='100%'>
              <Text fontSize='xs' color='#fff' fontWeight='500'>
                {toggleSwitch ? "ON" : "OFF"}
              </Text>
              <DarkMode>
                <Switch
                  colorScheme='brand'
                  onChange={() => setToggleSwitch(!toggleSwitch)}
                />
              </DarkMode>
            </Flex>
          </CardHeader>
          <CardBody>
            <Flex direction='column'>
              <Icon
                as={toggleSwitch ? FaLightbulb : FaRegLightbulb}
                w='52px'
                h='52px'
                color='#fff'
                mb='16px'
              />
              <Text fontSize='md' color='#fff' fontWeight='bold'>
                Lights
              </Text>
            </Flex>
          </CardBody>
        </Card>
        {/* Calories Chart */}
        <Card px='0px' pb='0px' gridColumn={{ md: "1 / 3", lg: "auto" }}>
          <CardHeader px='22px'>
            <Stat me='auto'>
              <StatLabel fontSize='sm' color='#fff'>
                Calories
              </StatLabel>
              <Flex>
                <StatNumber fontSize='lg' color='#fff'>
                  187
                </StatNumber>
                <StatHelpText
                  alignSelf='flex-end'
                  justifySelf='flex-end'
                  m='0px'
                  ps='4px'
                  color='green.400'
                  fontWeight='bold'
                  fontSize='sm'>
                  +5%
                </StatHelpText>
              </Flex>
            </Stat>
          </CardHeader>
          <CardBody>
            <Box w='100%' maxH='100px'>
              <LineChart
                chartData={lineChartDataWidgets3}
                chartOptions={lineChartOptionsWidgets3}
              />
            </Box>
          </CardBody>
        </Card>
        {/* MiniInfo Card */}
        <Card>
          <CardBody>
            <Flex direction='column'>
              <IconBox as='box' h={"45px"} w={"45px"} bg='brand.200' mb='24px'>
                <Icon as={FaShare} h={"24px"} w={"24px"} color='#fff' />
              </IconBox>
              <Flex direction='column'>
                <Text color='#fff' fontSize='22px' fontWeight='bold'>
                  754
                  <Text
                    as='span'
                    color='#fff'
                    fontSize='sm'
                    ms='2px'
                    fontWeight='500'>
                    m
                  </Text>
                </Text>
                <Text fontSize='sm' color='gray.400'>
                  New York City
                </Text>
              </Flex>
            </Flex>
          </CardBody>
        </Card>
        {/* Steps */}
        <Card>
          <CardHeader mb='42px'>
            <Text color='#fff' fontSize='xs'>
              STEPS
            </Text>
          </CardHeader>
          <CardBody>
            <Stat>
              <StatNumber
                color='#fff'
                fontWeight='bold'
                fontSize='22px'
                mb='14px'>
                11.4K
              </StatNumber>
              <LightMode>
                <StatHelpText
                  bg='green.100'
                  color='green'
                  maxW='50px'
                  borderRadius='12px'
                  fontSize='10px'
                  p='4px 8px'>
                  +4.3%
                </StatHelpText>
              </LightMode>
            </Stat>
          </CardBody>
        </Card>
      </Grid>
      <Grid templateColumns={{ sm: "1fr", lg: "1fr .5fr .7fr" }} gap='24px'>
        {/* Calendar */}
        <Card minH='550px'>
          <CardHeader mb='6px'>
            <Flex direction='column'>
              <Text color='#fff' fontSize='lg' fontWeight='bold' mb='6px'>
                Calendar
              </Text>
              <Text color='gray.400' fontSize='sm'>
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
              calendarData={calendarDataWidgets}
            />
          </CardBody>
        </Card>
        <Stack direction='column' spacing='24px'>
          {/* Categories */}
          <Card>
            <CardHeader>
              <Text fontSize='lg' color='#fff' fontWeight='bold'>
                Categories
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
                      <RocketIcon h={"20px"} w={"20px"} color='#fff' />
                    </IconBox>
                    <Flex direction='column'>
                      <Text fontSize='sm' fontWeight='bold' color='#fff'>
                        Devices
                      </Text>
                      <Text color='gray.400' fontSize='xs' fontWeight='500'>
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
                      <SettingsIcon h={"20px"} w={"20px"} color='#fff' />
                    </IconBox>
                    <Flex direction='column'>
                      <Text fontSize='sm' fontWeight='bold' color='#fff'>
                        Tickets
                      </Text>
                      <Text color='gray.400' fontSize='xs' fontWeight='500'>
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
                      <DocumentIcon h={"20px"} w={"20px"} color='#fff' />
                    </IconBox>
                    <Flex direction='column'>
                      <Text fontSize='sm' fontWeight='bold' color='#fff'>
                        Error logs
                      </Text>
                      <Text color='gray.400' fontSize='xs' fontWeight='500'>
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
                <Flex align='center' w='100%'>
                  <Flex align='center'>
                    <IconBox
                      as='box'
                      h={"40px"}
                      w={"40px"}
                      bg='brand.200'
                      me='18px'>
                      <Icon as={FaUser} h={"20px"} w={"20px"} color='#fff' />
                    </IconBox>
                    <Flex direction='column'>
                      <Text fontSize='sm' fontWeight='bold' color='#fff'>
                        Happy Users
                      </Text>
                      <Text color='gray.400' fontSize='xs' fontWeight='500'>
                        <Text as='span'>+430</Text>
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
          {/* Music Media Player */}
          <Card bgImage={BgMusicCard} bgRepeat='no-repeat'>
            <CardHeader mb='60px'>
              <Flex direction='column' w='100%'>
                <Text color='#fff' fontWeight='bold' fontSize='lg'>
                  Some Kind of Blues
                </Text>
                <Text color='#fff' fontSize='sm'>
                  Deftones
                </Text>
              </Flex>
            </CardHeader>
            <CardBody>
              <Stack direction='row' spacing='18px'>
                <Button
                  variant='outline'
                  colorScheme='whiteAlpha'
                  borderRadius='50px'
                  w='45px'
                  h='45px'>
                  <Icon as={AiFillBackward} color='#fff' w='26px' h='26px' />
                </Button>
                <Button
                  variant='outline'
                  colorScheme='whiteAlpha'
                  borderRadius='50px'
                  w='45px'
                  h='45px'>
                  <Icon as={FaPlay} color='#fff' w='18px' h='18px' />
                </Button>
                <Button
                  variant='outline'
                  colorScheme='whiteAlpha'
                  borderRadius='50px'
                  w='45px'
                  h='45px'>
                  <Icon as={AiFillForward} color='#fff' w='26px' h='26px' />
                </Button>
              </Stack>
            </CardBody>
          </Card>
        </Stack>
        {/* Orders Overview */}
        <Card pb='0px'>
          <CardHeader mb='34px'>
            <Flex direction='column'>
              <Text fontSize='lg' color='#fff' fontWeight='bold' pb='.5rem'>
                Orders overview
              </Text>
              <Text fontSize='sm' color='gray.400'>
                <Text fontWeight='bold' as='span' color='teal.300'>
                  +30%
                </Text>{" "}
                this month.
              </Text>
            </Flex>
          </CardHeader>
          <CardBody ms='8px' position='relative'>
            <Flex direction='column'>
              {timelineData.map((row, index, arr) => {
                return (
                  <TimelineRow
                    logo={row.logo}
                    title={row.title}
                    date={row.date}
                    color={row.color}
                    index={index}
                    arrLength={arr.length}
                    key={index}
                  />
                );
              })}
            </Flex>
          </CardBody>
        </Card>
      </Grid>
    </Flex>
  );
}

export default Widgets;
