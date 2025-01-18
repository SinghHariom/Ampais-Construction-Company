// Components
import Form from '../../Components/Form/Form';
// Css
import './Call-To-Action-Form.css';

function CallToActionForm() {
  return (
    <div className='call-to-action-form'>
      <div className='container'>
        <section className='parent-form'>
          <h2 className='title-md'>get a quote today</h2>
          
          <p>Write Us message to request a call back or for any query. We will respond as soon as we get your message. You can send us your query anytime.</p>

          <Form/>
        </section>
      </div>
    </div>
  );
}

export default CallToActionForm;