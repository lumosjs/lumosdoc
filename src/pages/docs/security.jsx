import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-okaidia.css';


const tabs = [
  {
    id: 'security',
    label: 'CORS',
    content: `
/*
* configurando o cors da nossa app no arquivo headers.js dentro da pasta config
*/

export function configHeaders(request, response){

  //altera * pelo seu dominio
  response.setHeader('Access-Control-Allow-Origin', '*');
  
  //here add more headers...  
  //example 
  response.setHeader('Access-Control-Max-Age', '86400');
  response.setHeader('Cache-Control', 'public, max-age=3600');
}
`
  }, 
   {
    id: 'security2',
    label: 'Rate Limiting',
    content: `
/*
* configurando o número de solicitações na nossa app em uma simples rota
*/

//importando o nosso rateLimit
import { rateLimit } from "#utils/rateLimit"

//importando nosso controller , group, e nosso middleware auth.
import { listUsers, getUser, deleteUser, newUser, updateUser} from "#controller/userController";
import { group } from "#routeGroup";
import { auth } from "#middleware/authApi";

//usando o nosso middleware rateLimit na rota user/:id
//vamos definir 10 pedidos a cada 1min na nossa rota.

export function userApiRoutes(app) {
  app.get("/user/:id",rateLimit(10,1),(req,res)=>{
    res.json({id:req.params.id,nome:"Miguelito"});
  })

  //podemos usar no grupo de rotas também 10 pedidos em todas rotas por cada 1min.
  group(auth, app, rateLimit(10, 1))
  .get("/users", listUsers)           
  .get("/user/:id", getUser)          
  .post("/add/user", newUser)         
  .put("/update/user", updateUser)  
  .delete("/delete/user", deleteUser);
}
`
  }, 
];

export default function Security() {
  const [activeTab, setActiveTab] = useState('security');
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
