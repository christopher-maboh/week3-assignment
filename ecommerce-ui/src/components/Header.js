import React from 'react'
export default function Header(props){
    const{countShoppingCart}=props
   return(
    <header className="row block center">
    <div>
    <a href="#">
    <h1>Airbnb Rentals</h1>
    </a>
    </div>
    <div>
        <a href="#/Where are you going">
            <h2>Location:Where are you going </h2>
        </a>
    </div>
    <div>
        <a href="#/Add dates">
            <h2>Checkin: Add dates </h2>
        </a>
    </div>
    <div>
        <a href="#/Add dates">
            <h2>Checkout:Add dates</h2>
        </a>
        </div>
        <div>
        <a href="#/Add guest">
            <h2>Guest:Add guest</h2>
        </a>
        </div>
        <div>
    <a href="#/cart">
        cart{''}{countShoppingCart ?(
            <button className= "badge">{countShoppingCart}</button>
        ) : (
            ''
        )}
        </a>{''}
    <a href="#/Sign In">sign In</a>
    </div>
    </header>
)
}


