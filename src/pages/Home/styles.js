import styled from 'styled-components';

export const Background = styled.div`
  position: relative;
  background-image: url(${(props) => props.$img});
  height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`;

export const Info = styled.div`
  z-index: 3;
  padding: 20px;
  width: 50%;
  h1 {
    font-size: 5rem;
    font-weight: 700;
    color: #ffffff;
  }
  p {
    font-size: 20px;
    font-weight: 500;
    color: #ffffff;
    margin-top: 30px;
    margin-bottom: 20px;
  }
`;

export const Poster = styled.div`
  z-index: 2;
  img {
    width: 300px;
    border-radius: 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  max-width: 1200px;
`;

export const ContainerButtons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
`;
