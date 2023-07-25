// Importaciones
import useYourProducts from "../../utils/Hooks";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";

import './discount.css'
import { truncateNombre, useWindowWidth } from "../../utils/functions";

 
 



// Función para obtener productos con descuento
const getDiscountedProducts = (products) => {
  let discountedProducts = products.filter((product) => product.discount);
  discountedProducts.sort((a, b) => b.discount - a.discount);
  return [...discountedProducts, ...discountedProducts];
};

// Función para calcular el precio final
const getFinalPrice = (product) => {
  return Math.floor(product.price - product.price * (product.discount / 100));
};

// Componente
export const ProductsDiscount = () => {
  // Obtener productos y filtrar por descuento
  const products = useYourProducts();
  const viewArray = getDiscountedProducts(products);
  const width = useWindowWidth();
  let slidesPerView = 3;
  if (width < 768) {
    slidesPerView = 2;
  }

  // Renderizar componente
  return (
    <>
      <div className=" select-none md:px-24 md:mb-10">
        <div className="flex p-2 items-center md:m-10">
          <span className="text-4xl font-semibold">Bests Discount</span>
        </div>
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={30}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          navigation={false}
          className="mySwiper"
          
        >
          {viewArray.map((product, index) => {
            const finalPrice = getFinalPrice(product);
            return (
              <SwiperSlide key={`${product.id}-${index}`}>
                <a href={`/product/${product.id}`}>
                  <div
                    className={`h-96 md:h-full w-full flex justify-center  items-center   cursor-pointer `}
                  >
                    <div className="relative h-96 md:h-auto">
                      <img
                        src={product.imageURL}
                        alt={product.name}
                        className="rounded-3xl sm:img-fixed-height "
                      />
                      <span className="absolute top-1 left-0 md:top-5 md:left-5 bg-white rounded-full p-5 text-3xl font-semibold text-red-700">
                        % {product.discount}
                      </span>
                      <div className="md:absolute top-2 right-5 items-start ml-2 rounded-sm md:p-5   font-semibold text-red-700 flex flex-col md:items-center">
                        <span className="text-xl line-through">
                          before: $ {product.price}
                        </span>
                        <span className="text-xl">NOW: $ {finalPrice}</span>
                      </div>

                      <div className="md:absolute bottom-0 left-0 p-2 flex flex-col justify-center items-center w-full ">
                        <h2 className="text-2xl  font-semibold">
                          {truncateNombre(product.name,3)}
                        </h2>
                      </div>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};
