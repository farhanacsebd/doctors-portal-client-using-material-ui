import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import Button from '@mui/material/Button';


const Booking = ({ booking }) => {
    const { name, time, space } = booking;

    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3}>
                    <Typography gutterBottom sx={{ color: 'info.main', fontSize: '20px', fontWeight: 400, pb: 3, pt: 2 }}>{name}</Typography>
                    <Typography gutterBottom>Time: {time}</Typography>
                    <Typography gutterBottom sx={{ pb: 2 }}>Spacing: {space}</Typography>
                    <Button sx={{ mb: 3 }} variant="contained">Book Appointment</Button>

                </Paper>
            </Grid>
        </>
    );
};

export default Booking;