
import PropTypes from 'prop-types';
export const FilterTag = ({ name, value, onRemove }) => {
  return (
    <div className="flex items-center bg-gray-200 rounded-lg px-3 py-1 mr-2 mb-2">
    <span className="text-sm">{`${name}: ${value}`}</span>
    <button
      className="ml-2 text-gray-500 focus:outline-none"
      onClick={() => onRemove(name)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 1.6A8.4 8.4 0 1018.4 10 8.4 8.4 0 0010 1.6zM5.914 6.486a.6.6 0 11.772-.928L10 8.14l3.314-2.582a.6.6 0 11.772.928L10.65 9.042l3.336 2.6a.6.6 0 01-.772.928L10 9.86l-3.286 2.71a.6.6 0 01-.772-.928L9.35 9.041 6.014 6.486z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  </div>
  );
};

FilterTag.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};