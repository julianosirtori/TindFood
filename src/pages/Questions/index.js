import React from 'react';

import data from '../../data/data.json';
import Question from '../../components/Question';

import { Container, SendButton } from './styles';


export default function Questions() {
  return (
    <Container>
      <h1>Vamos se conhecer ?</h1>
      {data.questions.map((item) => (
        <Question key={item.id} question={item} />
      ))}
      <SendButton type="button">Enviar</SendButton>
    </Container>
  );
}
