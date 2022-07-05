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

import React, { useRef } from "react";

// Chakra imports
import {
  Box,
  Button,
  Flex,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import { useReactToPrint } from "react-to-print";

class ComponentToPrint extends React.Component {
  // for react-to-print to work, it must be called from a class based component
  render() {
    return (
      <Card
        w={{ sm: "330px", md: "500px", lg: "900px" }}
        justifySelf='center'
        alignSelf='center'
        mt='50px'
        p={{ sm: "24px", md: "44px" }}>
        <CardHeader mb={{ sm: "60px", md: "95px" }}>
          <Flex direction='column' w='100%'>
            <Box
              bg='linear-gradient(97.89deg, #FFFFFF 70.67%, rgba(117, 122, 140, 0) 108.55%)'
              bgClip='text'
              mb='28px'>
              <Text fontSize='lg' color='transparent' letterSpacing='0.18em'>
                VISION UI PRO
              </Text>
            </Box>
            <Flex
              direction={{ sm: "column", md: "row" }}
              justify='space-between'
              w='100%'>
              <Flex
                direction='column'
                maxW={{ sm: "100%", md: "150px", lg: "300px" }}
                mb={{ sm: "48px", md: "0px" }}>
                <Text color='#fff' fontSize='sm' mb='12px'>
                  St. Independence Embankment, 050105 Bucharest, Romania
                </Text>
                <Text color='#fff' fontSize='xs'>
                  tel: +4 (074) 1090873
                </Text>
              </Flex>
              <Flex
                direction='column'
                textAlign={{ sm: "start", md: "end" }}
                maxW={{ sm: "100%", md: "170px" }}>
                <Text color='#fff' fontSize='sm' mb='12px'>
                  Billed to: John Doe
                </Text>
                <Text color='#fff' fontSize='xs'>
                  4006 Locust View Drive <br /> San Francisco CA <br />{" "}
                  California
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </CardHeader>
        <CardBody>
          <Flex direction='column' w='100%'>
            <Flex
              direction={{ sm: "column", md: "row" }}
              justify='space-between'
              w='100%'
              mb='60px'>
              <Flex direction='column' mb={{ sm: "16px", md: "0px" }}>
                <Text color='#fff' fontSize='xs' mb='8px'>
                  Invoice no
                </Text>
                <Text color='#fff' fontSize='sm'>
                  #0453119
                </Text>
              </Flex>
              <Flex direction='column'>
                <Stack direction='row' mb='8px' justify={{ md: "end" }}>
                  <Text color='#fff' fontSize='sm'>
                    Invoice date:{" "}
                  </Text>
                  <Text color='#fff' fontSize='sm'>
                    06/03/2021
                  </Text>
                </Stack>
                <Stack direction='row' justify={{ md: "end" }}>
                  <Text color='#fff' fontSize='sm'>
                    Due date:{" "}
                  </Text>
                  <Text color='#fff' fontSize='sm'>
                    29/07/2021
                  </Text>
                </Stack>
              </Flex>
            </Flex>
            <Box overflowX={{ sm: "scroll", lg: "hidden" }}>
              <Table mb='85px' overflowX={{ sm: "scroll", lg: "hidden" }}>
                <Thead>
                  <Tr>
                    <Th
                      color='#A0AEC0'
                      borderColor='gray.500'
                      fontSize='10px'
                      fontFamily='Plus Jakarta Display'
                      ps='0px'>
                      Item
                    </Th>
                    <Th
                      color='#A0AEC0'
                      borderColor='gray.500'
                      fontSize='10px'
                      fontFamily='Plus Jakarta Display'>
                      Quantity
                    </Th>
                    <Th
                      color='#A0AEC0'
                      borderColor='gray.500'
                      fontSize='10px'
                      fontFamily='Plus Jakarta Display'>
                      Rate
                    </Th>
                    <Th
                      color='#A0AEC0'
                      borderColor='gray.500'
                      fontSize='10px'
                      fontFamily='Plus Jakarta Display'>
                      Amount
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td borderColor='gray.500' ps='0px' minW={{ sm: "300px" }}>
                      <Text color='#fff' fontSize='sm'>
                        Premium Support
                      </Text>
                    </Td>
                    <Td borderColor='gray.500'>
                      <Text color='#fff' fontSize='sm'>
                        1
                      </Text>
                    </Td>
                    <Td
                      borderColor='gray.500'
                      minW='125px'
                      boxSizing='border-box'>
                      <Text color='#fff' fontSize='sm'>
                        $ 9.00
                      </Text>
                    </Td>
                    <Td borderColor='gray.500'>
                      <Text color='#fff' fontSize='sm'>
                        $ 9.00
                      </Text>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td borderColor='gray.500' ps='0px' minW={{ sm: "300px" }}>
                      <Text color='#fff' fontSize='sm'>
                        Chakra UI - Dashboard PRO
                      </Text>
                    </Td>
                    <Td borderColor='gray.500'>
                      <Text color='#fff' fontSize='sm'>
                        3
                      </Text>
                    </Td>
                    <Td borderColor='gray.500'>
                      <Text color='#fff' fontSize='sm'>
                        $ 99.00
                      </Text>
                    </Td>
                    <Td borderColor='gray.500'>
                      <Text color='#fff' fontSize='sm'>
                        $ 297.00
                      </Text>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td
                      borderColor='gray.500'
                      ps='0px'
                      minW={{ sm: "300px" }}
                      border='none'>
                      <Text color='#fff' fontSize='sm'>
                        Parts for Service
                      </Text>
                    </Td>
                    <Td borderColor='gray.500' border='none'>
                      <Text color='#fff' fontSize='sm'>
                        1
                      </Text>
                    </Td>
                    <Td borderColor='gray.500' border='none'>
                      <Text color='#fff' fontSize='sm'>
                        $ 89.00
                      </Text>
                    </Td>
                    <Td borderColor='gray.500' border='none'>
                      <Text color='#fff' fontSize='sm'>
                        $ 89.00
                      </Text>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td
                      borderColor='gray.500'
                      ps='0px'
                      minW={{ sm: "300px" }}></Td>
                    <Td borderColor='gray.500'></Td>
                    <Td borderColor='gray.500'>
                      <Text color='#fff' fontSize='lg'>
                        Total
                      </Text>
                    </Td>
                    <Td borderColor='gray.500'>
                      <Text color='#fff' fontSize='lg'>
                        $ 9.00
                      </Text>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </Box>
            <Flex
              direction={{ sm: "column", md: "row" }}
              justify='space-between'>
              <Flex direction='column' maxW='270px'>
                <Text color='#fff' fontSize='lg'>
                  Thank You!
                </Text>
                <Text color='#fff' fontSize='xs' mt='6px' mb='30px'>
                  If you encounter any issues related to the invoice you can
                  contact us at:
                </Text>
                <Text color='#fff' fontSize='sm'>
                  email:{" "}
                  <Text as='span' color='#fff' fontWeight='500'>
                    support@creative-tim.com
                  </Text>
                </Text>
              </Flex>
              <Button
                onClick={() => this.props.handlePrint()}
                variant='brand'
                w='100px'
                h='35px'
                fontSize='10px'
                fontWeight='bold'
                alignSelf={{ sm: "flex-start", md: "flex-end" }}
                mt={{ sm: "16px", md: "0px" }}>
                PRINT
              </Button>
            </Flex>
          </Flex>
        </CardBody>
      </Card>
    );
  }
}

function Invoice() {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <Flex direction='column' pt={{ sm: "100px", lg: "50px" }}>
      <ComponentToPrint
        ref={componentRef}
        handlePrint={handlePrint}
        textColor='#fff'
      />
    </Flex>
  );
}

export default Invoice;
