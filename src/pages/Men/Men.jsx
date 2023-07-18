import { ProductsDiscountForMen } from "./VerticalItems";

 

const imgPrimary =
  "https://cdn.dribbble.com/userupload/5783998/file/original-18381902653d1d27d29f1b76dbc8c58f.png?resize=1024x768";


  export const Men = () => {
  return (
    <>
      <div className="pt-20">
        <div className="w-full h-80">
          <img className="w-full h-full" src={imgPrimary} alt="" />
        </div>
        <div className="bg-black  flex">
          <div className="bg-red-300 h-full w-2/3">
            <div className="bg-slate-400 m-4 p-4 h-full">a</div>
          </div>
          <div className="bg-slate-300 h-full w-1/3">
            <div className="bg-slate-400 m-4 p-4 "><ProductsDiscountForMen/></div>
          </div>
        </div>
      </div>
    </>
  );
};
