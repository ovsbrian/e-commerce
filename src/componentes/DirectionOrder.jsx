import { IconChevronRight } from "@tabler/icons-react";
import PropTypes from "prop-types";
export const DirectionOrder = (props) => {
  return (
    <>
      <div className="flex gap-4 items-center">
        <span className="opacity-50">Home</span>
        <IconChevronRight className="opacity-50" size={20} />
        <span>{props.text}</span>
      </div>
    </>
  );
};

DirectionOrder.propTypes = {
  text: PropTypes.string.isRequired,
};
