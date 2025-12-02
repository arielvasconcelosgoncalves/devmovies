import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 120px;
  padding-left: 40px;
  padding-right: 40px;

  h1 {
    color: white;
    margin-bottom: 30px;
  }

  p {
    color: #ccc;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 150px;
  }
`;
