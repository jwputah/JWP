import React, { useState } from 'react';
import '../../assets/css/contact.css';

// Here we import a helper function that will check if the email is valid
import { checkPassword, validateEmail } from '../../utils/helpers';

const contactBg = require("../../../src/assets/images/airplane.gif");
const divStyle = {
    width: '100%',
    height: '1000px',
    backgroundImage: `url(${contactBg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
};

function Form() {
    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, we set the state of either email, username, and password
        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'userName') {
            setUserName(inputValue);
        } else {
            setPassword(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
        if (!validateEmail(email) || !userName) {
            setErrorMessage('Email or username is invalid');
            // We want to exit out of this code block if something is wrong so that the user can correct it
            return;
            // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
        }
        if (!checkPassword(password)) {
            setErrorMessage(
                `Choose a more secure password for the account: ${userName}`
            );
            return;
        }
        alert(`Hello ${userName}`);

        // If everything goes according to plan, we want to clear out the input after a successful registration.
        setUserName('');
        setPassword('');
        setEmail('');
    };

    return (
        <div style={divStyle}>
            <div className='Contact'>
                <form className="form">
                    <p className="text">Hello {userName}. Please fill out form and submit. Thank You!</p>
                    <input
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        type="email"
                        placeholder="email"
                    />
                    <input
                        value={userName}
                        name="userName"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="username"
                    />
                    <input
                        value={password}
                        name="password"
                        onChange={handleInputChange}
                        type="password"
                        placeholder="Password"
                    />
                    <div className='button'>
                        <button type="button" onClick={handleFormSubmit}>Submit</button>
                    </div>
                </form>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
            </div>
        </div>

    );
}

export default Form;