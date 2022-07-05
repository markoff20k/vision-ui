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

// Chakra imports
import {
  Avatar,
  Badge,
  Box,
  Button,
  Checkbox,
  DarkMode,
  Flex,
  Grid,
  Icon,
  Progress,
  Stack,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import * as GradientProgress from "@delowar/react-circle-progressbar";
import avatar1 from "assets/img/avatars/avatar1.png";
import generalBg from "assets/img/generalBg.png";
// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import LineChart from "components/Charts/LineChart";
import IconBox from "components/Icons/IconBox";
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  HomeIcon,
  LightningWhiteIcon,
  WalletIcon,
} from "components/Icons/Icons";
import { HSeparator } from "components/Separator/Separator";
import React from "react";
import { BsCircleFill } from "react-icons/bs";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import {
  lineChartDataGeneral1,
  lineChartDataGeneral2,
  lineChartOptionsGeneral1,
  lineChartOptionsGeneral2,
} from "variables/charts";

function General() {
  const iconBoxInside = "white";
  const iconTeal = "brand.200";
  const bgButton = "brand.200";

  return (
    <Flex direction='column' pt={{ sm: "125px", lg: "75px" }}>
      <Grid
        templateColumns={{
          sm: "1fr",
          lg: "repeat(2, 1fr)",
          xl: "repeat(2, 1fr)",
          "2xl": "1fr 1.7fr 1.5fr",
        }}
        gap='24px'
        mb='24px'>
        <Card
          bgImage={generalBg}
          bgSize='cover'
          maxW={{ sm: "320px", md: "100%" }}
          maxH={{ sm: "288px", md: "100%" }}
          bgPosition='50%'
          gridArea={{ xl: "1 / 1 / 2 / 2", "2xl": "auto" }}>
          <CardBody p='24px 52px'>
            <Flex direction='column' align='center' justify='center' w='100%'>
              <Text color='#fff' fontSize='2xl'>
                Earnings
              </Text>
              <Text color='#fff' fontSize='5xl' fontWeight='bold' mb='12px'>
                $15,800
              </Text>
              <Badge
                bg='linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)'
                mb='26px'
                color='#fff'
                w='150px'
                borderRadius='8px'
                display='flex'
                justify='center'
                align='center'>
                <Text
                  textAlign='center'
                  py='6px'
                  fontSize='11px'
                  w='100%'
                  h='100%'
                  alignSelf='center'>
                  +15% SINCE LAST WEEK
                </Text>
              </Badge>
              <Button
                variant='no-hover'
                py='16px'
                bg='linear-gradient(112.83deg, rgba(255, 255, 255, 0.58) 0%, rgba(255, 255, 255, 0.12) 110.84%)'
                w='155px'
                h='25px'
                color='#fff'
                fontSize='10px'
                borderRadius='12px'
                border='1.5px solid #fff'>
                VIEW MORE
              </Button>
            </Flex>
          </CardBody>
        </Card>
        <Grid
          templateColumns={{
            sm: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(2, 1fr)",
            xl: "repeat(3, 1fr)",
            "2xl": "repeat(2, 1fr)",
          }}
          templateRows={{
            sm: "repeat(3, 90px)",
            xl: "auto",
            "2xl": "repeat(3, 90px)",
          }}
          gap='24px'
          gridArea={{ xl: "2 / 1 / 3 / 3", "2xl": "auto" }}>
          <Card px={{ lg: "8px", xl: "22px" }}>
            <CardBody>
              <Flex
                flexDirection='row'
                align='center'
                justify='center'
                w='100%'>
                <Stat me='auto'>
                  <StatLabel fontSize='xs' color='gray.400' pb='.1rem'>
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
                <IconBox as='box' h={"45px"} w={"45px"} bg={bgButton}>
                  <WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />
                </IconBox>
              </Flex>
            </CardBody>
          </Card>
          <Card px={{ lg: "8px", xl: "22px" }}>
            <CardBody>
              <Flex
                flexDirection='row'
                align='center'
                justify='center'
                w='100%'>
                <Stat me='auto'>
                  <StatLabel fontSize='xs' color='gray.400' pb='.1rem'>
                    New Clients
                  </StatLabel>
                  <Flex>
                    <StatNumber fontSize='lg' color='#fff'>
                      +$3,052
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
                <IconBox as='box' h={"45px"} w={"45px"} bg={bgButton}>
                  <DocumentIcon h={"24px"} w={"24px"} color={iconBoxInside} />
                </IconBox>
              </Flex>
            </CardBody>
          </Card>
          <Card px={{ lg: "8px", xl: "22px" }}>
            <CardBody>
              <Flex
                flexDirection='row'
                align='center'
                justify='center'
                w='100%'>
                <Stat me='auto'>
                  <StatLabel fontSize='xs' color='gray.400' pb='.1rem'>
                    Today's Users
                  </StatLabel>
                  <Flex>
                    <StatNumber fontSize='lg' color='#fff'>
                      $2,300
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
                <IconBox as='box' h={"45px"} w={"45px"} bg={bgButton}>
                  <GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />
                </IconBox>
              </Flex>
            </CardBody>
          </Card>
          <Card px={{ lg: "8px", xl: "22px" }}>
            <CardBody>
              <Flex
                flexDirection='row'
                align='center'
                justify='center'
                w='100%'>
                <Stat me='auto'>
                  <StatLabel fontSize='xs' color='gray.400' pb='.1rem'>
                    Total Sales
                  </StatLabel>
                  <Flex>
                    <StatNumber fontSize='lg' color='#fff'>
                      $173,000
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
                <IconBox as='box' h={"45px"} w={"45px"} bg={bgButton}>
                  <CartIcon h={"24px"} w={"24px"} color={iconBoxInside} />
                </IconBox>
              </Flex>
            </CardBody>
          </Card>
          <Card px={{ lg: "8px", xl: "22px" }}>
            <CardBody>
              <Flex
                flexDirection='row'
                align='center'
                justify='center'
                w='100%'>
                <Stat me='auto'>
                  <StatLabel fontSize='xs' color='gray.400' pb='.1rem'>
                    Consumption
                  </StatLabel>
                  <Flex>
                    <StatNumber fontSize='lg' color='#fff'>
                      163W/km
                    </StatNumber>
                  </Flex>
                </Stat>
                <IconBox as='box' h={"45px"} w={"45px"} bg={bgButton}>
                  <LightningWhiteIcon
                    h={"24px"}
                    w={"24px"}
                    color={iconBoxInside}
                  />
                </IconBox>
              </Flex>
            </CardBody>
          </Card>
          <Card
            pt={{ sm: "8px", lg: "4px", xl: "8px" }}
            px={{ lg: "8px", xl: "22px" }}>
            <CardBody>
              <Flex
                flexDirection='row'
                align='center'
                justify='center'
                w='100%'>
                <Stat me='50px'>
                  <StatLabel fontSize='xs' color='gray.400' pb='.1rem'>
                    This Week
                  </StatLabel>
                  <Flex>
                    <StatNumber fontSize='lg' color='#fff'>
                      1,342km
                    </StatNumber>
                  </Flex>
                </Stat>
                <Box maxH='80px'>
                  <LineChart
                    chartData={lineChartDataGeneral1}
                    chartOptions={lineChartOptionsGeneral1}
                  />
                </Box>
              </Flex>
            </CardBody>
          </Card>
        </Grid>
        <Card
          gridColumn={{ lg: "1 / 3", xl: "auto" }}
          gridArea={{ xl: "1 / 2 / 2 / 3", "2xl": "auto" }}>
          <CardHeader mb='28px'>
            <Flex>
              <Avatar
                src={avatar1}
                w='40px'
                h='40px'
                mr='15px'
                borderRadius='12px'
              />
              <Flex direction='column'>
                <Text color='#fff' fontSize='sm' fontWeight='bold'>
                  Esthera Jackson
                </Text>
                <Text color='gray.400' fontSize='sm'>
                  2h ago
                </Text>
              </Flex>
            </Flex>
          </CardHeader>
          <CardBody h='100%'>
            <Flex direction='column' w='100%' h='100%'>
              <Flex
                direction='column'
                maxW='400px'
                mb={{ sm: "12px", xl: "auto" }}>
                <Text color='#fff' fontSize='lg' fontWeight='bold' mb='4px'>
                  I need a Ruby developer for my new website.
                </Text>
                <Text color='gray.400' fontSize='sm'>
                  The website was initially built in PHP, I need a professional
                  ruby programmer to shift it.
                </Text>
              </Flex>
              <Flex
                justify='space-between'
                w='100%'
                bg='linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)'
                borderRadius='20px'
                p='20px 25px'>
                <Text color='gray.400' fontSize='sm'>
                  ${" "}
                  <Text as='span' fontSize='2xl' color='#fff' fontWeight='bold'>
                    3,000
                  </Text>{" "}
                  / month
                </Text>
                <Button
                  variant='brand'
                  fontSize='10px'
                  minW={{ sm: "75px", md: "125px", lg: "75px", xl: "125px" }}
                  h='35px'>
                  APPLY
                </Button>
              </Flex>
            </Flex>
          </CardBody>
        </Card>
      </Grid>
      <Grid
        templateColumns={{ sm: "1fr", lg: "1.85fr 1fr", xl: "1.85fr 1fr" }}
        gap='24px'>
        <Card p={{ sm: "16px", md: "22px" }} maxW={{ sm: "330px", md: "100%" }}>
          <CardHeader>
            <Flex justify='space-between' w='100%'>
              <Text color='#fff' fontSize='lg' fontWeight='bold'>
                To do List
              </Text>
              <Text color='gray.400' fontSize='sm'>
                23 - 30 March 2020
              </Text>
            </Flex>
          </CardHeader>
          <CardBody>
            <Flex
              direction='column'
              w='100%'
              overflowX={{ sm: "scroll", md: "hidden" }}>
              <HSeparator my='14px' />
              <Flex>
                <Flex
                  bgColor='brand.200'
                  borderRadius='12px'
                  minWidth='3px'
                  h='100%'
                />
                <Flex direction='column' p='12px 22px' w='100%' w='100%'>
                  <Flex justify='space-between' mb='18px'>
                    <Flex align='center'>
                      <DarkMode>
                        <Checkbox
                          me='16px'
                          colorScheme='brand'
                          borderColor='#292E5D'
                          size='lg'
                          defaultIsChecked
                        />
                      </DarkMode>
                      <Text color='#fff' fontSize='sm'>
                        Check status
                      </Text>
                    </Flex>
                    <Icon
                      as={IoEllipsisHorizontalSharp}
                      color='#fff'
                      w='20px'
                      h='20px'
                      cursor='pointer'
                    />
                  </Flex>
                  <Stack
                    direction='row'
                    spacing={{
                      sm: "20px",
                      md: "100px",
                      lg: "80px",
                      xl: "180px",
                    }}
                    ms={{ sm: "0px", md: "36px", lg: "0px", xl: "36px" }}>
                    <Flex direction='column'>
                      <Text color='#fff' fontSize='xs'>
                        Date
                      </Text>
                      <Text color='#fff' fontWeight='bold' fontSize='xs'>
                        22 July 2021
                      </Text>
                    </Flex>
                    <Flex direction='column'>
                      <Text color='#fff' fontSize='xs'>
                        Project
                      </Text>
                      <Text color='#fff' fontWeight='bold' fontSize='xs'>
                        2414_VR4sf3#
                      </Text>
                    </Flex>
                    <Flex direction='column'>
                      <Text color='#fff' fontSize='xs'>
                        Company
                      </Text>
                      <Text color='#fff' fontWeight='bold' fontSize='xs'>
                        Creative Tim
                      </Text>
                    </Flex>
                  </Stack>
                </Flex>
              </Flex>
              <HSeparator my='14px' />
              <Flex>
                <Flex
                  bgColor='orange.300'
                  borderRadius='12px'
                  minWidth='3px'
                  h='100%'
                />
                <Flex direction='column' p='12px 22px' w='100%'>
                  <Flex justify='space-between' mb='18px'>
                    <Flex align='center'>
                      <DarkMode>
                        <Checkbox
                          me='16px'
                          colorScheme='brand'
                          borderColor='#292E5D'
                          size='lg'
                        />
                      </DarkMode>
                      <Text color='#fff' fontSize='sm'>
                        Management discussion
                      </Text>
                    </Flex>
                    <Icon
                      as={IoEllipsisHorizontalSharp}
                      color='#fff'
                      w='20px'
                      h='20px'
                      cursor='pointer'
                    />
                  </Flex>
                  <Stack
                    direction='row'
                    spacing={{
                      sm: "20px",
                      md: "100px",
                      lg: "80px",
                      xl: "180px",
                    }}
                    ms={{ sm: "0px", md: "36px", lg: "0px", xl: "36px" }}>
                    <Flex direction='column'>
                      <Text color='#fff' fontSize='xs'>
                        Date
                      </Text>
                      <Text color='#fff' fontWeight='bold' fontSize='xs'>
                        22 July 2021
                      </Text>
                    </Flex>
                    <Flex direction='column'>
                      <Text color='#fff' fontSize='xs'>
                        Project
                      </Text>
                      <Text color='#fff' fontWeight='bold' fontSize='xs'>
                        4411_8sIsdd23
                      </Text>
                    </Flex>
                    <Flex direction='column'>
                      <Text color='#fff' fontSize='xs'>
                        Company
                      </Text>
                      <Text color='#fff' fontWeight='bold' fontSize='xs'>
                        Apple
                      </Text>
                    </Flex>
                  </Stack>
                </Flex>
              </Flex>
              <HSeparator my='14px' />
              <Flex>
                <Flex
                  bgColor='pink.300'
                  borderRadius='12px'
                  minWidth='3px'
                  h='100%'
                />
                <Flex direction='column' p='12px 22px' w='100%'>
                  <Flex justify='space-between' mb='18px'>
                    <Flex align='center'>
                      <DarkMode>
                        <Checkbox
                          me='16px'
                          colorScheme='brand'
                          borderColor='#292E5D'
                          size='lg'
                        />
                      </DarkMode>
                      <Text color='#fff' fontSize='sm'>
                        New channel distribution
                      </Text>
                    </Flex>
                    <Icon
                      as={IoEllipsisHorizontalSharp}
                      color='#fff'
                      w='20px'
                      h='20px'
                      cursor='pointer'
                    />
                  </Flex>
                  <Stack
                    direction='row'
                    spacing={{
                      sm: "20px",
                      md: "100px",
                      lg: "80px",
                      xl: "180px",
                    }}
                    ms={{ sm: "0px", md: "36px", lg: "0px", xl: "36px" }}>
                    <Flex direction='column'>
                      <Text color='#fff' fontSize='xs'>
                        Date
                      </Text>
                      <Text color='#fff' fontWeight='bold' fontSize='xs'>
                        22 July 2021
                      </Text>
                    </Flex>
                    <Flex direction='column'>
                      <Text color='#fff' fontSize='xs'>
                        Project
                      </Text>
                      <Text color='#fff' fontWeight='bold' fontSize='xs'>
                        827d_kdl33D1s
                      </Text>
                    </Flex>
                    <Flex direction='column'>
                      <Text color='#fff' fontSize='xs'>
                        Company
                      </Text>
                      <Text color='#fff' fontWeight='bold' fontSize='xs'>
                        Microsoft
                      </Text>
                    </Flex>
                  </Stack>
                </Flex>
              </Flex>
              <HSeparator my='14px' />
              <Flex>
                <Flex
                  bgColor='purple.500'
                  borderRadius='12px'
                  minWidth='3px'
                  h='100%'
                />{" "}
                <Flex direction='column' p='12px 22px' w='100%'>
                  <Flex justify='space-between' mb='18px'>
                    <Flex align='center'>
                      <DarkMode>
                        <Checkbox
                          me='16px'
                          colorScheme='brand'
                          borderColor='#292E5D'
                          size='lg'
                          defaultIsChecked
                        />
                      </DarkMode>
                      <Text color='#fff' fontSize='sm'>
                        IOS App development
                      </Text>
                    </Flex>
                    <Icon
                      as={IoEllipsisHorizontalSharp}
                      color='#fff'
                      w='20px'
                      h='20px'
                      cursor='pointer'
                    />
                  </Flex>
                  <Stack
                    direction='row'
                    spacing={{
                      sm: "20px",
                      md: "100px",
                      lg: "80px",
                      xl: "180px",
                    }}
                    ms={{ sm: "0px", md: "36px", lg: "0px", xl: "36px" }}>
                    <Flex direction='column'>
                      <Text color='#fff' fontSize='xs'>
                        Date
                      </Text>
                      <Text color='#fff' fontWeight='bold' fontSize='xs'>
                        22 July 2021
                      </Text>
                    </Flex>
                    <Flex direction='column'>
                      <Text color='#fff' fontSize='xs'>
                        Project
                      </Text>
                      <Text color='#fff' fontWeight='bold' fontSize='xs'>
                        88s1_349DA2sa
                      </Text>
                    </Flex>
                    <Flex direction='column'>
                      <Text color='#fff' fontSize='xs'>
                        Company
                      </Text>
                      <Text color='#fff' fontWeight='bold' fontSize='xs'>
                        Facebook
                      </Text>
                    </Flex>
                  </Stack>
                </Flex>
              </Flex>
            </Flex>
          </CardBody>
        </Card>
        <Flex direction='column'>
          <Card
            mb='24px'
            maxW={{ sm: "330px", md: "100%" }}
            px={{ sm: "0px", lg: "22px" }}>
            <CardHeader>
              <Flex direction='column' w='100%'>
                <Flex
                  justify='space-between'
                  w='100%'
                  px={{ sm: "22px", lg: "0px" }}>
                  <Flex align='center'>
                    <IconBox
                      as='box'
                      h={"45px"}
                      w={"45px"}
                      bg={iconTeal}
                      me='16px'>
                      <HomeIcon h={"24px"} w={"24px"} color={iconBoxInside} />
                    </IconBox>
                    <Flex direction='column'>
                      <Text color='#fff' fontSize='sm'>
                        Tasks
                      </Text>
                      <Text color='#fff' fontWeight='bold' fontSize='lg'>
                        480
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex direction='column' alignSelf='flex-end' minW='125px'>
                    <Text color='gray.400' fontSize='xs' mb='6px'>
                      60%
                    </Text>
                    <Progress
                      colorScheme='brand'
                      size='xs'
                      bg='#2D2E5F'
                      borderRadius='15px'
                      value={60}
                    />
                  </Flex>
                </Flex>
                <LineChart
                  chartData={lineChartDataGeneral2}
                  chartOptions={lineChartOptionsGeneral2}
                />
              </Flex>
            </CardHeader>
          </Card>
          <Card maxW={{ sm: "330px", md: "100%" }}>
            <CardBody>
              <Flex justify='space-between' w='100%' minH='190px'>
                <Flex direction='column'>
                  <Flex align='center'>
                    <IconBox
                      as='box'
                      h={"45px"}
                      w={"45px"}
                      bg={iconTeal}
                      me='16px'>
                      <DocumentIcon
                        h={"24px"}
                        w={"24px"}
                        color={iconBoxInside}
                      />
                    </IconBox>
                    <Flex direction='column'>
                      <Text color='#fff' fontSize='sm'>
                        Projects
                      </Text>
                      <Text color='#fff' fontWeight='bold' fontSize='lg'>
                        115
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex direction='column' mt='36px'>
                    <Flex align='center'>
                      <Icon
                        as={BsCircleFill}
                        color='#07987D'
                        w='10px'
                        h='10px'
                        me='8px'
                      />
                      <Text color='gray.400' fontSize='sm'>
                        Done
                      </Text>
                    </Flex>
                    <Flex align='center'>
                      <Icon
                        as={BsCircleFill}
                        color='gray.400'
                        w='10px'
                        h='10px'
                        me='8px'
                      />
                      <Text color='gray.400' fontSize='sm'>
                        In progress
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
                <Box alignSelf='center' me={{ xl: "70px" }}>
                  <GradientProgress
                    percent={70}
                    viewport
                    size={165}
                    isGradient
                    strokeWidth={20}
                    gradient={{
                      angle: 90,
                      startColor: "rgba(5, 205, 153, 0)",
                      stopColor: "#05CD99",
                    }}
                    background='transparent'
                    emptyColor='#060B28'></GradientProgress>
                </Box>
              </Flex>
            </CardBody>
          </Card>
        </Flex>
      </Grid>
    </Flex>
  );
}

export default General;
