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
      background: 'linear-gradient(140.16deg, #073653 2.05%, #00072C 100%);',
    },
    {
      largeHeading: 'Hi I’m Tom,',
      largeBody:
        'I’m a JavaScript developer based in Hertfordshire. If you’re interested in seeing some of my work then please follow the links below.',
      number: 2,
      background: 'linear-gradient(105.7deg, #FEB80A 0%, #EB8D00 100%);',
      hasIcons: true,
    },
    {
      smallHeading: 'Skills',
      number: 3,
      background: 'linear-gradient(138.86deg, #C280D2 0%, #8F56BC 100%);',
      pillItems: [
        'React',
        'JavaScript',
        'HTML',
        'CSS',
        'Next.js',
        'TypeScript',
        'Storybook',
        'Styled Components',
        'Framer Motion',
        'GitHub',
        'GraphQL',
        'React Testing Library',
        'Jest',
        'Agile',
        'Google Optimize',
        'Google Analytics',
        'Google Tag Manager',
      ],
    },
    {
      smallHeading: 'Employment',
      // TODO add "Previous roles" with icons
      smallBody:
        'Im currently honing my skills as a JavaScript developer at MADE.com.',
      number: 4,
      background: 'linear-gradient(138.86deg, #4C90F2 0%, #4B3DE9 100%);',
    },
    {
      smallHeading: 'Interests',
      pillItems: ['Carpentry', 'Hiking', 'Running', 'Guitar'],
      number: 5,
      background: 'linear-gradient(138.86deg, #FD7E41 0%, #F25432 100%);',
    },
  ];

  return (
    <HomeWrapper>
      <Head>
        <title>Tom Keogh | JS dev</title>
        <meta name='description' content="Tom Keogh's site" />
        <meta
          name='theme-color'
          content={isDarkTheme ? '#000000' : '#f7f7f7'}
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header
        handleSetIsDarkTheme={handleSetIsDarkTheme}
        isDarkTheme={isDarkTheme}
        showToggleText={showToggleText}
      />
      <HeadingOuterContainer>
        <HeadingInnerContainer>
          <h1>Profile</h1>
        </HeadingInnerContainer>
      </HeadingOuterContainer>
      <MainAndFooterContainer>
        <Main>
          <CardGrid>
            {items.map((item) => (
              <ContentCard
                key={item.number}
                background={item.background}
                imageURL={item?.imageURL}
                largeHeading={item?.largeHeading}
                smallHeading={item?.smallHeading}
                largeBody={item?.largeBody}
                smallBody={item?.smallBody}
                hasIcons={item?.hasIcons}
                pillItems={item?.pillItems}
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
