import React from 'react';
import styled from 'styled-components';

//Pages
import HomePage from './pages/HomePage';

const AppContainer = styled.main`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;
`;

function App() {
  return (
    <AppContainer>
      <header>HEADER</header>
      <HomePage />
    </AppContainer>
  );
}

export default App;
