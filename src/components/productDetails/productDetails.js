import React from 'react';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot, doc, getDoc } from "firebase/firestore"
import { useFirestoreDocument } from "@react-query-firebase/firestore";
import { db } from "../firebase";

const ProductDetails = (props) => {

    const params = useParams();
    const [product, setProduct] = useState([])

    useEffect(() => {
        const ref = doc(db, "products", params.id)
        // getDoc(ref).then((doc)=>setProduct(doc.data()))
        onSnapshot(ref, (doc) => setProduct([{
            id: doc.id,
            data: doc.data()
        }]))

    }, [])

    // console.log(product)
    return (<>
    <div>
        {product.map((product, index) => {
            return (
                <div className='row justify-content-center' key={product.id}>
                    <div className="card col-3 m-5 " >
                        <img src={product.data.Img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{product.data.name}</h5>


                        </div>
                    </div>
                </div>
            )
        })}

</div>
    </>);
}

export default ProductDetails;