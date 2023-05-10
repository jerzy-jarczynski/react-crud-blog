import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPostById, removePost } from "../../../redux/postsRedux";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { NavLink, Navigate } from "react-router-dom";
import { useState } from "react";

const SinglePost = () => {

  const [show, setShow] = useState(false);

  const { id } = useParams();

  const postData = useSelector(
    state => getPostById(state, id)
  );

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removePost(id));
    handleClose();
    return <Navigate to="/" />;
  };

  if (!postData) return <Navigate to="/" />;

  return (
    <>
      <Row className="justify-content-center">
        <Col xs="12" md="10" lg="8">
          <div className="d-flex justify-content-between align-items-center">
            <h1>{ postData.title }</h1>
            <div>
              <Button variant="outline-info" as={NavLink} to={`/post/edit/${postData.id}`}>Edit</Button>
              <Button variant="outline-danger" className="ms-2" onClick={handleShow}>Delete</Button>
            </div>
          </div>
          <div className="py-4">
            <div>
              <span className="fw-bold">Author:&nbsp;</span>
              <span>{postData.author}</span>
            </div>
            <div>
              <span className="fw-bold">Published:&nbsp;</span>
              <span>{postData.publishedDate}</span>
            </div>
          </div>
          <article>
            {postData.content}
          </article>
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>This operation will completely remove this post from the app.<br />Are you sure you want to do that?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleRemove}>
            Remove
          </Button>
        </Modal.Footer>
      </Modal>      
    </>
  );

};

export default SinglePost;