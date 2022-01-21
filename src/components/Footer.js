import FacebookIcon from '../images/icon-facebook.svg';
import TwitterIcon from '../images/icon-twitter.svg';
import PinterestIcon from '../images/icon-pinterest.svg';
import InstagramIcon from '../images/icon-instagram.svg';

const Footer = ({ Logo }) => {
  return (
    <footer className='footer'>
      <img className='logo' src={Logo} alt='' />

      <div className='footer__icons'>
        <img className='footer__icon' src={FacebookIcon} alt='' />
        <img className='footer__icon' src={TwitterIcon} alt='' />
        <img className='footer__icon' src={PinterestIcon} alt='' />
        <img className='footer__icon' src={InstagramIcon} alt='' />
      </div>
    
      <ul id='footer-ul' className='footer__ul'>
        <li><a href='#footer-ul'>About</a></li>
        <li><a href='#footer-ul'>Careers</a></li>
        <li><a href='#footer-ul'>Events</a></li>
        <li><a href='#footer-ul'>Products</a></li>
        <li><a href='#footer-ul'>Support</a></li>
      </ul>
      <p className='copyrights'>© 2021 Loopstudios. All rights reserved.</p>
    </footer>
  )
}

export default Footer
