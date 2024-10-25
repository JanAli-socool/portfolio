"use client"

import * as React from 'react';
import Switch from '@mui/material/Switch';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import LightModeIcon from '@mui/icons-material/LightMode';
import style from "@/app/components/header/style.module.css"

export default function ControlledSwitches({mode, setMode}: any) {


  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: any) => {

    setChecked(event.target.checked);
    
    if (event.target.checked) {
      document.body.classList.add('dark-mode'); 
    } else {
      document.body.classList.remove('dark-mode'); 
    }
  };

  
  React.useEffect(() => {
    if (checked) {
      setMode(false)
      document.body.classList.add('dark-mode'); 
    } else {
      setMode(true)
      document.body.classList.remove('dark-mode'); 
    }
  }, [checked]);

  return (
    <div className={style.selectMode}>

    

    {mode ?

      <div className={style.day}>
        <LightModeIcon />
      </div>
      :
      <div className={style.night}>
        <NightsStayIcon />
      </div>

    }

    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />


    </div>
  );
}
