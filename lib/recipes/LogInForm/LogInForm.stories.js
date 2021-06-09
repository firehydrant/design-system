import React from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  FormHelperText,
  TextField,
  Text,
  Button,
  Icon,
} from '../../main';

export default {
  title: 'Recipes/Log in form',
};

export const Default = () => (
  <Box
    as="form"
    m="0 auto"
    py="3"
    px="4"
    bg="gray.100"
    borderRadius="8px"
    maxW="45ch"
  >
    <Text size="2" color="purple.70" as="h1" mb="4">
      Log in
    </Text>
    <FormControl id="username" mb="3">
      <FormLabel>Username</FormLabel>
      <TextField name="username" />
      <FormHelperText>Your username or your email address</FormHelperText>
    </FormControl>

    <FormControl id="password" mb="5">
      <FormLabel>Password</FormLabel>
      <TextField name="password" type="password" />
    </FormControl>

    <Button
      type="submit"
      rightIcon={<Icon name="arrowRight" />}
      variant="primary"
    >
      Log in
    </Button>
  </Box>
);
