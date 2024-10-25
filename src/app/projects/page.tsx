"use client"

import React, { useEffect } from 'react';
import { Container, Grid, Box } from '@mui/material';
import style from "@/app/projects/style.module.css"
import Link from 'next/link';
import Image from "next/image";
import LinkIcon from '@mui/icons-material/Link';
import {projectData} from "@/static/projects"

const Projects = () => {
    useEffect(()=>{
        document.title = "Projects"
    },[])
  return (
    <Container maxWidth="lg">
        <section className={style.projects}>
            <Grid container alignItems="center" rowSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 2,lg: 3  }}>
                <Grid item lg={12} md={12} xs={12}>
                    <div className={`${style.innerContent} bg-theme`}>
                        <h1>Projects I’ve made</h1>
                        <p>I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of
                            these projects are open-source and available for others to explore and contribute to. If you're interested
                            in any of the projects I've worked on, please feel free to check out the code and suggest any improvements
                            or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback.</p>
                    </div>
                </Grid>
                {projectData.map((element, index)=> {
                    return (
                        <Grid key={index} item lg={4} md={6} xs={12}>
                            <div className={`${style.InnerBox}  bg-theme`}>
                                <ul>
                                    {element.techStack.map((tech, techIndex) => (
                                        <li key={techIndex}>{
                                            <Image src={tech} alt={element.name} width={32} height={32} />
                                        }</li>
                                    ))}
                                </ul>
                               <h4>{element.name}</h4>
                               <p>{element.description}</p>
                               <Box className={style.viewProjectBtn}> 
                                    <Link href={`projects/${element.id}`}> <LinkIcon /> view more</Link>
                               </Box>
                            </div>
                        </Grid>
                    )}
                )}
            </Grid>
        </section>
    </Container>
  )
}

export default Projects