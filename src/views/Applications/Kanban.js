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

import React, { useRef, useState } from "react";

// Kanban Styles
import "@asseinfo/react-kanban/dist/styles.css";

// Chakra imports
import {
  Avatar,
  AvatarGroup,
  Badge,
  Button,
  Flex,
  FormControl,
  IconButton,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";

// Custom Components
import { VSeparator } from "components/Separator/Separator";
import Board from "@asseinfo/react-kanban";

// Assets
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";
import avatar4 from "assets/img/avatars/avatar4.png";
import kanban1 from "assets/img/kanban1.png";
import kanban2 from "assets/img/kanban2.png";
import kanban3 from "assets/img/kanban3.png";

// Icons
import { AddIcon, AttachmentIcon } from "@chakra-ui/icons";

function Kanban() {
  // Chakra color mode
  const textGray = "white";
  const attachementsGray = "gray.500";
  const kanbanCardBg =
    "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)";

  // Kanban Settings, states, etc.
  let initialBoard = {
    counter: 9,
    columns: [
      {
        id: 1,
        title: "Backlog",
        cards: [
          {
            id: 1.1,
            title: "Drag me to “In progress” section!",
          },
          {
            id: 1.2,
            title: "Click me to change the title",
          },
          {
            id: 1.3,
            image: kanban1,
            members: [avatar2, avatar3, avatar4],
            status: "PENDING",
            title:
              "Website Design: New cards for blog section and profile details!",
            attachements: "3",
          },
        ],
      },
      {
        id: 2,
        title: "In progress",
        cards: [
          {
            id: 2.1,
            title: "Fix Firefox Errors!",
            members: [avatar2, avatar3, avatar4],
            status: "ERRORS",
            attachements: "2",
          },
          {
            id: 2.2,
            title: "Vision UI Dashboard - PRO Version v1.0.1",
          },
          {
            id: 2.3,
            image: kanban2,
            members: [avatar2, avatar3, avatar4],
            status: "UPDATES",
            title:
              "Vision UI Update: Add RTL Page and the details about documentation",
            attachements: "9",
          },
        ],
      },
      {
        id: 3,
        title: "Done",
        cards: [
          {
            id: 3.1,
            title: "Schedule Black Friday campaign",
          },
          {
            id: 3.2,
            image: kanban3,
            title:
              "Marketing plan: The whole plan for the next weeks & quarter",
            attachements: "7",
            members: [avatar2, avatar3, avatar4],
            status: "DONE",
          },
          {
            id: 3.3,
            title: "Redesign website page - until tomorrow",
            attachements: "7",
            members: [avatar2, avatar3, avatar4],
            status: "DONE",
          },
          {
            id: 3.4,
            title: "Resolve RTL Page bugs - Vision",
            attachements: "1",
            members: [avatar2, avatar3, avatar4],
            status: "DONE",
          },
        ],
      },
    ],
  };
  const [board, setBoard] = useState(initialBoard);
  function onCardNew(newCard) {
    const newCardLocal = { id: initialBoard.counter + 1, ...newCard };
    initialBoard.counter = initialBoard.counter + 1;
    setBoard(initialBoard);
    return newCardLocal;
  }

  return (
    <Flex
      direction='column'
      minH='100vh'
      align='center'
      pt={{ sm: "125px", lg: "75px" }}
      overflow='hidden'>
      <Flex ms='auto' align='center' justify='center' me='25px' mb='50px'>
        <Flex direction='column' me='25px'>
          <Text fontSize='sm' color={textGray} fontWeight='bold' mb='8px'>
            Team Members:
          </Text>
          <AvatarGroup size='sm'>
            <Avatar borderColor='gray.800' src={avatar2} />
            <Avatar borderColor='gray.800' src={avatar3} />
            <Avatar borderColor='gray.800' src={avatar4} />
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
      <Flex maxWidth='100%'>
        <Board
          initialBoard={board}
          allowAddCard
          onNewCardConfirm={onCardNew}
          onCardNew={console.log}
          renderColumnHeader={function (
            { title },
            { removeColumn, renameColumn, addCard }
          ) {
            const kanbanForm = useRef(null);
            const cardInput = useRef(null);
            function kanbanFormOpen() {
              kanbanForm.current.style.display = "flex";
            }
            function kanbanFormClose() {
              kanbanForm.current.style.display = "none";
            }
            function formSubmit() {
              addCard({ title: cardInput.current.value });
              cardInput.current.value = "";
            }
            return (
              <Flex flexDirection='column' mb='24px' fontWeight='bold' w='100%'>
                <Flex justify='space-between' align='center' mb='24px'>
                  <Text color='white' fontSize='lg' mt='5px'>
                    {title}
                  </Text>
                  <IconButton
                    w='92px'
                    h='35px'
                    aria-label='Search database'
                    variant='no-hover'
                    bg='brand.200'
                    icon={<AddIcon w='12px' h='12px' color='white' />}
                    onClick={kanbanFormOpen}
                  />
                </Flex>
                <Flex flexDirection='column' ref={kanbanForm} display='none'>
                  <FormControl>
                    <Input
                      color='white'
                      borderRadius='15px'
                      mb='20px'
                      bg={kanbanCardBg}
                      border='none'
                      ref={cardInput}
                    />
                    <Flex>
                      <Button
                        colorScheme='brand'
                        me='14px'
                        onClick={formSubmit}>
                        Add Card
                      </Button>
                      <Button
                        variant='no-hover'
                        bg='gray.700'
                        color='white'
                        onClick={kanbanFormClose}>
                        Cancel
                      </Button>
                    </Flex>
                  </FormControl>
                </Flex>
              </Flex>
            );
          }}
          renderCard={(
            { image, title, attachements, status, members },
            { removeCard, dragging }
          ) => (
            <Flex
              mt='10px'
              dragging={dragging}
              flexDirection='column'
              bg={kanbanCardBg}
              p='25px'
              borderRadius='15px'
              w='470px'>
              {image ? (
                <Image
                  borderRadius='15px'
                  w='420px'
                  h='284px'
                  src={image}
                  mb='20px'
                />
              ) : null}
              {status ? (
                <Badge
                  fontSize='10px'
                  fontWeight='bold'
                  variant='solid'
                  colorScheme='green'
                  mb='16px'
                  h='28px'
                  w='94px'
                  display='flex'
                  borderRadius='8px'
                  alignItems='center'
                  justifyContent='center'
                  bg={
                    status === "ERRORS"
                      ? "red.500"
                      : status === "PENDING"
                      ? "orange.300"
                      : status === "DONE"
                      ? "green.500"
                      : status === "UPDATES"
                      ? "blue.400"
                      : "brand"
                  }
                  colorScheme={
                    status === "ERRORS"
                      ? "red"
                      : status === "PENDING"
                      ? "orange"
                      : status === "DONE"
                      ? "green"
                      : status === "UPDATES"
                      ? "blue"
                      : "brand"
                  }>
                  {status}
                </Badge>
              ) : null}
              <Text fontSize='md' color={textGray}>
                {title}
              </Text>

              {image ? (
                members ? (
                  <Flex justify='space-between' align='center' mt='20px'>
                    <Flex justify='center' align='center'>
                      <AttachmentIcon me='2px' color={attachementsGray} />
                      <Text fontSize='sm' color={attachementsGray}>
                        {attachements}
                      </Text>
                    </Flex>

                    <AvatarGroup size='sm'>
                      <Avatar borderColor='gray.800' src={avatar2} />
                      <Avatar borderColor='gray.800' src={avatar3} />
                      <Avatar borderColor='gray.800' src={avatar4} />
                    </AvatarGroup>
                  </Flex>
                ) : null
              ) : null}
            </Flex>
          )}
        />
      </Flex>
    </Flex>
  );
}

export default Kanban;
