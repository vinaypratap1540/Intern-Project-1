import React from 'react'
import "./header.scss"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Header = () => {
  const productData = useSelector((state) => state.shop.productData)
  
  return (
    <div className='header'>
      <Link to="/" style={{textDecoration:"none"}}>
       <div className="t">TvMaza</div>
       </Link>
       <div className="nav">
        <ul>
          <Link to="/" style={{textDecoration:"none", color:"black"}}>
            <li>Home</li>
            </Link>
            <li>About</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
            <i class="fa-solid fa-cart-shopping" style={{marginTop:"5px",cursor:"pointer"}}></i>
            <i class="fa-solid fa-user" style={{marginTop:"5px",cursor:"pointer"}}></i>
        </ul>
       </div>
    </div>
  )
}

export default Header
