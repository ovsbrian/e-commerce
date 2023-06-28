

export const CartProduct = ({img, nombre,precio}) =>{
      // Limitar el nombre a un número máximo de palabras
  const MAX_WORDS = 4; // Cambia este valor según tus necesidades

  // Función para truncar el nombre
  const truncateNombre = (nombre, maxWords) => {
    const words = nombre.split(' ');
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...';
    }
    return nombre;
  };

  const nombreTruncado = truncateNombre(nombre, MAX_WORDS);

    return(
    <>
    <div className="w-80 h-80   my-4 transition-transform transform hover:scale-105 hover:cursor-pointer hover:z-20">
        <div className=" mb-4 p-2 w-full h-60 flex justify-center items-center">
            <img className="h-72" src={img} alt="IMAGEN" />
        </div>
        <div className=" p-2 mt-5 w-full h-20 flex flex-col ">
            <span className="text-xl m-2">${precio}</span>
            <span className="opacity-60 mx-2">{nombreTruncado}</span>
        </div>
    </div>
    </>
    )
}


import PropTypes from 'prop-types';

CartProduct.propTypes = {
  img: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
};
