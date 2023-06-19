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
      <div className="flex mt-8 select-none px-24  ">
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
                <div
                  className={`w-full flex justify-center items-center flex-col `}
                >
                  <img
                    src={product.imageURL}
                    alt={product.name}
                    className="rounded-3xl"
                  />
                  <h2>{product.name}</h2>
                  <p>Antes: {product.price}</p>
                  <p>Ahora: {finalPrice}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};
