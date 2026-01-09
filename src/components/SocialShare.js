import React, { useState, useRef, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useOnClickOutside } from "../scripts/useOnClickOutside";

const ButtonWrapper = styled.div`
display: flex;
    flex-direction: row;
    width: 500px;
`;
const StyledShareButton = styled.button`
  background-color: #F07136;
  color: #F7ECE5;
  border-radius: 1.5rem;
  border: 0;
  padding: 0.5rem 0.7rem; 
  cursor: pointer;
  font-size: 17px;
  font-family: "Paytone One";
  transform: translateX(0);
  transition: 300ms ease-in-out;

  

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;

  }
`;

const CircleWrapper = styled.div`
  position: relative;
  right: 20px;
`;

const ShareCircle = styled.div`
  height: 3rem;
  width: 3rem;
  margin-left: -0.75rem;
  filter: drop-shadow(0 0 0.25rem rgba(68, 68, 68, 0.36));
  background-color: #2681ef;
  border-radius: 50rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin: 0 5px; 
    height: 3rem;
    width: 3rem;
  }
`;

const fadeIn1 = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;
const fadeIn2 = keyframes`
  0% { opacity: 0; }
  33% { opacity: 0; }
  100% { opacity: 1; }
`;
const fadeIn3 = keyframes`
  0% { opacity: 0; }
  40% { opacity: 0; }
  100% { opacity: 1; }
`;
const fadeIn4 = keyframes`
  0% { opacity: 0; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

const ShareLink = styled.a`
  position: absolute;
  opacity: 1;

  ${props =>
    props.order === 1 &&
    css`
      animation: ${fadeIn1} 300ms linear;
      transform: translate(-6.65rem, -32.5%);
    `}

  ${props =>
    props.order === 2 &&
    css`
      animation: ${fadeIn2} 450ms linear;
      transform: translate(-4.35rem, -135%);
    `}

  ${props =>
    props.order === 3 &&
    css`
      animation: ${fadeIn3} 600ms linear;
      transform: translate(-0.65rem, -135%);
    `}

  ${props =>
    props.order === 4 &&
    css`
      animation: ${fadeIn4} 750ms linear;
      transform: translate(1.75rem, -32.5%);
    `}
`;

function ShareButton(props) {
  const linkUrl = encodeURIComponent(
    `https://www.columbiaspectator.com${props.canonical_url}`
  );
  const headline = encodeURIComponent(props.headline);
  const [isShowingShareCircles, setIsShowingShareCircles] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const shareButtonRef = useRef(null);
  useOnClickOutside(shareButtonRef, () => setIsShowingShareCircles(false));

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const shareLinks = (
    <>
      <ShareLink
        href={`https://twitter.com/intent/tweet?url=${linkUrl}`}
        order={1}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ShareCircle>
          <FontAwesomeIcon
            icon={faTwitter}
            fixedWidth
            style={{ height: "2.15rem"}}
            color={"white"}
          />
        </ShareCircle>
      </ShareLink>
      <ShareLink
        href={`https://www.facebook.com/sharer.php?u=${linkUrl}`}
        order={2}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ShareCircle>
          <FontAwesomeIcon
            icon={faFacebookF}
            fixedWidth
            style={{ height: "1.5rem" }}
            color={"white"}
          />
        </ShareCircle>
      </ShareLink>
      <ShareLink
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${linkUrl}&title=${headline}`}
        order={3}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ShareCircle>
          <FontAwesomeIcon
            icon={faLinkedin}
            fixedWidth
            style={{ height: "2.15rem" }}
            color={"white"}
          />
        </ShareCircle>
      </ShareLink>
      <ShareLink
        href={`mailto:test@gmail.com?subject=${props.headline}&body=${linkUrl}`}
        order={4}
      >
        <ShareCircle>
          <FontAwesomeIcon
            icon={faEnvelope}
            fixedWidth
            style={{ height: "2.15rem" }}
            color={"white"}
          />
        </ShareCircle>
      </ShareLink>
    </>
  );

  return (
    <ButtonWrapper>
    <StyledShareButton>
      Share
    </StyledShareButton>
      <CircleWrapper><ShareLink
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${linkUrl}&title=${headline}`}
        order={3}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ShareCircle>
          <FontAwesomeIcon
            icon={faLinkedin}
            fixedWidth
            style={{ height: "2.15rem" }}
            color={"white"}
          />
        </ShareCircle>
      </ShareLink></CircleWrapper>
      </ButtonWrapper>

    
  );
}

export default ShareButton;
