import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/footer_logo.svg'
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="" />
          <p>Iam a fronted developer from, KOLKATA with 10 year of exprience in companis like Micosoft, Tesla and also Apple. </p>

        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder='Enter your email' />

          </div>
          .
        </div>
      </div>
    </div>
  )
}

export default Footer