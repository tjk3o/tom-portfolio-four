import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {
  CardContainer,
  LargeHeading,
  SmallHeading,
  CardImageContainer,
  CardImage,
  PillContainer,
  Pill,
  LargeBodyContainer,
  SmallBodyContainer,
  IconsWrapper,
  LinkText,
  LinkArrow,
  LinkArrowLine,
} from './styles';

const ContentCard = ({
  background,
  imageURL,
  largeHeading,
  smallHeading,
  largeBody,
  smallBody,
  hasIcons,
  pillItems,
}: {
  background: string;
  imageURL?: string;
  largeHeading?: string;
  smallHeading?: string;
  largeBody?: string;
  smallBody?: string;
  hasIcons?: boolean;
  pillItems?: Array<string>;
}) => {
  return (
    <CardContainer style={{ background }}>
      {largeHeading && <LargeHeading>{largeHeading}</LargeHeading>}
      {smallHeading && (
        <SmallHeading>{smallHeading.toUpperCase()}</SmallHeading>
      )}
      {imageURL && (
        <CardImageContainer>
          <CardImage src={imageURL} />
        </CardImageContainer>
      )}
      {pillItems && (
        <>
          <PillContainer>
            {pillItems.map((skill, i) => {
              return <Pill key={i}>{skill}</Pill>;
            })}
          </PillContainer>
        </>
      )}
      {largeBody && (
        <LargeBodyContainer>
          {largeBody}
          {hasIcons && (
            <IconsWrapper>
              {/* TODO use theme colors */}
              <a
                rel='noopener noreferrer'
                href='mailto:enquiries@tomkeogh.co.uk'
                style={{
                  display: 'flex',
                }}
              >
                <LinkText>enquiries@tomkeogh.co.uk</LinkText>
                <LinkArrow>
                  <LinkArrowLine />
                </LinkArrow>
              </a>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://github.com/tjk3o'
                style={{
                  display: 'flex',
                }}
              >
                <LinkText>GitHub</LinkText>
                <LinkArrow>
                  <LinkArrowLine />
                </LinkArrow>
              </a>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.linkedin.com/in/tjkeogh/'
                style={{
                  display: 'flex',
                }}
              >
                <LinkText>LinkedIn</LinkText>
                <LinkArrow>
                  <LinkArrowLine />
                </LinkArrow>
              </a>
            </IconsWrapper>
          )}
        </LargeBodyContainer>
      )}
      {smallBody && <SmallBodyContainer>{smallBody}</SmallBodyContainer>}
    </CardContainer>
  );
};
export default ContentCard;
