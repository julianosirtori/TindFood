import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Container, Header, Answers, Answer, AlreadyAnswered,
} from './styles';

export default function Question({ question, answered }) {
  const [userAnsewer, setUserAnsewer] = useState();


  function choseAnsewer(ansewer) {
    setUserAnsewer(ansewer);
    answered({
      question: {
        id: question.id,
        question: question.question,
      },
      ansewer,
    });
  }

  return (
    <Container>
      <Header>
        <h2>{question.question}</h2>
      </Header>
      <Answers>
        {userAnsewer
          ? (
            <AlreadyAnswered>
              <span>
                {`Você respondeu: ${userAnsewer.title}`}
              </span>
            </AlreadyAnswered>
          )
          : question.answers.map((item) => (
            <Answer key={item.title} onClick={() => choseAnsewer(item)}>
              <div>
                <img src={item.image} alt={item.title} />
              </div>
              <strong>{item.title}</strong>
            </Answer>
          ))}
      </Answers>

    </Container>
  );
}

Question.propTypes = {
  answered: PropTypes.func.isRequired,
  question: PropTypes.shape({
    id: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string,
      }),
    ).isRequired,
  }).isRequired,
};
