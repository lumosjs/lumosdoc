import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-okaidia.css';


const tabs = [
  {
    id: 'validate',
    label: 'Validate',
    content: `
/*
* Aqui vamos mostrar como fazer validaçõesde em campos usando o framework
*/

//importando validator
import  validator  from "#utils/validate";

  const data = req.body;
  const validarCampos = validator(data);

  validarCampos
  .required("email").email("email")
  .required("password").trim("password")
  .escape("password").min("password",6).max("password",8)
  .bool("privacidade")
  .integer("numero").min(9).max(9)
  .whitelist("sexo",["Masculino","Femenino"])

  if (validarCampos.fails()) {
      res.json({errors:validarCampos.errors});
    } else {
      res.json({msg:"Success"});
    }
    `
  }, 
 {
    id: 'email',
    label: 'Email',
    content: `
/*
* Aqui vamos mostrar como fazer validaçõesde em campos usando o framework
*/

//importando validator
import  validator  from "#utils/validate";

  const data = req.body;
  const validarCampos = validator(data);

  //campo email obrigatório e tem que ser um email valido.
  validarCampos
  .required("email").email("email")
  
  if (validarCampos.fails()) {
      res.json({errors:validarCampos.errors});
    } else {
      res.json({msg:"Success"});
    }
    `
  }, 
   {
    id: 'whitelist',
    label: 'WhiteList',
    content: `
/*
* Aqui vamos mostrar como fazer validaçõesde em campos usando o framework
*/

//importando validator
import  validator  from "#utils/validate";

  const data = req.body;
  const validarCampos = validator(data);

  //campo sexo deve apenas receber o tipo Masculino e Femenino
  validarCampo 
  .whitelist("sexo",["Masculino","Femenino"])

  
  if (validarCampos.fails()) {
      res.json({errors:validarCampos.errors});
    } else {
      res.json({msg:"Success"});
    }
    `
  },
   {
    id: 'inteiro',
    label: 'Número',
    content: `
/*
* Aqui vamos mostrar como fazer validaçõesde em campos usando o framework
*/

//importando validator
import  validator  from "#utils/validate";

  const data = req.body;
  const validarCampos = validator(data);

  //campo número deve apenas receber valor inteiro e minimo de 9 valores máximo 12 valores
  validarCampo 
  .integer("numero")
  .min("numero",9)
  .max("numero",12)

  
  if (validarCampos.fails()) {
      res.json({errors:validarCampos.errors});
    } else {
      res.json({msg:"Success"});
    }
    `
  },
   {
    id: 'escape',
    label: 'Escape',
    content: `
/*
* Aqui vamos mostrar como fazer validaçõesde em campos usando o framework
*/

//importando validator
import  validator  from "#utils/validate";

  const data = req.body;
  const validarCampos = validator(data);

  //campo senha não deve conter espaços ném caracteres especias como <>?{})=, estamos a verificar 
  // se tem espaços e contem caracteres especias.
  validarCampo 
  .trim("senha")
  .escape("senha")

  
  if (validarCampos.fails()) {
      res.json({errors:validarCampos.errors});
    } else {
      res.json({msg:"Success"});
    }
    `
  },
    {
    id: 'privacy',
    label: 'Privacidade',
    content: `
/*
* Aqui vamos mostrar como fazer validaçõesde em campos usando o framework
*/

//importando validator
import  validator  from "#utils/validate";

  const data = req.body;
  const validarCampos = validator(data);

  //campo privacidade deve apenas receber o tipo boolean, true or false
  validarCampo 
  .bool("privacidade")

  
  if (validarCampos.fails()) {
      res.json({errors:validarCampos.errors});
    } else {
      res.json({msg:"Success"});
    }
    `
  },
  {
    id: 'message',
    label: 'Customizar Mensagens',
    content: `
/*
* Aqui vamos mostrar como fazer validaçõesde em campos usando o framework
*/

//importando validator
import  validator  from "#utils/validate";

  const data = req.body;
  const validarCampos = validator(data);

  //vamos Customizar as nossas mensagens de erros aqui.
  validarCampo 
  .bool("privacidade","O valor precisa ser um boolean")
  .integer("numero","O número não é um inteiro valido")
  .trim("senha"," O campo senha não pode ter espaços")
  .min("senha",9,"Minimo de caracteres no camo senha são 9")

  
  if (validarCampos.fails()) {
      res.json({errors:validarCampos.errors});
    } else {
      res.json({msg:"Success"});
    }
    `
  },
];

export default function Session() {
  const [activeTab, setActiveTab] = useState('validate');
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
