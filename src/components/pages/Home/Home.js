import Posts from "../../features/Posts/Posts";
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

const Home = () => {

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h1>All posts</h1>
        <Button variant="outline-info" as={NavLink} to="/post/add">Add post</Button>
      </div>
      <Posts />
    </div>
  );

};

export default Home;