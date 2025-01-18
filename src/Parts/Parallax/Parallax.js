// Components
import HedSection from '../../Components/HedSection/HedSection';
//import Slider from '../../Parts/Slider/Slider';
// Css
import './Parallax.css';

function Parallax() {
  return (
    <div className='parallax parent-semicircular'>
      {/* semicircular */}
      <div className='semicircular'></div>

      <div className='container container-sm'>
        <HedSection title='our home owners say'/>
       
      </div>
    </div>
  );
}

export default Parallax;