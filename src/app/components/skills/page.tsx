import React from 'react';
import { Container, Grid } from '@mui/material';
import style from "@/app/components/skills/style.module.css"
import Image from 'next/image';
import { skills } from '@/static/technologies';




const Skills = () => {
  return (
    <Container maxWidth="lg">
        <section className={style.skills}>
            <Grid container alignItems="center" rowSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 2,lg: 3  }}>
                <Grid item lg={12} md={12} xs={12} >
                    <h3 className="heading"><span>Technologies</span> that I use to </h3>
                </Grid>
                    {
                        skills.map((element, index)=>{
                            return (
                                <Grid key={index} item lg={1} md={2} xs={3} >
                                    <div className={style.skillBox}> 
                                        <Image src ={element.img} alt={element.name} width={30} height={30} />
                                        <h6>{element.name}</h6> 
                                    </div> 
                                </Grid>
                            )
                        })
                    }
            </Grid>
        </section>
    </Container>
  )
}

export default Skills