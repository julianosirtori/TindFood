import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import history from '../../services/history';

import { saveAnswers } from '../../store/actions';
import Question from '../../components/Question';
import { Container, SendButton } from './styles';


export default function Questions() {
  const [answers, setAnswers] = useState([]);

  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions);

  function handleBtnSend() {
    dispatch(saveAnswers(answers));
    history.push('cards');
  }

  function answered(answer) {
    setAnswers([
      ...answers,
      answer,
    ]);
  }

  return (
    <Container>
      <h1>Vamos se conhecer ?</h1>
      {questions.map((item) => (
        <Question answered={answered} key={item.id} question={item} />
      ))}
      <SendButton onClick={handleBtnSend} type="button">Enviar</SendButton>
    </Container>
  );
}
