import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Container, Header, Answers, Answer, AlreadyAnswered,
} from './styles';

export default function Question({ question }) {
  const [userAnsewer, setUserAnsewer] = useState();


  function answerd(ansewer) {
    setUserAnsewer(ansewer);
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
            <Answer key={item.title} onClick={() => answerd(item)}>
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
  question: PropTypes.shape({
    question: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf({
      image: PropTypes.string,
      title: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
