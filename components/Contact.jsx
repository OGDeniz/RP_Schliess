import React from 'react';

import { useState } from 'react';
import homestyles from '@/styles/home.module.css';
import Image from 'next/image';



const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', { name, email, message });
    };

    return (
        <div className={homestyles.container}>
        <div className={homestyles.aboutUs}>
        <section className={homestyles.aboutUsHeader}>
        <section className={homestyles.aboutUs}>

        <h2>
        Kontaktieren Sie uns
        </h2>
        <form onSubmit={handleSubmit}>
            <div className='mb-2'>
                <label htmlFor="name">Name:</label>
                <br/>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className='mb-2'>
                <label htmlFor="email">Email:</label>
                <br/>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className='mb-2'>
            <br/>
                <label htmlFor="message">Message:</label>
                <br/>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
        </section>
        </section>
        </div>
        <section className={homestyles.ContactUs}>
        <Image src="/bilder/Contact-Us.jpg" alt="Contact" width={750} height={450} />
        </section>
        </div>

    );
};
export default Contact;