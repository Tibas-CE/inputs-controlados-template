import React, { useState } from 'react'
import {MainContainer, Form, Input} from './styles'

function MainPage() {

  //estados
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [email, setEmail] = useState("");
  const [usuario, setUsuario] = useState({});

  //funções que armazena os valores recebidos pelo input
  const onChangeNome = (event) => {
    setNome(event.target.value);
  }

  const onChangeIdade = (event) => {
    setIdade(event.target.value);
  }

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  // const enviaDados = () => {
  //   //Outra forma
  //   // const usuario = {
  //   //   nome: nome,
  //   //   idade: idade,
  //   //   email: email
  //   // }
    
  //   // console.log(usuario);
  //   //objeto vazio
  //   const dadosUsuario = {};
    
  //   //enviando dados ao objeto dadosUsuario
  //   dadosUsuario.nome = nome;
  //   dadosUsuario.idade = idade;
  //   dadosUsuario.email = email;

  //   console.log(dadosUsuario);
    
  //   //limpando o input
  //   setNome("")
  //   setIdade("")
  //   setEmail("")
  // }

  //resolução da Patricia Sacramento 
  const envia = () => {
    const formulario = {
      nome: nome,
      idade: idade,
      email: email
    }
    
    setUsuario(formulario)

    console.log(formulario);

    setNome("")
    setIdade("")
    setEmail("")   
  }

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label>
          Nome:
          <Input value={nome} onChange={onChangeNome}/>
        </label>
        <label>
          Idade:
          <Input value={idade} onChange={onChangeIdade}/>
        </label>
        <label>
          E-mail:
          <Input value={email} onChange={onChangeEmail}/>
        </label>
      <button onClick={envia}>Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage