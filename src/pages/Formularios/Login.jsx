import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import bcrypt from "bcryptjs";

const supabase = createClient(
  "https://wmmawvqjmhozkczcfjro.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndtbWF3dnFqbWhvemtjemNmanJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIxMjc5NjksImV4cCI6MjAwNzcwMzk2OX0.PIce2nJhEmRJ99wRSXs4o_J2hU_0Gn9QtX9P8pOnwI8"
);

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      console.log("Please provide email and password");
      return;
    }

    const { data, error } = await supabase
      .from("users")
      .select("password")
      .eq("email", email)
      .single();

    if (error) {
      console.error("Error logging in:", error.message);
    } else {
      if (data) {
        const storedHash = data.password;
        const passwordMatch = await bcrypt.compare(password, storedHash);

        if (passwordMatch) {
          console.log("User logged in successfully");
        } else {
          console.log("Incorrect password");
        }
      } else {
        console.log("User not found");
      }
    }
  };

  return (
    <>
      <div className="w-full flex justify-center items-center relative">
        <h2 className="absolute top-12 text-2xl font-bold">ovsbrian</h2>
      </div>
      <div className="flex flex-col justify-center items-center h-full ">
        <div className="flex w-2/3 gap-4">
          <div className="w-3/5">
            <img src="/src/assets/Imgs/login.jpg" className="rounded" alt="" />
          </div>
          <div className="w-2/5">
            <div className="flex w-full justify-center items-center my-4 ">
              <h2 className="text-5xl font-semibold ">LOGIN</h2>
            </div>
            <div className="flex flex-col gap-4 my-4">
              <input
                className="border p-2"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="border p-2"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
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
        </div>
      </div>
    </>
  );
}

export default Login;
