// Components
import Posts from "../../features/Posts/Posts";
// Bootstrap
import Button from 'react-bootstrap/Button';
// Router
import { NavLink } from 'react-router-dom';
// Redux
import { useSelector } from "react-redux";
import { getAllPosts } from "../../../redux/postsRedux";

const Home = () => {

  const allPosts = useSelector(getAllPosts);

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h1>All posts</h1>
        <Button variant="outline-info" as={NavLink} to="/post/add">Add post</Button>
      </div>
      <Posts posts={allPosts} />
    </div>
  );

};

export default Home;