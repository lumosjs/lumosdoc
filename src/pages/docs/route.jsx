import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-okaidia.css';


const tabs = [
  {
    id: 'get',
    label: 'GET',
    content: `
/*
* Aqui tu vai registrar todas as rotas da sua App
* por definição as rotas tem o prefixo /api* então quando tu acessar vai usar
* http://localhost:8000/api/nome-da-rota
*/

export default function userApiRoutes(app){

  //rota valida get
  app.get("/listarUser",(req,res)=>{
    res.send("Listando Usuarios...");
  });

  app.get("/show/user/:id",(req,res)=>{
    res.json({id:req.params.id});
  });

  //rota invalida get
  app.get("listarUser",(req,res)=>{
    res.send("Listando Usuarios...");
  });

}
    `
  }, 
  {
    id: 'post',
    label: 'POST',
    content: `
/*
* Aqui tu vai registrar todas as rotas da sua App
* por definição as rotas tem o prefixo /api* então quando tu acessar vai usar
* http://localhost:8000/api/nome-da-rota
*/

export default function userApiRoutes(app){

  //rota valida post
  app.post("/criarUsuario",(req,res)=>{
    res.send("Criar Usuario...");
  });


  //rota invalida post
  app.post("criarUsuario",(req,res)=>{
    res.send("Criar Usuario...");
  });

}
  `
  },
  {
    id: 'put',
    label: 'PUT',
    content: `
/*
* Aqui tu vai registrar todas as rotas da sua App
* por definição as rotas tem o prefixo /api* então quando tu acessar vai usar
* http://localhost:8000/api/nome-da-rota
*/

export default function userApiRoutes(app){

  //rota valida put
  app.put("/editar/usuario",(req,res)=>{
    res.send("Editar Usuario...");
  });


  //rota invalida put
  app.put("editar/usuario",(req,res)=>{
    res.send("Editar Usuario...");
  });

}
  `
  },
  {
    id: 'delete',
    label: 'DELETE',
    content:  `
/*
* Aqui tu vai registrar todas as rotas da sua App
* por definição as rotas tem o prefixo /api* então quando tu acessar vai usar
* http://localhost:8000/api/nome-da-rota
*/

export default function userApiRoutes(app){

  //rota valida delete
  app.delete("/apagar/usuario",(req,res)=>{
    res.send("Editar Usuario...");
  });


  //rota invalida delete
  app.delete("apagar/usuario",(req,res)=>{
    res.send("Editar Usuario...");
  });

}
  `
  },
    {
    id: 'group',
    label: 'GROUP',
    content:  `
/*
* Aqui tu vai registrar todas as rotas da sua App
* por definição as rotas tem o prefixo /api* então quando tu acessar vai usar
* http://localhost:8000/api/nome-da-rota
* uso do middleware auth ou outro middleware como primeiro argumento da function group 
* é obrigatório e a passagem do app também!
* o resto pode ser opcional.
*/

//importando a function grupo de rotas.
import { group } from "#routeGroup";

//importando o middleware auth.
import { auth } from "#middleware/authApi";

//importando nosso controller dos users
import { listUsers, getUser, deleteUser, newUser, updateUser} from "#controller/userController";

export default function userApiRoutes(app){

  group(auth, app) 
  .get("/users", listUsers)          
  .get("/user/:id", getUser)         
  .post("/add/user", newUser)        
  .put("/update/user", updateUser)
  .delete("/delete/user", deleteUser);

  group(auth, app)
  .get("/foods", (req,res)=>{})      

}
  `
  },
];

export default function Routers() {
  const [activeTab, setActiveTab] = useState('get');
  const [code, setCode] = useState(tabs.find((tab) => tab.id === activeTab).content);

  const handleClick = (tabId) => {
    setActiveTab(tabId);
    setCode(tabs.find((tab) => tab.id === tabId).content);
  };

  return (
    <div style={{
      display:"flex",
      justifyContent:"center",
      flexDirection:"column",
      alignItems:"center",
      width:"100%",
    }}>

    <div className="bg-blue-100 text-white p-4">
      <div className="flex space-x-4">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`cursor-pointer ${
              activeTab === tab.id ? 'bg-blue-600' : 'bg-gray-800'
            } p-2 rounded-lg`}
            onClick={() => handleClick(tab.id)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="mt-4 p-4 bg-black rounded-lg">
        <Editor
          value={code}
          highlight={(code) => highlight(code, languages.js)}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12,
            outline:"none"
          }}
        />
      </div>
    </div>

    </div>
  );
}
