import React from 'react';
import {
  Button as ChakraButton,
  Menu as ChakraMenu,
  MenuButton,
  MenuList
} from "@chakra-ui/react"
import { Icon } from '../../main';

export function Menu({ buttonComponent, children, maxWidth, ...props }) {
  return (
    <ChakraMenu closeOnBlur preventOverflow { ...props }>
      <MenuButton>{buttonComponent}</MenuButton>
      <MenuList maxWidth={maxWidth}>
        {children}
      </MenuList>
    </ChakraMenu>
  )
}

export function ButtonDropdown({ buttonText, buttonVariant, children, maxWidth, ...props }) {
  return (
    <ChakraMenu closeOnBlur preventOverflow { ...props }>
      {({ isOpen }) => (
        <>
          <MenuButton as={ChakraButton} rightIcon={isOpen ? <Icon name="chevronUp" /> : <Icon name="chevronDown" />} variant={buttonVariant}>{buttonText}</MenuButton>
          <MenuList maxWidth={maxWidth}>
            {children}
          </MenuList>
        </>
      )}
    </ChakraMenu>
  )
}