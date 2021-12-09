import React from 'react';
import footerImg from './img/logo (1).png';

function Footer() {
    return (
        <div className="footer d__flex align__items__center justify__content__space__between pz-10" style={{"padding":"10px 20px", "zIndex":"100"}}>
            <img src={footerImg} alt="" className="footer__img pointer" />
            <span className="copyright" style={{"color":"#0c0d0d", "fontSize":"14px"}}>Copyright © 2021 Developer John Alfred Manalang. All Rights Reserved.</span>
        </div>
    )
}

export default Footer
