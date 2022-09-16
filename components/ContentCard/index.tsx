import {
  CardContainer,
  CardImageContainer,
  CardImage,
  CardTextContainer,
} from './styles';

const ContentCard = ({ className, background, imageURL, bodyText }) => {
  return (
    <CardContainer className={className} style={{ background }}>
      {imageURL && (
        <CardImageContainer>
          <CardImage src={imageURL} />
        </CardImageContainer>
      )}
      {bodyText && <CardTextContainer>{bodyText}</CardTextContainer>}
    </CardContainer>
  );
};
export default ContentCard;
