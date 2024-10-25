"use client"

import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import style from "@/app/contact/style.module.css";
import TextField from '@mui/material/TextField';

function Contact() {
    useEffect(() => {
        document.title = "Contact me"
    }, [])

    const [user, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');

    
    const handleSubmit = (e: any) => {
        e.preventDefault(); 
        alert("Name: " + user + "\nEmail: " + email + "\nMessage: " + msg);
        setUserName("");
        setEmail("");
        setMsg("");
      };

    return (

        <Container maxWidth="lg">
            <section className={style.contact}>
                <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
                    <Grid item lg={8} md={8} xs={12}>
                        <div className={`${style.rightSideContent}  bg-theme`}>
                            <h3 className="heading">Let's Get in Touch</h3>
                            <p>Thank you for your interest in getting in touch with me. I welcome your feedback,
                                questions, and suggestions.
                                If you have a specific question or comment, please feel free to&nbsp;
                                <a target="_blank" href="https://www.linkedin.com/in/jan-ali-kazmi"
                                    rel="noopener noreferrer">
                                    Email
                                </a>  me
                                . I make an effort to respond to all messages within 24 hours,
                                although it may take me longer during busy periods. Alternatively, you can use the
                                contact form on my website to get in touch.
                                Simply fill out the required fields and I'll get back to you as soon as possible.
                                Finally, if you prefer to connect on social media,
                                you can find me on&nbsp;
                                <a target="_blank" href="https://www.linkedin.com/in/jan-ali-kazmi"
                                    rel="noopener noreferrer">
                                    LinkedIn
                                </a>
                                .
                                {/* I post regular updates and engage with my followers there, so don't hesitate to reach
                                out.  */}
                                Thanks again for your interest, and I look forward to hearing from you! </p>
                        </div>
                    </Grid>

                    <Grid item lg={4} md={4} xs={12}>
                        <form className={`${style.contactForm} bg-theme`} onSubmit={handleSubmit}>
                            <div className={style.inputBox}>
                                <TextField fullWidth id="standard-basic" label="Name" variant="standard" value={user} onChange={(e) => setUserName(e.target.value)}/>
                            </div>
                            <div className={style.inputBox}>
                                <TextField fullWidth id="standard-basic" label="Email" variant="standard" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className={style.inputBox}>
                                <TextField fullWidth id="standard-basic" label="Message" variant="standard" value={msg} onChange={(e) => setMsg(e.target.value)}/>
                            </div>
                            <button type="submit" className="inner-theme">Send</button>
                        </form>
                    </Grid>
                </Grid>
            </section>
        </Container>)
}


export default Contact
