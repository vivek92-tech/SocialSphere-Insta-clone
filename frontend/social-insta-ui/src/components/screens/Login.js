import React from 'react';
import {Link} from 'react-router-dom';

const Login  =()=>{
    return (
        <div className="mycard">
            <div className="card auth-card input-field">
                <h2>SocialSphere</h2>
                    <input type="text" placeholder="email" />                
                    <input type="text" placeholder="password" />
                    <button className="btn waves-effect waves-light #00b8d4 cyan accent-4" >
                        Login
                    </button>

                    <h5>
                        <Link to="/signup">
                            Don't have an account?
                        </Link>
                    </h5>    
            </div>
        </div>

    )
};

export default Login;