import React from 'react';
import SellerAdminForm from './Componets/SellerAdminForm';
import ItemsList from './Componets/ItemsList';

function App() {

  const products = [
    {Item : 'Iphone',Price : 40000, Quantity : 2},
    {Item : 'Sony Play Station',Price : 35000, Quantity : 10}
]

const [UpdatedProducts,setProducts]=React.useState(products)

const AddProducts = products => {
  setProducts(prv_products =>{
    return [products,...prv_products]
  })
  
}

let TotalStack = 0
UpdatedProducts.map((products)=>TotalStack=TotalStack + (products.Price*products.Quantity))

// React.useState()

React.useEffect(()=>{
  localStorage.setItem('ProductList',JSON.stringify(UpdatedProducts))
  console.log(localStorage)
},[UpdatedProducts])


  return (
    <div className="App">
      <SellerAdminForm  onAddProducts={AddProducts}/>
      <ItemsList products={UpdatedProducts} Total={TotalStack}/>
    </div>
  );
}

export default App;
