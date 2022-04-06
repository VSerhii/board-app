import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Boards from './routes/Boards/Boards';
import theme from './styles/theme';

// TODO: MAKE ABSOLUTE IMPORTS

function App() {
  return (
    <ThemeProvider theme={theme.black}>
      <DivWrapper>
        <Routes>
          <Route path="/" element={<Boards />} />
          <Route path="/:boardId" element={<div>BOARD id</div>} />
        </Routes>
      </DivWrapper>
    </ThemeProvider>
  );
}

const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  overflow: visible;
  background-color: ${({ theme: { main } }) => main};
  color: ${({ theme: { text: { primary } } }) => primary};
`;

export default App;
