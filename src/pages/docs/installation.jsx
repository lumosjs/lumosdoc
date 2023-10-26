
export default function Installation() {
  return (
    <div style={{
      display:"flex",
      justifyContent:"center",
      flexDirection:"column",
      alignItems:"center",
      width:"100%",
    }}>

    <h1 className="text-3xl mb-4">Instalação</h1>
      <p className="mb-4">Voce pode instalar o pacote pelo npm.</p>
      
      <div style={{
        width:230,
        height:30,
        borderRadius:4,
        display:"flex",
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center",
        background:"rgba(10,10,10,0.95)",
      }}>
        <p style={{color:"#fff"}}>npm i -g lumos-cli</p>         
      </div>


       <p className="mb-4 mt-4">Criando um novo Lumos project</p>
      
      <div style={{
        width:230,
        height:30,
        borderRadius:4,
        display:"flex",
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center",
        background:"rgba(10,10,10,0.95)",
      }}>
        <p style={{color:"#fff"}}>lumos create project-name</p>         
      </div>

      <p className="mb-4 mt-4">Start servidor lumos</p>
      
      <div style={{
        width:230,
        height:30,
        borderRadius:4,
        display:"flex",
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center",
        background:"rgba(10,10,10,0.95)",
      }}>
        <p style={{color:"#fff"}}>lumos start</p>         
      </div>

      <p className="mb-4 mt-4">Criando um novo controller file</p>
      
      <div style={{
        width:300,
        height:30,
        borderRadius:4,
        display:"flex",
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center",
        background:"rgba(10,10,10,0.95)",
      }}>
        <p style={{color:"#fff"}}>lumos add:controller controller-name</p>         
      </div>

      <p className="mb-4 mt-4">Criando um novo service file</p>
      
      <div style={{
        width:300,
        height:30,
        borderRadius:4,
        display:"flex",
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center",
        background:"rgba(10,10,10,0.95)",
      }}>
        <p style={{color:"#fff"}}>lumos add:service service-name</p>         
      </div>

      <p className="mb-4 mt-4">Criando um novo middleware file</p>
      
      <div style={{
        width:340,
        height:30,
        borderRadius:4,
        display:"flex",
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center",
        background:"rgba(10,10,10,0.95)",
      }}>
        <p style={{color:"#fff"}}>lumos add:middleware middleware-name </p>         
      </div>

      <p className="mb-4 mt-4">Criando um novo model file</p>
      
      <div style={{
        width:300,
        height:30,
        borderRadius:4,
        display:"flex",
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center",
        background:"rgba(10,10,10,0.95)",
        marginBottom:100
      }}>
        <p style={{color:"#fff"}}>lumos add:model model-name</p>         
      </div>
    </div>
  );
}
