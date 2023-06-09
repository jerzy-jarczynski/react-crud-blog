// Bootstrap
import { Row, Col, Button, Card } from "react-bootstrap";
// Router
import { NavLink } from 'react-router-dom';
// Utils
import { dateToStr } from "../../../utils/dateToStr";

const Posts = ({ posts }) => {

  if (!posts) {
    return (
      <Row className="py-4">
        <Col>
          Nothing to show
        </Col>
      </Row>      
    );
  }

  return (
    <Row className="py-4">
      {
        posts.map(post => (
          <Col key={post.id} xs="12" md="6" lg="4" className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <div>
                  <span className="fw-bold">Author:&nbsp;</span>
                  <span>{post.author}</span>
                </div>
                <div>
                  <span className="fw-bold">Published:&nbsp;</span>
                  <span>{dateToStr(post.publishedDate)}</span>
                </div>
                <div>
                  <span className="fw-bold">Category:&nbsp;</span>
                  <span>{post.selectedCategory}</span>
                </div>                
                <Card.Text className="mt-2">
                  { post.shortDescription }
                </Card.Text>
                <Button variant="primary" as={NavLink} to={`/post/${post.id}`}>Read more</Button>
              </Card.Body>
            </Card>
          </Col>
        ))
      }
    </Row>
  );

};

export default Posts;