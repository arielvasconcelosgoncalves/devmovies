import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    border-radius: 30px;
    width: 300px;
    height: 450px;
    cursor: pointer;
  }
  h3 {
    color: #ffffff;
    margin-top: 15px;
    margin-bottom: 20px;
  }
  @media (max-width: 768px) {
    img {
      width: 200px;
      height: 300px;
    }
  }
`;
