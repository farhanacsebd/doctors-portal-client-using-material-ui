import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import login from '../../../images/login.png';

const Register = () => {

    const [loginData, setLoginData] = useState({});


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(loginData);
    }

    const handleLoginSubmit = e => {

        if (loginData.password !== loginData.password2) {
            alert("password doesn't match");
            return;
        }

        alert("submitted")

        e.preventDefault();
    }

    return (
        <Container>
            <Grid container spacing={2}>

                <Grid sx={{ mt: 8 }} item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Register
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            onChange={handleOnChange}
                            variant="standard" />

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Retype Your Password"
                            type="password"
                            name="password2"
                            onChange={handleOnChange}
                            variant="standard" />

                        <Button sx={{ width: '75%', m: 3 }}
                            type="submit"
                            variant="contained">Registration</Button>

                        <NavLink style={{ textDecoration: "None" }} to="/Login">

                            <Button sx={{ width: '75%', m: 1 }}
                                type="submit"
                                variant="text">Already Registered ? Please Login</Button>
                        </NavLink>

                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} style={{ width: '100%' }} />
                </Grid>

            </Grid>
        </Container >
    );
};

export default Register;