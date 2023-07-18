import { SectionsGen } from "./SectionMen";
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
        <div className="   flex">
          <div className="  h-full w-2/3">
            <div className="  m-4 p-4 h-full"><SectionsGen/></div>
          </div>
          <div className=" h-full w-1/3">
            <div className=" m-4 p-4 "><ProductsDiscountForMen/></div>
          </div>
        </div>
      </div>
    </>
  );
};
