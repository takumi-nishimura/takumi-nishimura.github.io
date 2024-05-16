import React from 'react';
import {Box, Container, CssBaseline, Typography, createTheme} from '@mui/material';
import { ThemeProvider } from '@emotion/react';

const Home: React.FC = () => {
    return (
        <Box maxWidth='xs' minWidth={250} sx={{height: '90vh', backgroundColor: "#ffffff", opacity: 0.9, display:'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <Typography variant='h2' component="div" sx={{ color: 'black'}}>Takumi Nishimura</Typography>
            <Box sx={{height: '10%'}}/>
            <Box sx={{
                width: "100%",
                height: "50%",
                display: "flex",
                alignItems: "center",
                justifyItems:"center",
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 60%, #ffffff 100%), url(/cafe.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center"}}>
            </Box>
        </Box>
    );
}

export default Home;
