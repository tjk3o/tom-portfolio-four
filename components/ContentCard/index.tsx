import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {
  CardContainer,
  CardImageContainer,
  CardImage,
  CardLink,
  CardTextContainer,
  IconsWrapper,
} from './styles';

const ContentCard = ({
  className,
  background,
  imageURL,
  email,
  bodyText,
  hasIcons,
}: {
  background: string;
  imageURL?: string;
  email?: string;
  bodyText?: string;
  hasIcons?: boolean;
}) => {
  return (
    <CardContainer style={{ background }}>
      {imageURL && (
        <CardImageContainer>
          <CardImage src={imageURL} />
        </CardImageContainer>
      )}
      {email && (
        <CardTextContainer>
          <CardLink href='mailto:enquiries@tomkeogh.co.uk'>
            enquiries@tomkeogh.co.uk
          </CardLink>
        </CardTextContainer>
      )}
      {bodyText && (
        <CardTextContainer>
          {bodyText}
          {hasIcons && (
            <IconsWrapper>
              {/* TODO use theme colors */}
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://github.com/tjk3o'
              >
                <FaGithub color={'white'} size='35px' />
              </a>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.linkedin.com/in/tjkeogh/'
              >
                <FaLinkedin color={'white'} size='35px' />
              </a>
            </IconsWrapper>
          )}
        </CardTextContainer>
      )}
    </CardContainer>
  );
};
export default ContentCard;
