import { colors } from '../../theme/colors.theme';

export const Table = {
  baseStyle: {},
  variants: {
    simple: ({ verticalAlign }) => ({
      table: { bg: 'grey.0' },
      tr: {
        borderBottom: '1px solid',
        borderColor: 'grey.30',
      },
      th: {
        borderBottom: 'none',
        fontSize: 5,
        fontWeight: 1,
        lineHeight: 5,
        textTransform: 'initial',
        color: 'grey.70',
        py: 3,
        px: 0,
        pr: 4,
        letterSpacing: 'normal',
        '&:first-of-type': {
          pl: 3,
        },
        '&:last-of-type': {
          pr: 3,
        },
      },
      td: {
        color: 'grey.90',
        fontSize: 5,
        fontWeight: 5,
        lineHeight: 5,
        verticalAlign: verticalAlign ? verticalAlign : 'initial',
        borderBottom: 'none',
        py: '20px',
        px: 0,
        pr: 4,
        '&:first-of-type': {
          pl: 3,
        },
        '&:last-of-type': {
          pr: 3,
        },
      },
    }),
  },
  defaultProps: {
    variant: 'simple',
    size: 'md',
  },
};
