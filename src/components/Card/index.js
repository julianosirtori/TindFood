import React from 'react';

import { Container, Under } from './styles';

export default function Card({ card, ...props }) {
  return (
    <Under {...props}>
      <Container>
        <img src={card.image} alt="foto" />
        <h1>{card.title}</h1>
      </Container>
    </Under>

  );
}
