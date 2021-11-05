import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
const services = [
    {
        "id": 1,
        "name": "Fluoride",
        "description": "The Department of Urology at Bangladesh Specialized Hospital is dedicated to providing state-of-the-art medical and surgical care for all specialties of male and female urology (both adult and pediatric), as well as male infertility problems. Each year, our highly experienced urologists treat hundreds of patients, providing expert diagnosis, care and surgeries for complete range.",
        "img": fluoride
    },
    {
        "id": 2,
        "name": "Cavity",
        "description": "This Department is established to improve the quality of life for people with diabetes and other endocrinology disorders. For diabetes patients, we help reduce complications and sufferings and contribute to the ultimate prevention and cure. For patients with other endocrinology disorders, including nodules in the endocrine system, we offer specialty care and individualized treatment plans that focus on the patient’s needs.",
        "img": cavity
    },
    {
        "id": 3,
        "name": "Whitening",
        "description": "Founded in mid-2016, the Cardiac surgery department of Bangladesh Specialized Hospital boasts a strong team, the members of which are veterans in their fields who have gained considerable professional experience in cardiac surgery, cardiac anaesthesia and ICU care, both inland and abroad. The infrastructure has two state of the art Cardiac Surgical Operating Theatres and a dedicated Cardiac.",
        "img": whitening
    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>

                <Typography sx={{ fontWeight: 400, m: 2 }} variant="h6" color="text.secondary">
                    Our Services
                </Typography>

                <Typography sx={{ fontWeight: 500, m: 2, color: 'success.main' }} variant="h4" >
                    We provided
                </Typography>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service =>
                            <Service
                                key={service.id}
                                service={service}
                            ></Service>
                        )
                    }
                </Grid></Container>
        </Box>
    );
};

export default Services;