import React, {useState} from "react";
import logo from "../assets/logo.svg"

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Envoyer les données d'inscription au backend ici
      console.log('Données d\'inscription :', { email, password });
      // Réinitialiser les champs du formulaire
      setEmail('');
      setPassword('');
    };
  
    return (
        <div>
            <div className="fixed w-full bg-cyan-500">
                <div className="h-18 w-16 ml-10">
                    <a className="color-white">
                     <img src={logo} alt="" />
                    </a>
                </div>
            </div>

            <div className="flex justify-center items-center h-screen">
            <form action="" className="text-center">
                <h2 className="mb-10 text-orange-500 text-2xl">Se connecter</h2>
               <input
            type="text"
            className="px-4 py-2 border rounded-l-md focus:outline-none focus:ring-orange focus:border-orange-300 mb-5"
            placeholder="Adresse email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br /><input
            type="password"
            className="px-4 py-2 border rounded-l-md focus:outline-none focus:ring-orange focus:border-orange-300 mb-5"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
         <br /><button
            type="submit"
            className="px-4 py-2 bg-orange-500 hover:bg-orange-700 rounded-md ml-4"
          >
            Sign in
          </button>
          <p className="pt-5">Vous n'avez pas de compte ? <span className="text-orange-500"><a href="">S'inscrire</a></span></p>
            </form>

            </div>
       

        </div>
    )
}

export default Login;