import React from 'react';
import styled from 'styled-components';
import { credits } from '../data/credits';

const Container = styled.div`
  margin-top: 2rem; /* Reduced margin-top for mobile */
  font-style: normal;
  font-weight: 900;
  font-size: 3em;
  margin-bottom: 3rem;
  height: 70rem;
  padding-left: 3rem;
  padding-right: 3rem;
  background-color: #3C5D64;
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
  font-weight: 900;
  letter-spacing: 0.05em;
  width: 55%;
  font-size: 3.25rem;

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
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;

  padding-left: 7%; 
  align-content: space-around;
  width: 70%;
  height: 75%;

  @media only screen and (max-width: 768px) {
    margin-left: 1rem;
    display: block;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: none;
    height: fit-content;
    margin-top: 2rem;
  }
`;

const Section = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  width: 22rem;
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

export default Credits;
