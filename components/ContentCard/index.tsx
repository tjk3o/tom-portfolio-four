import {
  CardContainer,
  CardImageContainer,
  CardImage,
  CardLink,
  CardTextContainer,
} from './styles';

const ContentCard = ({ className, background, imageURL, email, bodyText }) => {
  return (
    <CardContainer className={className} style={{ background }}>
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
      {bodyText && <CardTextContainer>{bodyText}</CardTextContainer>}
    </CardContainer>
  );
};
export default ContentCard;
