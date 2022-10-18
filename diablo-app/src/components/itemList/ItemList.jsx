import Item from "../item/Item";
import React from "react";

const ItemList = ({data =[]}) => {
    return (
        data.map(vino=> <Item key={vino.id} info={vino}/>)
    );
}

export default ItemList;