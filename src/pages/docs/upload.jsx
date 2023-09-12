import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-okaidia.css';


const tabs = [
  {
    id: 'single',
    label: 'Single',
    content: `
/*
* criando um simples controller pra upload de um simple ficheiro 
* tu vai enviar os arquivos usando o formData e não precisas passar como header
* multipart/formData
*/


//importando a function upload para fazer upload de arquivos.
import upload from "#utils/uploadFile";

export async function uploadSingle(req,res){
  try{
  
    const file = req.body.files.file;
  
    const uploadSingleFile = await upload("capa", file).type('png',"jpeg").single();
  
    res.json({msg:"Sucess",filePath:uploadSingleFile});
  
  }catch(error){
    res.json({msg:error});
  }
}
    `
  }, 
  {
    id: 'mult',
    label: 'Mult',
    content: `
/*
* criando um simples controller pra upload de varios ficheiros 
* tu vai enviar os arquivos usando o formData e não precisas passar como header
* multipart/formData
*/

//importando a function upload para fazer upload de arquivos.
import upload from "#utils/uploadFile";


export async function uploadMult(req,res){
  try{
    
    const files = req.body.files;
    
    const uploadMultFile = await upload("capa", files).type('png',"jpeg","pdf","wav").mult();
    
    res.json({msg:"Sucess",filePath:uploadMultFile});
  
  }catch(error){
    res.json({msg:error});
  }
}

  `
  },
];

export default function Uploads() {
  const [activeTab, setActiveTab] = useState('single');
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
