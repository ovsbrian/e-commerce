import "./Sections.css";

const img1 =
  "https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_1280.jpg";
export const Sections = () => {
  return (
    <>
      <div className="flex w-full flex-col h-96  md:h-custom md:p-24 md:grid grid-rows-3 grid-flow-col gap-4   " >
        <div
          className="  row-span-3 col-span-2 bg-slate-600 bg-cover bg-center flex justify-center items-end relative overflow-hidden cursor-pointer"
          style={{ backgroundImage: `url(${img1})` }}
        >
          <div
            className="absolute inset-0 transition duration-500 ease-in-out transform hover:scale-110  "
            style={{
              backgroundImage: `url(${img1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="mb-6 bg-slate-300 p-4 rounded-2xl z-10">
            <span className="text-3xl font-semibold ">Running</span>
          </div>
        </div>
        <div
          className="row-span-2 col-span-1 bg-slate-700 bg-cover bg-center flex justify-center items-end relative overflow-hidden cursor-pointer"
          style={{ backgroundImage: `url(${img1})` }}
        >
          <div
            className="absolute inset-0 transition duration-500 ease-in-out transform hover:scale-110 "
            style={{
              backgroundImage: `url(${img1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="mb-6 bg-slate-300 p-4 rounded-2xl z-10">
            <span className="text-3xl font-semibold ">FootBall</span>
          </div>
        </div>
        <div
          className="col-span-1 bg-slate-700 bg-cover bg-center flex justify-center items-end relative overflow-hidden cursor-pointer"
          style={{ backgroundImage: `url(${img1})` }}
        >
          <div
            className="absolute inset-0 transition duration-500 ease-in-out transform hover:scale-110 "
            style={{
              backgroundImage: `url(${img1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="mb-2 bg-slate-300 p-3 rounded-2xl z-10">
            <span className="text-2xl font-semibold ">Formal</span>
          </div>
        </div>
        <div
          className="row-span-3 col-span-1 bg-slate-400 bg-cover bg-center flex justify-center items-end relative overflow-hidden cursor-pointer"
          style={{ backgroundImage: `url(${img1})` }}
        >
          <div
            className="absolute inset-0 transition duration-500 ease-in-out transform hover:scale-110  "
            style={{
              backgroundImage: `url(${img1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="mb-6 bg-slate-300 p-4 rounded-xl z-10">
            <span className="text-xl font-semibold ">Casual</span>
          </div>
        </div>
      </div>
    </>
  );
};
