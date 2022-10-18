import React from "react";
import Title from "../title/Title";
import ItemCount from "../itemcount/ItemCount";

export const ItemListContainer = ({texto}) => {

    const onAdd = (quantity) => {
        console.log(`compraste ${quantity} unidades`)
    }

    return (
        <div>
            <Title greeting={texto}/>
            <ItemCount initial={1} stock={5} onAdd={onAdd} />

        </div>
    )
}

export default ItemListContainer;