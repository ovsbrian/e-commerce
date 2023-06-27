export const CartProduct = ({img, nombre,precio}) =>{
    return(<>
    <div className="w-80 h-80   my-4 transition-transform transform hover:scale-105 hover:cursor-pointer hover:z-20">
        <div className=" mb-4 p-2 w-full h-60 flex justify-center items-center">
            <img className="h-72" src={img} alt="IMAGEN" />
        </div>
        <div className=" p-2 mt-5 w-full h-20 flex flex-col ">
            <span className="text-xl">${precio}</span>
            <span className="opacity-60">{nombre}</span>
        </div>
    </div>
    </>)
}