export const Menu = {
  baseStyle: {
    list: {
      padding: '0',
      bg: 'grey.0',
      border: '1px solid',
      borderColor: 'grey.30',
      borderRadius: 'base',
      boxShadow: '4px 4px 0px 0px rgba(24, 32, 66, 0.16)',
      '& :first-child': {
        borderTopRightRadius: 'base',
        borderTopLeftRadius: 'base',
      },
      '& :last-child': {
        borderBottomRightRadius: 'base',
        borderBottomLeftRadius: 'base',
      },
    },
    groupTitle: {
      cursor: 'default',
      margin: '0',
      py: 'mg2',
      px: 3,
      fontSize: 6,
      fontWeight: 6,
      lineHeight: 6,
      color: 'grey.70',
    },
    item: {
      py: 'mg2',
      px: 3,
      color: 'grey.90',
      display: 'flex',
      fontSize: 6,
      justifyContent: 'space-between',
      _active: {
        bg: 'purple.10',
        color: 'purple.50',
      },
      _hover: {
        boxShadow: 'none',
      },
      _disabled: {
        color: 'grey.50',
      },
      // overriding chakra defaults
      '.chakra-menu__icon-wrapper': {
        marginEnd: 2,
      },
    },
  },
};
