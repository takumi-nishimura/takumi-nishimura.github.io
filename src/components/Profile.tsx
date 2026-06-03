import { Box, Typography } from "@mui/material";
import React from "react";

const Profile: React.FC = () => {
return (
    <Box sx={{height: 'auto'}} minHeight={300}>
        <Typography variant='h3' component="div" sx={{ color: 'black', marginBottom: 3}}>Profile</Typography>
        <Typography variant='h5' component="div" sx={{ color: 'black'}}>Takumi Nishimura / 西村匠生</Typography>
        <Typography variant="body1" component="div" sx={{ color: 'black', marginTop: 2, lineHeight: 1.8}}>A Ph.D. student in engineering at Nagoya Institute of Technology, affiliated with the university's <a className="link" href="https://haptics.web.nitech.ac.jp/" target="_blank" rel="noreferrer">Haptics Lab</a>.<br />My research focuses on human-AI collaboration. I study body integration and motor sharing through avatar robots, with a focus on haptics and the sense of agency, and design AI agents that infer human intent and context to act together with people.</Typography>
    </Box>
);
};

export default Profile;
