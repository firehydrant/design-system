import React from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  TextField,
  Text,
  Link,
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
    py="2"
    px="3"
    bg="gray.100"
    borderRadius="8px"
    maxW="45ch"
  >
    <Text size="2" color="purple.70" as="h1" mb="3">
      Log in
    </Text>
    <FormControl id="username" mb="2">
      <FormLabel>Username</FormLabel>
      <TextField name="username" />
      <FormHelperText>Your username or your email address</FormHelperText>
    </FormControl>

    <FormControl id="password" mb="4">
      <FormLabel>Password</FormLabel>
      <TextField name="password" type="password" />
      <FormHelperText>
        Forgot?{' '}
        <Link size="xs" isExternal>
          Click here to reset your password.
        </Link>
      </FormHelperText>
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
