import React, { useEffect } from 'react';
import { InfoSection } from '../../components';
import { homeObjOne } from './Data';
import {
  InfoStyle,
  ContactInfo,
  ContactInfoItem,
  ContactInfoItemTitle,
  ContactFormMain,
} from '../../globalStyles';
import ContactForm from '../../components/ContactForm/ContactForm';

function ContactUs() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <ContactForm />
      <ContactFormMain>
        <InfoStyle>
          <ContactInfo>
            <ContactInfoItemTitle>Where we Stay?</ContactInfoItemTitle>
            <ContactInfoItem>Jharkhand, India 834004</ContactInfoItem>
          </ContactInfo>
          <ContactInfo>
            <ContactInfoItemTitle>Work Hours</ContactInfoItemTitle>
            <ContactInfoItem>Daily: 9am IST – 9pm IST</ContactInfoItem>
          </ContactInfo>
          <ContactInfo>
            <ContactInfoItemTitle>Email Address</ContactInfoItemTitle>
            <ContactInfoItem>animeshbusinessemail@gmail.com</ContactInfoItem>
          </ContactInfo>

          <ContactInfo>
            <ContactInfoItemTitle>Phone Numbers</ContactInfoItemTitle>
            <ContactInfoItem>+91 9102888850</ContactInfoItem>
          </ContactInfo>
        </InfoStyle>
      </ContactFormMain>
    </>
  );
}

export default ContactUs;
