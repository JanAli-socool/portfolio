"use client"

import React from 'react';
import { Container, Grid,Box } from '@mui/material';
import style from "@/app/components/banner/style.module.css"
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const HomeBanner = () => {
    return (
        <Container maxWidth="lg" >
            <section className={style.banner}>
                <Grid container alignItems="center">
                    <Grid item lg={6} md={6} xs={12} >
                        <Box className={style.bannerContent}>
                            <h1>Senior Software Engineer</h1>
                            <p>I am a Senior Software Engineer with expertise stack in Python and AI Development. 
                            By building a Legal AI service based product for Pakistan.<br/><br/> I prefrebaly use cutting-edge technologies such as FastAPI , MS Azure , Restful API and Python multiple libraries and frameworks to deliver a fast, scalable, and reliable platform that enables affordable and accessible legal services for millions of people. I enjoy solving complex problems and learning new skills. 
                            <br/><br/>I am passionate about innovation, problem-solving, and code quality. I enjoy turning challenges into opportunities and code into magic. I am always eager to learn new skills and technologies, and to collaborate with other talented and driven professionals.<br/><br/> My goal is to create impactful and meaningful solutions that make a difference in the world.</p>
                       
                            <Box className={style.icons}>
                                <a target="_blank" href="https://pk.linkedin.com/in/jan-ali-kazmi" rel="noopener noreferrer">
                                    <LinkedInIcon  />
                                </a>
                                <a target="_blank" href="https://github.com/JanAli-socool" rel="noopener noreferrer">
                                    <GitHubIcon />
                                </a>
                                <a target="_blank" href="https://twitter.com/" rel="noopener noreferrer">
                                    <TwitterIcon />
                                </a>
                                <a target="_blank" href="https://www.instagram.com/" rel="noopener noreferrer">
                                    <InstagramIcon />
                                </a>
                            </Box>
                       
                        </Box>
                    </Grid>

                    <Grid item lg={6} md={6} xs={12} >
                        <div className={style.banner_img}>
                            <img src={"/banneer.jpg"} alt="my logo image"  style={{ width: '400px', height: '400px', objectFit:"cover" }} />
                        </div>
                    </Grid>
                </Grid>
            </section>
        </Container>
    )
}

export default HomeBanner;