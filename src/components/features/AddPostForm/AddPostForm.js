import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AddPostForm = () => {

  return (
    <Form>
      <Row>
        <Col xs="12" lg="6">
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control placeholder="Enter title" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Author</Form.Label>
            <Form.Control placeholder="Enter author" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Published</Form.Label>
            <Form.Control placeholder="Enter date in format DD-MM-YYYY" />
          </Form.Group>
        </Col>
        <Col xs="12">
          <Form.Group className="mb-3">
            <Form.Label>Short description</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Enter short description here" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Main content</Form.Label>
            <Form.Control as="textarea" rows={20} placeholder="Enter main content here" />
          </Form.Group>
        </Col>
      </Row>
      <Button variant="primary" type="submit">
        Add post
      </Button>
    </Form>
  );

};

export default AddPostForm;