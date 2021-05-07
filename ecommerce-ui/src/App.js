import Header from './components/Header';
import Basket from './components/Basket';
import Airbnbs from './components/Airbnbs';
import { useState } from 'react';

function App() {
  const [shoppingCart, setCartItems]= useState([])
  const onAdd=(post)=>{
    const exist= shoppingCart.find((x) => x.id === post.id);
    if (exist){
      setCartItems(shoppingCart.map((x) => x.id === post.id ? {...exist, qty: exist.qty +1}: x 
        )
        );
    }else{
      setCartItems([...shoppingCart, {...post, qty: 1 }]);
    }
  };
  const onRemove=(post) => {
    const exist = shoppingCart.find((x) => x.id === post.id);
    if (exist.qty===1){
      setCartItems(shoppingCart.filter((x) => x.id !== post.id));
    } else {
      setCartItems(shoppingCart.map((x) => x.id === post.id ? {...exist, qty: exist.qty -1}: x 
      )
      )
    }
  }
  return (
    <div className="App">
       <Header countShoppingCart={shoppingCart.length}/>
<div className="row">
  <Airbnbs onAdd={onAdd}/>
<Basket onAdd={onAdd}  onRemove={onRemove} shoppingCart ={shoppingCart} />
</div>
    </div>
  );
}

export default App;
