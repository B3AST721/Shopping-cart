import React from 'react'
import styled from 'styled-components'
import NavBar from "/home/jaheel/Shopping-cart/src/components/NavBar.js";
import { Link, animateScroll as scroll } from "react-scroll";

function Home() {

  const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 30vh;
  `

  return (
    <section className='bg-dark'>
      <NavBar />
      <HomeContainer>
        <h2 className='font-weight-bold text-light'>Come for the <h2 className='d-inline text-primary'>phone</h2>,<br></br>stay for the <h2 className='d-inline text-primary'>price</h2>.</h2>
        <br></br>
        <Link
        className="btn btn-primary btn-lg active" role="button" aria-pressed="true"
        to="store"
        spy={true}
        smooth={true}
        duration={400}
        >Shop Now!</Link>
      </HomeContainer>
    </section>
  )
}

export default Home