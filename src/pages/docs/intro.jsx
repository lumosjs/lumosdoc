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
        O <span style={{color:"red"}}>LumosJS</span> é um framework web em Node.js que oferece um ambiente flexível e poderoso 
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

          <div style={{
            width:750,
            height:"100%",
            borderRadius:8,
            background:"rgba(10,10,10,0.95)",
          }}>

            <div style={{
              color:"grey",
              display:"flex",
              flexDirection:"column",
              padding:15  
            }}>
            <div>
              <p>
                app/ : Aqui reside a lógica central do seu aplicativo.
              </p>

            <div className="ml-4" style={{color:'grey'}}>
              <p style={{color:'#fff'}}>
                /controllers
              </p>
              <p style={{color:'#fff'}}>
                /services
              </p>
              <p style={{color:'#fff'}}>
                /middlewares
              </p>
              <p style={{color:'#fff'}}>
                /models
              </p>
            </div>
            </div>  


            <div className="mt-4">
              <p>
                routes/ : Aqui são definidas as rotas do aplicativo
              </p>

            <div className="ml-4" style={{color:'grey'}}>
              <p style={{color:'#fff'}}>
                api.js : Definições das rotas da API.
              </p>
            </div>
            </div>  

            <div className="mt-4">
              <p>
                public/ : Pasta pública do servidor web para arquivos acessíveis publicamente
              </p>

            </div>  

              <div>
              <p>
                log/ : Armazena arquivos gerados pelo aplicativo, como logs de erros etc.
              </p>
            </div>  

             <div>
              <p>
                test/ : Contém testes automatizados para garantir a robustez do seu aplicativo.
              </p>
            </div>  


            <div className="mt-4">
              <p>
                config/ : Contém arquivos de configuração para diferentes componentes do framework.
              </p>

            <div className="ml-4" style={{color:'grey'}}>
              <p style={{color:'#fff'}}> 
              headers.js : Configurações para o tratamento dos Headers.
              </p>
            </div>
            </div> 

            <div className="mt-4">
              <p>
                lib/ : Bibliotecas e utilitários específicos do framework.
              </p>

            <div className="ml-4" style={{color:'grey'}}>
              <p style={{color:'#fff'}}> 
                core/ : Componentes principais do aplicativo.
              </p>
               <p style={{color:'#fff'}}> 
                helpers/ : Funções auxiliares para facilitar o desenvolvimento.
              </p>
               <p style={{color:'#fff'}}> 
                utils/ : Utilitários gerais.
              </p>
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
