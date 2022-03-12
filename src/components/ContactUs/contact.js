import { useState } from 'react';
import classes from './contact.module.css';

//useState return 2 things in an array, 1st is variable and other is function. 

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [message, setMessage] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(name);
        setName('');
        setEmail('');
        setCountry('');
        setMessage('');
    }
    
    const nameHandler = (e) => {
        setName(e.target.value);
    }

    const emailHandler = (e) => {
        setEmail(e.target.value);
    }

    const countryHandler = (e) => {
        setCountry(e.target.value);
    }

    const messageHandler = (e) => {
        setMessage(e.target.value);
    }

    return (
        <div className={classes.form}>
            <h1>Contact Me 😄</h1>
            <form onSubmit={submitHandler}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={name} onChange={nameHandler} placeholder="Enter Your Name" required />
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" value={email} onChange={emailHandler} placeholder="Email: example@email.com" required />
                <label htmlFor="country">Country</label>
                <select id="country" onChange={countryHandler} name="country" required defaultValue="">
                    <option value="" disabled>--Select--</option>
                    <option value="india">India</option>
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                    <option value="usa">USA</option>
                </select>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" value={message} onChange={messageHandler} required placeholder="Enter Message" style={{ height: '200px', width: '100%' }} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Contact;