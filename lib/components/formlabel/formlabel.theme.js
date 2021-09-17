export const FormLabel = {
  baseStyle: { margin: '0', padding: '0' },
  sizes: {
    6: {
      fontSize: 6,
      lineHeight: 6,
      fontWeight: 6,
    },
  },
  variants: {
    primary: {
      color: 'grey.70',
      _groupHover: { color: 'purple.50' },
      _groupFocus: { color: 'purple.70' },
      _groupActive: { color: 'purple.70' },
      _readOnly: {
        _groupHover: { color: 'grey.70' },
        _groupFocus: { color: 'grey.70' },
        _groupActive: { color: 'grey.70' },
      },
      _invalid: {
        color: 'red.70',
        _groupHover: { color: 'red.70' },
        _groupFocus: { color: 'red.70' },
        _groupActive: { color: 'red.70' },
      },
    },
    switch: {
      fontSize: 5,
      lineHeight: 5,
      fontWeight: 5,
      mr: 3,
      cursor: 'pointer',
      color: 'grey.90',
      _readOnly: {
        color: 'grey.70',
        cursor: 'not-allowed',
      },
    },
    checkbox: {
      color: 'grey.70',
      _invalid: {
        color: 'red.70',
      },
    },
  },
  defaultProps: {
    size: 6,
    variant: 'primary',
  },
};
