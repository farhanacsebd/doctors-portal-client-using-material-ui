import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



const Service = (props) => {
    const { id, name, img, description } = props.service;
    return (
        <Grid item xs={4} sm={4} md={4} >
            <Card sx={{ maxWidth: 345, border: 0, boxShadow: 0 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        style={{ width: 'auto', height: "140", margin: "0 auto" }}
                        image={img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default Service;