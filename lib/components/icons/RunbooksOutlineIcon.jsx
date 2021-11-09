import React from 'react';
import { Icon } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { colorOptions } from '../../theme/colors.theme';

export const RunbooksOutlineIcon = (props) => (
  <Icon boxSize="24px" viewBox="0 0 24 24" {...props}>
    <path
      d="M20.987 3H3.013c-.562 0-1.046.215-1.451.645C1.187 4.04 1 4.537 1 5.132v13.736c0 .595.187 1.107.562 1.537.405.397.89.595 1.45.595h17.975c.562 0 1.03-.198 1.405-.595.405-.43.608-.942.608-1.537V5.132c0-.595-.203-1.09-.608-1.487A1.786 1.786 0 0020.986 3zM3.013 18.868V5.132h8.004v13.736H3.013zm17.974 0h-8.004V5.132h8.004v13.736zM14.013 8.85h5.991v1.587h-5.991V8.851zm0 2.628h5.991v1.587h-5.991V11.48zm0 2.628h5.991v1.587h-5.991v-1.587z"
      fill="currentColor"
    />
  </Icon>
);

RunbooksOutlineIcon.propTypes = {
  color: PropTypes.oneOf(colorOptions),
};
