import { Card, Image, Text, Group, Badge, CardSection, Button, UnstyledButton } from "@mantine/core";
import fileNotFound from '../../assets/filenotfound.png'
import moment from 'moment';
import { IconTrash } from '@tabler/icons';
import { IconDots } from '@tabler/icons';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, likePost } from "../../actions/posts";
import Like from "./like";

const Post = ({ post }) => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.users.user)
  const handleDeletePost = () => {
    dispatch(deletePost(post._id))
  }

  const handleLikePost = () => {
    console.log("user.id", user.id, "post._id", post._id);
    dispatch(likePost(user?.id, post._id))
  }

  return (
    <Card shadow="sm" p="lg" sx={{
      '&:hover': {
        transform: "scale(1.05)",
        '#textbox': {
          opacity: 1,
        }
      }
    }}
      style={{ position: "relative" }}>
      <Card.Section style={{ position: "relative" }}>
        <Image src={post.uploadedFile || fileNotFound} height={250} width="100%" fit="contain" />
        <Link to={`/editpost/${post._id}`}>
          <UnstyledButton
            sx={{
              '&:hover': {
                color: "#4267B2"
              }
            }}
            style={{
              position: "absolute",
              top: 5,
              right: 5
            }}
          >
            <IconDots /></UnstyledButton>
        </Link>
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
            textShadow: "2px 2px #000000",
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
            paddingBottom: "10px",
            minHeight: "30px"
          }}
        >
          {user?.id && (
            <UnstyledButton onClick={handleLikePost}>
              <Like component="button" likes={post.likesCounter} />
            </UnstyledButton>
          )}
          {user?.id === post.user_id &&
            <UnstyledButton
              sx={{
                '&:hover': {
                  color: "#4267B2"
                }
              }}
              onClick={handleDeletePost}
            ><IconTrash />
            </UnstyledButton>
          }
        </Group>
      </CardSection>
    </Card >
  )
}

export default Post;