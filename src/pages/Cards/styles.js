import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #F5F7FA;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

`;
export const ContainerCenter = styled.div`
  width: 100%;
  max-width: 374px;

`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
  display: flex;
  align-items: center;

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

export const Card = styled.div`
  max-width: 375px;
  width: 100%;
  height:  567px;
  box-shadow: 0px 3px 10px #00000029;
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 64px;
  padding-right: 64px;
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
