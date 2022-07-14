import React, { useState } from 'react';
import emailjs from 'emailjs-com'
import '../../assets/css/contact.css';

const contactBg = require("../../../src/assets/images/airplane.gif");
const divStyle = {
    width: '100%',
    height: '1000px',
    backgroundImage: `url(${contactBg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
};

const Form = () => {
    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string
    const [email, setEmail] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const submit = () => {
        if (name && email && message) {
            const serviceId = 'service_9vs54i5';
            const templateId = 'template_1jai5td';
            const userId = 'bCT8fHVLV25d9PuvY';
            const templateParams = {
                name,
                email,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));

            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }

        // const handleInputChange = (e) => {
        //     // Getting the value and name of the input which triggered the change
        //     const { target } = e;
        //     const inputType = target.name;
        //     const inputValue = target.value;

        //     // Based on the input type, we set the state of either email, username, and password
        //     if (inputType === 'email') {
        //         setEmail(inputValue);
        //     } else if (inputType === 'name') {
        //         setName(inputValue);
        //     } else {
        //         setMessage(inputValue);
        //     }
    };

    // const handleFormSubmit = (e) => {
    //     // Preventing the default behavior of the form submit (which is to refresh the page)
    //     e.preventDefault();

    //     // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    //     if (!validateEmail(email) || !name) {
    //         setErrorMessage('Email or username is invalid');
    //         // We want to exit out of this code block if something is wrong so that the user can correct it
    //         return;
    //         // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    //     }
    //     if (!checkPassword(password)) {
    //         setErrorMessage(
    //             `Choose a more secure password for the account: ${name}`
    //         );
    //         return;
    //     }
    //     alert(`Hello ${userName}`);

    //     // If everything goes according to plan, we want to clear out the input after a successful registration.
    //     setUserName('');
    //     setPassword('');
    //     setEmail('');
    // };

    return (
        <div style={divStyle}>
            <div className='Contact'>
                {emailSent ? (
                    <span>Thank you for your email, I will be in touch as soon as possible!</span>
                ) : (
                    <form className="form">
                    <p className="text">Hello. Please fill out form and submit. Thank You!</p>
                    <input
                        value={email}
                        name="email"
                        onChange={e => setEmail(e.target.value)}
                        type="email"
                        placeholder="Email"
                    />
                    <input
                        value={name}
                        name="name"
                        onChange={e => setName(e.target.value)}
                        type="text"
                        placeholder="Name"
                    />
                    <textarea
                        value={message}
                        name="message"
                        onChange={e => setMessage(e.target.value)}
                        type="text"
                        placeholder="Message"
                    />
                    <div className='button'>
                        <button type="button" onClick={submit}>Send Email!</button>
                    </div>
                </form>
                )}
            </div>
        </div>
    );
}

export default Form;
