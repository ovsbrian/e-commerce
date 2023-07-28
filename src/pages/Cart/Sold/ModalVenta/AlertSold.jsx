import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
export const Alert = ({ message }) => {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!showAlert) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-10">
      <div className="bg-orange-700 text-white p-4 rounded-lg shadow-lg flex items-center">
        <span className="mr-4">{message}</span>
        <button
          onClick={() => setShowAlert(false)}
          className="text-white hover:text-gray-200"
        >
          x
        </button>
      </div>
    </div>
  );
};
Alert.propTypes = {
    message: PropTypes.string.isRequired
  };