import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fd5068;

  h2{
    color: #fff;
    font-weight: bold;
    font-size: 28px;
    text-align: center;
  }
`;

export const Answers = styled.div`
  width: 100%;
  padding: 8px 4px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto;
`;

export const Answer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #F6F6F6;

  img{
    width: 364px;
    height: 220px;
  }

  strong {
    font-size: 24px;
    color: #fd5068;
    padding: 16px 0px;
  }
`;
