import {useState} from 'react';
import PageHeader from '../layouts/PageHeader'

function Register({history}) {
    const welcomeTitle = "Create Account";
    const welcomeText = "You can sign up with your email and password, or by using a social provider.";

    const [nae, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const submitHandler = e => {
        e.preventDefault();
    }

    return(
        <>
        <PageHeader msg={welcomeText} title={welomeTitle} />

        <section className="register-section py-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        social providers go here
                    </div>

                    <div className="col-md-8">
                        <div className="card p-4">
                            <div className="card-body">
                                <h3 className="text-center">
                                    Sign up
                                </h3>
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
                                            required
                                            minLength="2"
                                            maxLength="60"
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
                                            value={assword}
                                            onChange={e => setPassword(e.target.value)}
                                            required
                                            minLength="8"
                                            maxLength="128"
                                            placeholder="Password"
                                        />
                                    </div>
                                    <div className="form-group">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password2"
                                        name="password2"
                                        value={assword2}
                                        onChange={e => setPassword2(e.target.value)}
                                        required
                                        minLength="8"
                                        maxLength="128"
                                        placeholder="Retype your password"
                                    />
                            </div>
                                    <button type="submit" className="btn btn-block btn-outline-info">
                                        sign up
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}


export default Register;
