import { Card, Image, Text, Group, CardSection } from "@mantine/core";
import fileNotFound from '../../assets/filenotfound.png'
import moment from 'moment'

const Post = ({ post }) => {

  return (

    <Card shadow="sm" p="lg" sx={{
      '&:hover': {
        '#textbox': {
          opacity: 1,

        }
      }
    }}>
      <Card.Section style={{ position: "relative" }}>
        <Image src={post.uploadedFile || fileNotFound} />
        <Group
          id="textbox"
          sx={{
            opacity: 0,
          }}
          style={{
            position: "absolute",
            bottom: "0px",
            width: "100%",
            zIndex: 50,
            color: '#FFF',
            fontWeight: '600',
            justifyContent: 'space-between',
            padding: "10px",
            textShadow: "2px 2px #ff0000"
          }}
          direction="row">
          <Text>{post.creator}</Text>
          <Text>{moment(post.createdAt).fromNow()}</Text>
        </Group>
      </Card.Section>
      <CardSection>
        <Text>{post.tags.map(tag => `#${tag} `)}</Text>
        <Text>
          {post.description}
        </Text>
      </CardSection>
    </Card>
  )
}

export default Post;