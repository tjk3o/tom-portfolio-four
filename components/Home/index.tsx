import { useEffect, useState } from 'react';
import Head from 'next/head';
import useDarkMode from '../../hooks/useDarkMode';
import Header from '../Header';
import ContentCard from '../ContentCard';
import {
  HomeWrapper,
  HeadingOuterContainer,
  HeadingInnerContainer,
  MainAndFooterContainer,
  Main,
  CardGrid,
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
      <Head>
        <title>Tom Keogh | JS dev</title>
        <meta name='description' content="Tom Keogh's site" />
        <link rel='icon' href='/favicon.ico' />
      </Head>
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
          <CardGrid>
            {items.map((item) => (
              <ContentCard key={item} />
            ))}
          </CardGrid>
        </Main>
        <Footer>
          <CreatedBy>Created by tjk3o</CreatedBy>
        </Footer>
      </MainAndFooterContainer>
    </HomeWrapper>
  );
}
