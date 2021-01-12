import { useEffect, useState } from 'react';
import { classicRegister } from '../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import {
  ButtonGroup,
  Button,
  Col,
  Container,
  Form,
  Modal,
  Row,
  Card,
} from 'react-bootstrap';
import Message from '../components/Message';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

function RegisterPage({ history }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const dispatch = useDispatch();

  const userRegister = useSelector(state => state.userRegister);
  const { loading, success, error } = userRegister;

  useEffect(() => {
    if (success) {
      history.push(`/confirm/${email}`);
    }
  }, [success, history]);

  const submitHandler = e => {
    e.preventDefault();
    dispatch(classicRegister(name, email, password, password2));
  };

  const emailConfirmHandler = e => e.preventDefault();
  console.log('submitted');

  return (
    <>
      <PageHeader
        title="Create an Account"
        msg="You can sign up by filling the form below or by using a social provider."
      />

      <section className="register-section">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="card p-4">
                <div className="card-body">
                  <h3>All fields are required</h3>

                  <hr />

                  <form onSubmit={submitHandler}>
                    <div className="row">
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          name="firstName"
                          value={firstName}
                          onChange={e => setFirstName(e.target.value)}
                          required
                          maxLength="40"
                          placeholder="Enter your first name"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                          name="lastName"
                          value={lastName}
                          onChange={e => setLastName(e.target.value)}
                          required
                          maxLength="40"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                          required
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          name="password"
                          value={password}
                          onChange={e => setPassword(e.target.value)}
                          required
                          minLength="8"
                          maxLength="128"
                          placeholder="Enter your new password"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RegisterPage;
