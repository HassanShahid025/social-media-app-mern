import postStyles from "./styles";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../actions/posts";

const Post = ({ post, setCurrentId }) => {

  const dispatch = useDispatch();

  return (
    <Card sx={postStyles.card}>
      <CardMedia
        sx={postStyles.media}
        image={post.selectedFile}
        title={post.title}
      />
      <div style={postStyles.overlay}>
        <Typography variant="h6">{post.creater}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>

      <div style={postStyles.overlay2}>
        <Button style={{ color: "white" }} size="small" onClick={() => setCurrentId(post._id)}>
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      
      <div style={postStyles.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography sx={postStyles.title} variant="h5" gutterBottom>
          {post.title}
        </Typography>
      <CardContent>
        <Typography  variant="body2" color='textSecondary' component='p'>
          {post.message}
        </Typography>
      </CardContent>
      <CardActions sx={postStyles.cardActions}>
        <Button size="small" color="primary" onClick={() => {dispatch(likePost(post._id))}}>
          <ThumbUpAltIcon fontSize="small" />
          Like
          {post.likeCount}
        </Button>
        <Button size="small" color="primary" onClick={() => {dispatch(deletePost(post._id))}}>
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
        </CardActions>
    </Card>
  );
};

export default Post;
