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
import { useForm } from "react-hook-form";

const PostForm = ({ action, actionText, ...props }) => {

  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.published || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');
  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);

  const { register, handleSubmit: validate, formState: { errors } } = useForm();

  const handleSubmit = () => {
    setContentError(!content);
    setDateError(!publishedDate);
    if (content && publishedDate) {
      action({ title, author, publishedDate, shortDescription, content });
    }
  };

  return (
    <Form onSubmit={validate(handleSubmit)}>
      <Row>
        <Col xs="12" lg="6">
          <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              {...register("title", { required: true, minLength: 3 })}
              type="text" placeholder="Enter title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            {errors.title && errors.title.type === "required" && <small className="d-block form-text text-danger mt-2">This field is required</small>}
            {errors.title && errors.title.type === "minLength" && <small className="d-block form-text text-danger mt-2">Title has to be at least 3 characters long</small>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAuthor">
            <Form.Label>Author</Form.Label>
            <Form.Control
              {...register("author", { required: true, minLength: 3 })}
              type="text" placeholder="Enter author"
              value={author}
              onChange={e => setAuthor(e.target.value)}
            />
            {errors.author && errors.author.type === "required" && <small className="d-block form-text text-danger mt-2">This field is required</small>}
            {errors.author && errors.author.type === "minLength" && <small className="d-block form-text text-danger mt-2">Author has to be at least 3 characters long</small>}            
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPublishedDate">
            <Form.Label>Published</Form.Label>
            <DatePicker selected={publishedDate} onChange={date => setPublishedDate(date)} />
            {dateError && <small className="d-block form-text text-danger mt-2">Date can't be empty</small>}
          </Form.Group>
        </Col>
        <Col xs="12">
          <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label>Short description</Form.Label>
            <Form.Control
              {...register("shortDescription", { required: true, minLength: 20 })}
              as="textarea" rows={4}
              placeholder="Enter short description here"
              value={shortDescription}
              onChange={e => setShortDescription(e.target.value)}
            />
            {errors.shortDescription && errors.shortDescription.type === "required" && <small className="d-block form-text text-danger mt-2">This field should not be empty</small>}
            {errors.shortDescription && errors.shortDescription.type === "minLength" && <small className="d-block form-text text-danger mt-2">Short Description has to be at least 20 characters long</small>}            
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicMainContent">
            <Form.Label>Main content </Form.Label>
            <ReactQuill theme="snow" value={content} placeholder="Leave a comment here" style={{ height: "300px", paddingBottom: "50px" }} onChange={setContent} />
            {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
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