import { useState } from 'react'
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import theme from "./theme/theme"
import Layout from './Components/layout.js/layout';

function App() {

  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <Layout>
        <div className="App">
          Holla
        </div>
      </Layout>
    </MantineProvider>
  );
}

export default App;
