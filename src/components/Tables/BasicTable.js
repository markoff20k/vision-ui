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

import {
  Button,
  Flex,
  Icon,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useMemo } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import {
  TiArrowSortedDown,
  TiArrowSortedUp,
  TiArrowUnsorted,
} from "react-icons/ti";
import { usePagination, useSortBy, useTable } from "react-table";

function BasicTable(props) {
  const { columnsData, tableData } = props;
  const columns = useMemo(() => columnsData, []);
  const data = useMemo(() => tableData, []);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    gotoPage,
    pageCount,
    prepareRow,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    setPageSize,

    state,
  } = tableInstance;

  const createPages = (count) => {
    let arrPageCount = [];

    for (let i = 1; i <= count; i++) {
      arrPageCount.push(i);
    }

    return arrPageCount;
  };

  const { pageIndex, pageSize } = state;
  console.log(pageIndex);

  return (
    <>
      <Flex
        direction='column'
        w='100%'
        overflowX={{ sm: "scroll", lg: "hidden" }}>
        <Stack
          direction='row'
          spacing='12px'
          align='center'
          my='24px'
          px='22px'>
          <Select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            color='gray.400'
            bg='#0F1535'
            border='0.5px solid'
            borderColor='#E2E8F04D'
            borderRadius='15px'
            size='sm'
            maxW='75px'
            cursor='pointer'>
            <option>5</option>
            <option>10</option>
            <option>15</option>
            <option>20</option>
            <option>25</option>
          </Select>
          <Text fontSize='xs' color='gray.400' fontWeight='500'>
            entries per page
          </Text>
        </Stack>
        <Table {...getTableProps()} variant='simple' color='gray.500' mb='24px'>
          <Thead>
            {headerGroups.map((headerGroup, index) => (
              <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column, index) => (
                  <Th
                    borderColor='#56577A'
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    key={index}>
                    <Flex
                      justify='space-between'
                      align='center'
                      fontSize={{ sm: "10px", lg: "12px" }}
                      color='gray.400'>
                      {column.render("Header")}
                      <Icon
                        w={{ sm: "10px", md: "14px" }}
                        h={{ sm: "10px", md: "14px" }}
                        color={columns.isSorted ? "gray.500" : "gray.400"}
                        float='right'
                        as={
                          column.isSorted
                            ? column.isSortedDesc
                              ? TiArrowSortedDown
                              : TiArrowSortedUp
                            : TiArrowUnsorted
                        }
                      />
                    </Flex>
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>
            {page.map((row, index) => {
              prepareRow(row);
              return (
                <Tr {...row.getRowProps()} key={index}>
                  {row.cells.map((cell, index) => {
                    return (
                      <Td
                        borderColor='#56577A'
                        color='white'
                        {...cell.getCellProps()}
                        fontSize={{ sm: "14px" }}
                        key={index}>
                        {cell.render("Cell")}
                      </Td>
                    );
                  })}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
        <Flex
          direction={{ sm: "column", md: "row" }}
          w='100%'
          justify='space-between'
          align='center'
          px={{ md: "22px" }}>
          <Text
            fontSize='sm'
            color='gray.500'
            fontWeight='500'
            mb={{ sm: "24px", md: "0px" }}>
            Showing {pageSize * pageIndex + 1} to{" "}
            {pageSize * (pageIndex + 1) <= tableData.length
              ? pageSize * (pageIndex + 1)
              : tableData.length}{" "}
            of {tableData.length} entries
          </Text>
          <Stack direction='row' alignSelf='flex-end' spacing='4px' ms='auto'>
            <Button
              variant='no-hover'
              onClick={() => previousPage()}
              transition='all .5s ease'
              w='40px'
              h='40px'
              borderRadius='50%'
              bg='#fff'
              display={
                pageSize === 5 ? "none" : canPreviousPage ? "flex" : "none"
              }
              _hover={{
                bg: "gray.200",
                opacity: "0.7",
                borderColor: "gray.500",
              }}>
              <Icon as={GrFormPrevious} w='16px' h='16px' color='gray.400' />
            </Button>
            {pageSize === 5 ? (
              <NumberInput
                max={pageCount - 1}
                min={1}
                w='75px'
                mx='6px'
                defaultValue='1'
                onChange={(e) => gotoPage(e)}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper onClick={() => nextPage()} />
                  <NumberDecrementStepper onClick={() => previousPage()} />
                </NumberInputStepper>
              </NumberInput>
            ) : (
              createPages(pageCount).map((pageNumber, index) => {
                return (
                  <Button
                    variant='no-hover'
                    transition='all .5s ease'
                    onClick={() => gotoPage(pageNumber - 1)}
                    w='40px'
                    h='40px'
                    borderRadius='160px'
                    bg={pageNumber === pageIndex + 1 ? "brand.200" : "#fff"}
                    key={index}>
                    <Text
                      fontSize='sm'
                      color={
                        pageNumber === pageIndex + 1 ? "#fff" : "gray.600"
                      }>
                      {pageNumber}
                    </Text>
                  </Button>
                );
              })
            )}
            <Button
              variant='no-hover'
              onClick={() => nextPage()}
              transition='all .5s ease'
              w='40px'
              h='40px'
              borderRadius='160px'
              bg='#fff'
              display={pageSize === 5 ? "none" : canNextPage ? "flex" : "none"}>
              <Icon as={GrFormNext} w='16px' h='16px' color='gray.400' />
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}

export default BasicTable;
