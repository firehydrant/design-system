import { colors } from '../../theme/colors.theme';

export const Alert = {
  baseStyle: {
    border: '1px solid',
    borderRadius: '4px',
  },
  statuses: {
    error: {
      bg: 'red.10',
      borderColor: 'red.70',
    },
    info: {
      bg: 'grey.10',
      borderColor: 'grey.70',
    },
    success: {
      bg: 'green.10',
      borderColor: 'green.70',
    },
    warning: {
      bg: 'yellow.10',
      borderColor: 'yellow.70',
    },
  },
};