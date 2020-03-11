import styled from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #F5F7FA;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;

`;
export const ContainerCenter = styled.div`
  width: 100%;
  justify-content: center;

`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  max-width: 374px;
  margin-bottom: 32px;

  img{
    width: 60px;
    margin-right: 16px;
  }

  h1{
    font-size: 52px;
    color: #FD3A71;
    font-weight: bolder;
  }

`;

export const ContainerCard = styled.div`
  width: 100vw;
  height: 567px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  will-change: transform;
`;

export const ContainerAnimatedCard = styled(animated.div)`
  width: 100%;
  position: absolute;
  height: 567px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 64px;
  padding-right: 64px;
  max-width: 374px;
  margin: auto;
  margin-top: 16px;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 70px;
  background: #FFFFFF;
  box-shadow: 0px 3px 10px #00000029;
  border-radius: 48px;
`;
