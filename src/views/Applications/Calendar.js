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
  Avatar,
  AvatarGroup,
  Box,
  Flex,
  Grid,
  Icon,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";

// Images
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";

// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import EventCalendar from "components/Calendars/EventCalendar";
import { VSeparator } from "components/Separator/Separator";
import LineChart from "components/Charts/LineChart";
import IconBox from "components/Icons/IconBox";

// Icons
import { ClockIcon, DocumentIcon, WalletIcon } from "components/Icons/Icons";
import { FaShip } from "react-icons/fa";
import { AddIcon } from "@chakra-ui/icons";
import { calendarDataCalendar } from "variables/calendar";

// Data
import {
  lineChartDataCalendar,
  lineChartOptionsCalendar,
} from "variables/charts";

function Calendar() {
  const textColor = "white";
  const iconWhite = "white";
  const textGray = "gray.400";
  const iconBg = "brand.200";

  return (
    <Flex direction='column' pt={{ sm: "125px", lg: "75px" }}>
      <Flex w='100%' align='flex-end' justify='flex-end' mb='24px'>
        <Flex
          ms='auto'
          align='center'
          justify='center'
          me='25px'
          mb={{ sm: "16px", md: "50px" }}>
          <Flex direction='column' me='25px'>
            <Text fontSize='sm' color={textGray} fontWeight='bold' mb='8px'>
              Team Members:
            </Text>
            <AvatarGroup size='sm'>
              <Avatar borderColor='gray.800' src={avatar1} />
              <Avatar borderColor='gray.800' src={avatar2} />
              <Avatar borderColor='gray.800' src={avatar3} />
            </AvatarGroup>
          </Flex>
          <VSeparator h='56px' me='25px' />
          <IconButton
            w='40px'
            h='40px'
            colorScheme='brand'
            aria-label='Search database'
            icon={<AddIcon w='12px' h='12px' color='white' />}
          />
        </Flex>
      </Flex>
      <Grid templateColumns={{ sm: "1fr", lg: "2fr 1fr" }} gap='24px'>
        {/* Calendar */}
        <Card
          minH='570px'
          bg='linear-gradient(126.97deg, rgba(6, 11, 40, 0.74) 28.26%, rgba(10, 14, 35, 0.71) 91.2%)'>
          <CardHeader mb='6px'>
            <Flex direction='column'>
              <Text color={textColor} fontSize='lg' fontWeight='bold' mb='6px'>
                Calendar
              </Text>
              <Text color='gray.400' fontSize='sm' fontWeight='500'>
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
              calendarData={calendarDataCalendar}
            />
          </CardBody>
        </Card>
        <Stack
          direction={{ sm: "column", md: "row", lg: "column" }}
          spacing='24px'>
          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <Text color={textColor} fontSize='lg' fontWeight='bold' mb='28px'>
                Upcoming events
              </Text>
            </CardHeader>
            <CardBody>
              <Stack direction='column' spacing='20px'>
                <Flex align='center'>
                  <IconBox as='box' h={"50px"} w={"50px"} bg={iconBg} me='16px'>
                    <Icon
                      as={WalletIcon}
                      h={"22px"}
                      w={"22px"}
                      color={iconWhite}
                    />
                  </IconBox>
                  <Flex direction='column'>
                    <Text color={textColor} fontSize='sm' fontWeight='bold'>
                      Cyber Week
                    </Text>
                    <Text color='gray.400' fontSize='sm' fontWeight='500'>
                      27 March 2020, at 12:30 PM
                    </Text>
                  </Flex>
                </Flex>
                <Flex align='center'>
                  <IconBox as='box' h={"50px"} w={"50px"} bg={iconBg} me='16px'>
                    <Icon
                      as={ClockIcon}
                      h={"22px"}
                      w={"22px"}
                      color={iconWhite}
                    />
                  </IconBox>
                  <Flex direction='column'>
                    <Text color={textColor} fontSize='sm' fontWeight='bold'>
                      Meeting with Marry
                    </Text>
                    <Text color='gray.400' fontSize='sm' fontWeight='500'>
                      22 March 2020, at 10:00 PM
                    </Text>
                  </Flex>
                </Flex>
                <Flex align='center' mb='22px'>
                  <IconBox as='box' h={"50px"} w={"50px"} bg={iconBg} me='16px'>
                    <Icon
                      as={DocumentIcon}
                      h={"22px"}
                      w={"22px"}
                      color={iconWhite}
                    />
                  </IconBox>
                  <Flex direction='column'>
                    <Text color={textColor} fontSize='sm' fontWeight='bold'>
                      Book Deposit Hall
                    </Text>
                    <Text color='gray.400' fontSize='sm' fontWeight='500'>
                      25 March 2021, at 9:30 AM
                    </Text>
                  </Flex>
                </Flex>
                <Flex align='center' mb='22px'>
                  <IconBox as='box' h={"50px"} w={"50px"} bg={iconBg} me='16px'>
                    <Icon as={FaShip} h={"22px"} w={"22px"} color={iconWhite} />
                  </IconBox>
                  <Flex direction='column'>
                    <Text color={textColor} fontSize='sm' fontWeight='bold'>
                      Shipment Deal UK
                    </Text>
                    <Text color='gray.400' fontSize='sm' fontWeight='500'>
                      25 March 2021, at 2:00 PM
                    </Text>
                  </Flex>
                </Flex>
              </Stack>
            </CardBody>
          </Card>
          {/* Productivity */}
          <Card px='0px' pb='0px' minH='230px' alignSelf='flex-start'>
            <CardHeader px='22px'>
              <Flex direction='column'>
                <Text fontSize='lg' color='#fff' fontWeight='bold'>
                  Productivity
                </Text>
                <Text color='#fff' fontSize='sm' fontWeight='500'>
                  <Text as='span' color='green.400' fontWeight='bold'>
                    +4%
                  </Text>
                  <Text as='span' fontWeight='bold'>
                    {" "}
                    more{" "}
                  </Text>
                  in 2021
                </Text>
              </Flex>
            </CardHeader>
            <CardBody>
              <Box w='100%'>
                <LineChart
                  chartData={lineChartDataCalendar}
                  chartOptions={lineChartOptionsCalendar}
                />
              </Box>
            </CardBody>
          </Card>
        </Stack>
      </Grid>
    </Flex>
  );
}

export default Calendar;
