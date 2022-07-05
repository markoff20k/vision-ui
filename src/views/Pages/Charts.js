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
import { Box, Grid, Text } from "@chakra-ui/react";

// Custom Components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";

// Charts
import BarChart from "components/Charts/BarChart";
import BubbleChart from "components/Charts/BubbleChart";
import DonutChart from "components/Charts/DonutChart";
import LineBarChart from "components/Charts/LineBarChart";
import LineChart from "components/Charts/LineChart";
import PieChart from "components/Charts/PieChart";
import PolarChart from "components/Charts/PolarChart";
import RadarChart from "components/Charts/RadarChart";

// Data

import {
  barChartDataCharts1,
  barChartDataCharts2,
  barChartOptionsCharts1,
  barChartOptionsCharts2,
  bubbleChartData,
  bubbleChartOptions,
  donutChartDataCharts1,
  donutChartOptionsCharts1,
  lineBarChartData,
  lineBarChartOptions,
  lineChartDataCharts1,
  lineChartDataCharts2,
  lineChartOptionsCharts1,
  lineChartOptionsCharts2,
  pieChartDataCharts1,
  pieChartOptionsCharts1,
  polarChartDataCharts,
  polarChartOptionsCharts,
  radarChartDataCharts,
  radarChartOptionsCharts,
} from "variables/charts";

function Charts() {
  return (
    <Grid
      templateColumns={{ sm: "1fr", md: "repeat(2, 1fr)" }}
      templateRows={{ sm: "repeat(8, 1fr)", md: "repeat(4, 1fr)" }}
      gap='24px'
      pt={{ sm: "125px", lg: "75px" }}>
      <Card px='0px' pb='0px'>
        <CardHeader mb='34px' px='22px'>
          <Text color='#fff' fontSize='lg' fontWeight='bold'>
            Line chart
          </Text>
        </CardHeader>
        <CardBody h='100%'>
          <Box w='100%' h='100%'>
            <LineChart
              chartData={lineChartDataCharts1}
              chartOptions={lineChartOptionsCharts1}
            />
          </Box>
        </CardBody>
      </Card>
      <Card px='0px' pb='0px'>
        <CardHeader mb='34px' px='22px'>
          <Text color='#fff' fontSize='lg' fontWeight='bold'>
            Line chart with gradient
          </Text>
        </CardHeader>
        <CardBody h='100%'>
          <Box w='100%' h='100%'>
            <LineChart
              chartData={lineChartDataCharts2}
              chartOptions={lineChartOptionsCharts2}
            />
          </Box>
        </CardBody>
      </Card>
      <Card px='0px' pb='0px'>
        <CardHeader mb='34px' px='22px'>
          <Text color='#fff' fontSize='lg' fontWeight='bold'>
            Bar chart
          </Text>
        </CardHeader>
        <CardBody h='100%'>
          <Box w='100%' h='100%'>
            <BarChart
              chartData={barChartDataCharts1}
              chartOptions={barChartOptionsCharts1}
            />
          </Box>
        </CardBody>
      </Card>
      <Card px='0px' pb='0px'>
        <CardHeader mb='34px' px='22px'>
          <Text color='#fff' fontSize='lg' fontWeight='bold'>
            Bar chart horizontal
          </Text>
        </CardHeader>
        <CardBody h='100%'>
          <Box w='100%' h='100%'>
            <BarChart
              chartData={barChartDataCharts2}
              chartOptions={barChartOptionsCharts2}
            />
          </Box>
        </CardBody>
      </Card>
      <Card px='0px' pb='0px'>
        <CardHeader mb='34px' px='22px'>
          <Text color='#fff' fontSize='lg' fontWeight='bold'>
            Mixed chart
          </Text>
        </CardHeader>
        <CardBody h='100%'>
          <Box w='100%' h='100%'>
            <LineBarChart
              chartData={lineBarChartData}
              chartOptions={lineBarChartOptions}
            />
          </Box>
        </CardBody>
      </Card>
      <Card px='0px' pb='0px'>
        <CardHeader mb='34px' px='22px'>
          <Text color='#fff' fontSize='lg' fontWeight='bold'>
            Bubble chart
          </Text>
        </CardHeader>
        <CardBody h='100%'>
          <Box w='100%' h='100%'>
            <BubbleChart
              chartData={bubbleChartData}
              chartOptions={bubbleChartOptions}
            />
          </Box>
        </CardBody>
      </Card>
      <Card px='0px' pb='0px'>
        <CardHeader mb='34px' px='22px'>
          <Text color='#fff' fontSize='lg' fontWeight='bold'>
            Donut chart
          </Text>
        </CardHeader>
        <CardBody h='100%'>
          <Box w='100%' minH={{ sm: "200px", lg: "300px" }}>
            <DonutChart
              chartData={donutChartDataCharts1}
              chartOptions={donutChartOptionsCharts1}
            />
          </Box>
        </CardBody>
      </Card>
      <Card px='0px' pb='0px'>
        <CardHeader mb='34px' px='22px'>
          <Text color='#fff' fontSize='lg' fontWeight='bold'>
            Pie chart
          </Text>
        </CardHeader>
        <CardBody h='100%'>
          <Box w='100%' minH={{ sm: "200px", lg: "300px" }}>
            <PieChart
              chartData={pieChartDataCharts1}
              chartOptions={pieChartOptionsCharts1}
            />
          </Box>
        </CardBody>
      </Card>
      <Card px='0px' pb='0px'>
        <CardHeader mb='34px' px='22px'>
          <Text color='#fff' fontSize='lg' fontWeight='bold'>
            Radar chart
          </Text>
        </CardHeader>
        <CardBody h='100%'>
          <Box w='100%' minH={{ sm: "300px", lg: "500px" }}>
            <RadarChart
              chartData={radarChartDataCharts}
              chartOptions={radarChartOptionsCharts}
            />
          </Box>
        </CardBody>
      </Card>
      <Card px='0px' pb='0px'>
        <CardHeader mb='34px' px='22px'>
          <Text color='#fff' fontSize='lg' fontWeight='bold'>
            Polar chart
          </Text>
        </CardHeader>
        <CardBody h='100%'>
          <Box w='100%' minH={{ sm: "300px", lg: "500px" }}>
            <PolarChart
              chartData={polarChartDataCharts}
              chartOptions={polarChartOptionsCharts}
            />
          </Box>
        </CardBody>
      </Card>
    </Grid>
  );
}

export default Charts;
