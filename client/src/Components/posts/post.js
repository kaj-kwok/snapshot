import { Card, Image, Text, Group, Badge, CardSection } from "@mantine/core";
import fileNotFound from '../../assets/filenotfound.png'
import moment from 'moment';
import { IconThumbUp } from '@tabler/icons';
import { IconTrash } from '@tabler/icons';

const Post = ({ post }) => {

  return (

    <Card shadow="sm" p="lg" sx={{
      '&:hover': {
        transform: "scale(1.1)",
        '#textbox': {
          opacity: 1,
        }
      }
    }}
      style={{ position: "relative" }}>
      <Card.Section style={{ position: "relative" }}>
        <Image src={post.uploadedFile || fileNotFound} height={250} width="100%" fit="contain" />
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
            textShadow: "2px 2px #ff0000",
            gap: 0,
            paddingLeft: "10px",
            paddingRight: "10px"
          }}
          direction="column">

          <Text>{post.title}</Text>
          <Group
            style={{
              justifyContent: 'space-between',
              width: "100%",
            }}
          >
            <Text
              style={{
                fontSize: "12px",
                fontWeight: "400"
              }}
            >by {post.creator}</Text>
            <Text>{moment(post.createdAt).fromNow()}</Text>
          </Group>
        </Group>
      </Card.Section>
      <Card.Section>{post.tags.map(tag => <Badge key={tag}
        style={{ margin: "5px" }}
      >{`#${tag}`}</Badge>)}
      </Card.Section>
      <Text>
        {post.description}
      </Text>
      <CardSection>
        <Group
          style={{
            alignItems: "end",
            justifyContent: "space-between",
            marginTop: "10px",
            bottom: 0,
            width: '100%',
            paddingLeft: "10px",
            paddingRight: "10px",
            paddingBottom: "10px"

          }}
        >
          <IconThumbUp as="button"
            style={{
              '&:hover': {
                color: 'red'
              }
            }}
          />
          <IconTrash
          />
        </Group>
      </CardSection>
    </Card>
  )
}

export default Post;