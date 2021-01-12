import {Link} from "react-router-dom";
import laptop from "*.png";

function LandingInfo() {
    return(
        <section className="home-heading py-5">
            <div className="dark-overlay">
                <div className="row">
                    <div className="col">
                        <div className="pt-5 container">
                            <h1>Welcome to DevPR</h1>
                            <p className="d-none d-md-block">
                                Create your professional profile/portfolio, share posts, find
                                work and get help from other software developers, designers
                                and tech enthusiasts in Puerto Rico.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    <section className="info-section py-5">
        <div className="container">          <Row>
            <div className="align-self-center col-md-6">
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
            </div>

            <div className="col-md-6"{}>
                <img src={laptop} alt="image of a laptop" className="img-fluid" />
            </div>
        </Row>
        </div>
    </section>
    )
}
