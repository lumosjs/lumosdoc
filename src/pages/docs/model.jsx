import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-okaidia.css';


const tabs = [
  {
    id: 'userModel',
    label: 'User',
    content: `
/*
* simples model que  tem o nosso banco de dados users
*user.js
*/

const user = [
    {
        "id":"255261",
        "name":"John",
        "email":"john.emily@yahoo.com",
        "country":"Canada",
        "photo":"https://randomuser.me/api/portraits/men/77.jpg"
    },
    {
        "id":"226195",
        "name":"David",
        "email":"david.sophia@outlook.com",
        "country":"Japan",
        "photo":"https://randomuser.me/api/portraits/men/68.jpg"
    },
    {
        "id":"493672",
        "name":"Alice",
        "email":"emily.john@yahoo.com",
        "country":"Japan",
        "photo":"https://randomuser.me/api/portraits/women/42.jpg"
    },
    {
        "id":"703642",
        "name":"Daniel",
        "email":"emily.david@gmail.com",
        "country":"Canada",
        "photo":"https://randomuser.me/api/portraits/women/55.jpg"
    },
    {
        "id":"775456",
        "name":"Emily",
        "email":"daniel.michael@gmail.com",
        "country":"Canada",
        "photo":"https://randomuser.me/api/portraits/men/88.jpg"
    },
    {
        "id":"989409",
        "name":"Michael",
        "email":"emily.david@hotmail.com",
        "country":"Australia",
        "photo":"https://randomuser.me/api/portraits/women/46.jpg"
    }
]

export default user;
`
  }, 
];

export default function Model() {
  const [activeTab, setActiveTab] = useState('userModel');
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