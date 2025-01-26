import React, { useState } from 'react';
import emailjs from 'emailjs-com';
// Css
import './Form.css';

function Form() {
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: '',
        subject: ''
    });

    const [valid, setValid] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        setValid(true);

        // Define your EmailJS service, template, and user ID
        const serviceID = 'service_8o2vaam';
        const templateID = 'template_jwqjw8o';
        const userID = 'Ys06itOWI8uoJegKO';

        const templateParams = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phoneNumber: data.phoneNumber,
            message: data.message,
            subject: data.subject,
        };

        emailjs.send(serviceID, templateID, templateParams, userID)
            .then(() => {
                setSuccessMessage('Email sent successfully!');
                setData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneNumber: '',
                    message: '',
                    subject: ''
                });
                setValid(false); // Reset the form validation
            })
            .catch(() => {
                setSuccessMessage('Failed to send email.');
            });
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
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
                    <label htmlFor='phone-number'>Phone Number</label>
                    <input
                        type='tel'
                        id='phone-number'
                        name="phoneNumber"
                        className='form-item'
                        value={data.phoneNumber}
                        onChange={(e) => {
                            const phone = e.target.value;
                            if (/^\d*$/.test(phone)) {
                                handleInputChange(e);
                            }
                        }}
                    />
                
                </div>

                <div className='form-group'>
                    <label htmlFor='subject'>subject</label>
                    <input
                        type='text'
                        id='subject'
                        name="subject"
                        className='form-item'
                        value={data.subject}
                        onChange={handleInputChange}
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor='message'>How can we help? <abbr title='required'>*</abbr></label>
                    <textarea
                        id='message'
                        name="message"
                        rows='5'
                        className={`form-item ${valid && 'check-valid'}`}
                        value={data.message}
                        required
                        onChange={handleInputChange}
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
