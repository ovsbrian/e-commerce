import { RegistrationForm } from "./RegistrationForm";

 
 
export const Register = () => {
 
  return (
    <>
      <div className="w-full flex justify-center items-center relative">
        <h2 className="absolute top-12 text-2xl font-bold">ovsbrian</h2>
      </div>
      <div className="flex flex-col justify-center items-center h-full ">
        <div className="flex w-2/3 gap-4  flex-row-reverse justify-center ">
          <div className="w-3/5">
            <img src="/src/assets/Imgs/login.jpg" className="rounded" alt="" />
          </div>
          <div className="w-2/5">  
            <RegistrationForm />
          </div>
        </div>
      </div>
    </>
  );
}
 