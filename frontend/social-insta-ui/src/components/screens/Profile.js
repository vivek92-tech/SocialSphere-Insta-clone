import React from 'react';


const Profile  =()=>{
    return (
       <div style={{ maxWidth:"1050px", margin:"0px auto"}}>
            <div style={{
                display:"flex",
                justifycontent:"space-around",
                margin:"18px 0px",
                borderBottom:"1px solid grey"                    
            }}>    
                <div>
                        <img style={{width:"160px",height:"160px",borderRadius:"80px"}}
                        src="https://media4.s-nbcnews.com/j/newscms/2020_06/1537327/saoirse-ronan-oscars-2020-hair-style-today-main-200209_7cb4a351a8cdc82305780b21b9f951c8.fit-1240w.jpg"
                        alt={"User Profile"}
                        />
                </div>
                <div style={{ margin:"30px 120px" }}>
                        <h4>Saoirse Ronan</h4>
                        <div style={{
                            display:"flex",
                            justifyContent:"space-between",
                            width: "108%"
                        }}>
                                <h6>140 posts</h6>
                                <h6>2.3M followers</h6>
                                <h6>1089 following</h6>
                        </div>
                </div>
            </div>    
       
       
            <div className="gallery">
                    <img className="item" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Saoirse_Ronan_at_BAFTA_2016_%281%29_%28cropped%29.jpg/1200px-Saoirse_Ronan_at_BAFTA_2016_%281%29_%28cropped%29.jpg"
                                alt={"User Profile"}
                                />   
                    <img className="item" src="https://www.biography.com/.image/t_share/MTE5NTU2MzE2MDUxNzAzMzA3/saoirse-ronan-267546-1-402.jpg"
                        alt={"User Profile"}
                        />
                    <img className="item" src="https://i.insider.com/5e3b248d15b5e311190ead05?width=1100&format=jpeg&auto=webp"
                        alt={"User Profile"}
                        />  
                    <img className="item" src="https://assets.vogue.com/photos/5b44f382ca34920c328ecaf1/4:3/w_2400,h_1800,c_limit/10-saoirse-ronan-vogue-cover-august-2018.jpg"
                        alt={"User Profile"}
                        /> 
                    <img className="item" src="https://images.thestar.com/tBFg9EL7KoRO-7GOzsseb2Ab_NU=/1280x1024/smart/filters:cb(1511182568828)/https://www.thestar.com/content/dam/thestar/entertainment/movies/2015/11/19/5-questions-for-brooklyns-saoirse-ronan/saoirse-ronan-portrait.jpg"
                        alt={"User Profile"}
                        />
                    <img className="item" src="https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/methode/2020/01/24/1c535fd0-3d00-11ea-a16e-39b824591591_image_hires_142532.jpg?itok=aJiQOUZ2&v=1579847137"
                        alt={"User Profile"}
                        />                

            </div>
       </div>

    )
};

export default Profile;