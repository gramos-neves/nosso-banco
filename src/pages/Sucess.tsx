import React from 'react';
import '../styles/pages/sucess.css'
import { AiOutlineLike } from "react-icons/ai";

const Home = () => {

    return (
    <div id="page-sucess">
       <div className="content-wrapper">
           <div className="like">
             <AiOutlineLike size={150} color="#5DF5D4" /> 
             <p>Cadastro Realizado com Sucesso!</p>   
             </div>
      </div>
    </div>
    )
}


export default Home;