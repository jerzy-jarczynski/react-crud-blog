// Redux
import { useDispatch } from 'react-redux';
import { addPost } from '../../../redux/postsRedux';
// Router
import { useNavigate } from "react-router-dom";
// Components
import PostForm from '../PostForm/PostForm';

const AddPostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = post => {
    dispatch(addPost(post));
    navigate('/');
  }

  return (
    <PostForm action={handleSubmit} actionText="Add post" />
  );

};

export default AddPostForm;