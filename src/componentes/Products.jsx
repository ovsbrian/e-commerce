import { useState, useEffect } from "react";

export const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("../../public/data.json")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <>
      {products.map((product) => (
        <div
          className="flex justify-center flex-col items-center w-80"
          key={product.id}
        >
          <img className="h-64" src={product.imageURL} alt="" />
          <li>{product.name}</li>
          <p>{product.description}</p>
        </div>
      ))}
    </>
  );
};
