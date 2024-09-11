import React from "react";
import { Link } from "react-router-dom";


const Home: React.FC = () => {
  return (
    <div className="bg-white text-gray-900">
      <section className="bg-white py-48 flex flex-col items-center justify-center text-center shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Seja Bem-vindo à Farmácia do Povo
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Aqui você tem acesso a todos os medicamentos do mercado!
        </p>
        <Link
          to="/categorias"
          className="bg-green-500 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-slate-400"
        >
          Acesse as categorias
        </Link>
      </section>
    </div>
  );
};

export default Home;
