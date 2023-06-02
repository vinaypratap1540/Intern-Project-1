import React from "react";
import "./product.scss";
import Card from "../card/Card";
import { Grid } from "react-loader-spinner";

const Product = ({ products }) => {
  console.log(products);
  return (
    <div className="product">
      <div className="head">
        <h2>Entertain Everyday</h2>
        <span
          style={{
            height: "3px",
            backgroundColor: "black",
            border: "2px solid black",
            width: "100px",
            marginTop: "20px",
          }}
        >
          <hr />
        </span>
        <p>
          Step into a world where every story unfolds, where laughter dances
          with tears, and where imagination takes flight. With our vast library
          of TV shows and movies, we bring you the key to a magical realm of
          entertainment. Unlock your dreams and indulge in a symphony of
          emotions today.
        </p>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto auto ",
          gap: "10px",
          padding: "10px",
        }}
      >
        {products.map((item) => (
          <Card key={item._id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Product;
