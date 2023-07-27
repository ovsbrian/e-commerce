import { SectionsGen } from "./SectionGender";
import { ProductsDiscount } from "./VerticalSlider";

import PropTypes from 'prop-types';

export const Gender = ({ gender }) => {
  const imgPrimary =
    gender === "MEN"
      ? "https://cdn.dribbble.com/userupload/6694832/file/original-0b73dd249346684dc5a62e9ce2a9b479.jpg?resize=1024x768"
      : "https://cdn.dribbble.com/userupload/4281249/file/original-f8bbd42dabab71ca8e5414eb9552aa7c.png?resize=1024x768";

  return (
    <>
    
      <div className="pt-20">
        <div className="w-full h-96">
          <img className="w-full h-full" src={imgPrimary} alt="" />
        </div>
        <div className="flex justify-center items-center flex-col md:flex-row">
          <div className="h-full md:w-2/3">
            <div className="m-4 p-4 h-full">
              <SectionsGen gender={gender} />
            </div>
          </div>
          <div className=" h-full md:w-1/3">
            <div className=" m-4 p-4 ">
              <ProductsDiscount gender={gender} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
Gender.propTypes = {
    gender: PropTypes.string.isRequired,
  };
  