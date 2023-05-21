// Bootstrap
import { Row, Col } from 'react-bootstrap';
// Commponents
import EditPostForm from "../../features/EditPostForm/EditPostForm";

const PostEdit = () => {

  return (
    <>
      <Row className="justify-content-center">
        <Col xs="12" md="10" lg="8">
          <h1 className="mb-5">Edit post</h1>
          <EditPostForm />
        </Col>
      </Row>
    </>
  );

};

export default PostEdit;