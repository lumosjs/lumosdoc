import React from 'react';

export default function Intro() {
  return (
    <div style={{
      display:"flex",
      justifyContent:"center",
      flexDirection:"column",
      alignItems:"center",
      width:"100%",
    }}>

    <div style={{
      width:"50%"
    }}>

      <p>
        O <span style={{color:"red"}}>LumosJS</span> é um framework web em Node.js que oferece um ambiente flexível  
        para o desenvolvimento de aplicações. Concebido para demonstrar 
        habilidades sólidas em programação Node.js, o LumosJS está em constante evolução e expansão, 
        visando fornecer uma estrutura sólida para projetos web de todos os tamanhos.
      </p>
      </div>


      <div style={{
        width:"50%"
      }}>
        <h2 className="text-2xl mb-8">Principais Características:</h2>


        <h4 className="text-2xl mb-8"> Arquitetura</h4>
        <p>
          <span style={{color:"red"}}>MSCR</span> : 
          O LumosJS adota a metodologia MSCR (Model -> Service -> Controller -> Route) 
          para APIs REST, garantindo uma separação clara de responsabilidades e uma estrutura organizada. 
        </p>

        <h4 className="text-2xl mb-8 mt-6"> Escolha da ORM</h4>
        <p>
            Reconhecendo a diversidade de preferências no desenvolvimento de <br/> 
            <span style={{color:"red"}}>bancos de dados</span>
            ..... O LumosJS não impõe uma ORM específica. Os desenvolvedores têm a liberdade de escolher
            entre ferramentas como Prisma, Sequelize,TypeOrm e outras,
            para se adequarem aos requisitos exclusivos de seus projetos.
          </p>

        <h4 className="text-2xl mb-8 mt-6"> Estrutura de Pastas</h4>
          <p className="mb-4"> 
            O framework segue uma estrutura de pastas bem definida para organizar todos os componentes do seu aplicativo:
          </p>

           <div className="flex justify-center items-center h-screen">
      <div className="w-80">
        <h1 className="text-2xl font-semibold mb-4">Estrutura de Pastas</h1>
        
        {/* Pasta app */}
        <div className="flex items-center space-x-4">
          <div className="w-4 h-4 bg-black rounded-full"></div>
          <p className="text-black">app/</p>
        </div>

        {/* Subpastas dentro de app */}
        <div className="ml-6 space-y-2">
          <div className="flex items-center space-x-4">
            <div className="w-3 h-3 bg-black rounded-full"></div>
            <p className="text-black">controllers/</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-3 h-3 bg-black rounded-full"></div>
            <p className="text-black">services/</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-3 h-3 bg-black rounded-full"></div>
            <p className="text-black">middlewares/</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-3 h-3 bg-black rounded-full"></div>
            <p className="text-black">models/</p>
          </div>
        </div>

        {/* Pasta routes */}
        <div className="flex items-center space-x-4 mt-4">
          <div className="w-4 h-4 bg-black rounded-full"></div>
          <p className="text-black">routes/</p>
        </div>

        {/* Arquivo api.js dentro de routes */}
        <div className="ml-6">
          <div className="flex items-center space-x-4">
            <div className="w-3 h-3 bg-black rounded-full"></div>
            <p className="text-black">api.js</p>
          </div>
        </div>

        {/* Pasta public */}
        <div className="flex items-center space-x-4 mt-4">
          <div className="w-4 h-4 bg-black rounded-full"></div>
          <p className="text-black">public/</p>
        </div>

        {/* Pasta log */}
        <div className="flex items-center space-x-4 mt-4">
          <div className="w-4 h-4 bg-black rounded-full"></div>
          <p className="text-black">log/</p>
        </div>

        {/* Pasta test */}
        <div className="flex items-center space-x-4 mt-4">
          <div className="w-4 h-4 bg-black rounded-full"></div>
          <p className="text-black">test/</p>
        </div>

        {/* Pasta lib */}
        <div className="flex items-center space-x-4 mt-4">
          <div className="w-4 h-4 bg-black rounded-full"></div>
          <p className="text-black">lib/</p>
        </div>

        {/* Subpastas dentro de lib */}
        <div className="ml-6 space-y-2">
          <div className="flex items-center space-x-4">
            <div className="w-3 h-3 bg-black rounded-full"></div>
            <p className="text-black">core/</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-3 h-3 bg-black rounded-full"></div>
            <p className="text-black">helpers/</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-3 h-3 bg-black rounded-full"></div>
            <p className="text-black">utils/</p>
          </div>
        </div>

        {/* Pasta config */}
        <div className="flex items-center space-x-4 mt-4">
          <div className="w-4 h-4 bg-black rounded-full"></div>
          <p className="text-black">config/</p>
        </div>

        {/* Arquivo headers.js dentro de config */}
        <div className="ml-6">
          <div className="flex items-center space-x-4">
            <div className="w-3 h-3 bg-black rounded-full"></div>
            <p className="text-black">headers.js</p>
          </div>
        </div>
      </div>
    </div>

        <h4 className="text-2xl mb-8 mt-6"> Estado Atual do Projeto</h4>
        <p className="mb-4">
            O LumosJS está em constante desenvolvimento e progresso. 
            Embora ainda haja trabalho a ser feito, o framework já demonstra capacidades notáveis. 
            Para verificar o que já foi alcançado até o momento e acompanhar as últimas atualizações,
           visite o repositório oficial no GitHub: <a style={{color:"red"}} href="https://github.com/lumosjs">Clique aqui</a>
        </p>


        <p  className="mb-12">
            O LumosJS é o resultado do compromisso contínuo com a excelência em desenvolvimento Node.js
            e oferece uma base sólida para a criação de aplicações web modernas.
        </p>


     
      </div>
    </div>
  );
}
