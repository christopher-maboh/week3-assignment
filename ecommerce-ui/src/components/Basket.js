import React from 'react'
export default function Basket(props){
    const {shoppingCart, onAdd, onRemove} = props;
    const itemsPrice= shoppingCart.reduce((a , c) => a + c.price * c.qty, 0);
    const taxPrice= itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 50;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
return (
<aside className="block col-1">
    <h2> Shopping Cart</h2>
<div>{shoppingCart.length ===0 && <div>chart is empty</div>}</div>
{shoppingCart.map((item) => (
  <div key={item.id} className="row">
      <div className="col-2">{item.name}</div>
   <div className= "col-2">
       <button onClick={() => onAdd(item)} className="add">
           +
       </button>
       <button onClick={() => onRemove(item)} className="remove">
           -
       </button>
   </div>
   <div className="col-2 text-right">
       {item.qty} x ${item.price.toFixed(2)}
   </div>

   </div>
))}
{shoppingCart.length !== 0 && (
    <>
    <hr></hr>
    <div className= "row">
        <div className= "col-2" >Items Price</div>
        <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
    </div>
    <div className= "row">
        <div className= "col-2" >Tax Price</div>
        <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
    </div>
    <div className= "row">
        <div className= "col-2" >Shipping Price</div>
        <div className="col-1 text-right">${shippingPrice.toFixed(2)}</div>
    </div>
    <div className= "row">
        <div className= "col-2" ><strong>Total Price</strong></div>
        <div className="col-1 text-right">${totalPrice.toFixed(2)}</div>
    </div>
    <hr>
    <div className= "row">
<button onClick={() => alert ('Implement Checkout')}> Checkout</button>
    </div>
    </hr>
    </>
)}
</aside>
);

}