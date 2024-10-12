import React from 'react'
import { useNavigate } from 'react-router-dom'


function SingUp() {
  const navigate = useNavigate();
  const  gotoHome=()=>{
    navigate('/hero')
  }
  return (
    <>
    <div className="signup">
    <div className="signup-container">
      <h2>Signup</h2>
      <form >
        <label>Username:</label>
        <input type="text"  />
        <br />
        <label>Email:</label>
        <input type="email"      />
        <label>Password:</label>
        <input type="password"  />
        <br />
        <label>Confirm Password:</label>
        <input type="password" />
        <br />
        <button onClick={gotoHome} type="submit">Signup</button>
      </form>
    </div>
</div>
</>
  )
}

export default SingUp