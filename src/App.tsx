import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Test from './components/Test'
import { Container } from '@mui/material';
import Profile from './components/Profile';
import Publication from './components/Publication';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Container maxWidth='md'>
        <section id='home'>
          <Home />
        </section>
        <section id='profile'>
          <Profile />
        </section>
        <section id='publication'>
          <Publication />
        </section>
        <section id='contact'>
          <Contact />
        </section>
      </Container>
    </>
  );
}

export default App;
