import { Box, Typography } from "@mui/material";
import React from "react";

const Contact: React.FC = () => {
return (
    <Box sx={{height: '90vh'}} minHeight={800}>
        <Typography variant='h3' component="div" sx={{ color: 'black', marginBottom: 3}}>Contact</Typography>
        <Typography variant='h5' component="div" sx={{ color: 'black', marginTop: 3}}>Address</Typography>
        <Typography component="div" sx={{ color: 'black', marginLeft: 5, marginTop: 1}}>466-8555<br/>Nagoya Institute of Technology Gokiso-cho, Showa-ku, Nagoya, Japan</Typography>
        <Typography variant='h5' component="div" sx={{ color: 'black', marginTop: 3}}>E-Mail</Typography>
        <Typography component="div" sx={{ color: 'black', marginLeft: 5, marginTop: 1}}>clp13218[at]nitech.jp</Typography>
        <Typography variant='h5' component="div" sx={{ color: 'black', marginTop: 3}}>SNS</Typography>
        <Typography component="div" sx={{ color: 'black', marginLeft: 5, marginTop: 1}}>X <a href="https://twitter.com/takumi_ni4" target="_blank" rel="noreferrer">@takumi_ni4</a><br/>Facebook <a href="https://www.facebook.com/profile.php?id=100028314154172" target="_blank" rel="noreferrer">西村匠生</a></Typography>
    </Box>
);
};

export default Contact;
