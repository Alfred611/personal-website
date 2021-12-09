import React from 'react';
import './Project.css';
import Project3 from './img/Minigram.jpg';
import Project4 from './img/tshirt1.jpg';
import Project5 from './img/tshirt2.jpg';
import Project6 from './img/denama.png';
import Project7 from './img/parrot.png';
import Project8 from './img/athleap.png';

function Project() {
    return (
        <div className="project component__space" id="Projects">

            <div className="heading">
                <h1 className="heading">Projects</h1>
                <p className="heading p__color">A collection of my personal projects, commission works and graphic design</p>
            </div>
            <div className="container">
                <div className="row">

                <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project3} alt="" className="project__img"/>
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Minigram Application</h5>
                                <h4 className="project__text">A personal website project</h4>
                                <a href="https://minigram-app.netlify.app/" target="_blank"><button className="project__btn">Check</button></a> 
                            </div>
                        </div>
                    </div>
                    


                    <div className="col__3">
                        <div className="project__box relative">
                            <div className="project__box__img relative">
                                <div className="project__img__box">
                                    <img src={Project4} alt="" className="project__img"/>
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">T-shirt Design</h5>
                                <h4 className="project__text">Commission work</h4>
                                {/* <a href="#" className="project__btn">Details</a> */}
                            </div>
                        </div>
                    </div>


                    <div className="col__3">
                        <div className="project__box relative">
                            <div className="project__box__img relative">
                                <div className="project__img__box">
                                    <img src={Project5} alt="" className="project__img"/>
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">T-shirt Designt</h5>
                                <h4 className="project__text">Commission work</h4>
                                {/* <a href="#" className="project__btn">Details</a> */}
                            </div>
                        </div>
                    </div>


                    <div className="col__3">
                        <div className="project__box relative">
                            <div className="project__box__img relative">
                                <div className="project__img__box">
                                    <img src={Project6} alt="" className="project__img"/>
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Logo Mockup</h5>
                                <h4 className="project__text">Digital logo and business card</h4>
                                {/* <a href="#" className="project__btn">Details</a> */}
                            </div>
                        </div>
                    </div>



                    <div className="col__3">
                        <div className="project__box relative">
                            <div className="project__box__img relative">
                                <div className="project__img__box">
                                    <img src={Project7} alt="" className="project__img"/>
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Custom logo</h5>
                                <h4 className="project__text">Parrot roundel logo</h4>
                                {/* <a href="#" className="project__btn">Details</a> */}
                            </div>
                        </div>
                    </div>


                    <div className="col__3">
                        <div className="project__box relative">
                            <div className="project__box__img relative">
                                <div className="project__img__box">
                                    <img src={Project8} alt="" className="project__img"/>
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Thesis logo</h5>
                                <h4 className="project__text">Architectural Sports development logo</h4>
                                {/* <a href="#" className="project__btn">Details</a> */}
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Project
