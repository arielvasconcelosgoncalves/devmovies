import styled from 'styled-components';

export const Container = styled.div`
  z-index: 99;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;
  img {
    width: 25%;
  }
  background-color: ${(props) => (props.$changeBackground ? '#000' : 'transparent')};
  transition: background-color 0.5s ease-in-out;
`;

export const Menu = styled.div`
  display: flex;
  list-style: none;
  gap: 50px;
`;

export const Li = styled.li`
  font-weight: 600;
  cursor: pointer;
  font-size: 28px;
  position: relative;
  a {
    color: #ffffff;
  }

  &::after {
    content: '';
    height: 3px;
    width: ${(props) => (props.$isActive ? '100%' : 0)};
    background-color: #189b20;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translate(-50%);
    transition: width 0.5s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const Search = styled.div`
  width: 20vw;
  height: 5vh;
  input {
    width: 100%;
    height: 100%;
    border-radius: 30px;
    border: none;
    padding: 0 20px;
    font-size: 16px;
  }
`;
