import styled from 'styled-components';
import { mediaQueries } from '../../theme';
import { HEADER_HEIGHT } from '../Header';

export const HomeWrapper = styled.div`
  background-color: var(--background-color);
  height: 100vh;
  flex: 1 1 0;
  display: block;
  margin-top: 80px;
`;

export const HeadingOuterContainer = styled.div`
  font-size: 16px;
  color: var(--color-primary);
  background: var(--color-header-background);

  width: 100%;
`;

export const HeadingInnerContainer = styled.div`
  font-size: 16px;
  margin: 0 auto;
  padding-bottom: 1px;
  width: calc(100% - 20px);

  ${mediaQueries.tabletLandscapeUp`
  width: 940px;
`};
  ${mediaQueries.tabletLargeUp`
  width: 1000px;
`};
  ${mediaQueries.desktopUp`
  width: 1180px;
`};
  ${mediaQueries.desktopLargeUp`
  width: 1420px;
`};
  ${mediaQueries.desktopXLUp`
  width: 1920px;
`};
`;

export const MainAndFooterContainer = styled.div`
  min-height: calc(100vh - ${HEADER_HEIGHT}px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const CardGrid = styled.div`
  position: relative;
  margin: 10px 0;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 10px;
  width: 100%;
  ${mediaQueries.tabletLandscapeUp`
    margin: 0;
    width: 940px;
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;
  `};
  ${mediaQueries.tabletLargeUp`
    width: 1000px;
  `};
  ${mediaQueries.desktopUp`
    width: 1180px;
  `};
  ${mediaQueries.desktopLargeUp`
    width: 1420px;
  `};
  ${mediaQueries.desktopXLUp`
    width: 1920px;
  `};
`;

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;

  ${mediaQueries.tabletPortraitUp`
    justify-content: flex-end;
  `};
`;

export const CreatedBy = styled.span`
  margin: 0 auto;
  text-align: right;
  ${mediaQueries.tabletLandscapeUp`
    width: 940px;
  `};
  ${mediaQueries.tabletLargeUp`
    width: 1000px;
  `};
  ${mediaQueries.desktopUp`
    width: 1180px;
  `};
  ${mediaQueries.desktopLargeUp`
    width: 1420px;
  `};
  ${mediaQueries.desktopXLUp`
    width: 1920px;
  `};
`;
