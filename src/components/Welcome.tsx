import React from 'react';
import styled from 'styled-components';

const WelcomeContainer = styled.div`
  grid-area: welcome;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  max-width: 800px;
  margin: auto;
`;

const WelcomeMessage = styled.h1`
  font-size: 5rem; 
  color: #333; 
  text-align: center;
  margin: 0;
  font-weight: bold; 
`;

const WelcomeSubtitle = styled.h2`
  font-size: 2rem; 
  color: #666; 
  text-align: center;
  margin-top: 20px; 
  font-weight: normal;
`;

const Welcome: React.FC = () => (
  <WelcomeContainer>
    <WelcomeMessage>Welcome to Your Learning Path</WelcomeMessage>
    <WelcomeSubtitle>Your Success is Our Mission</WelcomeSubtitle>
  </WelcomeContainer>
);

export default Welcome;
