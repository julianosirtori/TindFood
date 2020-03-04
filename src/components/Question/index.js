import React from 'react';
import PropTypes from 'prop-types';

import {
  Container, Header, Answers, Answer,
} from './styles';

export default function Question({ question }) {
  return (
    <Container>
      <Header>
        <h2>{question.question}</h2>
      </Header>
      <Answers>
        {question.answers.map((item) => (
          <Answer key={item.title}>
            <img src={item.image} alt={item.title} />
            <strong>{item.title}</strong>
          </Answer>
        ))}
      </Answers>

    </Container>
  );
}

Question.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf({
      image: PropTypes.string,
      title: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
