import { Image, Row, Col, Container, Form } from 'react-bootstrap';
import LandingCarousel from '../components/LandingCarousel';
import { Link } from 'react-router-dom';
import laptop from '../assets/img/laptop.png';

// this components needs to split up
function LandingPage() {
  return (
    <>
      <LandingCarousel />
      <section className="py-5">
        <Container>
          <Row>
            <Col md={4} className="mb-4 text-center">
              <i class="fas fa-cog fa-3x mb-2"></i>
              <h3>Turning Gears</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Libero, veniam.
              </p>
            </Col>

            <Col md={4} className="mb-4 text-center">
              <i class="fas fa-cloud fa-3x mb-2"></i>
              <h3>Sending Data</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Libero, veniam.
              </p>
            </Col>

            <Col md={4} className="mb-4 text-center">
              <i class="fas fa-cart-plus fa-3x mb-2"></i>
              <h3>Making Money</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Libero, veniam.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="home-heading py-5">
        <div className="dark-overlay">
          <Row>
            <Col>
              <Container className="pt-5">
                <h1>Welcome to DevPR</h1>
                <p className="d-none d-md-block">
                  Create your professional profile/portfolio, share posts, find
                  work and get help from other software developers, designers
                  and tech enthusiasts in Puerto Rico.
                </p>
              </Container>
            </Col>
          </Row>
        </div>
      </section>

      <section className="info-section py-5">
        <Container>
          <Row>
            <Col md={6} className="align-self-center">
              <h3>The Project</h3>
              <p>
                {' '}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
                blanditiis praesentium quos. Illum porro quibusdam in nulla
                maxime, velit amet excepturi itaque. Laborum, in. Quos repellat
                officia modi quia quo.
              </p>
              <Link to="/about" className="btn btn-outline-danger btn-lg">
                Read More
              </Link>
            </Col>

            <Col md={6}>
              <Image src={laptop} alt="laptop image" fluid />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default LandingPage;
