import React from 'react'
import { useNavigate } from 'react-router-dom';
function Home() {
  const navigate=useNavigate();
  return (
  
    <div>    
      <h1>Hello</h1>
      <button onClick={()=>{navigate('/about',{ replace: true })}}>About</button>
    </div>
  )
}

export default Home