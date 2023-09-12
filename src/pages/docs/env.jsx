import React from 'react';

export default function Env() {
  return (
    <div style={{
      display:"flex",
      justifyContent:"center",
      flexDirection:"column",
      alignItems:"center",
      width:"100%",
    }}>

    <h1 className="text-3xl mb-4">Variaveis de ambiente</h1>
      
      <div style={{
        width:400,
        height:280,
        borderRadius:4,
        display:"flex",
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center",
        background:"rgba(10,10,10,0.95)",
      }}>
        <p style={{color:"#fff"}}>
          #caminho principal para servir arquivos.<br/>
          PATH_PUBLIC = public<br/><br/>

          #hosts do servidor<br/>
          SERVER_PORT=8000<br/>
          SERVER_HOST=localhost<br/><br/>

          define suas variaveis aqui..
        </p>         
      </div>
    </div>
  );
}
