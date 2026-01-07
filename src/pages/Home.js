import React from 'react';
import Banner from '../components/Banner';
import styled from 'styled-components';
import NavigationSec from '../components/Navagation';
import Credits from '../components/Credits';
import '@fontsource/paytone-one';
import MobileNavBar from '../components/MobileNavBar';
import ShareButton from '../components/SocialShare';

const PageWrapper = styled.div`
    background: #3C5D64;
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

    border: 6px solid #F7ECE5;
    color: #F7ECE5;
    
    text-align: center;

    font-family: "Paytone One";
    font-size: 3.5rem; 
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.35rem; 

    @media (max-width: 768px) {
        width: 90%;
        font-size: 2rem; 
        margin-top: 10px;
    }
`;

const LetterFromEditorWrapper = styled.div`
    width: 85%;
    max-width: 1200px; 
    height: auto;
    flex-shrink: 0;
    border: 5px solid #F7ECE5;

    margin-top: 1.625rem; 
    margin-left: auto;
    margin-right: auto;

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
    padding-top: 3rem;   
    padding-bottom: 2rem;

    width: 85%;
    color: #F7ECE5;

    text-align: center;
    font-family: Inter;
    font-size: 1.4375rem;  
    font-style: normal;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: 0.046rem; 

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
    margin-bottom: 2rem;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 2rem;
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
            <ShareButton />

            <Title>LETTER FROM THE EDITORS</Title>
            
            <LetterFromEditorWrapper>
                <LetterFromEdititor>
                    <p>
                    Dear readers,
                    </p>
                    
                    <p>
                    Last year, Columbia basketball made history. The women’s team earned its first bid to the Big Dance. Ivy Madness, hosted at Levien Gymnasium for the first time, brought fans from all
                    over the conference into our den.  In the fall, fans were treated to an exciting start to the season as the men’s team had its best start since 1969.
                    As we move further into Ivy play, the women’s team is on the prowl for its first Ivy tournament title and second consecutive bid to March Madness.
                    </p>
                
                    <p>
                    In this special edition, our staff takes you through what to expect from conference play, reflects on the stars of the season,
                    and looks at the changing landscape of college basketball. From recaps of recent games to reviews of new recruits,
                    Lions fans old and new need not look further for an in-depth guide to everything Columbia basketball has to offer. 
                    With another historic year in the making, we hope to see you in the stands at Levien.
                    </p>

                    <p>
                    Thanks for reading!
                    </p>
                </LetterFromEdititor>

                <SportsEditorLayout>
                    <SportsEditorWrapper>
                        <NameStyling>Arielle Rieder</NameStyling>
                        <Subtitle>Sports Editor</Subtitle>
                    </SportsEditorWrapper>

                    <SportsEditorWrapper>
                        <NameStyling>Jillian Prunty</NameStyling>
                        <Subtitle>Sports Editor</Subtitle>
                    </SportsEditorWrapper>
                </SportsEditorLayout>
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
