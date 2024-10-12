import React from 'react'
import { useNavigate } from 'react-router-dom'


function Navbar() {
  const navigate = useNavigate();
  const gotoSingup=()=>{
    navigate('/singUp');
  }
  const gotoLogin=()=>{
    navigate('/');
  }
  const  gotoHome=()=>{
    navigate('/hero')
  }
  const  gotoBlog=()=>{
    navigate('/blog')
  }

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a onClick={gotoHome} href="#">Home</a></li>
        <li><a onClick={gotoBlog} href="#">Blog</a></li>
        <li><a onClick={gotoLogin} href="#">Login</a></li>
        <li><a onClick={gotoSingup} href="#">SingUp</a></li>
     
      </ul>
    </nav>
  )
}

export default Navbar