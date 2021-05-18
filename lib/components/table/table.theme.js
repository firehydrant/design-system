import { colors } from '../../theme/colors.theme';

export const Table = {
  baseStyle: {},
  variants: {
    simple: ({ isWrapping }) => ({
      table: { bg: 'grey.0' },
      tr: {
        borderBottom: 'none',
        boxShadow: `0px -1px 0px 0px ${colors.grey[30]} inset`,
      },
      th: {
        borderBottom: 'none',
        fontSize: 5,
        fontWeight: 1,
        lineHeight: 5,
        textTransform: 'initial',
        color: 'grey.70',
        py: '2',
        px: '0px',
        pr: '3',
        '&:first-of-type': {
          pl: '2',
        },
        '&:last-of-type': {
          pr: '2',
        },
      },
      td: {
        color: 'grey.90',
        fontSize: 5,
        fontWeight: 5,
        lineHeight: 5,
        verticalAlign: isWrapping ? 'top' : 'initial',
        borderBottom: 'none',
        py: '20px',
        px: '0px',
        pr: '3',
        '&:first-of-type': {
          pl: '2',
        },
        '&:last-of-type': {
          pr: '2',
        },
      },
    }),
  },
  defaultProps: {
    variant: 'simple',
    size: 'md',
  },
};
