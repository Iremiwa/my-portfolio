import React from 'react';
import "../Styles/Contact.css";

function Contact ()  {
    
    return(
        <React.Fragment>
            <div className="contact-section">

                <h3>Send Me A Message</h3>
                <form className="contact-form">
                <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
            
        </React.Fragment>
    );

}

export default Contact;