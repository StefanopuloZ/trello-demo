import React from 'react';
import { ThemeProvider } from 'styled-components';
import { StyledEngineProvider } from '@mui/material/styles';
import { theme } from '../../theme';
import { Wrapper } from './Wrapper';
import { GlobalStyle } from './GlobalStyle';

function Layout({ children }) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          {/* <header>Header</header> */}
          {children}
          {/* <footer>Footer</footer> */}
        </Wrapper>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export { Layout };
