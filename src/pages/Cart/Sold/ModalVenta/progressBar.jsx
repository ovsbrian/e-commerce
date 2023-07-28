import { Line } from "rc-progress";
import PropTypes from 'prop-types';
export const ProgressBar = ({ step }) => {
  const progress = (step / 2) * 100;
  console.log(progress);
  return (
    <div className="w-full">
      <Line percent={progress} strokeWidth={1} strokeColor="#c2410c" />
    </div>
  );
};

ProgressBar.propTypes = {
    step: PropTypes.number.isRequired
  };