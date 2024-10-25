"use client"

import * as React from 'react';
import { Container, Grid, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import style from '@/app/components/header/style.module.css';
import ControlledSwitches from '@/app/components/header/switchBtn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
 const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mode , setMode] = React.useState(true);

  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? 'active' : '';
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <header className={style.menuLink}>
      <Container maxWidth="lg">
        <Grid container alignItems="center">
          <Grid item lg={3}  md={3} xs={6} >
            <Image src={mode ? "/logo.png" : "/logo-2.png"} alt="my logo image " width={180} height={45} className={style.logo} />
          </Grid>
           <Grid item lg={6}  md={6} xs={6} className={style.navLinks} >
            <nav className={"bg-theme"}>
              <Link href="/"  className={isActive('/') }>Home</Link>
              <Link href="/about" className={isActive('/about')}>About</Link>
              <Link href="/projects" className={ isActive('/projects')}>Projects</Link>
              <Link href="/contact" className={isActive('/contact')}>Contact</Link>
            </nav>
          </Grid>
          <Grid item lg={3}  md={3} xs={6}>
            <div className={style.switchBtn}>
                <ControlledSwitches  mode={mode} setMode={setMode} />
            </div>
            <div className={style.mobileNavLinks}>
                <IconButton color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
                     <MenuIcon />
                </IconButton>
            </div>
          </Grid>
        </Grid>
      </Container>




      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <List>
          <ListItem button component="a" href="/">
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component="a" href="/about">
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button component="a" href="/projects">
            <ListItemText primary="Projects" />
          </ListItem>
          <ListItem button component="a" href="/contact">
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>
    </header>
  );
};

export default Navbar;
