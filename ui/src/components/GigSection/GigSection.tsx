import React, { ReactNode } from 'react';
import {
  GigSec,
  GigRow,
  GigColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  DetailsList,
  DetailsItem,
} from './GigSection.elements';
import { Container, Button } from '../../globalStyles';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface GigSectionProps {
  lightBg?: boolean;
  imgStart?: boolean;
  lightTopLine?: boolean;
  lightText?: boolean;
  lightTextDesc?: boolean;
  topLine: string;
  headline: string;
  description: string;
  details: string[];
  buttonLabel?: string;
  gigUrl?: string;
  externalLink?: boolean;
  start?: boolean;
  img: string;
  alt: string;
}

const GigSection: React.FC<GigSectionProps> = ({
  lightBg,
  imgStart,
  lightTopLine,
  lightText,
  lightTextDesc,
  topLine,
  headline,
  description,
  details,
  buttonLabel,
  gigUrl,
  externalLink,
  start,
  img,
  alt,
}) => {
  return (
    <GigSec lightBg={lightBg}>
      <Container>
        <GigRow imgStart={imgStart}>
          <GigColumn>
            <TextWrapper>
              <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
              <Heading lightText={lightText}>{headline}</Heading>
              <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>

              <DetailsList>
                {details.map((detail, index) => (
                  <DetailsItem lightTextDesc={lightTextDesc} key={index}>
                    {detail}
                  </DetailsItem>
                ))}
              </DetailsList>
              {buttonLabel && gigUrl && (
                <ButtonWrapper
                  primary={false} // Change this if necessary
                  buttonLink={gigUrl}
                  externalLink={externalLink}
                >
                  {buttonLabel}
                </ButtonWrapper>
              )}
            </TextWrapper>
          </GigColumn>
          <GigColumn>
            <ImgWrapper start={start}>
              <LazyLoadImage src={img} alt={alt} />
            </ImgWrapper>
          </GigColumn>
        </GigRow>
      </Container>
    </GigSec>
  );
};

const ButtonWrapper: React.FC<{
  primary: boolean;
  buttonLink: string;
  externalLink?: boolean;
  children?: ReactNode;
}> = ({ primary, buttonLink, externalLink, children }) => {
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

export default GigSection;
