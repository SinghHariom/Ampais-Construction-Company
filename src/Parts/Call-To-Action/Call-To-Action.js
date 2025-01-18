import { Link } from 'react-router-dom';
// Css
import './Call-To-Action.css';

function CallToAction() {
  return (
    <div className='call-to-action'>
      <div className='container'>
        <section>
          <h2 className='title-lg subline'>building inspiring spaces</h2>
          <p className='content'>Write Us message to request a call back or for any query. We will respond as soon as we get your message. You can send us your query anytime.</p>
        </section>

        <div>
          <Link to='/get-quote' className='btn btn-primary btn-lg'>get a free quote</Link>
          <p className='sub-btn'>Only takes a few seconds!</p>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;