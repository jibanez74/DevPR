import { useState } from 'react';
import PageHeader from '../layouts/PageHeader';
import { Link } from 'react-router-dom';

function Register({ history }) {
  const welcomeTitle = 'Create Account';
  const welcomeText =
    'You can sign up with your email and password, or by using a social provider.';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const submitHandler = e => {
    e.preventDefault();
  };

  const forgotPasswordHandler = () => {
    alert('Forgot password is in development');
  };

  return (
    <>
      <PageHeader msg={welcomeText} title={welcomeText} />

      <section className="register-section py-3 mt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <div className="card p-4">
                <div className="card-header">
                  <button type="button" className="btn btn-block btn-danger">
                    Login using google
                  </button>
                  <button type="button" className="btn btn-block btn-warning">
                    Login with Twitter
                  </button>
                  <button type="button" className="btn btn-block btn-info">
                    Login with Facebook
                  </button>
                </div>
                <div className="card-body">
                  <h3 className="text-center">Sign up</h3>
                  <hr />

                  <form onSubmit={submitHandler}>
                    <div className="form-group">
                      <input
                        type="name"
                        className="form-control"
                        id="name"
                        name="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Full name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        required
                        minLength="8"
                        maxLength="128"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        id="password2"
                        name="password2"
                        value={password2}
                        onChange={e => setPassword2(e.target.value)}
                        required
                        minLength="8"
                        maxLength="128"
                        placeholder="Retype your password"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-block btn-outline-info"
                    >
                      sign up
                    </button>
                  </form>
                </div>
                <div className="card-footer">
                  <Link className="btn btn-link" to="/login">
                    Already have an account
                  </Link>
                  <button
                    onClick={forgotPasswordHandler}
                    type="button"
                    className="btn btn-link"
                  >
                    Forgot password?
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
