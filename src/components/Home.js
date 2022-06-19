import React from 'react'
import styled from 'styled-components'
import NavBar from "/home/jaheel/Shopping-cart/src/components/NavBar.js";

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
        <h2 className='font-weight-bold'>Come for the phone,<br></br>stay for the price.</h2>
        <a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Shop Now!</a>
      </HomeContainer>
    </section>
  )
}

export default Home