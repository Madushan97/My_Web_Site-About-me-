import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';

function App() {
  return (

    <BrowserRouter>

    <Navbar/>
    <main>
      <Container>
        <h1 align='center'>Welcome to My portfolio</h1>
      </Container>
    </main>

    <Footer/>

    </BrowserRouter>
    
  );
}

export default App;
