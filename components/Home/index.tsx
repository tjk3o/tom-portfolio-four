import { useEffect, useState } from 'react';
import useDarkMode from '../../hooks/useDarkMode';
import Header from '../Header';
import {
  HomeWrapper,
  HeadingContainer,
  Heading,
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
      <HeadingContainer>
        <Heading>Hello</Heading>
      </HeadingContainer>
      <MainAndFooterContainer>
        <Main>
          {items.map((item) => (
            <div
              style={{
                width: '100vw',
                height: '500px',
                background: 'green',
                marginBottom: '50px',
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
