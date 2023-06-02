import React, { useEffect, useState } from 'react'
import "./products.scss"
import "../card/Card"
import { Link, useLocation } from 'react-router-dom'
const Products = () => {
  const [details,setDetails] = useState({})
  const location = useLocation();
  useEffect(()=>{
    const showData = (location.state.item.show);
    setDetails(showData);
    
  },[location.state.item.show])
  return (
    <div>
      <div className='pI'> 
        <div className='range'>
        <h2><b>Show : </b> {details.name}</h2>
         <p style={{marginLeft:"10px",marginTop:"10px",}}><b>Premiered : </b>{details.premiered}</p>
         <p style={{marginTop:"20px"}}><b>Language : </b>{details.language}</p>
         <p style={{maxWidth:"650px",marginTop:"30px"}}>{details.summary}</p>
         <Link to="/book" style={{textDecoration:"none"}}>
         <button style={{padding:"10px",width:"100px",height:"30px",display:"flex",justifyContent:"center",alignItems:"center",marginTop:"20px",cursor:"pointer"}}>Book Ticket</button>
         </Link>
        </div>
      </div>
    </div>
  )
}

export default Products
