import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import bcrypt from "bcryptjs";

const supabase = createClient(
  "https://wmmawvqjmhozkczcfjro.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndtbWF3dnFqbWhvemtjemNmanJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIxMjc5NjksImV4cCI6MjAwNzcwMzk2OX0.PIce2nJhEmRJ99wRSXs4o_J2hU_0Gn9QtX9P8pOnwI8"
);

export const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistration = async () => {
    if (!email || !password) {
      console.log("Please provide email and password");
      return;
    }

    // Validar formato de correo electrónico
    if (!/\S+@\S+\.\S+/.test(email)) {
      console.log("Please provide a valid email address");
      return;
    }

    // Generar hash de la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    const { data, error } = await supabase.from("users").upsert([
      {
        email,
        password: hashedPassword,
      },
    ]);

    if (error) {
      console.error("Error registering user:", error.message);
    } else {
      console.log("User registered successfully:", data);
    }
  };

  return (
    <>
      <div className=" ">
        <div className="flex w-full justify-center items-center my-4 ">
          <h2 className="text-5xl font-semibold ">Crear cuenta</h2>
        </div>
        <div className="flex flex-col gap-4 my-4">
          <input
            className="border p-2" // Aplica las clases CSS de tu formulario
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="border p-2" // Aplica las clases CSS de tu formulario
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          onClick={handleRegistration}
          className="p-2 my-2 bg-orange-700 w-full font-semibold rounded"
        >
          Crear
        </button>
        <div className="mt-2  w-full flex flex-col gap-1 ">
          <span>Ya tienes tu cuenta en Store?</span>
          <span className="flex gap-1">
            Haz clic
            <a className="underline hover:text-orange-700" href="/">
              aquí
            </a>
            para iniciar sesión. 😄
          </span>
        </div>
      </div>
    </>
  );
};
