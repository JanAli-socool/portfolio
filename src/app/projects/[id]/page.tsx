import React from 'react';
import { projectData } from "@/static/projects"
import { Container, Grid, Box } from '@mui/material';
import style from "@/app/projects/style.module.css";
import Image from "next/image";
import Link from 'next/link';




// @ts-ignore
const ProjectDetail = ({ params }) => {

    const id = params.id;

    // Find the project data from the projectData array using the project name
    const project = projectData.find(project => project.id == id);

    if (!project) {
        return <div>Project not found</div>;
    }

    return (

        <Container maxWidth="lg">
            <section className={style.projects}>
                <Grid container alignItems="center" rowSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
                    <Grid item lg={12} md={12} xs={12}>
                        <div className={`${style.innerContentDetail} bg-theme`}>

                            <h1>{project.name}</h1>
                            <p>{project.description}</p>

                            <div className={style.innerHeaderImg}>
                                {project.techStack.map((tech, techIndex) => (
                                    <Image src={tech} key={techIndex} alt={"iconss"} width={32} height={32} />
                                ))}
                            </div>


                            <Grid container>
                                {project.detail.map((item, ind) => {
                                    return (
                                        <Grid item lg={6} md={6} xs={12} key={ind}>

                                            {item?.title && (
                                                <Box className={style.detailing}>
                                                    <h4>{item?.title}</h4>
                                                    <p>{item?.description}</p>
                                                    <a href={item?.links} target="_blank" rel="noopener noreferrer">view project</a>
                                                    {item?.videoLink && (
                                                        <a href={item.videoLink} target="_blank" rel="noopener noreferrer"> check video</a>
                                                    )}
                                                </Box>
                                            )}
                                        </Grid>
                                    )
                                }
                                )}

                                <Grid item lg={12} md={12} xs={12}>

                                    <div className={style.custom_flex}>
                                        <Link href="/projects" className={style.contactMe}>
                                            <button className="inner-theme">Go Back</button>
                                        </Link>


                                        <Link href={project.github} className={style.contactMe}>
                                            <button className="inner-theme">View Github</button>
                                        </Link>
                                    </div>

                                </Grid>


                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </section>
        </Container>

    );
};

export default ProjectDetail;
