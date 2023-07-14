import  { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useProduct } from '../../utils/Hooks';
import { Minus, Plus } from 'lucide-react';
import { discountProduct } from '../../utils/functions';
import { CartContext } from '../Cart/ContextCart';
import { CartButton } from './CartButton';
import { RelatedProducts } from './RelatedProducts';

export const PageProduct = () => {
  const { id } = useParams();
 
   
  const product = useProduct(id);
 

  const [count, setCount] = useState(1);
  const { dispatch } = useContext(CartContext);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_ITEM', item: product, quantity: count });
  };

  if (!product) {
    return (
      <>
        <div className="h-96 pt-40">
          <span className="text-lg">{id}Cargando...</span>
        </div>
      </>
    );
  }

  return (
    // Agrega un <div> con position: relative alrededor del contenido de tu página
    <div className='relative'>
      <div className="pt-36 flex flex-col h-auto justify-center items-center mx-52">
        <div className="flex h-96 p-2">
          <div className="w-1/2 mr-10">
            <img
              className="rounded h-full w-full"
              src={product.imageURL}
            />
          </div>
          <div className="w-1/2 p-4 ml-10">
            <span className="text-orange-500 font-semibold">{product.brand}</span>
            <p className="text-3xl font-bold my-2">{product.name}</p>
            <p className="py-4 text-sm">{product.description}</p>
            {product.discount ? (
              <div className="flex flex-col">
                <div className="flex gap-2">
                  <span className="text-3xl font-bold">
                    ${discountProduct(product.discount, product.price)}
                  </span>
                  <div className="flex items-start text-orange-500">
                    <span className="px-1 bg-orange-200 rounded font-bold">
                      -{product.discount}%
                    </span>
                  </div>
                </div>
                <div className='mt-1'>
                  <span className="opacity-50 line-through">${product.price}</span>
                </div>
              </div>
            ) : (
              <p className="text-3xl font-bold">${product.price}</p>
            )}
            <div className="flex gap-3 items-center mt-4">
              <div className="bg-gray-50 w-24 flex justify-center items-center">
                <button
                  className="p-2 text-orange-500"
                  onClick={handleDecrement}
                >
                  <Minus size={18} />
                </button>
                <span className="p-2">{count}</span>
                <button
                  className="p-2 text-orange-500"
                  onClick={handleIncrement}
                >
                  <Plus size={18} />
                </button>
              </div>
              {/* Renderiza el componente CartButton aquí */}
              <CartButton onAddToCart={handleAddToCart} />
            </div>
          </div>
        </div>
        <RelatedProducts category={product.category} currentProductId={product.id} />
      </div>
    </div>
  );
};
