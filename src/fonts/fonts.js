import { css } from 'styled-components';
// woff2
import Roboto300Woff2 from './roboto-v20-latin-ext_latin_cyrillic-ext_cyrillic-300.woff2';
import Roboto400Woff2 from './roboto-v20-latin-ext_latin_cyrillic-ext_cyrillic-regular.woff2';
import Roboto500Woff2 from './roboto-v20-latin-ext_latin_cyrillic-ext_cyrillic-500.woff2';
import Roboto700Woff2 from './roboto-v20-latin-ext_latin_cyrillic-ext_cyrillic-700.woff2';
// woff
import Roboto300Woff from './roboto-v20-latin-ext_latin_cyrillic-ext_cyrillic-300.woff';
import Roboto400Woff from './roboto-v20-latin-ext_latin_cyrillic-ext_cyrillic-regular.woff';
import Roboto500Woff from './roboto-v20-latin-ext_latin_cyrillic-ext_cyrillic-500.woff';
import Roboto700Woff from './roboto-v20-latin-ext_latin_cyrillic-ext_cyrillic-700.woff';


export default css`
  @font-face {
    font-family: 'Roboto';
    src: local(''), url(${Roboto300Woff2}) format('woff2'), url(${Roboto300Woff}) format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: local(''), url(${Roboto400Woff2}) format('woff2'), url(${Roboto400Woff}) format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: local(''), url(${Roboto500Woff2}) format('woff2'), url(${Roboto500Woff}) format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: local(''), url(${Roboto700Woff2}) format('woff2'), url(${Roboto700Woff}) format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
`;
