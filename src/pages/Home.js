import React from 'react';
import Banner from '../components/Banner';
import styled from 'styled-components';
import NavigationSec from '../components/Navagation';
import Credits from '../components/Credits';
import '@fontsource/paytone-one';
import MobileNavBar from '../components/MobileNavBar';
import ShareButton from '../components/SocialShare';

const PageWrapper = styled.div`
    background: linear-gradient(#DEC2DB, #9C92C7, #6DA0E1, #5B62B3);
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
`;

const Title = styled.div`

    width: 922px;
    height: auto; 
    flex-shrink: 0;



   
    width: 85%;
    padding-top: 6rem;   
    padding-bottom: 1rem;
    color: #F7ECE5;
    text-align: center;
    
    font-family: Gochi Hand;
    font-size: 56px; 
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    letter-spacing: 10%; 

    @media (max-width: 768px) {
        width: 90%;
        font-size: 2rem; 
        margin-top: 10px;
    }
`;

const LetterFromEditorWrapper = styled.div`

    max-width: 86%; 
    height: auto;
    flex-shrink: 0;
    border: 5px solid #F7ECE5;

    margin-top: 3.825rem; 
  

    display: flex;
    flex-direction: column; 
    align-items: center;    
    text-align: center;  

    @media (max-width: 768px) {
        width: 90%;
        margin-top: 1rem;
        border: 3px solid #F7ECE5; 
    } 
`;

const LetterFromEdititor = styled.div`
    padding-top: 2rem;   
    padding-bottom: 2rem;

    width: 85%;
    color: #F7ECE5;

    text-align: left;
    font-family: Inter;
    font-size: 23px;  
    font-style: medium;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 2%; 

    @media (max-width: 768px) {
      width: 90%;
      font-size: 1.125rem; 
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
`;

const SportsEditorLayout = styled.div`
    display: flex;
    flex-direction: row; 
    gap: 18rem; 
   
    justify-content: right;
    align-items: right;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }
`;

const ShareAndSportsEditorContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  width: 100%;
  max-width: 86%;
  padding: 0 10%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    padding: 0;
  }
`;



const SportsEditorWrapper = styled.div`
    width: auto; 
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 0.625rem; 
    padding-bottom: 3rem;
    color: #F7ECE5;

    @media (max-width: 768px) {
        width: auto;
        padding-bottom: 1rem;
    }
`;

const NameStyling = styled.div`
    color: #F7ECE5;
    font-family: Sacramento;
    font-size: 2.1875rem; 
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    white-space: nowrap; 
    

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
`;

const Subtitle = styled.div`
    color: #F7ECE5;
    font-family: Inter;
    font-size: 1.25rem; 
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    @media (max-width: 768px) {
      font-size: 1rem; 
    }
`;

const Home = () => {
    return (
        <PageWrapper>
            
            <MobileNavBar current = {"home"} />
            
            <Banner />
            

            
            
            <LetterFromEditorWrapper>
            <Title>LETTER FROM THE EDITOR</Title>
                <LetterFromEdititor>
                    <p>
                    This season, Columbia basketball once again finds itself at a pivotal moment. On the men’s side, change has taken center stage: With the hiring of new head coach Kevin Hovde, the program has entered a new era—one that is already showing promising results. Under Hovde’s leadership, the Lions have matched last season’s conference win total, signaling progress and renewed energy.
                    </p>
                    
                    <p>
                    Meanwhile, Columbia women’s basketball continues to build on a legacy years in the making. As the program seeks a fourth-consecutive Ivy League regular-season title, an Ivy Tournament championship, and another ticket to the Big Dance, this season represents both a pursuit of history and a celebration of it.
                    </p>
                
                    <p>
In this edition, we take a closer look at each teams’ coaching staff and examine how leadership has shaped the season thus far. We also reflect on the rich history of women’s basketball at Columbia and what it means for the team to once again carry championship expectations. Our writers break down conference play, spotlight key contributors, and explore the broader narratives defining the season. From coaching changes to championship chases, this edition offers everything Lions fans need to know about Columbia basketball as another memorable year unfolds.
                    </p>

                    <p>With history within reach and new chapters being written, we hope you enjoy the 2025-26 Basketball Edition.</p>

                    <p>Thanks for reading!</p>

                    
                </LetterFromEdititor>
                <ShareAndSportsEditorContainer>
                <ShareButton />
                <SportsEditorLayout>
                    

                    <SportsEditorWrapper>
                        <NameStyling>Kaya Quebada</NameStyling>
                        <Subtitle>Sports Editor</Subtitle>
                    </SportsEditorWrapper>
                </SportsEditorLayout>
                </ShareAndSportsEditorContainer>
            </LetterFromEditorWrapper>

            <NavigationSec 
                first={true}            
                               next="All Basketball"         

                link="/all"        
            />

            <Credits />
        </PageWrapper>
    );
};

export default Home;
