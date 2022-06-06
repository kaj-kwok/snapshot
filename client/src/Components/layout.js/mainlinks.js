import { ThemeIcon, UnstyledButton, Group, Text } from '@mantine/core';
import { IconHome, IconBrandInstagram, IconCirclePlus, IconSearch } from '@tabler/icons';

const MainLink = ({ icon, color, label }) => {
  return (
    <UnstyledButton
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
      })}
    >
      <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>

        <Text size="sm">{label}</Text>
      </Group>
    </UnstyledButton>
  )
}

const data = [
  { icon: <IconHome size={16} />, color: 'blue', label: 'Home' },
  { icon: <IconBrandInstagram size={16} />, color: 'teal', label: 'Posts' },
  { icon: <IconCirclePlus size={16} />, color: 'violet', label: 'Create new Post' },
  { icon: <IconSearch size={16} />, color: 'grape', label: 'Search' },
];


const MainLinks = () => {
  const links = data.map((link) => <MainLink {...link} key={link.label} />);
  return <div>{links}</div>;
}

export default MainLinks