import List from "./List"
import React from "react"

const ItemsList = props => {

    return <ul> 
        {props.products.map(pro => {
           return <List product={pro}/>
        })}
        <h2>Total Value Worth Of Products is Rs.{props.Total}</h2>
    </ul>
}

export default ItemsList