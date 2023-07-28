 
import PropTypes from 'prop-types';
 

export const BtnCart = ({ color , children, colorText, pad, modal }) => {
 
 
  return (
    <>
     
      <button
        onClick={modal}
        className={`p-${pad}  ${color } hover:bg-opacity-70 rounded-full w-full text-${colorText} my-2 flex justify-center items-center`}
      >
        {children}
      </button>
    </>
  );
};

 
BtnCart.propTypes = {
  color: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  colorText: PropTypes.string.isRequired,
  pad: PropTypes.string.isRequired,
  modal: PropTypes.func.isRequired
}