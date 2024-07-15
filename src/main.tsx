import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app'; // Importa o componente principal da aplicação
import './index.css'; // Importa o arquivo CSS principal

// Cria um novo container de renderização no elemento com ID 'root'
const root = ReactDOM.createRoot(document.getElementById('root')!);

// Renderiza o componente principal da aplicação em modo StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

