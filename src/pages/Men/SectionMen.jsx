const img1 =
  "https://cdn.dribbble.com/users/1853242/screenshots/15532235/media/282c1a1348743b3b8e6641d4493713e1.png?resize=768x576&vertical=center";
const img2 =
  "https://cdn.dribbble.com/userupload/7428531/file/original-ba29addc4d4fde3f847f818841cd2ad5.jpg?resize=1024x768";
const img3 =
  "https://cdn.dribbble.com/userupload/7428531/file/original-ba29addc4d4fde3f847f818841cd2ad5.jpg?resize=1024x768";

export const SectionsGen = () => {
  return (
    <>
      <div className="h-full grid grid-cols-2 grid-rows-2 gap-1">
        <div className="row-span-2">
          <img className="h-full hover:shadow-sm hover:cursor-pointer hover:shadow-orange-500" src={img1} />
        </div>
        <div className="h-full hover:shadow-sm hover:cursor-pointer hover:shadow-orange-500">
          <img src={img2} />
        </div>
        <div className="h-full hover:shadow-sm hover:cursor-pointer hover:shadow-orange-500">
          <img src={img3} />
        </div>
      </div>
    </>
  );
};
