import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

import TinderLogo from '../../assets/tinde_logo.svg';

import {
  Container, ContainerCenter, Logo, Card, Buttons, Button,
} from './styles';

export default function Cards() {
  return (
    <Container>
      <ContainerCenter>
        <Logo>
          <img src={TinderLogo} alt="Tinder Logo" />
          <h1>TinderFood</h1>
        </Logo>
        <Card />
        <Buttons>
          <Button>
            <MdClose color="#FE6C6B" size={35} />
          </Button>
          <Button>
            <FaHeart color="#4FCD91" size={35} />
          </Button>
        </Buttons>
      </ContainerCenter>
    </Container>
  );
}
