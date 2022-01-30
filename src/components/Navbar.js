import React from 'react';
import './Navbar.css'

function Navbar() {
  return (

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Brand Name</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
  
      <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="navbar-nav">

          <li class="nav-item">
            <a class="nav-link active" href="#">Home
              <span class="visually-hidden">(current)</span>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">Services</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">Skills</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">Portfolio</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">Blog</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>

          {/* <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Separated link</a>
            </div>
          </li> */}
        </ul>
       
      </div>
    </div>
  </nav>
  )
}

export default Navbar;
