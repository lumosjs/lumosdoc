import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-okaidia.css';


const tabs = [
  {
    id: 'test',
    label: 'Testing',
    content: `
/*
* fazendo um simples teste de um controller que retorna um objecto com {id:1}
*/

//userController.js dentro da pasta app/controllers

export function returnId(req,res){
  return res.json({id:1})
}



// dentro da past test adiciona esse code em um arquivo chamado
//test_create.js
// pra rodar esse code precisas instalar o mocha e chai.


import { returnId } from "#controller/userController";
import { describe, it } from 'mocha';
import { expect } from 'chai';

describe('User Controller', () => {
  describe('Verificar se vai retornar um objecto', () => {
    it('deveria retornar um objeto com a propriedade id', () => {
      const req = {};
      const res = {
        json: (data) => {
          expect(data).to.be.an('object');
          expect(data).to.have.property('id');
          expect(data.id).to.equal(1);
        },
      };

      returnId(req, res);
    });
  });
})
`
  }, 
];

export default function Testing() {
  const [activeTab, setActiveTab] = useState('test');
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
