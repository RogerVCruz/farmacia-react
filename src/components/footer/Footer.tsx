
const Footer = () => {
  return (
    <footer className="bg-blue-400 text-secondary p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">

        <div className="mb-6 md:mb-0">
          <h2 className="text-lg font-bold mb-4">Acesso</h2>
          <ul>

            <li>
              <a href="/categorias" className="text-secondary hover:text-green-500 transition duration-300">Categorias</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-4">Contato</h2>
          <ul>
            <li className="mb-2">Email: farmaciadopovo@farmacia.com.br</li>
            <li className="mb-2">Telefone: (21) 95442-6855</li>
            <li className="mb-2">Endereço: Av Visconde de Sapucaí, 1158 - Rio de Janeiro/RJ</li>
          </ul>
          <div className="mt-4">

            <a href="https://instagram.com" className="text-secondary hover:bg-green-500 mx-2 " target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
