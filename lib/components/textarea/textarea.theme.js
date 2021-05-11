import { TextField } from '../textfield/textfield.theme';

export const TextArea = {
  baseStyle: {
    display: 'block',
    ...TextField.baseStyle,
  },
  sizes: {
    md: {
      ...TextField.sizes.md.field,
    },
  },
  variants: {
    outline: {
      ...TextField.variants.outline.field,
    },
  },
  defaultProps: {
    ...TextField.defaultProps,
  },
};
