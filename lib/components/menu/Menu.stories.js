import React from 'react';
import {
  Button,
  ChevronDownIcon,
  Icon,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Modal,
  ModalContent,
  ModalOverlay,
} from '../../main';

export default {
  title: 'Components/Forms/Menu',
  component: Menu,
  argTypes: {},
};

const ModalTemplate = () => (
  <Modal isOpen={true} onClose={() => {}}>
    <ModalOverlay />
    <ModalContent p="24px" w="100%" maxW="800px">
      <Flex maxW="200px">
        <Menu>
          <MenuButton rightIcon={<ChevronDownIcon />}>Actions</MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </ModalContent>
  </Modal>
);
export const ModalMenuItem = ModalTemplate.bind({});

const DefaultTemplate = () => (
  <Menu>
    {({ isOpen }) => (
      <Flex justify="flex-end">
        <MenuButton>
          <Button
            rightIcon={
              isOpen ? <Icon name="chevronUp" /> : <Icon name="chevronDown" />
            }
            variant="tertiary"
          >
            Button
          </Button>
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop long overlapping text here</MenuItem>
        </MenuList>
      </Flex>
    )}
  </Menu>
);

export const MenuDefaultTemplate = DefaultTemplate.bind({});

const SurroundingContentMenu = () => (
  <Flex>
    <p>some surrounding content</p>
    <Menu closeOnBlur preventOverflow>
      <MenuButton>Button</MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
  </Flex>
);

export const SurroundingMenuTemplate = SurroundingContentMenu.bind({});

const MenuGroupExample = () => (
  <Menu>
    <MenuButton colorScheme="pink">Profile</MenuButton>
    <MenuList>
      <MenuGroup title="Profile">
        <MenuItem>My Account</MenuItem>
        <MenuItem>Payments </MenuItem>
      </MenuGroup>
      <MenuDivider />
      <MenuGroup title="Help">
        <MenuItem>Docs</MenuItem>
        <MenuItem>FAQ</MenuItem>
      </MenuGroup>
    </MenuList>
  </Menu>
);

export const MenuGroupTemplate = MenuGroupExample.bind({});

const MenuGroupOptions = () => (
  <Menu closeOnSelect={false}>
    <MenuButton colorScheme="blue">MenuItem</MenuButton>
    <MenuList minWidth="240px">
      <MenuOptionGroup defaultValue="asc" title="Order" type="radio">
        <MenuItemOption value="asc">Ascending</MenuItemOption>
        <MenuItemOption value="desc">Descending</MenuItemOption>
      </MenuOptionGroup>
      <MenuDivider />
      <MenuOptionGroup title="Country" type="checkbox">
        <MenuItemOption value="email">Email</MenuItemOption>
        <MenuItemOption value="phone">Phone</MenuItemOption>
        <MenuItemOption value="country">Country</MenuItemOption>
      </MenuOptionGroup>
    </MenuList>
  </Menu>
);

export const MenuGroupOptionTemplate = MenuGroupOptions.bind({});
