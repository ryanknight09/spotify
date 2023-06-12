import type { FC, PropsWithChildren } from 'react';

import {
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
  createTheme,
} from '@mui/material';

import globalStyles from './globalStyles';
import palette from './palette';

const theme = createTheme({
  palette: palette,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '.5rem',
          textTransform: 'none',
        },
      },
    },
  },
});

export const Theme: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles styles={globalStyles} />
    <CssBaseline />
    {children}
  </ThemeProvider>
);

export default Theme;
