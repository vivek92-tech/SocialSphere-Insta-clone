import React from 'react';


const Home  =()=>{
    return (
        <div className="home">
            <div className="card home-card">
                    <h5>Saoirse</h5>
                    <div className="card-image">
                        <img src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" 
                        alt={"User Profile"}
                        />
                    </div>
            </div>
            <div className="card-content">
                <i className="material-icons" style={{color:"red"}}>favorite</i>
                <h6>San Francisco travel diary</h6>
                <p>Golden Date Bridge</p>
                <input type="text" placeholder="add a comment" />
            </div>

            <div className="card home-card">
                    <h5>Sam</h5>
                    <div className="card-image">
                        <img src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" 
                        alt={"User Profile"}
                        />
                    </div>
            </div>
            <div className="card-content">
            <i className="material-icons" style={{color:"red"}}>favorite</i>
                <h6>My Dog</h6>
                <p>Say hello to Milo!!!</p>
                <input type="text" placeholder="add a comment" />
            </div>

            <div className="card home-card">
                    <h5>David</h5>
                    <div className="card-image">
                        <img src="https://images.unsplash.com/photo-1547570456-0e4070952418?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" 
                        alt={"User Profile"}
                        />
                    </div>
            </div>
            <div className="card-content">
            <i className="material-icons" style={{color:""}}>favorite_border</i>
                <h6>Driving</h6>
                <p>My car during winter times</p>
                <input type="text" placeholder="add a comment" />
            </div>

        </div>

    )
};

export default Home;