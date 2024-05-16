import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Test from './components/Test'
import { Container } from '@mui/material';
import Profile from './components/Profile';

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
      </Container>
    </>
  );
}

export default App;
