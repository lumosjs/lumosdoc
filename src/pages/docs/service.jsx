import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-okaidia.css';


const tabs = [
  {
    id: 'usersService',
    label: 'userService',
    content: `
/*
* simples service que  trata do model do User que tem o nosso banco de dados users
*userService.js
*/

//importando o model user
import  user  from "#model/user";

async function index() {
  return user;
}

async function store(data) {
  user.push(data);
  return data;
}

async function show(id) {
  const item = user.find(item => item.id === id);
  return item;
}

async function update(id, data) {
  const indexToUpdate = user.findIndex(item => item.id === id);
  if (indexToUpdate !== -1) {
    user[indexToUpdate] = { ...user[indexToUpdate], ...data };
    return user[indexToUpdate];
  }
  return null;
}

async function destroy(id) {
  const indexToDelete = user.findIndex(item => item.id === id);
  if (indexToDelete !== -1) {
    const deletedItem = user.splice(indexToDelete, 1);
    return deletedItem[0];
  }
  return null;
}

export {
  index,
  store,
  show,
  update,
  destroy,
};
`
  }, 
];

export default function Service() {
  const [activeTab, setActiveTab] = useState('usersService');
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
