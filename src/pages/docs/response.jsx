import React, { useState } from 'react';

export default function Response() {

  return (
    <div style={{
      display:"flex",
      justifyContent:"center",
      flexDirection:"column",
      alignItems:"center",
      width:"100%",
    }}>

    <table class="border-collapse text-center border border-slate-800" style={{width:800}}>
      <thead>
        <tr>
          <th class="border border-slate-600 ...">Propriedade</th>
          <th class="border border-slate-600 ...">Exemplo de uso</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-slate-700 ...">log</td>
          <td class="border border-slate-700 ...">res.log("Mensagem aqui")</td>
        </tr>
        <tr>
          <td class="border border-slate-700 ...">send</td>  
          <td class="border border-slate-700 ...">res.send("Mensagem")</td>
        </tr>
        <tr>
          <td class="border border-slate-700 ...">json</td>
          <td class="border border-slate-700 ...">res.json({JSON.stringify({ id: 1 })})</td>
        </tr>


        <tr>
          <td class="border border-slate-700 ...">setHeader</td>
          <td class="border border-slate-700 ...">res.setHeader('Access-Control-Allow-Origin', '*');</td>
        </tr>

         <tr>
          <td class="border border-slate-700 ...">go</td>
          <td class="border border-slate-700 ...">res.go("/login")</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}