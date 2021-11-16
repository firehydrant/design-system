import React from 'react';
import { ThemeProvider } from '../lib/main';

export default function FrameComponent({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
