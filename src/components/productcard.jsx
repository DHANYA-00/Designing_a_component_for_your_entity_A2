// write product card here
import React from 'react'
import '../App.css'
import Headset from '../assets/Headset.webp'
import ViewProductButton from './button'

function ProductCard() {

    const productImage="httphttps://st.depohttps://images.unsplash.com/photo-1611864583067-b002fdc4fa29?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dsitphotos.com/https://images.unsplash.com/photo-1600086827875-a63b01f1335c?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D28285704/54248/i/450/depositphotos_542483254-stock-photo-black-headphone-floating-black-background.jpgs://images.unsplash.com/photo-1505740420928-5https://images.unsplash.com/photo-1603808033192-0fcbf7a3c4d6e560c06d30e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D://source.unsplashttps://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2Fphotos%2Fheadphones-black-background.html&psig=AOvVaw1V4YafXuW1PvrynnCB4vF6&ust=1741381354355000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKjbzJut9osDFQAAAAAdAAAAABAhh.com/200x200/?headphones";
    const productName="Headset";
    const productPrice="$100";



  return (
    <div className='product-card'>
        <div className='product-image'>
        <img src={Headset} alt={productName} />
        </div>

        <div className='product-name'>
            <h2>{productName}</h2>
        </div>

        <div className='product-price'>
            <p>{productPrice}</p>
        </div>
        <ViewProductButton/>
    </div>
  )
}

export default ProductCard;
