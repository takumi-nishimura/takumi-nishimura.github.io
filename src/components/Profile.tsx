import { Box, Typography } from "@mui/material";
import React from "react";

const Profile: React.FC = () => {
return (
    <Box sx={{height: '40vh'}} minHeight={400}>
        <Typography variant='h3' component="div" sx={{ color: 'black', marginBottom: 3}}>Profile</Typography>
        <Typography variant='h5' component="div" sx={{ color: 'black'}}>Takumi Nishimura / 西村匠生</Typography>
        <Typography variant="body1" component="div" sx={{ color: 'black', marginTop: 2}}>A Ph.D student in engineering at Nagoya Institute of Technology.<br />I affiliated with the university's Haptics Lab.<br />My research topic focuses on the "Collaborative Avatar Robot" in Human-Robot Interaction (HRI).</Typography>
    </Box>
);
};

export default Profile;
