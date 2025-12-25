import { Link } from "react-router-dom";
import "../footer/footer.css";
import {
  GitHubIcon,
  LinkedInIcon,
  CreateIcon,
  Person2SharpIcon,
} from "../../assets";
const Footer = () => {
  return (
    <>
      <footer className='desk-footer'>
        <div className='footer-content'>
          <div className='footer-section about'>
            <h2 className='footer-heading'>About Us</h2>
            <p>
              AttireX is a fashion e-commerce website that provides high-quality
              products to our customers at affordable prices.
            </p>
          </div>
          <div className='footer-section contact'>
            <h2 className='footer-heading'>Content Us</h2>
            <ul className='contact-list'>
              <li>
                <i className='fas fa-map-marker-alt'></i>123 Main Street anytown
                India
              </li>
              <li>
                <i className='fas fa-phone'></i> (555-5555)
              </li>
              <li>
                <i className='fas fa-envelope'></i> info@ATTIREX.com
              </li>
            </ul>
          </div>
          <div className='footer-section links'>
            <h2 className='footer-heading'>Links</h2>
            <ul className='links-list'>
              <li>
                <Link className='/'>Home</Link>
              </li>
              <li>
                <Link to='/products'>Products</Link>
              </li>
              <li>
                <Link to='https://github.com/Sourabhpande532?tab=repositories'>
                  About Us
                </Link>
              </li>
              <li>
                <Link to='sourabhpande43@gmail.com'>Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className='footer-section social'>
            <h2 className='footer-heading'>Follow Us</h2>
            <ul className='social-list'>
              <li>
                <Link target='_blank' to='https://github.com/SourabhPande532'>
                  <GitHubIcon className='nav-icon' />
                </Link>
              </li>
              <li>
                <Link
                  target='_blank'
                  to='https://www.linkedin.com/in/sourabh-pande-412170224/'>
                  <LinkedInIcon className='nav-icon' />
                </Link>
              </li>
              <li>
                <Link
                  target='_blank'
                  to='https://saurabh532.hashnode.dev/?source=top_nav_blog_home'>
                  <CreateIcon className='nav-icon' />
                </Link>
              </li>
              <li>
                <Link target='_blank' to='https://saurabh-pande.netlify.app/'>
                  <Person2SharpIcon className='nav-icon' />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='desk-footer-bottom'>
          <p>&copy; 2025 Ecommerce Inc. All rights reserved by Sourabh Pande</p>
        </div>
      </footer>
    </>
  );
};
export { Footer };
