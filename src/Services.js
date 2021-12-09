import React from 'react'
import './Services.css'

function Services() {
    return (
        <div className="services component__space" id="Skills">
            <div className="heading">
                <h1 className="heading__Here">Skills</h1>
            </div>
            <div className="container">
                <div className="row">


                    <div className="col__3">
                        <div className="service__box pointer">
                            <div className="icon">
                            <img src="https://img.icons8.com/external-prettycons-flat-prettycons/47/000000/external-css-web-seo-prettycons-flat-prettycons.png"/>
                            </div>
                            <div className="service__meta">
                                    <h1 className="service__text">Front End</h1>
                                    <p className="p service__text p__color">
                                        Web layouting using Git, HTML, CSS, Bootstrap 4 and GitHub
                                    </p>
                            </div>
                        </div>
                    </div>


                    <div className="col__3">
                        <div className="service__box pointer">
                            <div className="icon">
                            <img src="https://img.icons8.com/ios/50/000000/js.png"/>
                            </div>
                            <div className="service__meta">
                                    <h1 className="service__text">Back End</h1>
                                    <p className="p service__text p__color">
                                        Create data using JavaScript, MongoDB, Postman and Heroku
                                    </p>
                            </div>
                        </div>
                    </div>

                    <div className="col__3">
                        <div className="service__box pointer">
                            <div className="icon">
                            <img src="https://img.icons8.com/external-prettycons-flat-prettycons/47/000000/external-coding-web-seo-prettycons-flat-prettycons-3.png"/>
                            </div>
                            <div className="service__meta">
                                    <h1 className="service__text">Full Stack</h1>
                                    <p className="p service__text p__color">
                                        MERN Stack - MongoDB, Express, React and Node
                                    </p>
                            </div>
                        </div>
                    </div>



                    <div className="col__3">
                        <div className="service__box pointer">
                            <div className="icon">
                            <img src="https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/60/000000/external-tools-online-learning-vitaliy-gorbachev-blue-vitaly-gorbachev.png"/>
                            </div>
                            <div className="service__meta">
                                    <h1 className="service__text">Other Tools</h1>
                                    <p className="p service__text p__color">
                                        GitLab, Robo3T, Sublime Text, VS Code and Vercel
                                    </p>
                            </div>
                        </div>
                    </div>



                    <div className="col__3">
                        <div className="service__box pointer">
                            <div className="icon">
                            <img src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/000000/external-design-advertising-flatart-icons-flat-flatarticons-2.png"/>
                            </div>
                            <div className="service__meta">
                                    <h1 className="service__text">Graphic Design</h1>
                                    <p className="p service__text p__color">
                                        Logo making, mock ups, traditional and digital design
                                    </p>
                            </div>
                        </div>
                    </div>
                    

                </div>
            </div>
        </div>
    )
}

export default Services;
