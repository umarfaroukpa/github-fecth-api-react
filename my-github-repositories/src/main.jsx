import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
// import './index.css';

import { ChakraBaseProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#C8A2C8',
        overflow: 'hidden'
      },
    },
  },
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ChakraBaseProvider theme={theme}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ChakraBaseProvider>
  </BrowserRouter>,
  document.getElementById('root')

);

