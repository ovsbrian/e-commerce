import  { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import bcrypt from "bcryptjs";

const supabase = createClient(
  "https://wmmawvqjmhozkczcfjro.supabase.co",
  "YOUR_SUPABASE_API_KEY"
);

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");

  const handleLogin = async () => {
    setErrorText("");

    if (!email || !password) {
      setErrorText("Por favor ingrese un correo y una contraseña");
      return;
    }

    const { data } = await supabase
      .from("users")
      .select("password")
      .eq("email", email)
      .single();

    if (data) {
      const storedHash = data.password;
      const passwordMatch = await bcrypt.compare(password, storedHash);

      if (passwordMatch) {
        setErrorText("User logged in successfully");
      } else {
        setErrorText("Contraseña incorrecta");
      }
    } else {
      setErrorText("Usuario no encontrado, cree una cuenta para ingresar");
    }
  };

  return (
    <div className="w-2/5">
      <div className="flex w-full justify-center items-center my-4 ">
        <h2 className="text-5xl font-semibold ">Iniciar sesión</h2>
      </div>
      <div className="flex flex-col gap-4 my-4">
        <input
          className={`border p-2 ${errorText ? "border-red-500" : ""}`}  
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={` ${errorText ? "border-red-500" : ""}`}  
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorText && <p className="text-red-500">{errorText}</p>}
      </div>
      <button
        onClick={handleLogin}
        className="p-2 my-2 bg-orange-700 w-full font-semibold rounded"
      >
        Login
      </button>
      <div className="mt-2  w-full flex flex-col gap-1 ">
        <span>Aun no tienes tu cuenta en Store?</span>
        <span className="flex gap-1">
          Haz clic
          <a className="underline hover:text-orange-700" href="/register">
            aquí
          </a>
          para crearla. 😄
        </span>
      </div>
    </div>
  );
};
