import { CheckCircle2, X } from "lucide-react";
import PropTypes from 'prop-types';
 
const Alert = ({ message, visible, onClose }) => {
  if (!visible) return null;

  return (
    <div className="alert flex justify-center items-center gap-2 fixed top-24 left-1/2 transform -translate-x-1/2 p-4 bg-white rounded-md shadow shadow-orange-500">
    <CheckCircle2 color="orange"/>
      {message}
      <button className="ml-4 px-4 py rounded-md" onClick={onClose}> <X /></button>
    </div>
  );
};

export default Alert;
Alert.propTypes = {
    message: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
  };
  