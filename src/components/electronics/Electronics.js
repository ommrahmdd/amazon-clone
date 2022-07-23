import React from "react";
import {useState, useEffect} from 'react'
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
import { db } from "../firebase";
import { Link } from "react-router-dom";

const Electronics = () => {
    
    const [products, setProducts] = useState([])
    useEffect(() => {
        const q = query(collection(db, 'products'))
        
        onSnapshot(q, (querySnapshot) => {
        
          setProducts(querySnapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
          })))
        })
        
      },[])
    //   console.log(products)
    return ( <>
        <div className="row justify-content-around">
            {products.map((product, index) => {
                if(product.data.CateogryID==8){
                    return (
                        <div className="card col-3 m-5" key={index} style={{position:"relative"}}>                        
                            <img src={product.data.Img} className="card-img-top" alt="..." />
    
                            <div className="card-body">
    
                               
                               
    
                                <Link to={`/productDetails/${product.id}`} >
                                     <h5 className="card-title">{product.data.name}</h5> 
                                     </Link>
                               
                            </div>
                        </div>
    
                    );
                }
               
            })}

        </div>
    
    </> );
}
 
export default Electronics;