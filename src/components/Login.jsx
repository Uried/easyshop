import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [view, setView] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoyer les données d'inscription au backend ici
    console.log("Données d'inscription :", { email, password });
    // Réinitialiser les champs du formulaire
    setEmail("");
    setPassword("");
  };

  return (
    <div className=" bg-gradient-to-r from-gray-100 via-slate-300 to-neutral-100">
      <div className="fixed w-full  ">
        <div className="h-[18px] w-[18px] ml-10 mt-5 px-3 py-3 rounded-full bg-orange-500">
          <Link className="font-bold text-[22px] text-gray-500">P2P</Link>
        </div>
      </div>

      <div className="flex justify-center items-center h-screen w-full ">

        <div className="md:block hidden w-1/2 text-[280px] text-center mt-[-40px] " >  
        <div className=" bg-orange-500 rounded-full h-[120px] w-[120px] text-gray-500">
        <span>P2P</span>

        </div>
         
        </div>
        <div className=" my-auto "> 
        <form action="" className="text-center " >
          <h2 className="mb-10 text-orange-500 text-2xl underline pb-2">Se connecter</h2>
          <input
            type="text"
            className="px-4 py-2 border rounded-l-md focus:outline-none focus:ring-orange focus:border-orange-300 mb-5"
            placeholder="Adresse email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <div className="relative ">
            <input
              type={`${view ? "text" : "password"}`}
              className="px-4 py-2 border rounded-l-md focus:outline-none focus:ring-orange focus:border-orange-300 mb-5"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div
              className={`${
                view ? "hidden" : ""
              } text-black  text-xl rounded-md absolute transform -translate-x-[0.5]  right-1 top-3 `}
              onClick={() => setView(true)}
            >
              {" "}
              <BsEye />{" "}
            </div>
            <div
              className={`${
                view ? "" : "hidden"
              } text-black  text-xl rounded-md absolute transform -translate-x-[0.5]  right-1 top-3 `}
              onClick={() => setView(false)}
            >
              {" "}
              <BsEyeSlash />{" "}
            </div>
          </div>
          <br />
          <button
            type="submit"
            className="px-4 py-2 bg-orange-500 text-white  hover:bg-orange-700 rounded-md ml-4"
          >
            Sign in
          </button>
          <p className="pt-5">
            Vous n'avez pas de compte ?{" "}
            <span className="text-orange-500 underline">
              <Link to="/register" className="">S'inscrire</Link>
            </span>
          </p>
        </form>

        </div>
        

      </div>

      <div></div>
    </div>
  );
};

export default Login;
