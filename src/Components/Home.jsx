import React from 'react'
import { useNavigate } from 'react-router-dom';
function Home() {
  const navigate=useNavigate();
  return (
  
    <div>    
      <button onClick={()=>{navigate('/about')}}>About</button>
    </div>
  )
}

export default Home