export const Link = {
  baseStyle: {
    display: 'inline',
    boxShadow: 'none',
    _hover: {
      textDecoration: 'none',
    },
    _focus: {
      boxShadow: 'none',
      borderRadius: '2px',
    },
    _active: {
      _focus: {
        span: {
          outline: 'none',
        },
      },
    },
  },
};
