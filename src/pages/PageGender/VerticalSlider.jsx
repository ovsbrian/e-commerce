import Slider from "react-slick";
import useYourProducts from "../../utils/Hooks";
import PropTypes from 'prop-types';





// Función para obtener productos con descuento
const getDiscountedProducts = (products, gender) => {
  let discountedProducts = products.filter(
    (product) => product.discount && product.gender === gender
  );
  discountedProducts.sort((a, b) => b.discount - a.discount);
  return [...discountedProducts, ...discountedProducts];
};

// Función para calcular el precio final
const getFinalPrice = (product) => {
  return Math.floor(product.price - product.price * (product.discount / 100));
};

// Componente
export const ProductsDiscount = ({ gender }) => {
  // Obtener productos y filtrar por descuento
  const products = useYourProducts();
  const viewArray = getDiscountedProducts(products, gender);

  // Configuración del carrusel
  const settings = {
    dots: false,
    infinite: true,
    speed: gender === "MEN" ? 900 : 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  // Renderizar componente
  return (
    <>
      <div className="select-none mb-10">
        <div className="flex items-center my-4 w-full justify-center">
          <span className="text-4xl font-semibold">
            Bests Discount for {gender === "MEN" ? "Men" : "Women"}
          </span>
        </div>
        <main className="max-h-screen overflow-y-scroll snap snap-y snap-mandatory mainSelect">
          <Slider {...settings}>
            {viewArray.map((product, index) => {
              const finalPrice = getFinalPrice(product);
              return (
                <section
                  key={`${product.id}-${index}`}
                  className="w-full my-10 snap-start"
                >
                  <a href={`/product/${product.id}`}>
                    <div className="w-full flex justify-center items-center flex-col cursor-pointer">
                      <div className="relative">
                        <img
                          src={product.imageURL}
                          alt={product.name}
                          className="rounded-3xl"
                        />
                        <span className="absolute top-5 left-5 bg-white rounded-full p-5 text-3xl font-semibold text-red-700">
                          % {product.discount}
                        </span>
                        <div className="absolute top-2 right-5 rounded-sm p-5 text-3xl font-semibold text-red-700 flex flex-col items-center">
                          <span className="text-xl line-through">
                            before: $ {product.price}
                          </span>
                          <span>NOW: $ {finalPrice}</span>
                        </div>
                        <div className="absolute bottom-0 left-0 p-2 flex flex-col justify-center items-center w-full">
                          <h2 className="text-2xl font-semibold">{product.name}</h2>
                        </div>
                      </div>
                    </div>
                  </a>
                </section>
              );
            })}
          </Slider>
        </main>
      </div>
    </>
  );
};
ProductsDiscount.propTypes = {
    gender: PropTypes.string.isRequired,
  };
  