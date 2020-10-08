import React from 'react';
import {Link} from 'react-router-dom';
import './imageview.css';

const Imageview = () => {
    return(
        <React.Fragment>
            <div>
                <div className="information_container">  
                    <div className="image1 img-responsive "> 
                    <Link className="rectangle image_gallery" >Click to see Image Gallery</Link>
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    )
}
   
export default Imageview;