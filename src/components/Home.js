import React from 'react'
import styled from 'styled-components'

function Home() {

  const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center
  `

  return (
    <div className='d-flex flex-column align-items-center justify-content-center'>
      <h2 className='font-weight-bold'>Come for the phone,<br></br>stay for the price.</h2>
      <a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Shop Now!</a>
    </div>
  )
}

export default Home