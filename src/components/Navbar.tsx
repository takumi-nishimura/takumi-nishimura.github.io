import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {Container, Typography} from '@mui/material';
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar: React.FC = () => {
    const toolbarStyle = {
        maxWidth: 'md',
        margin: 'auto',
    };
    return (
        <AppBar
            position='sticky'
            color='inherit'
            elevation={0}
            style={{alignItems: 'left'}}
        >
            <Container maxWidth='md'>
                <Toolbar style={toolbarStyle}>
                    <AnchorLink href='#home' style={{textDecoration: 'none', color: 'black'}} offset="90">
                        <Typography variant='h6' marginRight={4}>nishi-folio</Typography>
                    </AnchorLink>
                    <AnchorLink href='#profile' style={{textDecoration: 'none', color: 'black'}} offset="90">
                            <Typography variant='h6' marginRight={4}>profile</Typography>
                    </AnchorLink>
                    <AnchorLink href='#publication' style={{textDecoration: 'none', color: 'black'}} offset="90">
                            <Typography variant='h6' marginRight={4}>publication</Typography>
                    </AnchorLink>
                    <AnchorLink href='#contact' style={{textDecoration: 'none', color: 'black'}} offset="90">
                            <Typography variant='h6' marginRight={4}>contact</Typography>
                    </AnchorLink>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;
