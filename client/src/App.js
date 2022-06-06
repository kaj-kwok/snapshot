import { useState } from 'react'
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';
import theme from "./theme/theme"
import Layout from './Components/layout.js/layout';
import Application from './Components/Application'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreatePost from './routes/createpost';
import Home from './Components/Home'
import Posts from './Components/Posts';
import Search from './Components/Search';

function App() {
  const [colorScheme, setColorScheme] = useState('dark');
  const toggleColorScheme = () =>
    setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ ...theme, colorScheme }} withGlobalStyles withNormalizeCSS>
        <BrowserRouter>
          <Layout>
            <div className="App">
              <Routes>
                <Route path="/" element={<Application />} >
                  <Route index element={<Home />} />
                  <Route path="posts" element={<Posts />} />
                  <Route path="createpost" element={<CreatePost />} />
                  <Route path="search" element={<Search />} />
                </Route>
              </Routes>
            </div>
          </Layout>
        </BrowserRouter>
      </MantineProvider>
    </ColorSchemeProvider >
  );
}

export default App;
