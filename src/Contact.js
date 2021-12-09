import React from 'react';
import './Contact.css';
// import contactImg from './img/image-name.jpg';

function Contact() {
    return (
        <div className ="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Contact me.</h1>
                            <p className="hire__text">I am available for a full-time position.</p>
                            <p className="hire__text"><strong>(+63) 915-671-5043</strong> or email me @ <strong>johnalfred.manalang@gmail.com</strong></p>
                        </div>
                        {/* <div className="input__box">
                            <input type="text" className="contact email" placeholder="Your Email" />
                            <input type="text" className="contact name" placeholder="Your Full Name" />
                            <input type="text" className="contact subject" placeholder="Write a Subject" />
                            <textarea name="message" id="message" placeholder="Your message here!"></textarea>
                            <button className="btn contact pointer" type="submit">Submit</button>
                        </div> */}
                    </div>
                </div>

                {/* <div className="col__2">
                    <img src={contactImg} alt="" className="contact__img" />
                </div> */}
            </div>
        </div>
    )
}

export default Contact
