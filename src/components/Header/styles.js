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
  a {
    color: #ffffff;
  }
`;
