import React from "react";
import Title from "../title/Title";

export const ItemListContainer = ({texto}) => {
    return (
        <div>
            <Title greeting={texto}/>

        </div>
    )
}

export default ItemListContainer;