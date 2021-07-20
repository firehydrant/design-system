import React from 'react';
import {Flex, Spacer, useStyleConfig } from '@chakra-ui/react';
import { Icon, IconButton, Text } from '../../main';

export function Alert({ children, dismissable, onDismiss, variant }) {
  const styles = useStyleConfig('Alert', { variant });

  const iconColorScheme = {
    'alert': 'red.70',
    'info': 'grey.70',
    'success': 'green.70',
    'warning': 'brown.70',
  };

  return (
    <Flex borderWidth="1px" borderRadius="4px" __css={styles} variant={variant}>
      <Flex>
        <Flex align="flex-start" py="mg2">
          <Icon name={variant} ml="1" mr="2" color={iconColorScheme[variant]} />
          <Text color="grey.90" size="5">{ children }</Text>
        </Flex>
        <Spacer py="mg1" />
        { dismissable && (
          <IconButton
            aria-label="close"
            name="close"
            onClick={onDismiss}
            height="40px"
            width="44px"
            ml="3"
            variant="tertiary"
          />
        )}
      </Flex>
    </Flex>
  );
}
