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
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Input,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { SettingsIcon } from "components/Icons/Icons";
import React from "react";

export function SettingsBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // Chakra Color Mode
  const navbarIcon = useColorModeValue("gray.500", "gray.200");
  const settingsRef = React.useRef();
  return (
    <>
      <SettingsIcon
        ref={settingsRef}
        onClick={onOpen}
        color={navbarIcon}
        w='18px'
        h='18px'
      />
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={settingsRef}>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' me={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
