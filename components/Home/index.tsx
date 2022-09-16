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
  const items = [
    {
      imageURL: '/e8359216c694931167c71c457349e97b-sticker.png',
      number: 1,
      background: 'grey',
    },
    {
      bodyText:
        'My name’s Tom. I’m a JavaScript developer based in Hertfordshire. If you’re interested in seeing some of my work then please follow the links below. ',
      number: 2,
      background: '#1f4954',
    },
    { bodyText: 'enquiries@tomkeogh.co.uk', number: 3, background: 'grey' },
    {
      bodyText:
        'Skills: React, HTML, Javascript, Next.js, TypeScript , GraphQL, GitHub flow, Jest, react-testing-library, unit-tests , CSS, styled-components, framer-motion, agile, AMP, Node.js',
      number: 4,
      background: 'brown',
    },
    { bodyText: 'Interests: Carpentry, Hiking', number: 5, background: 'grey' },
    {
      bodyText:
        'Employment: Im currently honing my skills as a JavaScript developer at MADE.com',
      number: 6,
      background: 'grey',
    },
  ];
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
              <ContentCard
                key={item.number}
                imageURL={item?.imageURL}
                background={item.background}
                title={item?.title}
                bodyText={item?.bodyText}
              />
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
