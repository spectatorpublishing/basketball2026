import React from 'react';
import styled from 'styled-components';
import { credits } from '../data/credits';

const Container = styled.div`
  margin-top: 2rem; /* Reduced margin-top for mobile */
  font-style: normal;
  font-weight: 900;
  font-size: 3em;
  display: flex
  height: 70rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 86%;
  margin-bottom: 3.825rem; 

  color: #FFF;

  @media (min-width: 768px) {
      border-style: solid;
      border-color: #F7ECE5;
      margin-top: 0px; /* Maintains margin-top for larger screens */
  }

  @media (max-width: 480px) {
      margin-top: 1rem; /* Further reduce margin-top for very small screens */
      padding-left: 1.5rem;
      padding-right: 1.5rem;
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
  font-size: 45px;

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
  gap: 3rem 3rem;
  padding-left: 15%;

  width: 100%;
  max-width: 72rem; /* controls table width */
  margin: 3rem auto 0; /* centers grid */

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;


const Section = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  width: 20rem;
  height: fit-content;
  color: white;
  margin-bottom: 2rem;
  padding: 0;
  margin: 0;

  @media only screen and (max-width: 1216px) {
    font-size: 1.6rem;
    width: 16rem;
  }
  @media only screen and (max-width: 1024px) {
    font-size: 1.4rem;
    width: 14rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
    text-align: center;
    width: 100%;
  }
  @media only screen and (max-width: 600px) {
    font-size: 1.2rem;
    width: 85%;
  }
`;

const Name = styled.div`
  font-size: 1.15rem;
  font-weight: 400;
  margin-top: 1rem;
  margin-bottom: 1rem;

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

exp