import React from "react";
import { Box, useStyleConfig } from "@chakra-ui/react";

export function LinkText({ variant, size, children, ...rest }) {
  const styles = useStyleConfig("LinkText", { variant, size });

  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
}
