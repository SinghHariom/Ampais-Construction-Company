import { Link } from 'react-router-dom';
// Images
import FooterLogo from '../../Assets/Images/AmpaisLogoFooter.png';
import Map from '../../Components/Map/Map';
import SocialMedia from '../../Parts/Social-Media/Social-Media';
import ScrollUp from '../../Parts/Scroll-Up/Scroll-Up';
import './Footer.css';

// Fake Server
const data = [
  {
    id: 1,
    url: `https://www.facebook.com/ampaisconstruction/`,
    tooltip: 'facebook',
    icon: 'icon-facebook'
  },

  {
    id: 2,
    url: `https://wa.me/${+919340524985}`,
    tooltip: 'whatsapp',
    icon: 'icon-whatsapp',

  },

  {
    id: 3,
    url: `https://youtube.com/@ampaisconstruction`,
    tooltip: 'youtube',
    icon: 'icon-youtube'
  },

  {
    id: 4,
    url: `https://www.linkedin.com/in/sakeel-khan-636365246/?originalSubdomain=in`,
    tooltip: 'Linked In',
    icon: 'icon-linkedin'
  },
];

function Footer() {
  return (
    <footer className='footer'>
      <div className='container container-lg parent-items'>
        {/* item 01 */}
        <div className='footer-item footer-font'>
          <Link to='/' className='footer-logo'>
            <img src={FooterLogo} alt='footer logo' title='footer logo'/>
          </Link>

          <p>We are specialists in the construction of unique and exclusive properties. Our work inspires. We pride ourselves on delivering outstanding quality and design for leading clients across the country.</p>

          <Link to='/About' className='btn btn-primary'>learn more</Link>
        </div>

        {/* item 02 */}
        <section className='footer-item footer-font'>
          <h3 className='title-sm'>contact us today</h3>

          <ul className='list'>
            <li className='list-item'>
              <i className='list-icon icon-globe'></i>
              <p>corporate location<br/>House No. 13, 118<br/> Bansi Vihar, Sagartal
              <br/>Gwalior Madhya Pradesh - 474008</p>                         
            </li>

            <li className='list-item'>
              <i className='list-icon icon-phone'></i>
              <p>
                <a href='tel:+919340524985' className='text-link'>9340524985</a> / <a href='tel:+917697586499' className='text-link'>7697586499</a>
              </p>
            </li>

            <li className='list-item'>
              <i className='list-icon icon-phone'></i>
              <a href='mailto:mailto:ampaisconstruction@gmail.com' className='text-link'>ampaisconstruction@gmail.com </a>
            </li>

            <li className='list-item'>
              <i className='list-icon icon-clock'></i>
              <p>monday - friday: 9:00 AM - 6:00 PM</p>
            </li>

            <li className='list-item'>
              <i className='list-icon icon-clock'></i>
              <p>saturday - sunday: 9:00 AM - 12:00 PM</p>
            </li>
          </ul>
        </section>

        {/* item 03 */}
        <section className='footer-item'>
          <h3 className='title-sm'>our location</h3>

          <Map/>
        </section>
      </div>

      {/* footer nav */}
      <nav className='footer-nav footer-font'>
        <div className='container container-lg'>
          <p>&copy;copyright 2012 - 2026 | Ampais theme by <a href='https://ampaisconstruction.com/about-us/' className='text-link'>themefusion</a> | all rights reserved  </p>
          <div className='social-media'>
            {data.map(item => {
              const {id,url,tooltip,icon} = item;

              return (
                <div key={id}>
                  <SocialMedia url={url} className='social-media-icon' tooltip={tooltip} icon={icon}/>
                </div>
              );
            })}
          </div>
        </div>
      </nav>

      {/* scroll up page */}
      <ScrollUp/>
    </footer>
  );
}

export default Footer;