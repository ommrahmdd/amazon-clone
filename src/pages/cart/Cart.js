import React from "react";
import { useSelector } from "react-redux/es/exports";
import { Link } from "react-router-dom";
import "./cart.css";
export default function Cart() {
  let products = useSelector((state) => state.cart);
  let lang = useSelector((state) => state.lang.lang);
  let handleDelete = () => {};
  console.log(products);
  return (
    <>
      <div
        className={`customCart ${
          lang == "en" ? "cart__text-en" : "cart__text-ar"
        }`}
        dir={lang == "en" ? "ltr" : "rtl"}
      >
        <div className="row ">
          <div className="col-12 ">
            <h2 className="py-4 fs-1">
              {lang == "en" ? "Shopping Cart" : "عربة التسوق"}
            </h2>
          </div>
          {products.length > 0 ? (
            products.map((product, index) => (
              <Link
                to={`/${product.product.en.category}/${product.product.en.id}`}
                className="cart__link"
              >
                <div className="col-12 d-flex product__cart">
                  <img
                    className="product__cart-img"
                    src={product.product.en.imgs[0]}
                  />
                  <div className="d-flex flex-column align-items-start justify-content-around">
                    {lang == "en" ? (
                      <>
                        <h2>{product.product.en.title}</h2>
                        <h3>Price: {product.product.en.price}EG</h3>
                        <h4>
                          Quantity: <span>{product.quantity}</span>
                        </h4>
                        <button className="btn btn-danger fs-3">Delete</button>
                      </>
                    ) : (
                      <>
                        <h2>{product.product.ar.title}</h2>
                        <h3>السعر: {product.product.en.price}جنية</h3>
                        <h4>
                          الكمية: <span>{product.quantity}</span>
                        </h4>
                        <button className="btn btn-danger fs-3">
                          حذف المنتج
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <h3 className=" col-12 text-center mt-5">No Products in cart</h3>
          )}
        </div>
      </div>
    </>
  );
}
