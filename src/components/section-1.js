import React from 'react'
import { Container, Row, Col } from 'reactstrap'

export default () => {
  return (
    <section className="s1">
      <Container>
        <Row>
          <Col md="12" className="text-center s1-intro">
            <h1 style={{color:"purple"}}>Simple Reliable easy</h1>
            <h3 style={{color:"white"}}>Its all you need!</h3>
          </Col>
          <Col md="6" lg="4" className="text-center s1-advice">
            <img
              className="s1-avatar"
              src="https://bootstrapmade.com/demo/themes/eStartup/img/svg/cloud.svg"
              alt=""
            />
            <h3 style={{color:"purple"}}>Easy to use</h3>
            <p style={{color:"white"}}>
              Open the website , enter your name and you are good to go..
            </p>
    
          </Col>
          <Col md="6" lg="4" className="text-center s1-advice">
            <img
              className="s1-avatar"
              src="https://bootstrapmade.com/demo/themes/eStartup/img/svg/planet.svg"
              alt=""
            />
            <h3 style={{color:"purple"}}>User Friendly Interface</h3>
            <p style={{color:"white"}}> 
              No extra buttons. Only which needed
            </p>
           
          </Col>
          <Col md="6" lg="4" className="text-center s1-advice">
            <img
              className="s1-avatar"
              src="https://bootstrapmade.com/demo/themes/eStartup/img/svg/asteroid.svg"
              alt=""
            />
            <h3 style={{color:"purple"}}>Easy Sharing</h3>
            <p style={{color:"white"}}>
              Copy the meet link from share button and invite them to join too
            </p>
            
          </Col>
        </Row>
      </Container>
      <style>
        {`
        .s1 {
            font-size: 16px;
        }
        .s1-intro {
            margin-bottom: 2em;
        }
        .s1-intro h1 {
            font-size: 3em;
            font-weight: 100;
        }
        .s1-intro h3 {
            font-size: 1em;
            font-weight: 200;
            margin-top: 1em;
        }
        .s1-avatar {
            width: 60px;
        }
        
        .s1-advice {
            padding: 2em;
            transition: all .5s;
        }
        .s1-advice:hover {
            box-shadow: #f2f0f0 1px 1px 10px, #f2ecec9c 1px 1px 10px;
        }
        .s1-advice h3 {
            font-size: 1.1em;
            margin-top: 2em;
            letter-spacing: 2px;
        }
        .s1-advice p {
            margin-top: 2em;
            font-size: .95em;
            line-height: 2;
            color: dimgray;
        }
        .s1-advice a {
            font-size: .95em;
            text-decoration: none;
            color: hsl(120, 2%, 34%);
            transition: all .5s;
        }
        .s1-advice a:hover {
            color: var(--brand-color);
        }
        
        `}
      </style>
    </section>
  )
}
