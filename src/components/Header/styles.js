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
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* duas colunas na primeira linha */
    justify-items: center;
    gap: 20px;
    img {
      width: 70%;
      grid-column: 1;
    }
  }
`;

export const Menu = styled.div`
  display: flex;
  list-style: none;
  gap: 50px;
  @media (max-width: 768px) {
    grid-column: 1/3;
  }
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

  @media (max-width: 900px) {
    font-size: 20px;
  }
`;

export const SearchDiv = styled.div`
  width: 20vw;
  height: 5vh;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  input {
    width: 100%;
    height: 100%;
    border-radius: 30px;
    border: none;
    padding: 0 20px;
    font-size: 16px;
  }
  .search-icon {
    position: absolute;
    margin-right: 15px;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    grid-column: 2;
    width: 30vw;
  }
`;
