import styled from 'styled-components';

export const Container = styled.div`
  background: #000;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  padding: 30px;
  max-width: 1200px;
  iframe {
    border: none;
  }
`;

export const Background = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
