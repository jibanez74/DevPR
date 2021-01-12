import { Container, Row, Col } from 'react-bootstrap';

function PageHeader({ title, msg }) {
  return (
    <div className="page-header">
      <Container>
        <Row>
          <Col md={6} className="m-auto text-center">
            <h1>{title}</h1>
            <p>{msg}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PageHeader;
