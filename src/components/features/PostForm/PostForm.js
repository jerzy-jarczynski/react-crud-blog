import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

const PostForm = ({ action, actionText, ...props }) => {

  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.published || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');

  const handleSubmit = e => {
    e.preventDefault();
    action({ title, author, publishedDate, shortDescription, content });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col xs="12" lg="6">
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control placeholder="Enter title" value={title} onChange={e => setTitle(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Author</Form.Label>
            <Form.Control placeholder="Enter author" value={author} onChange={e => setAuthor(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Published</Form.Label>
            <DatePicker selected={publishedDate} onChange={date => setPublishedDate(date)} />
          </Form.Group>
        </Col>
        <Col xs="12">
          <Form.Group className="mb-3">
            <Form.Label>Short description</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Enter short description here" value={shortDescription} onChange={e => setShortDescription(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Main content </Form.Label>
            <ReactQuill theme="snow" value={content} placeholder="Leave a comment here" style={{ height: "300px", paddingBottom: "50px" }} onChange={setContent} />
          </Form.Group>
        </Col>
      </Row>
      <Button variant="primary" type="submit">
        { actionText }
      </Button>
    </Form>
  );

};

PostForm.propTypes = {
  action: PropTypes.func.isRequired,
  actionText: PropTypes.string.isRequired,
  title: PropTypes.string,
  author: PropTypes.string,
  published: PropTypes.instanceOf(Date),
  shortDescription: PropTypes.string,
  content: PropTypes.string,
};

export default PostForm;