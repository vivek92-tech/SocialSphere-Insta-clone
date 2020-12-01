import React from 'react';


const CreatePost = () => {
return(
        <div className="card auth-card input-field"
            style={{
                margin:"30px auto",
                maxWidth:"500px",
                padding:"20px",
                textAlign:"center"
            }}
        >
            <input type="text" placeholder="Title"/>
            <input type="text" placeholder="Body"/>
            <div className="file-field input-field">
                <div className="btn #00b8d4 cyan accent-4">
                    <span>Upload Image</span>
                    <input type="file"/>
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text"/>
                </div>
            </div>
            <button className="btn waves-effect waves-light #00b8d4 cyan accent-4" >
                        Submit Post
            </button>

        </div>
    )
}; 

export default CreatePost;