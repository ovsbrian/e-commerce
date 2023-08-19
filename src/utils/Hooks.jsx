import { useState, useEffect } from "react";

export const useYourProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("../../data.json")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);
 
  return products;
};
export default useYourProducts;
 

export const useProduct = (id) => {
  const [product, setProduct] = useState(null);
  const products = useYourProducts();
  
  useEffect(() => {
    const foundProduct = products.find((product) => product.id == id);
    setProduct(foundProduct);
  }, [id, products]);
  
  return product;
};
