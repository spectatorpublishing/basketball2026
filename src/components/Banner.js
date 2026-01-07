import React from 'react';
import styled from 'styled-components';
import backgroundImage from  '../images/navimage.png'
import HomepageIcon from './HomepageIcon'

const BackgroundImage = styled.div`

    background-image: url(${backgroundImage});

    background-position: 50% 70%;
    background-size: cover;
    background-position: top;
    width:100%;
    height: 100vh;
    
    @media (max-width: 500px) {
        width:100%;
        height: 110vh;
    }

    @media (max-width: 768px) {
        height:25vh;
        position: relative;
    }

`;

const IconWrapper = styled.a`
    display: block;
    width: 70px;
    height: 70px;
    flex-shrink: 0;
    
    position: absolute;
    right: 0;
    top: 51px;
    padding-right: 45px;

    cursor: pointer; 
    text-decoration: none; 

    @media (max-width: 768px) {
        display: none; 
    }
`;

const Banner = () => {
  return(
    <BackgroundImage>
        <IconWrapper href="https://www.columbiaspectator.com/" >
            <HomepageIcon/>
        </IconWrapper>
    </BackgroundImage>
  );
};

export default Banner;
