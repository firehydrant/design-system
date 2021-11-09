import React from 'react';
import { Icon } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { colorOptions } from '../../theme/colors.theme';

export const IntegrationsFilledIcon = ({ color = 'grey.90', ...props }) => (
  <Icon boxSize="24px" viewBox="0 0 24 24" color={color} {...props}>
    <path
      d="M20.469 12.031h-1.5V8c0-.531-.203-.984-.61-1.36-.375-.406-.828-.609-1.359-.609h-4.031v-1.5c0-.687-.25-1.281-.75-1.781A2.283 2.283 0 0010.484 2c-.687 0-1.28.25-1.78.75A2.516 2.516 0 008 4.531v1.5H3.969c-.531 0-1 .203-1.406.61A1.852 1.852 0 002 8v3.797h1.5c.75 0 1.375.265 1.875.797.531.531.797 1.172.797 1.922s-.266 1.39-.797 1.921c-.5.532-1.125.797-1.875.797H2v3.797c0 .532.188.985.563 1.36.406.406.874.609 1.406.609h3.797v-1.5c0-.75.265-1.375.796-1.875a2.62 2.62 0 011.922-.797c.75 0 1.391.266 1.922.797.531.5.797 1.125.797 1.875V23H17c.531 0 .984-.203 1.36-.61.406-.374.609-.828.609-1.359V17h1.5c.687 0 1.281-.234 1.781-.703.5-.5.75-1.094.75-1.781 0-.688-.25-1.266-.75-1.735-.5-.5-1.094-.75-1.781-.75z"
      fill="currentColor"
    />
  </Icon>
);

IntegrationsFilledIcon.propTypes = {
  color: PropTypes.oneOf(colorOptions),
};
