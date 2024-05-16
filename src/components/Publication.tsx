import { Box, Typography } from "@mui/material";
import React from "react";

const Publication: React.FC = () => {
return (
    <Box sx={{height: '100vh'}}>
        <Typography variant='h3' component="div" sx={{ color: 'black', marginBottom: 3}}>Publication</Typography>
        <Typography variant='h5' component="div" sx={{ color: 'black', marginBottom: 3}}>Journal / Conference Papers</Typography>
        <ul>
            <li>Takayoshi Hagiwara, Takumi Katagiri, Hikari Yukawa, Itsuki Ogura, Ryohei Tanada, Takumi Nishimura, Yoshihiro Tanaka, and Kouta Minamizawa. 2021. Collaborative Avatar Platform for Collective Human Expertise. In SIGGRAPH Asia 2021 Emerging Technologies (SA '21). Association for Computing Machinery, New York, NY, USA, Article 2, 1-2, DOI: <a href="https://doi.org/10.1145/3476122.3484841" target="_blank" rel="noreferrer">10.1145/3476122.3484841</a></li>
        </ul>
        <Typography variant='h5' component="div" sx={{ color: 'black', marginBottom: 3}}>Demo</Typography>
        <Typography variant='h5' component="div" sx={{ color: 'black', marginBottom: 3}}>Workshop</Typography>
    </Box>
);
};

export default Publication;
