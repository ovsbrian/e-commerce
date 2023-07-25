import { useState, useEffect } from "react";
import { DirectionOrder } from "../../componentes/DirectionOrder";
import useYourProducts from "../../utils/Hooks";
import { CartProduct } from "./CartProduct";
import { ContainerFilter } from "./ContainerFilter";
import { NoResults } from './NoResults';
import { FilterTag } from "./FilterTag";

import '../../utils/spinners.css'

export const Collections = () => {
  const products = useYourProducts();
  const [isLoading, setIsLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showNoResults, setShowNoResults] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState([]);

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
    setShowNoResults(filtered.length === 0);

    // Actualizar los filtros aplicados
    const newFilters = [];
    if (selectedGender) {
      newFilters.push({ name: "Gender", value: selectedGender });
    }
    if (selectedSizeRange) {
      newFilters.push({ name: "Size", value: selectedSizeRange });
    }
    if (selectedCategory) {
      newFilters.push({ name: "Category", value: selectedCategory });
    }
    setAppliedFilters(newFilters);
  };

  const removeFilter = (name) => {
    const newFilters = appliedFilters.filter((filter) => filter.name !== name);
    setAppliedFilters(newFilters);

    // Refiltrar los productos según los filtros restantes
    let selectedGender = null;
    let selectedSizeRange = null;
    let selectedCategory = null;

    for (const filter of newFilters) {
      if (filter.name === "Gender") {
        selectedGender = filter.value;
      }
      if (filter.name === "Size") {
        selectedSizeRange = filter.value;
      }
      if (filter.name === "Category") {
        selectedCategory = filter.value;
      }
    }

    handleFilterChange({ selectedGender, selectedSizeRange, selectedCategory });
  };

  return (
    <>
      <div className="pt-28 md:px-20">
        <DirectionOrder text="Collections" />
        <div className="flex flex-col md:flex-row">
          <ContainerFilter onFilterChange={handleFilterChange} />
          <div className="md:grid md:grid-cols-3 md:gap-6 w-full h-full">
            {isLoading ? (
              <div className="flex justify-center items-center w-full col-span-3">
                <span className="loader"></span>
              </div>
            ) : showNoResults ? (
              <div className="col-span-3">
                <NoResults />
              </div>
            ) : (
              <>
                <div className="md:col-span-3 flex flex-wrap">
                  {appliedFilters.map((filter) => (
                    <FilterTag
                      key={filter.name}
                      name={filter.name}
                      value={filter.value}
                      onRemove={removeFilter}
                    />
                  ))}
                </div>
                {filteredProducts.map((product) => (
                  <CartProduct
                    key={product.id}
                    id={product.id}
                    nombre={product.name}
                    precio={product.price}
                    img={product.imageURL}
                    disc={product.discount}
                  />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
