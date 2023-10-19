import { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-okaidia.css';


const tabs = [
  {
    id: 'usersList',
    label: 'userController',
    content: `
/*
* simples controller que cria um trata do service do user
*userController.js
*/

//importando os metodos service do user.
import { index, store, show, update, destroy } from "#service/userService";

export async function listUsers(req,res){
  const usersList = await index();
  res.json(usersList);
}

export async function getUser(req,res){
  const userInfo = await show(req.params.id);
  userInfo ? res.json(userInfo) : res.json({msg:"User not found..."});
}

export async function deleteUser(req,res){
  const userDelete = await destroy(req.body.id);
  userDelete ? res.json({msg:"user deleted"}) : res.json({msg:"user dont exist"}); 
}

export async function newUser(req,res){
  const createUser = await store(req.body);
  createUser ? res.json({msg:"User created"}) : res.json({msg:"user not created"});
}

export async function updateUser(req,res){
  const userUpdate = await update(req.body.id,req.body);
  userUpdate ? res.json({msg:"User updated"}) : res.json({msg:"User dont updated"});
}
`
  }, 
];

export default function Controller() {
  const [activeTab, setActiveTab] = useState('usersList');
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
