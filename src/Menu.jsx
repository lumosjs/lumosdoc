import { Link, Outlet } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="h-screen bg-blue-100 menu">
    <nav className="bg-blue-100 flex flex-row justify-between items-center p-4">
      <div className="flex items-center">
        {/* Adicione a imagem ao lado do nome "Lumos" */}
        <img src="/lumos.png" alt="Lumos Logo" className="h-10 mr-2" />
        <span className="text-black text-2xl font-bold">Lumos</span>
      </div>
      
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-black hover:underline">Home</Link>
        </li>
        <li>
          <Link to="/docs" className="text-black hover:underline">Documentação</Link>
        </li>
        <li>
          <Link to="https://github.com/lumosjs" className="text-black hover:underline">Github</Link>
        </li>
      </ul>
    </nav>
    <Outlet />
    </div>
  );
};

export default Navigation;
