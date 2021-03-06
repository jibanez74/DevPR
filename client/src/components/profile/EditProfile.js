import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import Loader from '../layouts/Loader';
// import Message from '../layouts/Message';
import PageHeader from '../layouts/PageHeader';
import { locationOptions, statusOptions } from '../../utils/options';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { API_URL } from '../../constants/apiConstants';
import { PROFILE_FETCH_REQUEST } from '../../constants/profileConstants';

function EditProfile({ history }) {
  const [status, setStatus] = useState('');
  const [skills, setSkills] = useState('');
  const [company, setCompany] = useState('');
  const [website, setWebsite] = useState('');
  const [location, setLocation] = useState('');
  const [bio, setBio] = useState('');
  const [githubUsername, setGithubUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [facebook, setFacebook] = useState('');
  const [twitter, setTwitter] = useState('');
  const [instagram, setInstagram] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const token = useSelector(
    state => state.userLogin.user.signInUserSession.accessToken.jwtToken
  );

  const saveHandler = async e => {
    e.preventDefault();

    const profileData = {
      status,
      skills,
      company,
      website,
      location,
      bio,
      githubUsername,
      phone,
      facebook,
      twitter,
      instagram,
      linkedin,
    };

    const config = {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    };

    try {
      const { data } = await axios.put(
        `${API_URL}/profile`,
        profileData,
        config
      );

      dispatch({
        type: PROFILE_FETCH_REQUEST,
        payload: data.profile,
      });

      history.push('/dashboard');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <PageHeader
        title="Edit Profile"
        msg="All Fields marked with a * are required"
      />

      <section className="edit-profile-section">
        <Container>
          <Row>
            <Col md={4}></Col>
            <Col md={8}>
              <Form onSubmit={saveHandler}>
                <Form.Group controlId="status">
                  <Form.Label>* Status</Form.Label>
                  <Form.Control
                    as="select"
                    required
                    value={status}
                    onChange={e => setStatus(e.target.value)}
                  >
                    {statusOptions.map(x => (
                      <option key={x.label} value={x.value} label={x.label}>
                        {x.value}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="skills">
                  <Form.Label>* Skills</Form.Label>
                  <Form.Control
                    as="textarea"
                    required
                    value={skills}
                    onChange={e => setSkills(e.target.value)}
                    rows="5"
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="company">
                  <Form.Label>Company</Form.Label>
                  <Form.Control
                    type="text"
                    maxLength="80"
                    value={company}
                    onChange={e => setCompany(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="website">
                  <Form.Label>Website or Blog</Form.Label>
                  <Form.Control
                    type="text"
                    value={website}
                    onChange={e => setWebsite(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="location">
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    as="select"
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                  >
                    {locationOptions.map(x => (
                      <option key={x.label} value={x.value} label={x.label}>
                        {x.value}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="bio">
                  <Form.Label>Bio</Form.Label>
                  <Form.Control
                    as="textarea"
                    minLength="8"
                    maxLength="500"
                    value={bio}
                    onChange={e => setBio(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="githubUsername">
                  <Form.Label>Github Username</Form.Label>
                  <Form.Control
                    type="text"
                    maxLength="100"
                    onChange={e => setGithubUsername(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="phone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="tel"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="facebook">
                  <Form.Label>Facebook</Form.Label>
                  <Form.Control
                    type="text"
                    value={facebook}
                    onChange={e => setFacebook(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="twitter">
                  <Form.Label>Twitter</Form.Label>
                  <Form.Control
                    type="text"
                    value={twitter}
                    onChange={e => setTwitter(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="instagram">
                  <Form.Label>Instagram</Form.Label>
                  <Form.Control
                    type="text"
                    value={instagram}
                    onChange={e => setInstagram(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="linkedin">
                  <Form.Label>Linkedin</Form.Label>
                  <Form.Control
                    type="text"
                    value={linkedin}
                    onChange={e => setLinkedin(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Button className="mt-4" type="submit" block variant="info">
                  Save Profile
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default EditProfile;
