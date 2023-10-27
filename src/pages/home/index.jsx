import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="bg-blue-100  flex flex-col justify-center items-center p-24">
      <h1 className="text-5xl font-bold mb-6 p-4">Um backend framework para <span className="text-blue-500">Node.js</span></h1>
      <p className="text-lg text-center mb-8 p-4">
        Lumosjs é um framework web em Node.js<br /> que oferece um ambiente flexível e simples 
        para o desenvolvimento de aplicações.  </p>
      <div className="space-x-4">
        <Link to="/docs" className="bg-black text-white pd-10 px-6 py-3 rounded-xl text-lg font-semibold hover:bg-blue-600 transition duration-300 ease-in-out">Get Started</Link>
      </div>


      <section className="mt-20 mb-16">
        <h1 className="text-4xl text-center font-bold mb-4" id="examples">Exemplos em Lumosjs</h1>
        <div className="flex flex-wrap justify-center space-x-4">
          
          <a
            href="https://github.com/lumosjs/exemplos/tree/main/restApi"
            className="bg-white rounded-lg shadow-md p-4 m-2 flex flex-col items-center hover:shadow-xl transition duration-300 ease-in-out"
          >
            <img
              src="/restapi.png"
              alt="Exemplo 1"
              className="w-100 h-60 object-cover "
            />
          </a>
        </div>
      </section>


      {/* Section 5 - Informações do Criador do Framework */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-4">Criador</h1>
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
          <img
            src="/victor.jpeg"
            alt="Nome do Criador"
            className="w-40 h-40 object-cover rounded-full mb-4"
          />
          <h2 className="text-lg font-semibold">Vicente Victor Sombo</h2>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://www.linkedin.com/in/sombo/"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/sombo20"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://facebook.com/vicentevictorsombo"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </div>
        </div>
      </section>

      {/* Section 6 - Rodapé */}
      <section className="mb-8" id="rodape">
        <a
          href="https://github.com/lumosjs"
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          LumosJS on GitHub
        </a>
      </section>
  
    </div>
  );
}

export default Home;
