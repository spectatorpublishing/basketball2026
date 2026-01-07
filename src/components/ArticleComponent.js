import React from 'react';
import styled from 'styled-components';

const ArticleContainer = styled.div`
  width: 100%;
  max-width: 591px;
  background: #4F6A6F;
  box-shadow: 6px 6px 4px rgba(0, 0, 0, 0.25);
  position: relative;
  cursor: pointer;
  transition: background 0.3s ease, box-shadow 0.3s ease;
  margin: 16px auto; 
  &:hover {
    background: #435c62;
    box-shadow: 8px 8px 6px rgba(0, 0, 0, 0.35);
  }

  @media (max-width: 768px) {
    max-width: 100%; 
    box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 500px) {
    margin: 8px 0; 
  }
`;

const MediaWrapper = styled.div`
  padding: 5% 6%; 
`;

const ArticleVideo = styled.iframe`
  width: 100%;
  height: 342px; 
  border: none;
  border-radius: 4px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    height: 250px;
  }

  @media (max-width: 500px) {
    height: 200px; 
  }
`;

const ArticleImageBG = styled.img`
  margin: 0 auto;
  width: 100%;
  height: auto; 
  max-height: 342px; 
  border-radius: 4px;
  object-fit: cover; 
  background: linear-gradient(
    0deg, 
    rgba(0, 13, 116, 0.30) 0%, 
    rgba(0, 13, 116, 0.30) 100%
  );

  @media (max-width: 768px) {
    max-height: 250px; 
  }

  @media (max-width: 500px) {
    max-height: 200px; 
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 4% 6%; 
`;

const Title = styled.div`
  width: 100%;
  color: #F7ECE5;
  font-family: Inter, sans-serif;
  font-size: 2rem; 
  font-weight: 900;
  letter-spacing: 1.6px;

  @media (max-width: 768px) {
    font-size: 1.6rem; 
  }

  @media (max-width: 500px) {
    font-size: 1.4rem; 
  }
`;

const Author = styled.div`
  width: 100%;
  color: #F7ECE5;
  font-family: Inter, sans-serif;
  font-size: 1.5rem;
  font-style: italic;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 500px) {
    font-size: 1rem; 
  }
`;

const transformYouTubeLink = (link) => {
  if (!link) return '';

  let newLink = link;

  // e.g. "https://www.youtube.com/watch?v=efdQ9tg9tWk" => "https://www.youtube.com/embed/efdQ9tg9tWk"
  if (newLink.includes('watch?v=')) {
    newLink = newLink.replace('watch?v=', 'embed/');
  }
  
  // e.g. "https://www.youtube.com/shorts/efdQ9tg9tWk" => "https://www.youtube.com/embed/efdQ9tg9tWk"
  if (newLink.includes('/shorts/')) {
    newLink = newLink.replace('/shorts/', '/embed/');
  }

  return newLink;
};

const ArticleComponent = ({ article }) => {
  return (
    <a 
      href={article.article_link} 
      style={{ textDecoration: 'none' }} 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <ArticleContainer>
        <MediaWrapper>
          {article.youtube_link ? (
            <ArticleVideo
              src={transformYouTubeLink(article.youtube_link)}
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          ) : (
            <ArticleImageBG 
              src={article.image_url} 
              alt="failed to load image" 
            />
          )}
        </MediaWrapper>

        <ContentWrapper>
          <Title>{article.article_title}</Title>
          <Author>{article.article_authors}</Author>
        </ContentWrapper>
      </ArticleContainer>
    </a>
  );
};

export default ArticleComponent;
