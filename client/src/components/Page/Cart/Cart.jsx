import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
const Cart = () => {
  const {cart}=useSelector((store)=>store)
  console.log(cart)
  return (
    <div>


      <h1>Cart</h1>
      {/* <ul>
        {cartItems.map((item)=>(
          <li key={item._id}>

            {item.title}
           
          </li>
        ))} */}
      {/* </ul> */}
    </div>




  
)
}

export default Cart