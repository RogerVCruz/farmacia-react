import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-400 shadow-lg p-4 flex items-center justify-between">
      <Link to="/" className="flex items-center">
        <img src="/logo.png" alt="Logo" className="h-10 w-auto mr-4" />
        <span className="text-secondary text-2xl font-bold">Farmácia do Povo</span>
      </Link>

      <div className="flex space-x-2 mx-10">
        <Link to="/categorias" className="text-secondary hover:text-green-900 transition duration-300">Categorias</Link>
      </div>
    </nav>
  );
};

export default Navbar;
