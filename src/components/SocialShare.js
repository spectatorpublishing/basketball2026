import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StyledShareButton = styled.button`
  background-color: #5B62B3;
  color: #F7ECE5;
  border-radius: 1.5rem;
  border: 0;
  padding: 0.1 rem 0.9rem;
  height: 3rem;
  width: 96.08667755126953px;
  cursor: pointer;
  font-size: 17px;
  font-family: "Inter";
  line-height: 100%;
  letter-spacing: 5%;
  font-style: bold;
  font-weight: 700;

`;

const IconButton = styled.a`
  height: 3rem;
  width: 3rem;
  background-color: #5B62B3;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
`;

const CopyButton = styled.button`
  height: 3rem;
  width: 3rem;
  background-color: #5B62B3;
  border-radius: 50%;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

function ShareButton(props) {
  const linkUrl = encodeURIComponent(
    `https://www.columbiaspectator.com${props.canonical_url}`
  );
  const headline = encodeURIComponent(props.headline);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(
      `https://www.columbiaspectator.com${props.canonical_url}`
    );
  };

  return (
    <ButtonWrapper>
      <StyledShareButton>Share</StyledShareButton>

      <IconButton
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} color="white" />
      </IconButton>

      <IconButton
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${linkUrl}&title=${headline}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} color="white" />
      </IconButton>

      <CopyButton onClick={handleCopy}>
        <FontAwesomeIcon icon={faCopy} color="white" />
      </CopyButton>
    </ButtonWrapper>
  );
}

export default ShareButton;
