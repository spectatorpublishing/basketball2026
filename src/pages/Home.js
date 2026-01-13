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
    text-align: left;
    
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. A mollis amet vitae sed purus, semper ullamcorper augue vitae. Hac pretium urna, tempus sit quam suspendisse maecenas et. Egestas neque sollicitudin rhoncus vitae at ipsum pulvinar faucibus. Facilisi risus blandit egestas in dignissim et sapien faucibus. Tortor accumsan libero sed aliquam dui magna vitae, habitant egestas. Consectetur egestas tellus auctor interdum id gravida quis pellentesque. At amet nulla tellus orci gravida. Egestas aenean mauris in velit. Fermentum consectetur augue et habitant commodo, libero odio.
                    </p>
                    
                    <p>
                    Id nascetur vel eu fermentum elementum ac cras enim. Dui habitant commodo consequat sit in molestie in id. Ipsum volutpat etiam tristique fringilla. Tellus eu quis mauris massa tristique tortor, egestas luctus lacus. Gravida facilisis sagittis eget facilisi molestie amet, ut pellentesque morbi.
                    </p>
                
                    <p>
Velit massa facilisis non enim arcu. Euismod cursus neque, feugiat vestibulum ornare. Feugiat feugiat tincidunt purus mauris quis lectus neque, molestie. Sed auctor sit fusce tristique. Nisl eu nullam gravida massa morbi purus. Ullamcorper eget sed venenatis enim, elit. In cursus pellentesque lacus ornare a. 
                    </p>

                    
                </LetterFromEdititor>
                <ShareAndSportsEditorContainer>
                <ShareButton />
                <SportsEditorLayout>
                    

                    <SportsEditorWrapper>
                        <NameStyling>Jillian Prunty</NameStyling>
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
