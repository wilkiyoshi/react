import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import axios from 'axios';

function App(props) {
  const [ usuario, setUsuario ] = useState('');
  function handlePesquisa(){
      console.log({usuario});
      axios.get(`https://api.github.com/users/${usuario}/repos`).then(response =>console.log(response.data));

  }
  return (
    <>
    <h1>{props.title}{props.user}</h1>
    <p>{usuario}</p>
    <input placeholder="Usuário" className="usuarioInput" value={usuario} onChange={e => setUsuario(e.target.value)}></input>
    <button type='button' onClick={handlePesquisa}>Pesquisar</button>
    </>
  );

}

export default App;

//JSX código HTML dentro de um script