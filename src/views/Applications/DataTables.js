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
import { Flex, Text } from "@chakra-ui/react";

// Custom Components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import BasicTable from "components/Tables/BasicTable";
import SearchTable1 from "components/Tables/SearchTable1";

// Data
import { columnsData1 } from "variables/columnsData";
import tableData1 from "variables/tableData1.json";

function DataTables() {
  return (
    <Flex direction='column' pt={{ sm: "125px", lg: "75px" }}>
      {/* Simple Datatable */}
      <Card px='0px' mb='24px'>
        <CardHeader px='22px' mb='24px'>
          <Flex direction='column'>
            <Text fontSize='lg' mb='5px' color='#fff' fontWeight='bold'>
              Datatable Simple
            </Text>
            <Text fontSize='sm' color={"gray.400"} fontWeight='400' mb='15px'>
              A lightweight, extendable, dependency-free javascript HTML table
              plugin.
            </Text>
          </Flex>
        </CardHeader>
        <CardBody>
          <BasicTable tableData={tableData1} columnsData={columnsData1} />
        </CardBody>
      </Card>
      {/* Datatable with search */}
      <Card px='0px'>
        <CardHeader px='22px' mb='24px'>
          <Flex direction='column'>
            <Text fontSize='lg' mb='5px' color='#fff' fontWeight='bold'>
              Datatable Search
            </Text>
            <Text fontSize='sm' color={"gray.400"} fontWeight='400' mb='15px'>
              A lightweight, extendable, dependency-free javascript HTML table
              plugin.
            </Text>
          </Flex>
        </CardHeader>
        <CardBody>
          <SearchTable1 tableData={tableData1} columnsData={columnsData1} />
        </CardBody>
      </Card>
    </Flex>
  );
}

export default DataTables;
