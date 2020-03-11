import styled from 'styled-components';
import { animated } from 'react-spring';

export const Under = styled(animated.div)`
  position: absolute;
  max-width: 375px;
  border-radius: 8px;
  width: 100%;
  height:  567px;
  margin: auto;
  box-shadow: 0px 3px 6px #00000029;
`;

export const Container = styled.div`
  max-width: 375px;
  width: 100%;
  height:  567px;
  overflow: hidden;
  display: flex;
  z-index: 1;
  border-radius: 8px;
  align-items: flex-end;
  box-shadow: 0px 3px 6px #00000029;
  
  h1{
    background: #FD3A71;
    color: white;
    margin: 48px;
    font-size: 38px;
    font-weight: bolder;
    transform: rotateY(0deg) rotate(-5deg);
  }

  img{
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    z-index: -1;
    box-shadow: 0px 3px 6px #00000029;
  }

`;
