import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  width: 100%;
  background: #FFF;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1{
    color: #fd5068;
    font-weight: bold;
    font-size: 32px;
    padding: 32px;
    text-align: center;
  }
`;

export const SendButton = styled.button`
  width: 100%;
  max-width: 800px;
  padding: 12px;
  font-size: 32px;
  background: #fd5068;
  border-radius: 16px;
  text-align: center;
  border: none;
  margin-top: 32px;
  margin-bottom: 32px;
  color: #fff;
  font-weight: bold;
`;
