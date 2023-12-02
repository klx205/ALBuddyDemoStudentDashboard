import React from 'react';
import styled from 'styled-components';

const SessionContainer = styled.div`
  grid-area: session; 
  background-color: #FFFFFF; 
  padding: 25px; 
  width: 80%; 
  max-width: 600px; 
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); 
  text-align: center;
  margin: 0 auto;
  margin-bottom: 50px; 
  border-radius: 15px; 
`;

const SessionTitle = styled.h2`
  font-size: 26px; 
  color: #333; 
  margin-bottom: 20px; 
`;

const SessionInfo = styled.p`
  font-size: 20px; 
  color: #555; 
  margin-bottom: 25px; 
`;


const Session: React.FC = () => (
  <SessionContainer>
    <SessionTitle>Your Next Session:</SessionTitle>
    <SessionInfo>Monday at 10:00 AM</SessionInfo>
  </SessionContainer>
);

export default Session;
