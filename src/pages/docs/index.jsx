// src/components/About.js
import { Link,Outlet } from 'react-router-dom';

function SideMenu() {
  return (
      <nav className="bg-gray-800 text-white h-screen w-56 fixed left-0 top-0 overflow-y-auto">
      <div className="p-4">
        <h2 className="text-2xl font-bold"></h2>
      </div>
      <ul className="px-4">
        <li className="mb-4">
          <Link to="/docs" className="text-blue-300 hover:text-blue-500 block">
            Introduction
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/docs/installation" className="text-blue-300 hover:text-blue-500 block">
            Installation
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/docs/env" className="text-blue-300 hover:text-blue-500 block">
            Environment variables
          </Link>
        </li>

        <li className="mb-4">
          <Link to="/docs/routes" className="text-blue-300 hover:text-blue-500 block">
            Routing
          </Link>
        </li>

        <li className="mb-4">
          <Link to="/docs/controller" className="text-blue-300 hover:text-blue-500 block">
            Controllers
          </Link>
        </li>

        <li className="mb-4">
          <Link to="/docs/service" className="text-blue-300 hover:text-blue-500 block">
            Services
          </Link>
        </li>

        <li className="mb-4">
          <Link to="/docs/model" className="text-blue-300 hover:text-blue-500 block">
            Models
          </Link>
        </li>


        <li className="mb-4">
          <Link to="/docs/middleware" className="text-blue-300 hover:text-blue-500 block">
            Middleware
          </Link>
        </li>

        <li className="mb-4">
          <Link to="/docs/response" className="text-blue-300 hover:text-blue-500 block">
            Response
          </Link>
        </li>

        <li className="mb-4">
          <Link to="/docs/upload" className="text-blue-300 hover:text-blue-500 block">
            File uploads
          </Link>
        </li>


        <li className="mb-4">
          <Link to="/docs/session" className="text-blue-300 hover:text-blue-500 block">
            Session
          </Link>
        </li>

        <li className="mb-4">
          <Link to="/docs/validation" className="text-blue-300 hover:text-blue-500 block">
            Validation
          </Link>
        </li>


        <li className="mb-4">
          <Link to="/docs/security" className="text-blue-300 hover:text-blue-500 block">
            Security
          </Link>
        </li>

       
        <li className="mb-4">
          <Link to="/docs/testing" className="text-blue-300 hover:text-blue-500 block">
            Testing
          </Link>
        </li>



        {/* Adicione mais itens de menu conforme necessário */}
      </ul>
    </nav>
  );
}

const About = () => {
  return (
    <div className="flex bg-blue-100">
      <SideMenu />
      <div className="flex-grow p-4 ">
        {/* Use o Outlet para renderizar o conteúdo da rota correspondente */}
        <Outlet />
      </div>
    </div>
  );
};

export default About;
