import styled from 'styled-components';

export const ContactFormContainer = styled.div`
  background-color: #101522;
  padding: 40px; /* Increase the padding for more space */
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  justify-items: center;
  align-items: center;
  border-radius: 4px;

  margin: 20px; /* Add margin for spacing from other elements */
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px; /* Adjust the gap between form inputs */
  width: 100%;
  max-width: 600px; /* Increase the maximum width for a wider form */
  justify-items: center;
  align-items: center;
`;

export const FormTitle = styled.h1`
  color: #fff;
  font-size: 24px;
  margin-bottom: 20px;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 10px 20px;
  border-radius: 4px; /* Increase border radius for a softer look */
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid #fff;
  &::placeholder {
    color: #242424;
  }
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  padding: 10px 20px;
  border-radius: 4px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid #fff;
  &::placeholder {
    color: #242424;
  }
  resize: vertical;
  min-height: 120px;
`;
