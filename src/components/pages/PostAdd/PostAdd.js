// Bootstrap
import { Row, Col } from 'react-bootstrap';
// Components
import AddPostForm from '../../features/AddPostForm/AddPostForm';

const PostAdd = () => {

  return (
    <>
      <Row className="justify-content-center">
        <Col xs="12" md="10" lg="8">
          <h1 className="mb-5">Add post</h1>
          <AddPostForm />
        </Col>
      </Row>
    </>
  );

};

export default PostAdd;