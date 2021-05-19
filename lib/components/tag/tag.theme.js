export const Tag = {
  baseStyle: {
    container: {
      border: '1px solid',
    },
  },
  sizes: {
    md: {
      container: {
        px: 1,
        py: 'mg0',
        fontSize: 7,
        fontWeight: 1,
        borderRadius: '4px',
      },
    },
  },
  variants: {
    default: {
      container: { color: 'grey.70', bg: 'grey.10', borderColor: 'grey.70' },
    },
    success: {
      container: { color: 'green.70', bg: 'green.10', borderColor: 'green.70' },
    },
    alert: {
      container: { color: 'red.70', bg: 'red.10', borderColor: 'red.70' },
    },
    warning: {
      container: {
        color: 'brown.70',
        bg: 'brown.10',
        borderColor: 'brown.70',
      },
    },
    neutral: {
      container: { color: 'grey.70', bg: 'grey.10', borderColor: 'grey.70' },
    },
    accentTeal: {
      container: { color: 'teal.90', bg: 'teal.10', borderColor: 'teal.90' },
    },
    accentPurple: {
      container: {
        color: 'purple.70',
        bg: 'purple.10',
        borderColor: 'purple.70',
      },
    },
  },
  defaultProps: {
    variant: 'default',
    size: 'md',
  },
};
