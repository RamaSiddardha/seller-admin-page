import Input from "./UI/Input";
import Button from "./UI/Button";
import React from "react";



const setReducer = (state, action) => {
  if (action.type === "item input") {
    return { Item: action.value, Price: state.Price, Quantity: state.Quantity };
  }
  if (action.type === "price input") {
    return { Item: state.Item, Price: action.value, Quantity: state.Quantity };
  }
  if (action.type === "quantity input") {
    return { Item: state.Item, Price: state.Price, Quantity: action.value };
  }

  return {
    Item: "",
    Price: "",
    Quantity: "",
  };
};

const SellerAdminForm = (props) => {
  const [Newproduct, productDispatch] = React.useReducer(setReducer, {
    Item: "",
    Price: 0,
    Quantity: 0,
  });
  //   const [products, setProduct] = React.useState(props.products);

  const textHandler = (e) => {
    productDispatch({ type: "item input", value: e.target.value });
  };

  const priceHandler = (e) => {
    productDispatch({ type: "price input", value: e.target.value });
  };

  const quantityHandler = (e) => {
    productDispatch({ type: "quantity input", value: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // setProduct((prv) => {
    //   return [...prv, Newproduct];
    // });
    props.onAddProducts(Newproduct);
   
  };

  return (
    <form onSubmit={submitHandler}>
      <Input
        type="text"
        id="product name"
        name="Name Of The Product:"
        onChange={textHandler}
       
      />
      <Input
        type="number"
        id="Price"
        name="Price Of The Product:"
        onChange={priceHandler}
        
      />
      <Input
        type="number"
        id="quantity"
        name="Quantity:"
        onChange={quantityHandler}
       
      />
      <Button type="submit">Add Items</Button>
    </form>
  );
};

export default SellerAdminForm;
