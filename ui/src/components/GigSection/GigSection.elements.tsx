import styled from 'styled-components';
interface GigSecProps {
  lightBg?: boolean;
}

interface GigRowProps {
  imgStart?: boolean;
}

interface ImgWrapperProps {
  start?: boolean;
}

interface TopLineProps {
  lightTopLine?: boolean;
}

interface HeadingProps {
  lightText?: boolean;
}

interface SubtitleProps {
  lightTextDesc?: boolean;
}

interface DetailsItemProps {
  lightTextDesc?: boolean;
}

export const GigSec = styled.div<GigSecProps>`
  color: #fff;
  padding: 160px 0;
  background: ${({ lightBg }) => (lightBg ? '#fff' : '#101522')};
`;

export const GigRow = styled.div<GigRowProps>`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`;

export const GigColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media (min-width: 480px) and (max-width: 1200px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media (min-width: 480px) and (max-width: 1200px) {
    padding-bottom: 65px;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    padding-bottom: 65px;
  }
`;

export const ImgWrapper = styled.div<ImgWrapperProps>`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
  * {
    padding-right: 0;
    border: 0;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    max-height: 500px;
    border-radius: 4px;
  }
`;

export const TopLine = styled.div<TopLineProps>`
  color: ${({ lightTopLine }) => (lightTopLine ? '#a9b3c1' : '#4B59F7')};
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Heading = styled.h1<HeadingProps>`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#1c2237')};
`;

export const Subtitle = styled.p<SubtitleProps>`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
`;

export const DetailsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
`;

export const DetailsItem = styled.li<DetailsItemProps>`
  font-size: 14px;
  line-height: 1.5;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
  margin-bottom: 10px;
`;
