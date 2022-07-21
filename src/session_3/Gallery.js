import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import img1 from './img/00-best-backgrounds-and-wallpaper-apps-for-android.jpg';
import img2 from './img/310084.jpg';
import img3 from './img/350451.jpg';
import img4 from './img/469917-snow-street_light-lake.jpg';
import img5 from './img/99f049a4ac2b31bd2e68e2e88bec07bc.jpg';
import img6 from './img/cover6.jpg';

export default function Gallery() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={3} columnSpacing={2}>
        <Grid item xs={4}>
            <img style={{width:"400px",height:"450px"}} src={img1} alt="img1"/>
        </Grid>
        <Grid item xs={4}>
            <img style={{width:"400px",height:"450px"}} src={img2} alt="img2"/>
        </Grid>
        <Grid item xs={4}>
            <img style={{width:"400px",height:"450px"}} src={img3} alt="img3"/>
        </Grid>
        <Grid item xs={4}>
            <img style={{width:"400px",height:"450px"}} src={img4} alt="img4"/>
        </Grid>
        <Grid item xs={4}>
            <img style={{width:"400px",height:"450px"}} src={img5} alt="img5"/>
        </Grid>
        <Grid item xs={4}>
            <img style={{width:"400px",height:"450px"}} src={img6} alt="img6"/>
        </Grid>
      </Grid>
    </Box>
  )
}
