import { useRelatedProducts } from "./useRelatedProducts";
import PropTypes from 'prop-types';
export const RelatedProducts = ({ category, currentProductId }) => {
  const relatedProducts = useRelatedProducts(category, currentProductId);

  return (
    <div className="md:my-10 p-2">
      <h2 className="text-2xl font-bold mb-4">Productos relacionados</h2>
      <div className=" grid grid-cols-2 md:grid-cols-4 gap-4">
        {relatedProducts.map((product) => (
          <>
            <a href={`/product/${product.id}`}>
              <div
                key={product.id}
                className=" bg-white p-4 rounded shadow h-full hover:shadow-lg"
              >
                <img
                  className="w-full h-48 object-cover rounded "
                  src={product.imageURL}
                />
                <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                <p className="text-gray-500 mt-1">${product.price}</p>
              </div>
            </a>
          </>
        ))}
      </div>
    </div>
  );
};


RelatedProducts.propTypes = {
    category: PropTypes.string.isRequired,
    currentProductId: PropTypes.string.isRequired,
  };