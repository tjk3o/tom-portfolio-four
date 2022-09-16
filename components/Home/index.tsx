import { useEffect, useState } from 'react';
import useDarkMode from '../../hooks/useDarkMode';
import Header from '../Header';
import {
  HomeWrapper,
  HeadingOuterContainer,
  HeadingInnerContainer,
  MainAndFooterContainer,
  Main,
  Footer,
  CreatedBy,
} from './styles';

export default function Home() {
  const { handleSetIsDarkTheme, isDarkTheme } = useDarkMode();
  const [showToggleText, setShowToggleText] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowToggleText(false), 3000);
  }, []);
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <HomeWrapper>
      <Header
        handleSetIsDarkTheme={handleSetIsDarkTheme}
        isDarkTheme={isDarkTheme}
        showToggleText={showToggleText}
      />
      <HeadingOuterContainer>
        <HeadingInnerContainer>
          <h1>Tom Keogh</h1>
        </HeadingInnerContainer>
      </HeadingOuterContainer>
      <MainAndFooterContainer>
        <Main>
          {items.map((item) => (
            <div
              style={{
                height: '400px',
                width: '100vw',
                background: 'green',
                marginBottom: '20px',
              }}
            />
          ))}
        </Main>
        <Footer>
          <CreatedBy>Created by tjk3o</CreatedBy>
        </Footer>
      </MainAndFooterContainer>
    </HomeWrapper>
  );
}
