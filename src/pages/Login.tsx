import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import logo from "./../assets/logo2.png";
import "../styles/pages/login.css";

const Login = () => {
  return (
    <div id="page-login">
      <div className="content-wrapper">
        <div className="logo">
          <img src={logo} alt="Moeda" />
         
        </div>
        <main>
          <h1>Leve facilidade para o seu bolso</h1>
          <p>Visite o nosso banco</p>
        </main>

        <Link to="/Register" className="enter-app">
          <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
        </Link>
      </div>
    </div>
  );
};

export default Login;
