const img1 = "https://tuquejasuma.com/media/images/entity5378_square.jpeg";
const adidas =
  "https://ams3.digitaloceanspaces.com/graffica/2022/12/Adidas-Logo-1971-1024x576.jpeg";

const nike = "https://1000marcas.net/wp-content/uploads/2019/11/Nike-logo.jpg";

const vans =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdxsv4_IHY3mJVY5K8Dj3iabCj0PvqMVtWtQ&usqp=CAU";
export const Brand = () => {
  return (
    <>
      <div className="md:p-24 flex ">
        <div className="grid grid-cols-2 gap-4 row-span-3 p-4">
          <div className="  flex items-center overflow-hidden cursor-pointer">
            <img
              src={img1}
              alt="Imagen chica 1"
              className="  inset-0 transition duration-500 ease-in-out transform hover:scale-105"
            />
          </div>
          <div className="flex items-center overflow-hidden p-2 cursor-pointer">
            <img
              src={nike}
              alt="Imagen chica 2"
              className="  inset-0 transition duration-500 ease-in-out transform hover:scale-105"
            />
          </div>
          <div className="flex overflow-hidden p-3 cursor-pointer">
            <img
              src={vans}
              alt="Imagen chica 3"
              className="  inset-0 transition duration-500 ease-in-out transform hover:scale-105"
            />
          </div>
          <div className=" overflow-hidden p-2  cursor-pointer ">
            <img
              src={adidas}
              alt="Imagen grande"
              className="  inset-0 transition duration-500 ease-in-out transform hover:scale-105"
            />
          </div>
        </div>
      </div>
    </>
  );
};
