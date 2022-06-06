import { AppShell, Navbar, Header, Text, Burger, MediaQuery } from '@mantine/core';
import { useState } from 'react'

const Layout = ({ children }) => {
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      fixed
      navbar={<Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
        <Text>Create</Text>
        <Text>My Posts</Text>
        <Text>Filter</Text>
      </Navbar>
      }
      header={<Header height={70} p="md">
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
      </Header>
      }
    >
      {children}
    </AppShell>
  )
}

export default Layout;