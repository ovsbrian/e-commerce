import useYourProducts from "../../utils/Hooks";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
export const ProductsDiscount = () => {
  const products = useYourProducts();
  let discountedProducts = products.filter((product) => product.discount);
  discountedProducts.sort((a, b) => b.discount - a.discount);
  const viewArray = [...discountedProducts, ...discountedProducts];
  return (
    <>
      <div className=" select-none px-24 mb-10">
        <div className="flex items-center m-10">
          <span className="text-4xl font-semibold">Bests Discount</span>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          navigation={false}
          className="mySwiper"
        >
          {viewArray.map((product, index) => {
            const finalPrice = Math.floor(
              product.price - product.price * (product.discount / 100)
            );
            return (
              <SwiperSlide key={`${product.id}-${index}`}>
                <a href={`/product/${product.id}` }>

              
                <div
                  className={`w-full flex justify-center items-center flex-col cursor-pointer `}
                >
                  <div className="relative">
                    <img
                      src={product.imageURL}
                      alt={product.name}
                      className="rounded-3xl"
                    />
                    <span className="absolute top-5 left-5 bg-white rounded-full p-5 text-3xl font-semibold text-red-700">
                      % {product.discount}
                    </span>
                    <div className="absolute top-2 right-5  rounded-sm p-5 text-3xl font-semibold text-red-700 flex flex-col items-center">
                      <span className="text-xl line-through">
                        before: $ {product.price}
                      </span>
                      <span>NOW: $ {finalPrice}</span>
                    </div>

                    <div className="absolute bottom-0 left-0 p-2 flex flex-col justify-center items-center w-full ">
                      <h2 className="text-2xl font-semibold">{product.name}</h2>
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
