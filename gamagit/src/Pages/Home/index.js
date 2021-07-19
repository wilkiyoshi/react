
import React, {useState} from 'react';
import axios from 'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom'

function App(props) {
  const history = useHistory();
  const [ usuario, setUsuario ] = useState('');
  const [erro, setError] = useState (false);

  function handlePesquisa(){
      console.log({usuario});
      axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
        const repositories = response.data;
        const repositoriesName = [];
        repositories.map((respository) => {
          repositoriesName.push(respository.name);
        });
        //console.log(repositoriesName);
        localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
        history.push ('/repositories')
        
      }).catch(err =>{
        setError(true);
      });

  }
  return (
    <S.Container>
    <h1>{props.title}{props.user}</h1>
    <S.Input placeholder="Usuário" className="usuarioInput" value={usuario} onChange={e => setUsuario(e.target.value)}></S.Input>
    <S.Button type='button' onClick={handlePesquisa}>Pesquisar</S.Button>
    { erro ? <S.Erromsg>Usuário não encontrado</S.Erromsg> : }
    
    </S.Container>
  );

}

export default App;

//JSX código HTML dentro de um script