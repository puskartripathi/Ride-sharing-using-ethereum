import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoutes';
import {useMoralis} from 'react-moralis'


const Layout = ({ children, match, history }) => {
    const {logout}=useMoralis()
    const isActive = path => {
        if (match.path === path) {
            return { color: '#000' };
        } else {
            return { color: '#fff' };
        }
    };

    const nav = () => (
        <ul className="nav nav-tabs bg-primary">
            {/* <li className="nav-item">
                <PrivateRoute>
                <Link to="/" className="nav-link" style={isActive('/')}>
                    Home
                </Link>
                </PrivateRoute>
            </li> */}

                    <li className="nav-item">
                        <Link to="/login" className="nav-link" style={isActive('/signin')}>
                            Signin
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/register" className="nav-link" style={isActive('/signup')}>
                            Signup
                        </Link>
                    </li>


        
          
                <li className="nav-item">
                    <span onClick={()=>logout()}
                        className="nav-link"
                        style={{ cursor: 'pointer', color: '#fff' }} >
                        Signout
                    </span>
                </li>
         
        </ul>
    );

    return (
        <Fragment>
            {nav()}
            <div className="container">{children}</div>
        </Fragment>
    );
};

export default withRouter(Layout);