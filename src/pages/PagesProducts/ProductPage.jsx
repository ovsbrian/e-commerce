import { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useProduct } from '../../utils/Hooks';
import { Minus, Plus, ShoppingCart } from 'lucide-react';
import { discountProduct } from '../../utils/functions';
 
import { CartContext } from '../Cart/ContextCart';
  // Importa el contexto del carrito de compras

export const PageProduct = () => {
  const { id } = useParams();
  const product = useProduct(id);
  const [count, setCount] = useState(1);
  const { dispatch } = useContext(CartContext); // Utiliza el Hook useContext para acceder al contexto del carrito de compras

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    // Envía una acción de tipo 'ADD_ITEM' con el objeto del producto como carga útil
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
    <>
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
              {/* Agrega un controlador de eventos onClick al botón "Agregar al carrito" */}
              <button
                className="w-60 bg-orange-500 rounded text-white py-2 flex justify-center items-center gap-2 hover:text-slate-100 hover:bg-orange-400"
                onClick={handleAddToCart}
              >
                <ShoppingCart size={28} />
                <span className="font-semibold">Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
   
    </>
  );
};
