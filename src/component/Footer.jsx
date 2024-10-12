import React from 'react'
import { useNavigate } from 'react-router-dom'
function Footer() {

  const navigate = useNavigate();
  const gotoSingup=()=>{
    navigate('/singUp');
  }
  return (
    <>
    <footer>
  <div className="container">
    <p>&copy; 2023 Your Company Name</p>
    <button onClick={gotoSingup}>Sign Up</button>
  </div>
</footer>
    </>
  )
}

export default Footer