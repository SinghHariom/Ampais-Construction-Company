import { useState } from 'react';
// Css
import './Form.css';

function Form() {
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        massage: '',
        subject: ''
    });

    const [valid, setValid] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        setValid(true);

        // Simulate form submission and display success message
        setTimeout(() => {
            setSuccessMessage('Form submitted successfully! If You want immediate response please call!');
            setData({
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                massage: '',
                subject: ''
            });
            setValid(false); // Reset the form validation
        }, 500); // Simulate a delay for form submission
    };

    return (
        <div>
            <form action='undefined' method='post' onSubmit={submitHandler}>
                <div className='form-group'>
                    <label htmlFor='first-name'>first name <abbr title='required'>*</abbr></label>
                    <input
                        type='text'
                        id='first-name'
                        className={`form-item ${valid && 'check-valid'}`}
                        value={data.firstName}
                        required
                        onChange={e => setData({ ...data, firstName: e.target.value.trim().toLowerCase() })}
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor='last-name'>last name</label>
                    <input
                        type='text'
                        id='last-name'
                        className='form-item'
                        value={data.lastName}
                        onChange={e => setData({ ...data, lastName: e.target.value.trim().toLowerCase() })}
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor='email'>email address <abbr title='required'>*</abbr></label>
                    <input
                        type='email'
                        id='email'
                        className={`form-item ${valid && 'check-valid'}`}
                        value={data.email}
                        required
                        onChange={e => setData({ ...data, email: e.target.value.trim().toLowerCase() })}
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor='phone-number'>phone number</label>
                    <input
                        type='tel'
                        id='phone-number'
                        className='form-item'
                        value={data.phoneNumber}
                        onChange={e => setData({ ...data, phoneNumber: e.target.value.trim().toLowerCase() })}
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor='subject'>subject</label>
                    <input
                        type='text'
                        id='subject'
                        className='form-item'
                        value={data.subject}
                        onChange={e => setData({ ...data, subject: e.target.value.trim().toLowerCase() })}
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor='massage'>how can we help? <abbr title='required'>*</abbr></label>
                    <textarea
                        id='massage'
                        rows='5'
                        className={`form-item ${valid && 'check-valid'}`}
                        value={data.massage}
                        required
                        onChange={e => setData({ ...data, massage: e.target.value.trim().toLowerCase() })}
                    ></textarea>
                </div>

                <input
                    type='submit'
                    className='btn btn-primary'
                    value='get free quote'
                />
            </form>
            {successMessage && <p>{successMessage}</p>}
        </div>
    );
}

export default Form;
