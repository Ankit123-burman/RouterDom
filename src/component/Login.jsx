import React from 'react'
import { useNavigate } from 'react-router-dom'
function Login() {
  const navigate = useNavigate();
  const  gotoHome=()=>{
    navigate('/hero')
  }
  return (
    <>
    <div className="login">
    <div className="login-container">
    <h2>Login</h2>
    <form >
      <label>Username:</label>
      <input type="text"  onChange={(event) => setUsername(event.target.value)} />
      <br />
      <label>Password:</label>
      <input type="password"  onChange={(event) => setPassword(event.target.value)} />
      <br />
      <button onClick={gotoHome} type="submit">Login</button>
    </form>
  </div>
  </div>
  </>
  
  )
}

export default Login