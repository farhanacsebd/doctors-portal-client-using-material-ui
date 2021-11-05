import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';
import { fontSize, fontWeight } from '@mui/system';

const appointmentBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45,58,74,0.9)',
    backgroundBlendMode: 'darken,luminosity',
    marginTop: 175
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: 400, marginTop: -110 }} src={doctor} />
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', textAlign: 'left' }}>
                    <Box>
                        <Typography variant="h6" sx={{ mb: 5 }} style={{ color: '#5CE7ED' }}>AppointmentBanner</Typography>
                        <Typography variant="h4">Make an Appointment Today</Typography>
                        <Typography variant="h6" sx={{ my: 5 }} style={{ color: 'white', fontWeight: 300, fontSize: 14 }}>lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 </Typography>
                        <Button style={{ backgroundColor: '#5CE7ED' }} variant='contained'>Learn More</Button>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
};

export default AppointmentBanner;