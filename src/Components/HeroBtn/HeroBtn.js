import { Link } from 'react-router-dom';
// Css
import './HeroBtn.css';

function HeroBtn() {
  return (
    <nav className='hero-btn'>
      <Link to='/Work' className='btn btn-lg btn-secondary'>explore recent work</Link>
      
      <Link to='/get-quote' className='btn btn-lg btn-primary'>Contact Us Now</Link>
    </nav>
  );
}

export default HeroBtn;