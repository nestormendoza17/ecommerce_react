import "./itemListContainer.css";
import React, {useState, useEffect} from "react";
import {getFirestore, collection, getDocs, query, where} from "firebase/firestore";
import ItemList from "../ItemList/ItemList";
import {useParams} from 'react-router-dom';


const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "vinos");

    if (categoryId) {
      const queryFilter = query(
        queryCollection,
        where("category", "==", categoryId)
      );
      getDocs(queryFilter).then((res) =>
        setData(
          res.docs.map((vino) => ({ id: vino.id, ...vino.data() }))
        )
      );
    } else {
      getDocs(queryCollection).then((res) =>
        setData(
          res.docs.map((vino) => ({ id: vino.id, ...vino.data() }))
        )
      );
    }
  }, [categoryId]);

  return (
    <div className="container">
      <div className="row">
        <ItemList data={data} />
      </div>
    </div>
  );
};

export default ItemListContainer;