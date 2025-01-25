import React from 'react'
import { useNavigate } from 'react-router-dom'

function Card({id , image , price , title}) {
const navigate = useNavigate()
function handleNavigate() {
    navigate(`/details/${id}`)
}
  return (
    <div className='w-[350px] p-5 rounded-2xl shadow-xl flex items-center flex-col gap-5 cursor-pointer' onClick={handleNavigate}>
      <img className='w-full h-52 object-cover rounded-lg' src={image} alt="" />
      <h3>{title}</h3>
      <p>$ {price}</p>
    </div>
  )
}

export default Card
