import { AppShell, Navbar, Header, Text, Burger, MediaQuery, Box } from '@mantine/core';
import { useState } from 'react'
import Darkmode from '../Darkmode';
import LoginBtn from '../login/loginbtn';
import LogoutBtn from '../login/logoutbtn';
import { SearchBar } from '../SearchBar/SearchBar';
import MainLinks from './mainlinks';
import { useSelector } from 'react-redux';

const Layout = ({ children }) => {
  const [opened, setOpened] = useState(false);
  const user = useSelector(state => state.users.user || null)
  console.log(user);

  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      fixed
      navbar={<Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
        <MainLinks />

      </Navbar>
      }
      header={<Header height={70} p="md" style={{ display: "flex", justifyContent: "space-between", gap: "10px" }} >
        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <Burger
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              size="sm"
              mr="xl"
            />
          </MediaQuery>
          <Box>
            <Text component='h1' style={{ fontSize: "1.5rem" }}>Snapshot</Text>
            <Text
              style={{ fontSize: "0.75em", fontStyle: 'italic' }}
            >
              {user && ` by ${user.name}`}</Text>
          </Box>
        </div>
        <Box
          style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}
        >
          <SearchBar
            sx={{ marginLeft: '10px' }}
          />
          {!user ? <LoginBtn /> : <LogoutBtn />}
          <Darkmode />
        </Box>
      </Header>
      }
    >
      {children}
    </AppShell>
  )
}

export default Layout;