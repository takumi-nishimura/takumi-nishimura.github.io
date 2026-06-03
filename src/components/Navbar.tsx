import React from 'react';
import {
    AppBar,
    Toolbar,
    Container,
    Typography,
    IconButton,
    Menu,
    MenuItem,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import { useNavigate, useLocation, Link as RouterLink } from 'react-router-dom';

const sections = [
    { id: 'profile', label: 'profile' },
    { id: 'publication', label: 'publication' },
    { id: 'contact', label: 'contact' },
];

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const goSection = (id: string) => {
        const scroll = () => {
            const el = document.getElementById(id);
            if (!el) return;
            // offset by the real navbar height so the section aligns flush below
            // the sticky bar instead of being clipped
            const nav = document.getElementById('site-navbar');
            const navH = nav ? nav.getBoundingClientRect().height : 0;
            const top = el.getBoundingClientRect().top + window.scrollY - navH;
            window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' });
        };
        if (location.pathname !== '/') {
            navigate('/');
            // wait for the home page to mount before scrolling
            window.setTimeout(scroll, 60);
        } else {
            scroll();
        }
    };

    const itemStyle: React.CSSProperties = {
        textDecoration: 'none',
        color: 'black',
        cursor: 'pointer',
        background: 'none',
        border: 'none',
        padding: 0,
        font: 'inherit',
    };

    const closeMenu = () => setAnchorEl(null);

    return (
        <AppBar id='site-navbar' position='sticky' color='inherit' elevation={0}>
            <Container maxWidth='md'>
                <Toolbar
                    sx={{
                        justifyContent: isMobile ? 'space-between' : 'flex-start',
                        gap: isMobile ? 0 : '15px',
                    }}
                >
                    <button style={itemStyle} onClick={() => goSection('home')}>
                        <Typography variant='h6' sx={{ whiteSpace: 'nowrap' }}>nishi-folio</Typography>
                    </button>

                    {isMobile ? (
                        <>
                            <IconButton aria-label='menu' onClick={(e) => setAnchorEl(e.currentTarget)} sx={{ color: 'black' }}>
                                <span style={{ fontSize: '1.4rem', lineHeight: 1 }}>☰</span>
                            </IconButton>
                            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={closeMenu}>
                                {sections.map((s) => (
                                    <MenuItem key={s.id} onClick={() => { closeMenu(); goSection(s.id); }}>{s.label}</MenuItem>
                                ))}
                                <MenuItem onClick={() => { closeMenu(); navigate('/blog'); }}>blog</MenuItem>
                            </Menu>
                        </>
                    ) : (
                        <>
                            {sections.map((s) => (
                                <button key={s.id} style={itemStyle} onClick={() => goSection(s.id)}>
                                    <Typography variant='h6'>{s.label}</Typography>
                                </button>
                            ))}
                            <RouterLink to='/blog' style={itemStyle}>
                                <Typography variant='h6'>blog</Typography>
                            </RouterLink>
                        </>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
