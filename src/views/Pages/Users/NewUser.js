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
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Icon,
  Input,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Textarea,
} from "@chakra-ui/react";

// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import React, { useRef, useState } from "react";
import { BsCircleFill } from "react-icons/bs";

function NewUser() {
  // Active bullet changes based on the current state
  const [activeBullets, setActiveBullets] = useState({
    userInfo: true,
    address: false,
    socials: false,
    profile: false,
  });

  // References beetween bullets and tabs
  const userInfoTab = useRef();
  const addressTab = useRef();
  const socialsTab = useRef();
  const profileTab = useRef();

  return (
    <Flex
      direction='column'
      minH='100vh'
      align='center'
      mt={{ sm: "120px", md: "75px" }}>
      <Tabs variant='unstyled' mt='24px'>
        <TabList display='flex' align='center' justifyContent='center'>
          <Tab
            ref={userInfoTab}
            _focus='none'
            w={{ sm: "80px", md: "200px" }}
            onClick={() =>
              setActiveBullets({
                userInfo: true,
                address: false,
                socials: false,
                profile: false,
              })
            }>
            <Flex
              direction='column'
              justify='center'
              align='center'
              position='relative'
              _before={{
                content: "''",
                width: { sm: "80px", md: "200px" },
                height: "3px",
                bg: activeBullets.address ? "#fff" : "#182058",
                left: { sm: "12px", md: "32px" },
                top: { sm: activeBullets.userInfo ? "8px" : "6px", md: null },
                position: "absolute",
                bottom: activeBullets.userInfo ? "40px" : "38px",
                zIndex: -1,
                transition: "all .3s ease",
              }}>
              <Icon
                as={BsCircleFill}
                color={activeBullets.userInfo ? "#fff" : "brand.200"}
                w='20px'
                h='20px'
                border={activeBullets.userInfo ? "none" : "1px solid"}
                borderColor={activeBullets.userInfo ? "#fff" : "#182058"}
                borderRadius='50%'
                mb='8px'
              />
              <Text
                color='#fff'
                fontWeight={activeBullets.userInfo ? "bold" : "normal"}
                display={{ sm: "none", md: "block" }}>
                User Info
              </Text>
            </Flex>
          </Tab>
          <Tab
            ref={addressTab}
            _focus='none'
            w={{ sm: "80px", md: "200px" }}
            onClick={() =>
              setActiveBullets({
                userInfo: true,
                address: true,
                socials: false,
                profile: false,
              })
            }>
            <Flex
              direction='column'
              justify='center'
              align='center'
              position='relative'
              _before={{
                content: "''",
                width: { sm: "80px", md: "200px" },
                height: "3px",
                bg: activeBullets.socials ? "#fff" : "#182058",
                left: { sm: "12px", md: "32px" },
                top: { sm: activeBullets.address ? "8px" : "8px", md: null },
                position: "absolute",
                bottom: activeBullets.address ? "40px" : "38px",
                zIndex: -1,
                transition: "all .3s ease",
              }}>
              <Icon
                as={BsCircleFill}
                color={activeBullets.address ? "#fff" : "brand.200"}
                w='20px'
                h='20px'
                border={activeBullets.address ? "none" : "1px solid"}
                borderColor={activeBullets.address ? "#fff" : "#182058"}
                borderRadius='50%'
                mb='8px'
              />
              <Text
                color='#fff'
                fontWeight={activeBullets.address ? "bold" : "normal"}
                transition='all .3s ease'
                _hover={{ color: "#fff" }}
                display={{ sm: "none", md: "block" }}>
                Address
              </Text>
            </Flex>
          </Tab>
          <Tab
            ref={socialsTab}
            _focus='none'
            w={{ sm: "80px", md: "200px" }}
            onClick={() =>
              setActiveBullets({
                userInfo: true,
                address: true,
                socials: true,
                profile: false,
              })
            }>
            <Flex
              direction='column'
              justify='center'
              align='center'
              position='relative'
              _before={{
                content: "''",
                width: { sm: "80px", md: "200px" },
                height: "3px",
                bg: activeBullets.profile ? "#fff" : "#182058",
                left: { sm: "12px", md: "32px" },
                top: { sm: activeBullets.socials ? "8px" : "8px", md: null },
                position: "absolute",
                bottom: activeBullets.socials ? "40px" : "38px",
                zIndex: -1,
                transition: "all .3s ease",
              }}>
              <Icon
                as={BsCircleFill}
                color={activeBullets.socials ? "#fff" : "brand.200"}
                w='20px'
                h='20px'
                border={activeBullets.socials ? "none" : "1px solid"}
                borderColor={activeBullets.socials ? "#fff" : "#182058"}
                borderRadius='50%'
                mb='8px'
              />
              <Text
                color='#fff'
                fontWeight={activeBullets.socials ? "bold" : "normal"}
                transition='all .3s ease'
                _hover={{ color: "#fff" }}
                display={{ sm: "none", md: "block" }}>
                Socials
              </Text>
            </Flex>
          </Tab>
          <Tab
            ref={profileTab}
            _focus='none'
            w={{ sm: "80px", md: "200px" }}
            onClick={() =>
              setActiveBullets({
                userInfo: true,
                address: true,
                socials: true,
                profile: true,
              })
            }>
            <Flex direction='column' justify='center' align='center'>
              <Icon
                as={BsCircleFill}
                color={activeBullets.profile ? "#fff" : "brand.200"}
                w={activeBullets.profile ? "20px" : "20px"}
                h={activeBullets.profile ? "20px" : "20px"}
                border={activeBullets.profile ? "none" : "1px solid"}
                borderColor={activeBullets.profile ? "#fff" : "#182058"}
                borderRadius='50%'
                mb='8px'
              />
              <Text
                color='#fff'
                fontWeight={activeBullets.profile ? "bold" : "normal"}
                transition='all .3s ease'
                _hover={{ color: "#fff" }}
                display={{ sm: "none", md: "block" }}>
                Profile
              </Text>
            </Flex>
          </Tab>
        </TabList>
        <TabPanels mt='24px' maxW={{ md: "90%", lg: "100%" }} mx='auto'>
          <TabPanel>
            <Card>
              <CardHeader mb='40px'>
                <Flex direction='column'>
                  <Text color={"#fff"} fontSize='lg' fontWeight='bold' mb='3px'>
                    About Me
                  </Text>
                  <Text color='gray.400' fontWeight='500' fontSize='sm'>
                    Mandatory Informations
                  </Text>
                </Flex>
              </CardHeader>
              <CardBody>
                <Flex direction='column' w='100%'>
                  <Grid
                    templateColumns={{ sm: "1fr", md: "repeat(2, 1fr)" }}
                    templateRows={{ md: "repeat(2, 1fr)" }}
                    gap='24px'>
                    <FormControl>
                      <FormLabel fontWeight='bold' color={"#fff"} fontSize='xs'>
                        First Name
                      </FormLabel>
                      <Input
                        bg='#0F1535'
                        border='.5px solid'
                        borderColor='rgba(226, 232, 240, 0.3)'
                        _hover='none'
                        color='#fff'
                        borderRadius='15px'
                        placeholder='eg. Michael'
                        fontSize='xs'
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel fontWeight='bold' color={"#fff"} fontSize='xs'>
                        Last Name
                      </FormLabel>
                      <Input
                        bg='#0F1535'
                        border='.5px solid'
                        borderColor='rgba(226, 232, 240, 0.3)'
                        _hover='none'
                        color='#fff'
                        borderRadius='15px'
                        placeholder='eg. Jackson'
                        fontSize='xs'
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel fontWeight='bold' color={"#fff"} fontSize='xs'>
                        Company
                      </FormLabel>
                      <Input
                        bg='#0F1535'
                        border='.5px solid'
                        borderColor='rgba(226, 232, 240, 0.3)'
                        _hover='none'
                        color='#fff'
                        borderRadius='15px'
                        placeholder='eg. Simmmple'
                        fontSize='xs'
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel fontWeight='bold' color={"#fff"} fontSize='xs'>
                        Email address
                      </FormLabel>
                      <Input
                        bg='#0F1535'
                        border='.5px solid'
                        borderColor='rgba(226, 232, 240, 0.3)'
                        _hover='none'
                        color='#fff'
                        borderRadius='15px'
                        type='email'
                        placeholder='eg. example@yahoo.com'
                        fontSize='xs'
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel fontWeight='bold' color={"#fff"} fontSize='xs'>
                        Password
                      </FormLabel>
                      <Input
                        bg='#0F1535'
                        border='.5px solid'
                        borderColor='rgba(226, 232, 240, 0.3)'
                        _hover='none'
                        color='#fff'
                        borderRadius='15px'
                        type='password'
                        placeholder='******'
                        fontSize='xs'
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel fontWeight='bold' color={"#fff"} fontSize='xs'>
                        Repeat Password
                      </FormLabel>
                      <Input
                        bg='#0F1535'
                        border='.5px solid'
                        borderColor='rgba(226, 232, 240, 0.3)'
                        _hover='none'
                        color='#fff'
                        borderRadius='15px'
                        placeholder='******'
                        fontSize='xs'
                      />
                    </FormControl>
                  </Grid>
                  <Button
                    variant='brand'
                    alignSelf='flex-end'
                    mt='24px'
                    w='100px'
                    h='35px'
                    onClick={() => addressTab.current.click()}>
                    <Text fontSize='10px' color='#fff'>
                      NEXT
                    </Text>
                  </Button>
                </Flex>
              </CardBody>
            </Card>
          </TabPanel>
          <TabPanel>
            <Card>
              <CardHeader mb='40px'>
                <Text color={"#fff"} fontSize='lg' fontWeight='bold' mb='3px'>
                  Address
                </Text>
              </CardHeader>
              <CardBody>
                <Flex direction='column' w='100%'>
                  <Stack direction='column' spacing='20px'>
                    <FormControl>
                      <FormLabel fontWeight='bold' color={"#fff"} fontSize='xs'>
                        Address 1
                      </FormLabel>
                      <Input
                        bg='#0F1535'
                        border='.5px solid'
                        borderColor='rgba(226, 232, 240, 0.3)'
                        _hover='none'
                        color='#fff'
                        borderRadius='15px'
                        placeholder='eg. Street 120'
                        fontSize='xs'
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel fontWeight='bold' color={"#fff"} fontSize='xs'>
                        Address 2
                      </FormLabel>
                      <Input
                        bg='#0F1535'
                        border='.5px solid'
                        borderColor='rgba(226, 232, 240, 0.3)'
                        _hover='none'
                        color='#fff'
                        borderRadius='15px'
                        placeholder='eg. Street 220'
                        fontSize='xs'
                      />
                    </FormControl>
                    <Grid
                      templateColumns={{ sm: "1fr 1fr", lg: "2fr 1fr 1fr" }}
                      gap='30px'>
                      <FormControl gridColumn={{ sm: "1 / 3", lg: "auto" }}>
                        <FormLabel
                          fontWeight='bold'
                          color={"#fff"}
                          fontSize='xs'>
                          City
                        </FormLabel>
                        <Input
                          bg='#0F1535'
                          border='.5px solid'
                          borderColor='rgba(226, 232, 240, 0.3)'
                          _hover='none'
                          color='#fff'
                          borderRadius='15px'
                          placeholder='eg. Tokyo'
                          fontSize='xs'
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel
                          fontWeight='bold'
                          color={"#fff"}
                          fontSize='xs'>
                          State
                        </FormLabel>
                        <Input
                          bg='#0F1535'
                          border='.5px solid'
                          borderColor='rgba(226, 232, 240, 0.3)'
                          _hover='none'
                          color='#fff'
                          borderRadius='15px'
                          placeholder='...'
                          fontSize='xs'
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel
                          fontWeight='bold'
                          color={"#fff"}
                          fontSize='xs'>
                          ZIP
                        </FormLabel>
                        <Input
                          bg='#0F1535'
                          border='.5px solid'
                          borderColor='rgba(226, 232, 240, 0.3)'
                          _hover='none'
                          color='#fff'
                          borderRadius='15px'
                          placeholder='7 letters'
                          fontSize='xs'
                        />
                      </FormControl>
                    </Grid>
                  </Stack>
                  <Flex justify='space-between'>
                    <Button
                      variant='brand'
                      bg={"white"}
                      alignSelf='flex-end'
                      mt='24px'
                      w='100px'
                      h='35px'
                      onClick={() => userInfoTab.current.click()}>
                      <Text fontSize='10px' color='gray.700'>
                        PREV
                      </Text>
                    </Button>
                    <Button
                      variant='brand'
                      alignSelf='flex-end'
                      mt='24px'
                      w='100px'
                      h='35px'
                      onClick={() => socialsTab.current.click()}>
                      <Text fontSize='10px' color='#fff'>
                        NEXT
                      </Text>
                    </Button>
                  </Flex>
                </Flex>
              </CardBody>
            </Card>
          </TabPanel>
          <TabPanel>
            <Card>
              <CardHeader mb='40px'>
                <Text color={"#fff"} fontSize='lg' fontWeight='bold' mb='3px'>
                  Socials
                </Text>
              </CardHeader>
              <CardBody>
                <Flex direction='column' w='100%'>
                  <Grid
                    templateColumns='1fr'
                    templateRows='repeat(3, 1fr)'
                    gap='24px'>
                    <FormControl>
                      <FormLabel fontWeight='bold' color={"#fff"} fontSize='xs'>
                        Twitter Handle
                      </FormLabel>
                      <Input
                        bg='#0F1535'
                        border='.5px solid'
                        borderColor='rgba(226, 232, 240, 0.3)'
                        _hover='none'
                        color='#fff'
                        borderRadius='15px'
                        placeholder='@chakra-ui'
                        fontSize='xs'
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel fontWeight='bold' color={"#fff"} fontSize='xs'>
                        Facebook Account
                      </FormLabel>
                      <Input
                        bg='#0F1535'
                        border='.5px solid'
                        borderColor='rgba(226, 232, 240, 0.3)'
                        _hover='none'
                        color='#fff'
                        borderRadius='15px'
                        placeholder='http://...'
                        fontSize='xs'
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel fontWeight='bold' color={"#fff"} fontSize='xs'>
                        Instagram Account
                      </FormLabel>
                      <Input
                        bg='#0F1535'
                        border='.5px solid'
                        borderColor='rgba(226, 232, 240, 0.3)'
                        _hover='none'
                        color='#fff'
                        borderRadius='15px'
                        placeholder='http://...'
                        fontSize='xs'
                      />
                    </FormControl>
                  </Grid>
                  <Flex justify='space-between'>
                    <Button
                      variant='brand'
                      bg={"white"}
                      alignSelf='flex-end'
                      mt='24px'
                      w='100px'
                      h='35px'
                      onClick={() => addressTab.current.click()}>
                      <Text fontSize='10px' color='gray.700'>
                        PREV
                      </Text>
                    </Button>
                    <Button
                      variant='brand'
                      alignSelf='flex-end'
                      mt='24px'
                      w='100px'
                      h='35px'
                      onClick={() => profileTab.current.click()}>
                      <Text fontSize='10px' color='#fff'>
                        NEXT
                      </Text>
                    </Button>
                  </Flex>
                </Flex>
              </CardBody>
            </Card>
          </TabPanel>
          <TabPanel>
            <Card>
              <CardHeader mb='40px'>
                <Text color={"#fff"} fontSize='lg' fontWeight='bold' mb='3px'>
                  Profile
                </Text>
              </CardHeader>
              <CardBody>
                <Flex direction='column' w='100%'>
                  <Stack direction='column' spacing='24px'>
                    <FormControl>
                      <FormLabel fontWeight='bold' color={"#fff"} fontSize='xs'>
                        Public Email
                      </FormLabel>
                      <Input
                        bg='#0F1535'
                        border='.5px solid'
                        borderColor='rgba(226, 232, 240, 0.3)'
                        _hover='none'
                        color='#fff'
                        borderRadius='15px'
                        placeholder="Use an address you don't use frequently"
                        fontSize='xs'
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel fontWeight='bold' color={"#fff"} fontSize='xs'>
                        Facebook Account
                      </FormLabel>
                      <Textarea
                        placeholder='Say a few words about who you are or what you are working on.'
                        minH='120px'
                        fontSize='xs'
                        border='.5px solid'
                        borderColor='rgba(226, 232, 240, 0.3)'
                        color='#fff'
                        bg='#0F1535'
                        borderRadius='15px'
                      />
                    </FormControl>
                  </Stack>
                  <Flex justify='space-between'>
                    <Button
                      variant='brand'
                      bg={"white"}
                      alignSelf='flex-end'
                      mt='24px'
                      w='100px'
                      h='35px'
                      onClick={() => socialsTab.current.click()}>
                      <Text fontSize='10px' color='gray.700'>
                        PREV
                      </Text>
                    </Button>
                    <Button
                      variant='brand'
                      alignSelf='flex-end'
                      mt='24px'
                      w='100px'
                      h='35px'>
                      <Text fontSize='10px' color='#fff'>
                        SEND
                      </Text>
                    </Button>
                  </Flex>
                </Flex>
              </CardBody>
            </Card>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}

export default NewUser;
