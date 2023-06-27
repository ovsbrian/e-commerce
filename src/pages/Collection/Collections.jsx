import { DirectionOrder } from "../../componentes/DirectionOrder";
import useYourProducts from "../../utils/Hooks";
import { CartProduct } from "./CartProduct";
import { ContainerFilter } from "./ContainerFilter";
 

export const Collections = () => {
  const products = useYourProducts();
  return (
    <>
      <div className="pt-28 px-20">
        <DirectionOrder text="Collections" />
        <div className="flex">
          <ContainerFilter />
          <div className="grid grid-cols-3 gap-4">
          {products.map(product => (
            <CartProduct
              key={product.id}
              nombre={product.name}
              precio={product.price}
              img={product.imageURL}
            />
          ))}
          </div>
        </div>
      </div>
    </>
  );
};
