import { useState, useEffect } from "react";
import useYourProducts from "../../utils/Hooks";
 

export const useRelatedProducts = (category, currentProductId) => {
    
  const [relatedProducts, setRelatedProducts] = useState([]);
  const products = useYourProducts();

  useEffect(() => {
    const filteredProducts = products.filter(product => product.category === category && product.id !== currentProductId);
    setRelatedProducts(filteredProducts.slice(0, 4));
  }, [category, currentProductId, products]);

  return relatedProducts;
};
