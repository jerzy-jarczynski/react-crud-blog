import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../../redux/postsRedux';
import { useNavigate } from "react-router-dom";

const AddPostForm = () => {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [published, setPublished] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    // add post
    dispatch(addPost({ title, author, published, shortDescription, content }));
    // clear form
    setTitle('');
    setAuthor('');
    setPublished('');
    setShortDescription('');
    setContent('');
    // navigate
    navigate('/');
  }

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
            <Form.Control placeholder="Enter date in format DD-MM-YYYY" value={published} onChange={e => setPublished(e.target.value)} />
          </Form.Group>
        </Col>
        <Col xs="12">
          <Form.Group className="mb-3">
            <Form.Label>Short description</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Enter short description here" value={shortDescription} onChange={e => setShortDescription(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Main content</Form.Label>
            <Form.Control as="textarea" rows={20} placeholder="Enter main content here" value={content} onChange={e => setContent(e.target.value)} />
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