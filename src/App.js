import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import Content from './components/Content';

function App() {
  return (

    <BrowserRouter>

    <Navbar/>
    <main>
      <Container>
        <Content/>
      </Container>
    </main>

    <Footer/>

    </BrowserRouter>
    
  );
}

export default App;
