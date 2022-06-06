import { useState } from 'react'
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';
import theme from "./theme/theme"
import Layout from './Components/layout.js/layout';
import Home from './Components/Application'

function App() {
  const [colorScheme, setColorScheme] = useState('dark');
  const toggleColorScheme = () =>
    setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ ...theme, colorScheme }} withGlobalStyles withNormalizeCSS>
        <Layout>
          <div className="App">
            <Home />
          </div>
        </Layout>
      </MantineProvider>
    </ColorSchemeProvider >
  );
}

export default App;
