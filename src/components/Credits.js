import React from 'react';
import styled from 'styled-components';
import { credits } from '../data/credits';

const Container = styled.div`
  margin-top: 2rem;
  margin-bottom: 3.825rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 86%;
  height: auto;
  padding-left: 5%;

  color: #FFF;
  border: 3px solid #F7ECE5;

  @media (max-width: 480px) {
    padding: 0 1.5rem;
  }
`;


const HeaderDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.h1`
  text-align: center;
  font-weight: 400;
  letter-spacing: 10%;
  width: 55%;
  font-family: Gochi Hand;
  line-height: 60px;
  font-size: 55px;

  @media only screen and (max-width: 1216px) {
    font-size: 2.1rem;
  }
  @media only screen and (max-width: 768px) {
    width: 80%;
    font-size: 2rem;
  }
  @media only screen and (max-width: 600px) {
    width: 90%;
    font-weight: 600;
    font-size: 1.5rem;
    padding-top: 2rem;
  }
`;

const SectAndNames = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(14rem, 1fr));
  gap: 3rem;
  
  width: 100%;
  max-width: 72rem;
  margin: 3rem auto 0;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;



const Section = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: white;
  font-family: Inter;
  width: 100%;

  @media (max-width: 1216px) {
    font-size: 1.6rem;
  }

  @media (max-width: 1024px) {
    font-size: 1.4rem;
  }

  @media (max-width: 768px) {
    text-align: center;
    font-size: 1.5rem;
  }

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;


const Name = styled.div`
  font-size: 28px;
  font-weight: 400;
  margin-top: 1rem;
  margin-bottom: 1rem;
  line-height: 140%;
  font-family: Inter;

  @media only screen and (max-width: 1216px) {
    font-size: 1rem;
  }
  @media only screen and (max-width: 1024px) {
    font-size: 0.75rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Credits = () => {
  return (
    <Container>
      <HeaderDiv>
        <Header>THE STAFF WHO MADE THIS ISSUE POSSIBLE</Header>
      </HeaderDiv>
          
      <SectAndNames>
        {Object.entries(credits).map(([section, key]) => (
          <Section key={section}>
            {section}
            <br/>
            {key.map((person, index) => (
              <Name key={index}>
                {person.staff_name}, {person.title}
              </Name>
            ))}
            <br/>
          </Section>
        ))}
      </SectAndNames>
    </Container>
  );
};

export default Credits;
