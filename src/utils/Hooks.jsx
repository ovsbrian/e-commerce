import { useState, useEffect } from "react";

export const useYourProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("../../public/data.json")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);
  return products;
};
export default useYourProducts;
