import { useState, useEffect } from "react";
import { DirectionOrder } from "../../componentes/DirectionOrder";
import useYourProducts from "../../utils/Hooks";
import { CartProduct } from "./CartProduct";
import { ContainerFilter } from "./ContainerFilter";
import { NoResults } from './NoResults';

import '../../utils/spinners.css'
export const Collections = () => {
  const products = useYourProducts();
  const [isLoading, setIsLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showNoResults, setShowNoResults] = useState(false); // Nueva variable de estado

  useEffect(() => {
    if (products) {
      setFilteredProducts(products);
      setIsLoading(false);
    }
  }, [products]);

  const handleFilterChange = ({ selectedGender, selectedSizeRange, selectedCategory }) => {
    // Realizar la lógica de filtrado aquí utilizando los valores seleccionados
    const filtered = products.filter((product) => {
      if (selectedGender && product.gender !== selectedGender) {
        return false;
      }
      if (selectedSizeRange) {
        if (selectedSizeRange === "42+") {
          if (product.size < 42) {
            return false;
          }
        } else {
          const [minSize, maxSize] = selectedSizeRange.split('-').map(Number);
          if (minSize && product.size < minSize) {
            return false;
          }
          if (maxSize && product.size >= maxSize) {
            return false;
          }
        }
      }
      if (selectedCategory && product.category !== selectedCategory) {
        return false;
      }
      return true;
    });

    setFilteredProducts(filtered);

    // Actualizar showNoResults según sea necesario
    if (filtered.length === 0) {
      setShowNoResults(true);
    } else {
      setShowNoResults(false);
    }
  };

  return (
    <>
      <div className="pt-28 px-20">
        <DirectionOrder text="Collections" />
        <div className="flex">
          <ContainerFilter onFilterChange={handleFilterChange} />
          <div className="grid grid-cols-3 gap-6 w-full h-full">
            {isLoading ? (
           <div className="flex justify-center items-center w-full col-span-3">
            <span className="loader"></span>
            </div>
            ) : showNoResults ? (
              // Mostrar el componente NoResults si showNoResults es verdadero
              <div className="col-span-3">
                <NoResults />
              </div>
            ) : (
              filteredProducts.map((product) => (
                <CartProduct
                  key={product.id}
                  nombre={product.name}
                  precio={product.price}
                  img={product.imageURL}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};
