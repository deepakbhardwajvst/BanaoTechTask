import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedin, FaYoutube, FaRegArrowAltCircleRight } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
 const companyLinks = [
    { label: 'About Us', icon: FaRegArrowAltCircleRight, Link: 'about' },
    { label: 'Contact Us', icon: FaRegArrowAltCircleRight, Link: 'contact' },
    // Add more company links as needed
 ];



 const socialLinks = [
    { icon: FaTwitter, scale: 1.3 },
    { icon: FaFacebookF, scale: 1.3 },
    { icon: FaYoutube, size: 40, scale: 1.3 },
    { icon: FaLinkedin, scale: 1.3 },
 ];



 return (
    <div className="container-fluid bg-white text-black footer pt-5 mt-5">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h4 className="section-title ff-secondary text-start  fw-normal mb-4" style={{fontFamily:'DMM',color:'black',fontSize:18}}>
            Hobbycue
            </h4>
            {companyLinks.map((link, index) => (
              <a
              href={`/${link.Link}`}
                key={index}
                className="btn btn-link d-flex align-items-center  text-decoration-none"                
                style={{ color: '#6D747A', fontFamily: 'DMM' }}
              >
                {React.createElement(link.icon, { className: 'me-2' })}
                {link.label}
              </a>
            ))}
          </div>
          <div className="col-lg-3 col-md-6">
          <h4 className="section-title ff-secondary text-start  fw-normal mb-4" style={{fontFamily:'DMM',color:'black',fontSize:18}}>             How do I
            </h4>
            {companyLinks.map((link, index) => (
              <a
                key={index}
                className="btn btn-link d-flex align-items-center  text-decoration-none"                href={link.Link}
                style={{ color: '#6D747A', fontFamily: 'DMM', }}
              >
                {React.createElement(link.icon, { className: 'me-2' })}
                {link.label}
              </a>
            ))}
            
          </div>

          <div className="col-lg-3 col-md-6">
          <h4 className="section-title ff-secondary text-start  fw-normal mb-4" style={{fontFamily:'DMM',color:'black',fontSize:18}}>             Quick Links
            </h4>
            {companyLinks.map((link, index) => (
              <a
                key={index}
                className="btn btn-link d-flex align-items-center  text-decoration-none"
                href={link.Link}
                style={{ color: '#6D747A', fontFamily: 'DMM' }}
              >
                {React.createElement(link.icon, { className: 'me-2' })}
                {link.label}
              </a>
            ))}
            <div className="d-flex pt-2">
              
            </div>
          </div>
          
          <div className="col-lg-3 col-md-6">
          <h4 className="section-title ff-secondary text-start  fw-normal mb-4" style={{fontFamily:'DMM',color:'black',fontSize:18}}>
              Newsletter
            </h4>

            <div className="d-flex">
              {socialLinks.map((social, index) => (
                <a
                href="#home"
                 key={index}
                 className="btn btn-outline-dark btn-social text-decoration-none"
                 
                >
                 {React.createElement(social.icon, {
                    className: 'display-1',
                    style: { scale: social.scale, size: social.size, color: 'black' },
                 })}
                </a>
              ))}
            </div>
            <p style={{ fontFamily: 'DMM',paddingTop:'10px',textAlign:'left',color:'black',fontSize:18 }}>Invite Friends</p>
            <div
  className="position-relative mx-auto"
  style={{ 
    maxWidth: 400,
    fontFamily: 'DMM',
  }}
>
  <input
    className="form-control border-primary w-100 py-3 ps-4 pe-5"
    type="text"
    placeholder="Email Id"
    style={{ 
      fontFamily: 'DMM',
    }}
  />
  <button
    type="button"
    className="btn btn-primary btn-invite position-absolute top-0 end-0"
    style={{ 
      height: '100%',
      backgroundColor: '#8064A2',
      textTransform: 'none',
      fontFamily: 'DMM',
      color: 'white',
    }}
  >
    Invite
  </button>
</div>

          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0" style={{ fontFamily: 'DMM' }}>
              ©{' '}
              <a href="#home" className="border-bottom"  style={{ color: 'black', fontFamily: 'DMM' }}>
                HobbyCue
              </a>
              , All Right Reserved.
              <br />
              <br />
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <a href="#home" style={{ color: 'black', fontFamily: 'DMM' }}>Home</a>
                <a href="#home" style={{ color: 'black', fontFamily: 'DMM' }}>Cookies</a>
                <a href="#home" style={{ color: 'black', fontFamily: 'DMM' }}>Help</a>
                <a href="#home" style={{ color: 'black', fontFamily: 'DMM' }}>FQAs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 );
};

export default Footer;
