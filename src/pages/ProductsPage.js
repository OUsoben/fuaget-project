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
      <div className=" mt-5 container-xxl ">
        <div className=" row gap-xl-4 gap-3 ms-lg-5">
          {products.map((product) => {
            return (
              <div className="col-xl-2 ms-xl-4 col-lg-2 me-xl-4 me-lg-5  col-lg-1  col-md-4 col-sm-4 me-sm-2 ms-5 col-5 ">
                <ProductCard productData={product} />
              </div>
            );
          })}{" "}
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
