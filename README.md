import React from 'react';
import { useQuery } from 'react-query';

// Função para buscar dados da API
const fetchData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Não foi possível buscar os dados.');
  }
  return response.json();
};

function PostList() {
  // Usar o hook useQuery para buscar os dados da API
  const { data, error, isLoading } = useQuery('posts', fetchData);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro: {error.message}</div>;
  }

  return (
    <div>
      <h1>Lista de Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;

// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">Introdução</Link>
      <Link to="/getting-started">Início Rápido</Link>
      <Link to="/usage">Como Usar</Link>
    </div>
  );
};

export default Sidebar;
