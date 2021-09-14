import React from 'react';
import {
  Menu as ChakraMenu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react"

export function Menu({ buttonComponent, children, maxWidth, ...props }) {
  return (
    <ChakraMenu closeOnBlur preventOverflow { ...props }>
      {/* NOTE: MenuButton will be moved into its own component upon beginning the Button Menu story. */}
      <MenuButton>{buttonComponent}</MenuButton>
      <MenuList maxWidth={maxWidth}>
        {children}
      </MenuList>
    </ChakraMenu>
  )
}
