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

  const isStacked = () => windowWidth <= 768;

  // Calculate row heights only once on mount for desktop
  useEffect(() => {
    const heights = rowRefs.current.map(row => {
      if (!row) return 0;
      const children = Array.from(row.children);
      return Math.max(...children.map(c => c.offsetHeight));
    });
    setRowHeights(heights);
  }, []);

  // Update window width for mobile detection
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <MobileNavBar current="all" />
      <Banner />
      <Navbar />

      <ArticleWrapper>
        {Array.from({ length: Math.ceil(men_articles.length / 2) }).map((_, rowIdx) => {
          const firstArticle = men_articles[rowIdx * 2];
          const secondArticle = men_articles[rowIdx * 2 + 1];

          return (
            <ArticleRow key={rowIdx} ref={el => (rowRefs.current[rowIdx] = el)}>
              {firstArticle && (
                <ArticleComponent
                  article={firstArticle}
                  minHeight={!isStacked() ? rowHeights[rowIdx] : undefined}
                />
              )}
              {secondArticle && (
                <ArticleComponent
                  article={secondArticle}
                  minHeight={!isStacked() ? rowHeights[rowIdx] : undefined}
                />
              )}
            </ArticleRow>
          );
        })}
      </ArticleWrapper>

      <NavigationWrapper>
        <NavigationSec first={false} next="Home" link="/" />
      </NavigationWrapper>
    </div>
  );
};

export default MenArticles;
