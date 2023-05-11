import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddPostForm from '../../features/AddPostForm/AddPostForm';

const PostAdd = () => {

  return (
    <>
      <Row className="justify-content-center">
        <Col xs="12" md="10" lg="8">
          <h1>Add post</h1>
          <AddPostForm />
        </Col>
      </Row>
    </>
  );

};

export default PostAdd;