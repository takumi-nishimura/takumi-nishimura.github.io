import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Profile from './components/Profile';
import Publication from './components/Publication';
import Contact from './components/Contact';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import ScrollToTop from './components/ScrollToTop';

const HomePage: React.FC = () => (
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
);

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/blog' element={<Container maxWidth='md'><BlogList /></Container>} />
        <Route path='/blog/:slug' element={<Container maxWidth='md'><BlogPost /></Container>} />
      </Routes>
    </>
  );
}

export default App;
