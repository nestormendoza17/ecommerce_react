import Item from "../Item/Item";
import React from "react";

const ItemList = ({data =[]}) => {
    return (
        data.map(data=> <Item key={data.id} info={data}/>)
    );
}

export default ItemList;