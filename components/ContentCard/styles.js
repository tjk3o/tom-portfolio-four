import styled from 'styled-components';
import { mediaQueries } from '../../theme';

export const CardContainer = styled.div`
  position: relative;
  width: 100%;
  background: var(--color-secondary);
  color: white;
  border-radius: 20px;
  overflow: hidden;
  min-height: 500px;

  ${mediaQueries.tabletPortraitUp`
    min-height: 330px;
  `};
  ${mediaQueries.tabletLargeUp`
    min-height: 400px;
  `};
  ${mediaQueries.desktopUp`
    min-height: 500px;
  `};
  ${mediaQueries.desktopLargeUp`
    min-height: 500px;
  `};
  ${mediaQueries.desktopXLUp`
    min-height: 500px;
  `};
`;

export const CardImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const CardImage = styled.img`
  margin: 40px;
  width: calc(100% - 80px);
  max-height: 100%;
  object-fit: contain;
`;

export const CardLink = styled.a`
  text-decoration: underline;
  font-size: 40px;
`;

export const CardTextContainer = styled.div`
  width: calc(100% - 60px);
  margin: 80px 30px;
  //   TODO use font-size from theme
  font-size: 30px;
  overflow-wrap: anywhere;
`;
