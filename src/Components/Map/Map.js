import { useState } from 'react';
// Css
import './Map.css';

function Map() {
  const [show , setShow] = useState();

  const clickHandler = () => setShow(true);

  return (
    <div className='parent-map'>
      <p>For privacy reasons Google Maps needs your permission to be loaded.</p>

      <button className='btn btn-primary' onClick={clickHandler}>{show ? 'loading...' : 'i accept'}</button>

      {show && <iframe className='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.4420336755433!2d78.1572408!3d26.2401178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c7002f534da5%3A0xb9bb3239bf3d89eb!2sBANSI%20VIHAR%20COLONY!5e0!3m2!1sen!2sin!4v1634206898575!5m2!1sen!2sin' title='map'></iframe>}
    </div>
  );
}

export default Map;