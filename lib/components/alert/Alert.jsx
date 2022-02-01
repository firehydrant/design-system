import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Spacer, useStyleConfig } from '@chakra-ui/react';
import { Icon, IconButton, Text } from '../../main';

export function Alert({
  children,
  dismissable,
  onDismiss,
  variant = 'info',
  ...rest
}) {
  const styles = useStyleConfig('Alert', { variant });

  const iconColorScheme = {
    alert: 'red.70',
    info: 'grey.70',
    notice: 'teal.70',
    success: 'green.70',
    warning: 'brown.70',
  };

  return (
    <Flex
      __css={styles}
      borderWidth="1px"
      borderStyle="solid"
      borderRadius="4px"
      variant={variant}
      {...rest}
    >
      <Flex>
        <Flex align="flex-start" py="mg2">
          <Icon name={variant || 'info'} ml="1" mr="2" color={iconColorScheme[variant]} />
          <Text color="grey.90" size="5" mb="0">
            {children}
          </Text>
        </Flex>
        <Spacer py="mg1" />
        {dismissable && (
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

Alert.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['alert', 'info', 'notice', 'success', 'warning']),
  dismissable: PropTypes.bool,
};
