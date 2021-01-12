import { Carousel, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function LandingCarousel() {
  return (
    <Carousel pause="hover">
      <Carousel.Item className="slider-item carousel-image-1">
        <Container>
          <Carousel.Caption className="carousel-caption d-none d-sm-block text-right mb-5">
            <h1 className="display-3">Title</h1>
            <p className="lead">title 1 text</p>
            <Link to="/register" className="btn btn-danger btn-lg">
              Sign Up Now
            </Link>
          </Carousel.Caption>
        </Container>
      </Carousel.Item>

      <Carousel.Item className="slider-item carousel-image-2">
        <Container>
          <Carousel.Caption className="carousel-caption d-none d-sm-block text-right mb-5">
            <h1 className="display-3">Title</h1>
            <p className="lead">title 1 text</p>
            <Link to="/about" className="btn btn-primary btn-lg">
              Learn More
            </Link>
          </Carousel.Caption>
        </Container>
      </Carousel.Item>

      <Carousel.Item className="slider-item carousel-image-3">
        <Container>
          <Carousel.Caption className="carousel-caption d-none d-sm-block text-right mb-5">
            <h1 className="display-3">Title</h1>
            <p className="lead">title 1 text</p>
            <Link to="/register" className="btn btn-success btn-lg">
              Post a Job
            </Link>
          </Carousel.Caption>
        </Container>
      </Carousel.Item>
    </Carousel>
  );
}

export default LandingCarousel;
