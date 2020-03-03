import React from 'react';
import { Link } from 'react-router-dom';

import TinderLogo from '../../assets/tinde_logo_white.svg';

import { Container, Center } from './styles';

export default function Start() {
  return (
    <Container>
      <Center>
        <img src={TinderLogo} alt="TinderLogo" />
        <h1>TindFood</h1>
        <p>Bem vindo ao TindFood, para começar precisamos nos conhecer melhor Responda umas perguntinhas, é rapidão ;)</p>
        <Link to="/questions">Começar</Link>
      </Center>

    </Container>
  );
}
