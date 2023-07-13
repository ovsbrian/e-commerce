import  { useState } from 'react';
import PropTypes from 'prop-types';
import { ShoppingCart } from 'lucide-react';
import Alert from './AlertAddCart';

export const CartButton = ({ onAddToCart }) => {
  const [alertVisible, setAlertVisible] = useState(false);

  const handleAddToCart = () => {
    onAddToCart();
    setAlertVisible(true);
    setTimeout(() => setAlertVisible(false), 3000);
  };

  return (
    <>
      <button
        className="w-60 bg-orange-500 rounded text-white py-2 flex justify-center items-center gap-2 hover:text-slate-100 hover:bg-orange-400"
        onClick={handleAddToCart}
      >
        <ShoppingCart size={28} />
        <span className="font-semibold">Add to Cart</span>
      </button>
      <Alert
        message="Producto agregado al carrito correctamente"
        visible={alertVisible}
        onClose={() => setAlertVisible(false)}
      />
    </>
  );
};

CartButton.propTypes = {
    onAddToCart: PropTypes.func.isRequired,
  };