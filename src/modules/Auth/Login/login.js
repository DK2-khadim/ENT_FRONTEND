import React, { Component } from 'react';
import './../../../assets/css/login.css';
import teaching from './../../../assets/img/teaching.svg';
import logo from './../../../assets/img/logo.png';
import { Link } from 'react-router-dom';

class Login extends Component {

    state = {
        email:'',
        password: ''
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
    
        const { email, password} = this.state;

        return(
            <div className="container-fluid">
                <div className="row no-gutter">
                    <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image">
                        <img src={teaching} className="img-fluid" />
                    </div>
                    <div className="col-md-8 col-lg-6">
                    <div className="login d-flex align-items-center py-5">
                        <div className="container">
                        <div className="row">
                            <div className="col-md-9 col-lg-8 mx-auto">
                            <img src={logo} className="img-fluid mb-3"  />
                            <form onSubmit={this.onSubmit}>
                                <div className="form-label-group">
                                    <input 
                                    type="email" 
                                    id="inputEmail" 
                                    className="form-control" 
                                    name="email" placeholder="Email address"
                                    value={email}
                                    required onChange={this.onChange} />
                                    <label for="inputEmail">Email address</label>
                                </div>

                                <div className="form-label-group">
                                    <input type="password"
                                     id="inputPassword" 
                                     name="password" 
                                     className="form-control" placeholder="Password" 
                                     value={password}
                                     required onChange={this.onChange} />
                                    <label for="inputPassword">Password</label>
                                </div>

                                <div className="custom-control custom-checkbox mb-3">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label" for="customCheck1">Remember password</label>
                                </div>
                                <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">Sign in</button>
                                <div className="text-center">
                                <Link className="small" to="">Forgot password?</Link></div>
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login