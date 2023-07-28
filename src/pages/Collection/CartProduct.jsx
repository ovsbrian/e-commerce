import { Link } from "react-router-dom";

export const CartProduct = ({ img, nombre, precio, id, disc }) => {
  // Limitar el nombre a un número máximo de palabras
  const MAX_WORDS = 4; // Cambia este valor según tus necesidades

  // Función para truncar el nombre

  const nombreTruncado = truncateNombre(nombre, MAX_WORDS);

  return (
    <>
      <div className="w-full mb-10 md:mb-auto md:w-80 md:h-80   my-4 transition-transform transform hover:scale-105 hover:cursor-pointer hover:z-20">
        <Link to={`/product/${id}`}>
          <div className=" mb-4 p-2 w-full h-60 flex justify-center items-center ">
            <img className="h-72" src={img} alt="IMAGEN" />
            {disc ? (
              <div className="absolute bg-orange-500 top-3 right-5 w-2/5 h-1/5 rounded flex justify-center items-center transform rotate-45">
                <span className="text-5xl font-semibold">% {disc}</span>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className=" p-2 mt-5 w-full h-20 flex flex-col ">
            <span className="opacity-60 mx-2">{nombreTruncado}</span>
            <span className="text-xl m-2">${precio}</span>
          </div>
        </Link>
      </div>
    </>
  );
};

import PropTypes from "prop-types";
import { truncateNombre } from "../../utils/functions";

CartProduct.propTypes = {
  img: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  disc: PropTypes.number.isRequired,
};
