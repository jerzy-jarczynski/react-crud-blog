// Redux
import { useSelector } from 'react-redux';
import { getAllCategories } from '../../../redux/categoriesRedux';
// Bootstrap
import { Row, Col, ListGroup, Button } from 'react-bootstrap';
// Router
import { NavLink } from 'react-router-dom';

const Categories = () => {

  const categories = useSelector(getAllCategories);

  return (
    <>
      <Row className="justify-content-center">
        <Col xs="12" md="10" lg="8">
          <h1>All categories</h1>

          <ListGroup className="py-4">
            {
              categories.map(category => (
                <ListGroup.Item key={category.id}>
                  <Button variant="link" as={NavLink} to={`/category/${category.name.toLowerCase()}`}>
                    { category.name }
                  </Button>
                </ListGroup.Item>
              ))
            }
          </ListGroup>
        </Col>
      </Row>
    </>
  );

};

export default Categories;