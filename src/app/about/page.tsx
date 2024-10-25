"use client"

import React, { useEffect } from 'react';
import { Container, Grid,Box } from '@mui/material';
import style from "@/app/about/style.module.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from 'next/image';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Link from 'next/link';

function About() {
  useEffect(()=>{
    document.title = "About me | Jan Ali Kazmi"
  },[])
  return (
    <Container maxWidth="lg">
            <section className={style.aboutMe}>
                <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
                    <Grid item lg={4} md={4} xs={12} order={{ xs: 2, md: 1, lg: 1}}>
                      <div className={`${style.leftSideContent} bg-theme`}>
                      <Image src="/profile.jfif" alt="my image" width={200} height={180} className={style.logo} />                     
                        <h3>Jan Ali Kazmi 
                          <span>Senior Software Engineer</span>
                        </h3>
                        <Box className={`${style.followOn} inner-theme`}>
                              <a target="_blank" href="https://www.linkedin.com/in/jan-ali-kazmi" rel="noopener noreferrer">
                                  <LinkedInIcon  /> Follow on linkedIn
                              </a>
                              <a target="_blank" href="https://github.com/JanAli-socool" rel="noopener noreferrer">
                                  <GitHubIcon /> Follow on github
                              </a>
                              <a target="_blank" href="https://twitter.com" rel="noopener noreferrer">
                                  <TwitterIcon /> Follow on twitter
                              </a> 
                              <a target="_blank" href="https://www.instagram.com" rel="noopener noreferrer">
                                  <InstagramIcon /> Follow on instagram
                              </a>

                            <a target="_blank" href="mailto:heyitsali.jan313@gmail.com" rel="noopener noreferrer">
                                <MailOutlineIcon /> heyitsali.jan313@gmail.com
                            </a>
                          </Box>

                          <div className={style.downloadCv}>
                              <Link className="inner-theme" href='/resume.pdf' download><SaveAltIcon /> Download CV</Link>
                          </div>

                        </div>
                    </Grid>

                    <Grid item lg={8} md={8} xs={12}order={{ xs: 1, md: 2, lg: 2}}>
                        <div className={`${style.rightSideContent}  bg-theme`}>
                          <h3 className="heading">About Me</h3>
                          <p>I am a Senior Software Engineer with expertise stack in Python and AI Development. 
                            I have experience in building scalable, secure and reliable applications using various frameworks 
                            and technologies. By building a Legal AI service based product for Pakistan.
                          <br/> <br/>I prefrebaly use cutting-edge technologies such as FastAPI , MS Azure , Restful API and Python multiple libraries and frameworks to deliver a fast, scalable, and reliable platform that enables affordable and accessible legal services for millions of people. I enjoy solving complex problems and learning new skills. 
                          <br/> <br/>  I am passionate about innovation, problem-solving, and code quality. I enjoy turning challenges into opportunities and code into magic. I am always eager to learn new skills and technologies, and to collaborate with other talented and driven professionals. My goal is to create impactful and meaningful solutions that make a difference in the world.</p>
                            <Link href="/contact" className={style.contactMe}>
                                <button className="inner-theme">Contact me</button>
                            </Link>
                        </div>
                    </Grid>
                </Grid>
            </section>
      </Container>
  )
}


export default  About