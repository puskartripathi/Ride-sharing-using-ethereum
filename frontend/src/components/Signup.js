import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useMoralis } from 'react-moralis';

import Layout from './Layout';

const Signup = () => {



    const {signup,authenticate,isAuthenticated,authError}=useMoralis()
    const [values, setValues] = useState({
        email: '',
        password: '',
        Roles:'',
        buttonText: 'Submit'
    });

    const { email, password,Roles, buttonText } = values;

    const handleChange = name => event => {
        // console.log(event.target.value);
        setValues({ ...values, [name]: event.target.value });
    };

   

    const clickSubmit = event => {
        event.preventDefault();
        console.log(Roles)
        signup(email,password,email,{Roles:Roles})
        setValues({email:'',password:'',Roles:'', buttonText: 'Submit'})
    };

    const signupForm = () => (
        <form>
            {authError &&(
              <div class="alert alert-primary" role="alert">
              {authError.message}
            </div>
            )}
            <div className="form-group mt-30">
                <label className="text-muted">Email</label>
                <input onChange={handleChange('email')} value={email} type="email" className="form-control" />
            </div>
            
            <div className="form-group">
                <label className="text-muted">Roles</label>
                <input onChange={handleChange('Roles')} value={Roles} type="Roles" className="form-control" />
            </div>
           

            <div className="form-group">
                <label className="text-muted">Password</label>
                <input onChange={handleChange('password')} value={password} type="password" className="form-control" />
            </div>
           
            <div>
                <button className="btn btn-primary" onClick={clickSubmit}>
                    {buttonText}
                </button>
            </div>
        </form>
    );

    return (
        <Layout>
            <div className="col-md-6 offset-md-3 mt-20">
                {signupForm()}
                <br />
                <Link to="/auth/password/forgot" className="btn btn-sm btn-outline-danger">
                    Forgot Password
                </Link>
            </div>
        </Layout>
    );
};

export default Signup;
