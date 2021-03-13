import { useEffect, useState } from 'react';
import isEmpty from '../../utils/isEmpty';
import axios from 'axios';
import API_URL from '../../constants/apiConstants';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import Loader from '../layouts/Loader';
// import Message from '../layouts/Message';
import PageHeader from '../layouts/PageHeader';
import { locationOptions, statusOptions } from '../../utils/options';
import { useSelector } from 'react-redux';

function EditProfile({ history }) {
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState('');
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
  const [youtube, setYoutube] = useState(' ');
  const [twitch, setTwitch] = useState('');

  const userLogin = useSelector(state => state.userLogin);
  const { user } = userLogin;

  const fetchProfile = useSelector(state => state.fetchProfile);
  const { profile } = fetchProfile;

  useEffect(() => {
    if (!isEmpty(profile)) {
      if (!isEmpty(profile.skills) && Array.isArray(profile.skills)) {
        setSkills(profile.skills.join(' ,'));
      }

      if (!isEmpty(profile.status)) setStatus(profile.status);
      if (!isEmpty(profile.company)) setCompany(profile.company);
      if (!isEmpty(profile.website)) setWebsite(profile.website);
      if (!isEmpty(profile.location)) setLocation(profile.location);
      if (!isEmpty(profile.bio)) setBio(profile.bio);
      if (!isEmpty(profile.githubUsername))
        setGithubUsername(profile.githubUsername);
      if (!isEmpty(profile.phone)) setPhone(profile.phone);
      if (!isEmpty(profile.facebook)) setFacebook(profile.facebook);
      if (!isEmpty(profile.twitter)) setTwitter(profile.twitter);
      if (!isEmpty(profile.instagram)) setInstagram(profile.instagram);
      if (!isEmpty(profile.linkedin)) setLinkedin(profile.linkedin);
      if (!isEmpty(profile.youtube)) setYoutube(profile.youtube);
      if (!isEmpty(profile.twitch)) setTwitch(profile.Twitch);
    }
  }, [profile]);

  const saveHandler = async e => {
    e.preventDefault();

    const profileData = {
      name: user.attributes.name,
      email: user.attributes.email,
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
      await axios.put(`${API_URL}/profile`, profileData, config);
      history.push('/dashboard');
    } catch (error) {
      conswole.log(error);
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
                    value={githubUsername}
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

                <Form.Group controlId="youtube">
                  <Form.Label>Youtube</Form.Label>
                  <Form.Control
                    type="text"
                    value={youtube}
                    onChange={e => setYoutube(e.target.value)}
                    minLength="2"
                    maxLength="500"
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="twitch">
                  <Form.Label>Twitch</Form.Label>
                  <Form.Control
                    type="text"
                    value={twitch}
                    onChange={e => setTwitch(e.target.value)}
                    minLength="2"
                    maxLength="500"
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
