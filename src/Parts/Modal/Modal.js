import { useState } from 'react';
// Images
import Project01 from '../../Assets/Images/basket court jaipur.jpg';
import Project02 from '../../Assets/Images/Cinder track 400 rm gwalior.jpg';
import Project03 from '../../Assets/Images/DPS school development work ujjain.jpg';
import Project04 from '../../Assets/Images/CricketGround.jpeg';
import './Modal.css';

const data = [
  Project01,
  Project02,
  Project03,
  Project04,
];

function Modal(props) {
  const {event,image,alt} = props;

  const [show , setShow] = useState();
  const [full , setFull] = useState();

  let tabTarget;
  if (image.includes('Project')) {
    tabTarget = data.filter(item => item.includes('Project'))
  } else if (image.includes('Blog-Post')) {
    tabTarget = data.filter(item => item.includes('Blog-Post'))
  }

  const [target , setTarget] = useState(tabTarget.indexOf(image));

  const next = () => {
    clickHandler();
    setTarget(prevState => prevState === tabTarget.length - 1 ? 0 : prevState + 1);
  };
  
  const prev = () => {
    clickHandler();
    setTarget(prevState => prevState === 0 ? tabTarget.length - 1 : prevState - 1);
  };

  const fullScreen = () => {
    full ? setFull(false) : setFull(true);
  };

  const clickHandler = () => {
    setShow(true);

    setTimeout(()=>{
      setShow(false);
    },300);
  };

  return (
    <div className='modal'>
      {/* btn */}
      <button className='shadow-btn btn-close icon-close' onClick={event}></button>
      <button className='shadow-btn btn-left icon-left' onClick={prev}></button>
      <button className='shadow-btn btn-right icon-right' onClick={next}></button>

      {/* image */}
      <div className={`modal-img ${full ? 'full' : ''}`}>
        <img src={tabTarget[target]} alt={alt} className={show ? 'show-img' : ''} onClick={fullScreen}/>
      </div>

      <div className='tab'>
        {tabTarget.map((item , index) => {
          return(
            <div className='tab-item' key={index} onClick={clickHandler}>
              <img src={item} alt='' onClick={() => {setTarget(index)}}/>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Modal;