export const Tag = {
  baseStyle: ({ colorScheme }) => {
    return {
      container: {
        border: '1px solid',
        borderColor:
          colorScheme === 'teal' ? `${colorScheme}.90` : `${colorScheme}.70`,
      },
    };
  },
  sizes: {
    md: {
      container: {
        px: 2,
        py: 'mg0',
        fontSize: 7,
        fontWeight: 1,
        borderRadius: 'base',
      },
    },
  },
  variants: {
    subtle: ({ colorScheme }) => {
      return {
        container: {
          bg: `${colorScheme}.10`,
          color:
            colorScheme === 'teal' ? `${colorScheme}.90` : `${colorScheme}.70`,
        },
      };
    },
    outline: ({ colorScheme }) => {
      return {
        container: {
          color:
            colorScheme === 'teal' ? `${colorScheme}.90` : `${colorScheme}.70`,
          boxShadow: 'none',
        },
      };
    },
  },
  defaultProps: {
    variant: 'default',
    size: 'md',
  },
};
