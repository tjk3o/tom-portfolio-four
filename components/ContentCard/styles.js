import styled from 'styled-components';
import { mediaQueries } from '../../theme';

export const CardContainer = styled.div`
  position: relative;
  width: 100%;
  background: var(--color-secondary);
  color: white;
  border-radius: 20px;
  overflow: hidden;
  height: fit-content;
  display: flex;
  align-items: center;
  flex-direction: column;

  ${mediaQueries.tabletPortraitUp`
    height: 100%;
  `};
  ${mediaQueries.tabletLargeUp`
    min-height: 400px;
  `};
  ${mediaQueries.desktopUp`
    min-height: 500px;
  `};
  ${mediaQueries.desktopLargeUp`
    min-height: 500px;
    padding: 60px;
  `};
  ${mediaQueries.desktopXLUp`
    min-height: 500px;
  `};
`;

export const LargeHeading = styled.h1`
  width: calc(100% - 60px);
  margin: 70px 20px;
`;

export const CardImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const SmallHeading = styled.h2`
  width: 100%;
  padding: 70px 30px 10px;
  font-family: DM Mono, sans-serif;
  font-weight: 400;
  opacity: 0.8;
  font-size: 14px;
`;

export const CardImage = styled.img`
  width: 80%;
  max-height: 100%;
  object-fit: contain;

  ${mediaQueries.tabletLargeUp`
  margin: 40px;
  width: calc(100% - 80px);
`};
`;

export const PillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 20px 70px;
  width: 100%;
  padding: 0 20px;
`;

export const Pill = styled.div`
  border-radius: 50px;
  margin: 5px;
  padding: 5px 10px;
  border: 1px solid #ffffff4a;
`;

export const LargeBodyContainer = styled.div`
  width: calc(100% - 60px);
  overflow-wrap: anywhere;
  //   TODO use font-size from theme
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${mediaQueries.tabletLandscapeUp`
    font-size: 32px;
  `};
`;
export const SmallBodyContainer = styled.div`
  width: calc(100% - 60px);
  margin-bottom: 70px;
  overflow-wrap: anywhere;
  //   TODO use font-size from theme
  font-size: 20px;
`;

export const IconsWrapper = styled.div`
  filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.25));
  margin: 40px 0 20px;
  display: flex;
  flex-wrap: wrap;

  > * {
    margin-right: 40px;
  }

  ${mediaQueries.desktopUp`
  margin: 70px 0 0;

`};
`;

export const LinkText = styled.div`
  font-family: 'DM Mono';
  font-size: 12px;
  line-height: 8px;
  height: 30px;

  ${mediaQueries.desktopUp`
    font-size: 20px;
    line-height: 16px;
    height: unset;
  `};
`;

export const LinkArrow = styled.div`
  width: 10px;
  height: 10px;
  margin-left: 8px;

  border-top: 2px solid #ffffff;
  border-right: 2px solid #ffffff;
`;

export const LinkArrowLine = styled.div`
  width: 1px;
  height: 12px;
  margin: -2px auto;

  border-right: 2px solid #ffffff;
  transform: rotate(45deg);
`;
