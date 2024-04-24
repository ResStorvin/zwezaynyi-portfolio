import React from "react";
import "./footer.css";

const Footer = () => {
  return (
      <footer className="footer">
          <div className="footer__container container">
              <h1 className="footer__title"> Zwe Zay Nyi </h1>
              <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link"> About </a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link"> Projects </a>
                </li>
                <li>
                    <a href="#testimonials" className="footer__link"> Testimonials </a>
                </li>
              </ul>

              <div className="footer__social">
                <a href="https://www.linkedin.com/in/zwe-zay-nyi-0a55032a1/" className="footer__social-link" target="_blank">
                    <i className="bx bxl-linkedin"></i>
                </a>
                  
                <a href="https://github.com/ResStorvin" className="footer__social-link" target="_blank">
                    <i className="bx bxl-github"></i>
                </a>  
                  
                <a href="https://www.facebook.com/zwezaynyiakacoady" className="footer__social-link" target="_blank">
                    <i className="bx bxl-facebook"></i>
                </a>

                  
              </div>
              <span className="footer__copy">
                  &#169; Crypticalcoder . All rights reserved.
              </span>
          </div>
    </footer>
  )
}
export default Footer