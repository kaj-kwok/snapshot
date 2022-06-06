import { AppShell, Navbar, Header, Text, Burger, MediaQuery } from '@mantine/core';
import { useState } from 'react'
import Darkmode from '../Darkmode';
import MainLinks from './mainlinks';

const Layout = ({ children }) => {
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      fixed
      navbar={<Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
        <MainLinks />

      </Navbar>
      }
      header={<Header height={70} p="md" style={{ display: "flex", justifyContent: "space-between" }} >
        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <Burger
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              size="sm"
              mr="xl"
            />
          </MediaQuery>

          <Text>Create Memories</Text>
        </div>
        <div>
          <Darkmode />
        </div>
      </Header>
      }
    >
      {children}
    </AppShell>
  )
}

export default Layout;