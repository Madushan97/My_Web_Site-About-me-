import React from 'react';
import { Container, Image, Row } from 'react-bootstrap';
import instagram from './images/instagram.png'
import github from './images/github.png'
import telegram from './images/telegram.png'
import linkedin from './images/linkedin.png'
import kofi from './images/ko-fi.png'
import hackerrank from './images/hackerank.png'
import './Footer.css'

function Footer() {
  return (
      <>
        <footer>
            <Container>
                <Row>
                   
                    <div className='container' align='center'>

                      <div>
                        
                          <a href='https://www.instagram.com/19madushan97/' target='blank' >
                            <img src={instagram} alt='instagram'/>
                          </a>

                          <a href='https://github.com/Madushan97' target='blank'>
                            <img src={github} alt='instagram'/>
                          </a>

                          <a href='https://t.me/madushan97/' target='blank'>
                            <img src={telegram} alt='instagram'/>
                          </a>

                          <a href='https://linkedin.com/in/madushan-nipuna-b73975173/' target='blank'>
                            <img src={linkedin} alt='instagram'/>
                          </a>

                          <a href='https://www.hackerrank.com/madushannipuna11/' target='blank'>
                            <img src={hackerrank} alt='instagram'/>
                          </a>

                          <a href='https://ko-fi.com/madushannipuna97/' target='blank'>
                            <img src={kofi} alt='instagram'/>
                          </a>
                        
                      </div>

                    </div>      
                    
                </Row>
            </Container>
        </footer>
      </>
      
  )}

export default Footer;