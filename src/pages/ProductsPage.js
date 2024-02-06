import React, { useEffect, useState } from "react";
import "../styles/productStyle.css";
import { GET_ALL_PRODUCT } from "../services/productService";
import ProductCard from "../components/ProductCard";

const ProductsPage = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    GET_ALL_PRODUCT()
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        {
          console.log("error", error);
        }
      });
  }, []);


  return (
    <>
     <div className="ms-5 container"> 
       <div className="gap-3 row col-12 ">
      {  
      products.map((product) => {
        return (
         
               <ProductCard productData={product}/>
          
        
        );
      })}  </div>
        </div>
    </>
  );
};

export default ProductsPage;
