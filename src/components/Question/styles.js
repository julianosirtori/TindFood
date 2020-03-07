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

  @media (max-width: 768px) {
      flex-direction: column;  
  }
`;

export const Answer = styled.div`
  width: 100%;
  margin:4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #F6F6F6;
  box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.1);
  border-radius: 3px; 
  object-fit: cover;
  

  div{
    width: 100%;
    overflow: hidden;
    height: 220px;

    img{
    width: 100%;
    height: 220px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    transition: all 0.3s;
  }
  }
  

  img:hover{
    transform: scale(1.1);
    
  }
  

  strong {
    font-size: 24px;
    color: rgb(236, 153, 147);
    padding: 16px 0px;
    text-align: center;
  }

  &:hover{
    cursor: pointer;
  }
  
`;

export const AlreadyAnswered = styled.div`
    height: 288px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: #F6F6F6;

    span{
      color: rgb(236, 153, 147);
      font-size: 22px;
      font-weight: bold;
    }
`;
