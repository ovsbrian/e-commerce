import { useContext } from "react";
import { CartContext } from "./ContextCart";
import { capitalizeFirstLetter } from "../../utils/functions";
import { Heart, Trash2 } from "lucide-react";
import "./cart.css";
import { CartMenu } from "./CartMenu";

export const Cart = () => {
  const { state, dispatch } = useContext(CartContext);

 
  return (
    <div className="h-auto pt-32 flex flex-col md:flex-row justify-center  items-center md:justify-normal md:items-start">
      <div className="md:mx-20 w-3/4 md:w-2/4">
        {state.cart.length > 0 ? (
          <>
            <h2 className="text-xl font-semibold ml-3">Bolsa de compras</h2>
            <div className="flex  flex-col gap-8 mt-8 w-full">
              {state.cart.map((item) => (
                <div
                  key={item.id}
                  className="flex border-b-2 border-opacity-30"
                >
                  <div className="w-36">
                    <img src={item.imageURL} alt={item.name} className="p-4" />
                  </div>
                  <div className="md:w-96 pt-3 md:mr-20">
                    <div className="flex flex-col text-sm">
                      <span className="font-semibold text-lg">{item.name}</span>
                      <span>{capitalizeFirstLetter(item.gender)}</span>
                      <span>{capitalizeFirstLetter(item.category)}</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text">Talla {item.size}</span>
                      <span>Cantidad {item.quantity}</span>
                    </div>
                    <div className="flex gap-2 mt-4 mb-4">
                      <button>
                        <Heart className="heartIcon" size={20} />
                      </button>
                      <button
                        onClick={() =>
                          dispatch({ type: "REMOVE_ITEM", id: item.id })
                        }
                      >
                        <Trash2 className="delete" size={20} />
                      </button>
                    </div>
                  </div>
                  <div className="pt-3 flex flexco gap-2">
                    {item.discount ? (
                      <>
                        <span className="text-lg line-through opacity-80">
                          ${item.price}
                        </span>
                        <span className="text-lg font-semibold">
                          $
                          {Math.floor(
                            item.price - item.price * (item.discount / 100)
                          )}
                        </span>
                      </>
                    ) : (
                      <span className="text-lg font-semibold">
                        ${item.price}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          // Aquí puedes agregar lo que quieres mostrar cuando el carrito está vacío
          <div className="w-full flex justify-center flex-col items-center h-48">
            <h4>No hay productos en tu carrito!</h4>
            <div className="flex gap-1">
              <p>Vea nuestros productos</p>
              <a className="text-red-600" href="/collections">
                {" "}
                aquí
              </a>
            </div>
          </div>
        )}
      </div>
      {/* Muestra CartMenu solo cuando el carrito tiene productos */}
      {state.cart.length > 0 && <CartMenu />}
    </div>
  );
};
