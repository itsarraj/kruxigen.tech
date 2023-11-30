import React from 'react';
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
} from './InfoSection.elements';
import { Container, Button } from '../../globalStyles';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface InfoSectionProps {
  primary: boolean;
  lightBg: boolean;
  topLine: string;
  lightTopLine: boolean;
  lightText: boolean;
  lightTextDesc: boolean;
  headline: string;
  description: string;
  buttonLabel?: string;
  buttonLink?: string;
  externalLink?: boolean;
  imgStart: boolean;
  img: string;
  alt: string;
  start: boolean;
}

const InfoSection: React.FC<InfoSectionProps> = ({
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  buttonLink,
  externalLink,
  img,
  alt,
  imgStart,
  start,
}) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                {buttonLabel && buttonLink && (
                  <ButtonWrapper
                    primary={primary}
                    buttonLink={buttonLink}
                    externalLink={externalLink}
                  >
                    {buttonLabel}
                  </ButtonWrapper>
                )}
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <LazyLoadImage src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

const ButtonWrapper = ({ primary, buttonLink, externalLink, children }) => {
  if (externalLink) {
    // If it's an external link, open it in a new tab
    return (
      <a href={buttonLink} target="_blank" rel="noopener noreferrer">
        <Button big fontBig primary={primary}>
          {children}
        </Button>
      </a>
    );
  } else {
    // If it's an internal link, use React Router Link
    return (
      <Link to={buttonLink}>
        <Button big fontBig primary={primary}>
          {children}
        </Button>
      </Link>
    );
  }
};

export default InfoSection;
