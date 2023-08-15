import { ArrowLeftCircle } from "lucide-react";

export const ErrorPage = () => {
  return (
    <>
      <div className="pt-20 h-full flex">
        <div className="flex gap-4 justify-center items-center m-auto">
          <div>
            <img src="/src/assets/Imgs/error404.jpg" alt="" />
          </div>
          <div>
            <p className="font-bold text-3xl">
              Perdón, esta página eligió tomar un día libre... 😴
            </p>
            <button className="p-2 bg-orange-700 text-white rounded my-4 font-semibold ">
              <a className="flex gap-2" href="/">
                <ArrowLeftCircle />
                Volver al inicio
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
