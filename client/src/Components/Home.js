import { SimpleGrid } from "@mantine/core";

const Home = () => {
  return (
    <SimpleGrid
      cols={3}
      spacing="lg"
      breakpoints={[
        { maxWidth: 'md', cols: 2, spacing: 'sm' },
        { maxWidth: 'sm', cols: 1, spacing: 'sm' }

      ]}>
      <div>w</div>
      <div>w</div>
      <div>w</div>
      <div>w</div>
      <div>w</div>
      <div>w</div>
    </SimpleGrid>
  )
}

export default Home;

