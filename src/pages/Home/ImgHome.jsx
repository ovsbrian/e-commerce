import "./imgHome.css";
import useYourProducts from "../../utils/Hooks";
export const ImgHome = () => {
  const products = useYourProducts();

  if (products.length === 0) {
    return (
      <div className="w-full h-80 flex justify-center items-center ">
        <div className="text-4xl">Cargando...</div>
      </div>
    );
  }
  return (
    <>
      <div className="pt-24 flex-col md:flex-row md:h-96 md:gap-36 bg-custom flex items-center justify-center ">
        <div className="flex flex-col justify-center items-center h-full">
          <span className="text-4xl font-bold">{products[0].name}</span>
        </div>

        <div className=" w-full md:w-80 bg-slate-400 h-80 md:h-full">
          <img className="h-full w-full" src={products[0].imageURL} alt="" />
        </div>
      </div>
    </>
  );
};
