import React from 'react';

import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Typography, Box, Container } from '@mui/material';


const bannerBg = {
    background: `url(${bg})`,

}
const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400

}
const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography variant="h4">Your New Smile <br />  Starts here  </Typography>
                        <Typography variant="h6" sx={{ fontSize: 14, fontWeight: 300, color: "gray" }}> lorem20  lorem20  lorem20  lorem20  lorem20  lorem20   </Typography> <Button style={{ backgroundColor: '#5CE7ED' }} variant='contained'>Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: '350px' }} src={chair} />
                </Grid>

            </Grid>
        </Container >
    );
};

export default Banner;