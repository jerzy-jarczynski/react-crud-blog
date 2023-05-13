import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPostById } from "../../../redux/postsRedux";
import { useNavigate, Navigate } from "react-router-dom";
import { editPost } from "../../../redux/postsRedux";
import PostForm from '../PostForm/PostForm';

const EditPostForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  const postData = useSelector(
    state => getPostById(state, id)
  );

  const handleSubmit = post => {
    dispatch(editPost({ ...post, id }));
    navigate(`/post/${ id }`);
  };

  if (!postData) return <Navigate to="/" />;

  return (
    <PostForm action={handleSubmit} 
              actionText="Edit post"
              title={postData.title}
              author={postData.author}
              published={postData.publishedDate}
              shortDescription={postData.shortDescription}
              content={postData.content} />
  );

};

export default EditPostForm;