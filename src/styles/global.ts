import { createGlobalStyle } from 'styled-components';

import arteBackground from '../assets/arte13.svg';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
      }

      body {
          background: #F0F0F5 url(${arteBackground}) no-repeat 100% top;
          -webkit-font-smoothing: antialiased;
      }

      body, input, button {
          font: 16px Roboto, sans-serif;
      }

      #root {
         max-width: 1200px;
         margin: 0 auto;
         padding: 40px 20px;  
      }

      button {
          cursor: pointer;
      }
`;