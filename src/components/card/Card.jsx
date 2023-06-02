import React from 'react'
import "./card.scss"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/shopSlice';

const Card = ({product}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const _id = product.show.name;
  const idString = (_id) =>{
    return String(_id).toLowerCase().split(" ").join("");
  }
  const rootId = idString(_id);
  const handleDetails=()=>{
    navigate(`/product/${rootId}`,{
      state:{
        item: product,
      },
    })
  }
  return (
    <div className='card' onClick={handleDetails}>
     <div className='set' onClick={handleDetails}>
        <img src={product.show.image.original} alt="image" />
     </div>
      <div style={{width:"100%",marginTop:"10px" ,display:"flex",gap:"5",flexDirection:"column",marginBottom:"10px"}}>
        <span style={{marginBottom:"3px"}}><b>{product.show.name}</b></span>
        <p><b>Language :</b> {product.show.language}</p>
        <p><b>Rating :</b> {product.show.rating.average}</p>
        <p><b>Premiered : </b>{product.show.premiered}</p>
        <p><b>Time : </b>{product.show.schedule.time}</p>
      </div>
    </div>
  )
}

export default Card
