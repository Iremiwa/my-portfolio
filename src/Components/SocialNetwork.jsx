import React from 'react';
import "../Styles/SocialNetwork.css";
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

function SocialNetwork ()  {
    
    return(
        <React.Fragment>
            <div className="social-icons">
                <p><FaLinkedin className="icons" /></p>
                <p><FaGithub className="icons" /></p>
                <p><FaTwitter className="icons" /></p>
                <p><FaInstagram className="icons" /></p>
                
            </div>
        </React.Fragment>
    );

}

export default SocialNetwork;