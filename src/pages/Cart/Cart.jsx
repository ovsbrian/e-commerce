import { useContext } from "react";
import { CartContext } from "./ContextCart";
import { capitalizeFirstLetter } from "../../utils/functions";
import { Heart, Trash2 } from "lucide-react";
import './cart.css'
import { CartMenu } from "./CartMenu";
export const Cart = () => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div className="h-auto pt-32 flex">
      <div className="mx-20  w-2/4">
        <h2 className="text-xl font-semibold ml-3">Bolsa de compras</h2>
        <div className="flex flex-col gap-8 mt-8 w-full">
          {state.cart.map((item) => (
            <div key={item.id} className="  flex border-b-2 border-opacity-30">
              <div className="w-36">
                <img src={item.imageURL} alt={item.name} className="p-4" />
              </div>
              <div className="  w-96 pt-3 mr-20    ">
                <div className="flex flex-col text-sm">
                  <span className="font-semibold text-lg">{item.name}</span>
                  <span className="">{capitalizeFirstLetter(item.gender)}</span>
                  <span className="">
                    {capitalizeFirstLetter(item.category)}
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="text">Talla {item.size}</span>
                  <span>Cantidad {item.quantity}</span>
                </div>
                <div className="flex gap-2 mt-4 mb-4">
                  <button>
                    <Heart className="heartIcon"  size={20} />
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
              <div className="pt-3 flex gap-2">
                {item.discount ? (
                  <span className="text-lg line-through opacity-80">
                    ${item.discount}
                  </span>
                ) : (
                  ""
                )}

                <span className="text-lg font-semibold"> ${item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CartMenu/>
    </div>
  
  );
};
