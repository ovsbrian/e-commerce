import PropTypes from 'prop-types';


export const SectionsGen = ({gender}) => {
  let img1 =
    "https://cdn.dribbble.com/users/789882/screenshots/10415310/media/abe9d92c384dc03bd387579cbb92623e.png?resize=768x576&vertical=center";
  let img2 =
    "https://cdn.dribbble.com/userupload/4444890/file/original-536861c3f01e3ee8feb2dc90a035f27b.mp4";
  let img3 =
    "https://cdn.dribbble.com/userupload/3849433/file/original-58607d308c8a580b1b8bad959f58a286.jpg?resize=1024x768";

  if (gender === "WOMEN") {
    img1 =
    "https://cdn.dribbble.com/userupload/3122371/file/original-5e8ee54173fab3ab1dc4f204d951f9b2.png?resize=1024x768";
    img2 =
    "https://cdn.dribbble.com/users/286340/screenshots/17466552/media/4e011e8db9afc54afa4c2494d6725eeb.mp4";
    img3 =
    "https://cdn.dribbble.com/users/1195208/screenshots/15012922/media/6dffbe754636be1902a16ffa2a2f2514.png?resize=768x576&vertical=center";
  }

  return (
    <>
      <div className="h-full grid grid-cols-2 grid-rows-2 gap-1">
        <div className="row-span-2  hover:shadow-sm hover:cursor-pointer hover:shadow-orange-500">
          <img className="h-full" src={img1} />
        </div>
        <div className="h-full hover:shadow-sm hover:cursor-pointer hover:shadow-orange-500">
          <video src={img2}  autoPlay loop muted />
        </div>
        <div className="h-full hover:shadow-sm hover:cursor-pointer hover:shadow-orange-500">
          <img src={img3} />
        </div>
      </div>
    </>
  );
};
SectionsGen.propTypes = {
  gender: PropTypes.string.isRequired,
};
