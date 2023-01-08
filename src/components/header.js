import React from 'react'
import { Container, Jumbotron } from 'reactstrap'

const Header = () => {
  const handleClick=()=>{
    window.open( "http://localhost:3000","_blank")
  }
  return (
    <header >
      <div className="intro-logo jumbo-bg">
        <h1 style={{fontSize:"6em"}}>Welcome to <p style={{color:"purple"}}>Spiffy</p></h1>
        <h3>A perfect Web App for your casual and professional meets...</h3>
        <img
          src="https://bootstrapmade.com/demo/themes/eStartup/img/hero-img.png"
          className=""
          alt=""
        />
        <div className="intro-button" >
          <button onClick={handleClick}><strong>
            Get Started
            </strong>
            </button>
        </div>
        <div className="company-icons">
          <span className="company-icons__item">
            <i className="fab fa-apple" />
            app store
          </span>
          <span className="company-icons__item">
            <i className="fab fa-google-play" />
            google play
          </span>
          <span className="company-icons__item">
            <i className="fab fa-windows" />
            windows
          </span>
        </div>
      </div>

      <style jsx>{`
        header {
          margin-bottom: 1rem;
          height: 100vh;
        }
        .intro-logo {
          display: flex;
          position: absolute;
          top: 5em;
          bottom: 0;
          left: 0;
          right: 0;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
          text-align: center;
        }

        .intro-logo h1 {
          font-size: 1.8em;
          font-weight: 900;
          font-family: 'Philosopher', sans-serif;
          color: white;
        }
        @media (max-width: 600px) {
          .intro-logo h1 {
            font-size: 3.5em;
          }
        }
        .intro-logo h3 {
          font-size: 1rem;
          font-weight: 300;
          color: var(--gray-color-1);
          margin-bottom: 3em;
        }

        .intro-logo img {
          max-width: 95%;
          height: auto;
        }
        .company-icons__item + .company-icons__item {
          margin-left: 1rem;
        }
        @media (min-width: 575px) {
          .company-icons__item + .company-icons__item {
            margin-left: 2rem;
          }
        }
        .company-icons__item i {
          margin-right: 5px;
        }
        .intro-button {
          margin-top: 2.3em;
          margin-bottom: 3em;
       
        }
        .intro-button button {
          padding: 0.65em 2.6em;
          border-radius:30px;
          color: white;
          border: 1.8px solid var(--brand-color);
          background: purple;
          transition: all 0.5s;
          border-color:white;
          font-size:2em;
          
        }
        .intro-button button:hover {
          background-color: white;
          border-color:purple;
          color: purple;
        }

        .company-icons {
          color: var(--gray-color-2);
          font-size: 0.95em;
        }
        .company-icons__item {
          transition: all 0.5s;
        }
        .company-icons__item:hover {
          color: purple;
          cursor: pointer;
        }
      `}</style>
    </header>
  )
}

export default Header
