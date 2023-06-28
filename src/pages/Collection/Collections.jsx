import { useState } from "react";
import { DirectionOrder } from "../../componentes/DirectionOrder";
import useYourProducts from "../../utils/Hooks";
import { CartProduct } from "./CartProduct";
import { ContainerFilter } from "./ContainerFilter";
import { NoResults } from './NoResults'; // Importar el componente NoResults

export const Collections = () => {
  const products = useYourProducts();
  // Establecer el estado inicial de filteredProducts igual a la lista de productos
  const [filteredProducts, setFilteredProducts] = useState(products);
  console.log('Lista de productos:', products);
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
  };

  return (
    <>
      <div className="pt-28 px-20">
        <DirectionOrder text="Collections" />
        <div className="flex">
          <ContainerFilter onFilterChange={handleFilterChange} />
          <div className="grid grid-cols-3 gap-6 w-full h-full">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <CartProduct
                  key={product.id}
                  nombre={product.name}
                  precio={product.price}
                  img={product.imageURL}
                />
              ))
            ) : (
              // Mostrar el componente NoResults si no hay resultados
              // Asegurarse de que el componente ocupe todas las columnas de la cuadrícula
              <div className="col-span-3">
                <NoResults />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
