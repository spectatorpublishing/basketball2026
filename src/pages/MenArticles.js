import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Banner from "../components/Banner";
import { men_articles } from "../data/menarticles";
import ArticleComponent from "../components/ArticleComponent";
import NavigationSec from '../components/Navagation';
import Navbar from '../components/Navbar';
import MobileNavBar from '../components/MobileNavBar';

const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  align-items: center;
  padding: 0 20px;
`;

const ArticleRow = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;

  & > * {
    flex: 0 0 520px; /* fixed width, no scaling */
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 1100px) {
    flex-direction: column;
    gap: 30px;
    align-items: center;

    & > * {
      flex: 0 1 90%;
      max-width: 100%;
    }
  }
`;

const NavigationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const MenArticles = () => {
  const rowRefs = useRef([]);
  const [rowHeights, setRowHeights] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const isStacked = () 