import React from 'react';
import styled from 'styled-components';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import Session from './components/Session';
import { GlobalStyles } from './styles/GlobalStyles';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 20px;
  padding: 20px;
  min-height: 100vh;
  box-sizing: border-box;
  grid-template-areas:
    "navbar navbar navbar navbar navbar navbar navbar navbar navbar navbar navbar navbar"
    ". . . . . . . . . . . ."
    "welcome welcome welcome welcome welcome welcome welcome welcome welcome welcome welcome welcome"
    ". . . . . . . . . . . ."
    "session session session session session session session session session session session session";
`;

const App: React.FC = () => (
  <>
    <GlobalStyles />
    <GridContainer>
      <NavBar /> 
      <Welcome /> 
      <Session /> 
    </GridContainer>
  </>
);

export default App;

