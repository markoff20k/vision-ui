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
import { Stack, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import TimelineRow from "components/Tables/TimelineRow";
import React from "react";
import {
  timelineProjectsData1,
  timelineProjectsData2,
} from "variables/general";

function Timeline() {
  return (
    <Stack
      direction={{ sm: "column", lg: "row" }}
      spacing='24px'
      pt={{ sm: "125px", lg: "75px" }}>
      <Card>
        <CardHeader mb='30px'>
          <Text color='#fff' fontSize='lg' fontWeight='bold'>
            Timeline with dotted line
          </Text>
        </CardHeader>
        <CardBody px='10px'>
          <Stack direction='column' spacing='4px'>
            {timelineProjectsData1.map((row, index) => {
              return (
                <TimelineRow
                  logo={row.logo}
                  title={row.title}
                  date={row.date}
                  color={row.color}
                  description={row.description}
                  tags={row.tags}
                  key={index}
                />
              );
            })}
          </Stack>
        </CardBody>
      </Card>
      <Card bg='brand.200'>
        <CardHeader mb='30px'>
          <Text color='#fff' fontSize='lg' fontWeight='bold'>
            Timeline dark with dashed line
          </Text>
        </CardHeader>
        <CardBody px='10px'>
          <Stack direction='column' spacing='4px'>
            {timelineProjectsData2.map((row, index) => {
              return (
                <TimelineRow
                  logo={row.logo}
                  title={row.title}
                  titleColor={row.titleColor}
                  date={row.date}
                  color={row.color}
                  description={row.description}
                  tags={row.tags}
                  key={index}
                />
              );
            })}
          </Stack>
        </CardBody>
      </Card>
    </Stack>
  );
}

export default Timeline;
