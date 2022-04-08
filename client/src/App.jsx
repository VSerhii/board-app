import React from 'react';
import {
  Routes,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Boards from './routes/Boards/Boards';
import Board from './routes/Board/Board';
import theme from './styles/theme';

// TODO: MAKE ABSOLUTE IMPORTS
function App() {
  const { pathname } = useLocation();

  return (
    <ThemeProvider theme={theme.black}>
      <DivWrapper>
        <DivHeadWrapper>
          <DivHeader>Board app</DivHeader>
          {pathname !== '/' && <HomeLink to="/">Home</HomeLink>}
        </DivHeadWrapper>
        <Routes>
          <Route path="/" element={<Boards />} />
          <Route path="/:boardId" element={<Board />} />
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

const DivHeadWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;

const DivHeader = styled.div`
  display: flex;
  align-content: center;
  height: 10vh;
  flex: 1;
  font-size: 48px;
`;

const HomeLink = styled(Link)`
  text-decoration: underline;
  color: white;
  font-size: 14px;
`;

export default App;
