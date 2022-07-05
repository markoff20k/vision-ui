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
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  CloseButton,
  Flex,
  Grid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import React from "react";

function Alerts() {
  return (
    <Flex direction='column' pt={{ sm: "125px", lg: "75px" }}>
      <Grid
        templateColumns={{ sm: "1fr", lg: "repeat(2, 1fr)" }}
        templateRows='repeat(2, 1fr)'
        gap='24px'
        mb='24px'>
        <Card>
          <CardHeader mb='32px'>
            <Text color='#fff' fontSize='lg' fontWeight='bold'>
              Solid Alert - Left
            </Text>
          </CardHeader>
          <CardBody>
            <Stack direction='column' spacing='55px' w='100%'>
              <Alert borderRadius='8px' status='error' variant='solid'>
                <AlertIcon color='white' />
                <AlertTitle mr='12px'>Title Here</AlertTitle>
                <AlertDescription>Description here.</AlertDescription>
                <CloseButton
                  position='absolute'
                  fontSize={{ sm: "8px", md: "12px" }}
                  right={{ sm: "-4px", md: "8px" }}
                  top={{ sm: "-4px", md: "8px" }}
                />
              </Alert>
              <Alert borderRadius='8px' status='warning' variant='solid'>
                <AlertIcon color='white' />
                <AlertTitle mr='12px'>Title Here</AlertTitle>
                <AlertDescription>Description here.</AlertDescription>
                <CloseButton
                  position='absolute'
                  fontSize={{ sm: "8px", md: "12px" }}
                  right={{ sm: "-4px", md: "8px" }}
                  top={{ sm: "-4px", md: "8px" }}
                />
              </Alert>
              <Alert borderRadius='8px' status='info' variant='solid'>
                <AlertIcon color='white' />
                <AlertTitle mr='12px'>Title Here</AlertTitle>
                <AlertDescription>Description here.</AlertDescription>
                <CloseButton
                  position='absolute'
                  fontSize={{ sm: "8px", md: "12px" }}
                  right={{ sm: "-4px", md: "8px" }}
                  top={{ sm: "-4px", md: "8px" }}
                />
              </Alert>
              <Alert borderRadius='8px' status='success' variant='solid'>
                <AlertIcon color='white' />
                <AlertTitle mr='12px'>Title Here</AlertTitle>
                <AlertDescription>Description here.</AlertDescription>
                <CloseButton
                  position='absolute'
                  fontSize={{ sm: "8px", md: "12px" }}
                  right={{ sm: "-4px", md: "8px" }}
                  top={{ sm: "-4px", md: "8px" }}
                />
              </Alert>
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardHeader mb='32px'>
            <Text color='#fff' fontSize='lg' fontWeight='bold'>
              Solid Alert - Center
            </Text>
          </CardHeader>
          <CardBody>
            <Stack direction='column' spacing='55px' w='100%'>
              <Alert
                status='error'
                variant='solid'
                justifyContent='center'
                alignItems='center'>
                <AlertIcon color='white' />
                <AlertTitle mr='12px' alignSlef='center' justifySelf='center'>
                  Title Here
                </AlertTitle>
                <AlertDescription>Description here.</AlertDescription>
                <CloseButton
                  position='absolute'
                  fontSize={{ sm: "8px", md: "12px" }}
                  right={{ sm: "-4px", md: "8px" }}
                  top={{ sm: "-4px", md: "8px" }}
                />
              </Alert>
              <Alert
                status='warning'
                variant='solid'
                justifyContent='center'
                alignItems='center'>
                <AlertIcon color='white' />
                <AlertTitle mr='12px'>Title Here</AlertTitle>
                <AlertDescription>Description here.</AlertDescription>
                <CloseButton
                  position='absolute'
                  fontSize={{ sm: "8px", md: "12px" }}
                  right={{ sm: "-4px", md: "8px" }}
                  top={{ sm: "-4px", md: "8px" }}
                />
              </Alert>
              <Alert
                status='info'
                variant='solid'
                justifyContent='center'
                alignItems='center'>
                <AlertIcon color='white' />
                <AlertTitle mr='12px'>Title Here</AlertTitle>
                <AlertDescription>Description here.</AlertDescription>
                <CloseButton
                  position='absolute'
                  fontSize={{ sm: "8px", md: "12px" }}
                  right={{ sm: "-4px", md: "8px" }}
                  top={{ sm: "-4px", md: "8px" }}
                />
              </Alert>
              <Alert
                status='success'
                variant='solid'
                justifyContent='center'
                alignItems='center'>
                <AlertIcon color='white' />
                <AlertTitle mr='12px'>Title Here</AlertTitle>
                <AlertDescription>Description here.</AlertDescription>
                <CloseButton
                  position='absolute'
                  fontSize={{ sm: "8px", md: "12px" }}
                  right={{ sm: "-4px", md: "8px" }}
                  top={{ sm: "-4px", md: "8px" }}
                />
              </Alert>
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardHeader mb='32px'>
            <Text color='#fff' fontSize='lg' fontWeight='bold'>
              Subtle Alert - Left
            </Text>
          </CardHeader>
          <CardBody>
            <Stack direction='column' spacing='55px' w='100%'>
              <Alert borderRadius='8px' status='error' variant='subtle'>
                <AlertIcon color='white' />
                <AlertTitle mr='12px'>Title Here</AlertTitle>
                <AlertDescription>Description here.</AlertDescription>
                <CloseButton
                  position='absolute'
                  fontSize={{ sm: "8px", md: "12px" }}
                  right={{ sm: "-4px", md: "8px" }}
                  top={{ sm: "-4px", md: "8px" }}
                />
              </Alert>
              <Alert borderRadius='8px' status='warning' variant='subtle'>
                <AlertIcon color='white' />
                <AlertTitle mr='12px'>Title Here</AlertTitle>
                <AlertDescription>Description here.</AlertDescription>
                <CloseButton
                  position='absolute'
                  fontSize={{ sm: "8px", md: "12px" }}
                  right={{ sm: "-4px", md: "8px" }}
                  top={{ sm: "-4px", md: "8px" }}
                />
              </Alert>
              <Alert borderRadius='8px' status='info' variant='subtle'>
                <AlertIcon color='white' />
                <AlertTitle mr='12px'>Title Here</AlertTitle>
                <AlertDescription>Description here.</AlertDescription>
                <CloseButton
                  position='absolute'
                  fontSize={{ sm: "8px", md: "12px" }}
                  right={{ sm: "-4px", md: "8px" }}
                  top={{ sm: "-4px", md: "8px" }}
                />
              </Alert>
              <Alert borderRadius='8px' status='success' variant='subtle'>
                <AlertIcon color='white' />
                <AlertTitle mr='12px'>Title Here</AlertTitle>
                <AlertDescription>Description here.</AlertDescription>
                <CloseButton
                  position='absolute'
                  fontSize={{ sm: "8px", md: "12px" }}
                  right={{ sm: "-4px", md: "8px" }}
                  top={{ sm: "-4px", md: "8px" }}
                />
              </Alert>
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardHeader mb='32px'>
            <Text color='#fff' fontSize='lg' fontWeight='bold'>
              Subtle Alert - Center
            </Text>
          </CardHeader>
          <CardBody>
            <Stack direction='column' spacing='55px' w='100%'>
              <Alert
                status='error'
                variant='subtle'
                justifyContent='center'
                alignItems='center'>
                <AlertIcon color='white' />
                <AlertTitle mr='12px' alignSlef='center' justifySelf='center'>
                  Title Here
                </AlertTitle>
                <AlertDescription>Description here.</AlertDescription>
                <CloseButton
                  position='absolute'
                  fontSize={{ sm: "8px", md: "12px" }}
                  right={{ sm: "-4px", md: "8px" }}
                  top={{ sm: "-4px", md: "8px" }}
                />
              </Alert>
              <Alert
                status='warning'
                variant='subtle'
                justifyContent='center'
                alignItems='center'>
                <AlertIcon color='white' />
                <AlertTitle mr='12px'>Title Here</AlertTitle>
                <AlertDescription>Description here.</AlertDescription>
                <CloseButton
                  position='absolute'
                  fontSize={{ sm: "8px", md: "12px" }}
                  right={{ sm: "-4px", md: "8px" }}
                  top={{ sm: "-4px", md: "8px" }}
                />
              </Alert>
              <Alert
                status='info'
                variant='subtle'
                justifyContent='center'
                alignItems='center'>
                <AlertIcon color='white' />
                <AlertTitle mr='12px'>Title Here</AlertTitle>
                <AlertDescription>Description here.</AlertDescription>
                <CloseButton
                  position='absolute'
                  fontSize={{ sm: "8px", md: "12px" }}
                  right={{ sm: "-4px", md: "8px" }}
                  top={{ sm: "-4px", md: "8px" }}
                />
              </Alert>
              <Alert
                status='success'
                variant='subtle'
                justifyContent='center'
                alignItems='center'>
                <AlertIcon color='white' />
                <AlertTitle mr='12px'>Title Here</AlertTitle>
                <AlertDescription>Description here.</AlertDescription>
                <CloseButton
                  position='absolute'
                  fontSize={{ sm: "8px", md: "12px" }}
                  right={{ sm: "-4px", md: "8px" }}
                  top={{ sm: "-4px", md: "8px" }}
                />
              </Alert>
            </Stack>
          </CardBody>
        </Card>
      </Grid>
      <Stack
        direction={{ sm: "column", lg: "row" }}
        spacing='24px'
        w='100%'
        justifySelf='center'
        alignSelf='center'
        maxW='1024px'>
        <Card>
          <CardHeader mb='32px'>
            <Text color='#fff' fontSize='lg' fontWeight='bold'>
              Solid MultiAlert
            </Text>
          </CardHeader>
          <CardBody>
            <Stack direction='column' spacing='55px' w='100%'>
              <Alert borderRadius='8px' status='error' variant='solid'>
                <Flex>
                  <AlertIcon color='white' />
                  <Flex direction='column'>
                    <AlertTitle mr='12px'>Title Here</AlertTitle>
                    <AlertDescription>Description here.</AlertDescription>
                  </Flex>
                </Flex>
                <CloseButton position='absolute' right='8px' top='8px' />
              </Alert>
              <Alert borderRadius='8px' status='warning' variant='solid'>
                <Flex>
                  <AlertIcon color='white' />
                  <Flex direction='column'>
                    <AlertTitle mr='12px'>Title Here</AlertTitle>
                    <AlertDescription>Description here.</AlertDescription>
                  </Flex>
                </Flex>
                <CloseButton position='absolute' right='8px' top='8px' />
              </Alert>
              <Alert borderRadius='8px' status='info' variant='solid'>
                <Flex>
                  <AlertIcon color='white' />
                  <Flex direction='column'>
                    <AlertTitle mr='12px'>Title Here</AlertTitle>
                    <AlertDescription>Description here.</AlertDescription>
                  </Flex>
                </Flex>
                <CloseButton position='absolute' right='8px' top='8px' />
              </Alert>
              <Alert borderRadius='8px' status='success' variant='solid'>
                <Flex>
                  <AlertIcon color='white' />
                  <Flex direction='column'>
                    <AlertTitle mr='12px'>Title Here</AlertTitle>
                    <AlertDescription>Description here.</AlertDescription>
                  </Flex>
                </Flex>
                <CloseButton position='absolute' right='8px' top='8px' />
              </Alert>
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardHeader mb='32px'>
            <Text color='#fff' fontSize='lg' fontWeight='bold'>
              Subtle MultiAlert
            </Text>
          </CardHeader>
          <CardBody>
            <Stack direction='column' spacing='55px' w='100%'>
              <Alert borderRadius='8px' status='error' variant='subtle'>
                <Flex>
                  <AlertIcon color='white' />
                  <Flex direction='column'>
                    <AlertTitle mr='12px'>Title Here</AlertTitle>
                    <AlertDescription>Description here.</AlertDescription>
                  </Flex>
                </Flex>
                <CloseButton position='absolute' right='8px' top='8px' />
              </Alert>
              <Alert borderRadius='8px' status='warning' variant='subtle'>
                <Flex>
                  <AlertIcon color='white' />
                  <Flex direction='column'>
                    <AlertTitle mr='12px'>Title Here</AlertTitle>
                    <AlertDescription>Description here.</AlertDescription>
                  </Flex>
                </Flex>
                <CloseButton position='absolute' right='8px' top='8px' />
              </Alert>
              <Alert borderRadius='8px' status='info' variant='subtle'>
                <Flex>
                  <AlertIcon color='white' />
                  <Flex direction='column'>
                    <AlertTitle mr='12px'>Title Here</AlertTitle>
                    <AlertDescription>Description here.</AlertDescription>
                  </Flex>
                </Flex>
                <CloseButton position='absolute' right='8px' top='8px' />
              </Alert>
              <Alert borderRadius='8px' status='success' variant='subtle'>
                <Flex>
                  <AlertIcon color='white' />
                  <Flex direction='column'>
                    <AlertTitle mr='12px'>Title Here</AlertTitle>
                    <AlertDescription>Description here.</AlertDescription>
                  </Flex>
                </Flex>
                <CloseButton position='absolute' right='8px' top='8px' />
              </Alert>
            </Stack>
          </CardBody>
        </Card>
      </Stack>
    </Flex>
  );
}

export default Alerts;
