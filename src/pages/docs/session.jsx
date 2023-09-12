import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-okaidia.css';


const tabs = [
  {
    id: 'create',
    label: 'Criando',
    content: `
/*
* A session é valida no lado do servidor o client não consegue ver. 
* Aqui criamos o nosso controller que vai criar a nossa session
*/

//importando a session
import { setSession } from "#utils/session";

export function createSession(req,res){
    //user é o nome da nossa sessão que tem um objecto como valor. 
    setSession("user",{id:233})(req,res);
    res.go("/home");
}

    `
  }, 
  {
    id: 'destroy',
    label: 'Apagar',
    content: `
/*
* A session é valida no lado do servidor o client não consegue ver. 
* Aqui criamos o nosso controller que vai apagar a nossa session
*/

//importando a session
import { destroy } from "#utils/session";


export function deleteSession(req, res){
  // destruindo a nossa session com o nome user
    destroy("user")(req,res)
    res.go("/");
}
  `
  },
{
  id: 'use',
  label: 'Usar',
  content: `
/*
* A session é valida no lado do servidor o client não consegue ver. 
* Aqui criamos o nosso controller que vai buscar a nossa session
*/

//importando a session
import { getSession } from "#utils/session";



export function getSessionUser(req, res){
  // buscando a nossa session com o nome user
  const userSession = getSession("user")(req,res);
  res.log(userSession)
}
  `
  },
];

export default function Session() {
  const [activeTab, setActiveTab] = useState('create');
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
