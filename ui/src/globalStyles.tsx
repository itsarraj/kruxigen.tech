import styled, { createGlobalStyle } from 'styled-components';

interface ButtonProps {
  primary?: boolean;
  big?: boolean;
  fontBig?: boolean;
}

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'App Font' , 'Source Sans Pro', sans-serif;

}
* {
  scrollbar-width: thin;
  scrollbar-color: rgba(155, 155, 155, 0.5) transparent;
}
*::-webkit-scrollbar {
  width: 0.5px;
}
*::-webkit-scrollbar-track {
  background: transparent;
}
*::-webkit-scrollbar-thumb {
  background: rgba(155, 155, 155, 0.5);
  border-radius: 20px;
  border: transparent;
}
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button<ButtonProps>`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? '#4B59F7' : '#0467FB')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? '#0467FB' : '#4B59F7')};
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
  &:disabled {
    background: #1f1f1f;
  }
`;
export const InfoStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
  width: 100%;
  padding: 1rem;
  @media screen and (max-width: 1600px) {
    grid-template-columns: repeat(
      2,
      1fr
    ); // Two columns for screens up to 768px wide
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ContactInfo = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto); // Three rows with automatic height
  gap: 10px; // Adjust the gap between rows
  color: #fff;
  padding: 20px;
  background: #101522;
  text-align: center;
  border-radius: 4px;
  overflow: hidden;
`;

export const ContactInfoItemTitle = styled.p`
  font-size: 24px;
  font-weight: 700;
`;

export const ContactInfoItem = styled.p`
  font-size: 18px;
`;

export const ContactFormMain = styled.div`
  display: flex;
  flex-flow: row wrap; /* Allow items to wrap to the next row */
  align-items: center;
  justify-content: center;
  padding: 20px; /* Add padding for spacing */

  @media screen and (max-width: 820px) {
    padding: 20px 0; /* Remove horizontal padding on small screens */
  }
`;

export default GlobalStyles;
