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
 

export const useProduct = (id) => {
  const [product, setProduct] = useState(null);
  const products = useYourProducts();
  
  useEffect(() => {
    const foundProduct = products.find((product) => product.id == id);
    console.log('eto ' +foundProduct)
    setProduct(foundProduct);
  }, [id, products]);
  
  return product;
};
