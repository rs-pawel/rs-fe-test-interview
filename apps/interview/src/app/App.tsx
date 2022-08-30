import { Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import { ApiDocs } from './components';
import { CodingTask } from './CodingTask';

const Nav = styled.div`
  > a {
    padding: 20px;
  }
`;

const Content = styled.div`
  padding-top: 20px;
`;

export const App = () => (
  <>
    <h1>RetentionScience interview</h1>
    <Nav>
      <Link to="/api-docs">API Documentation</Link>
      <Link to="/coding-task">Coding Task</Link>
    </Nav>
    <Content>
      <Routes>
        <Route path="/api-docs" element={<ApiDocs />} />
        <Route path="/coding-task" element={<CodingTask />} />
      </Routes>
    </Content>
  </>
);

export default App;
