import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { useDrag } from 'react-use-gesture';
import { useSprings, interpolate } from 'react-spring';

import Card from '../../components/Card';

import TinderLogo from '../../assets/tinde_logo.svg';
import data from '../../data/data.json';

import {
  Container, ContainerCenter, Logo, Buttons, Button, ContainerCard, ContainerAnimatedCard,
} from './styles';

const to = (i) => ({
  x: 0, y: i, scale: 1, rot: 1 * Math.random(), delay: i * 100,
});
const from = () => ({
  x: 0, rot: 0, scale: 1.5, y: -1000,
});
const trans = (r, s) => `rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;
export default function Cards() {
  const { cards } = data;
  const [gone] = useState(() => new Set());
  const [props, set] = useSprings(cards.length, (i) => ({ ...to(i), from: from(i) }));

  const bind = useDrag(({
    args: [index], down, movement: [mx], direction: [xDir], velocity,
  }) => {
    const dir = xDir < 0 ? -1 : 1; // se '-1'-> left; se 1 -> right;
    const trigger = velocity > 0.2;
    if (!down && trigger) gone.add(index);
    set((i) => {
      if (index !== i) return;
      const isGone = gone.has(index);
      const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0;
      const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0);
      const scale = down ? 1.1 : 1;
      return {
        x,
        rot,
        scale,
        delay: undefined,
        config:
          { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
      };
    });
  });

  return (
    <Container>
      <ContainerCenter>
        <Logo>
          <img src={TinderLogo} alt="Tinder Logo" />
          <h1>TinderFood</h1>
        </Logo>
        <ContainerCard>
          {props.map(({
            x, y, rot, scale,
          }, i) => (
            <ContainerAnimatedCard style={{ x, y }} key={String(i)}>
              <Card card={cards[i]} {...bind(i)} style={{ transform: interpolate([rot, scale], trans) }} />
            </ContainerAnimatedCard>
          ))}
        </ContainerCard>

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
