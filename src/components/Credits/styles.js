import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 30px;
  div {
    display: flex;
    flex-direction: column;
  }
  p {
    color: #ffffff;
  }
  img {
    height: 21vh;
  }
`;

export const Title = styled.h4`
  color: #ffffff;
  font-size: 28px;
  font-weight: 700;
`;
