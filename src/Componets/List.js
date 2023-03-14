import Button from "./UI/Button"

 const List = props => {
    
return <li>
    {props.product.Price} - {props.product.Item} {props.product.Quantity}
    <Button>Delete Product</Button>
</li>
 }

 export default List