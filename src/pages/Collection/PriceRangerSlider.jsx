import  { useState } from 'react';
import PropTypes from 'prop-types';

const PriceRangeSlider = ({ minPrice, maxPrice, onRangeChange }) => {
  const [minValue, setMinValue] = useState(minPrice);
  const [maxValue, setMaxValue] = useState(maxPrice);

  const handleRangeChange = (event) => {
    const { name, value } = event.target;
    if (name === 'minValue') {
      setMinValue(value);
    } else if (name === 'maxValue') {
      setMaxValue(value);
    }
  };

  const handleApplyClick = () => {
    onRangeChange(minValue, maxValue);
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="minValue">Min Price:</label>
      <input
        type="number"
        name="minValue"
        value={minValue}
        min={minPrice}
        max={maxPrice}
        onChange={handleRangeChange}
      />
      <label htmlFor="maxValue">Max Price:</label>
      <input
        type="number"
        name="maxValue"
        value={maxValue}
        min={minPrice}
        max={maxPrice}
        onChange={handleRangeChange}
      />
      <button onClick={handleApplyClick}>Apply</button>
    </div>
  );
};

PriceRangeSlider.propTypes = {
  minPrice: PropTypes.number.isRequired,
  maxPrice: PropTypes.number.isRequired,
  onRangeChange: PropTypes.func.isRequired,
};

export default PriceRangeSlider;
