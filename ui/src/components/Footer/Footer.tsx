import React from "react";
import { Button } from "../../globalStyles";

import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./Footer.elements";
import Subscribe from "../Subscribe/Subscribe";

function Footer() {
  const date = new Date();

  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Join our exclusive membership to access our educational offerings and
          web development services.
        </FooterSubHeading>
        <FooterSubText>You can opt out at any time.</FooterSubText>
        <Subscribe />
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          {/*  */}
          <FooterLinkItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to="/what-we-do">What We Do ?</FooterLink>
            <FooterLink to="/about-us">About Us</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>

        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Terms & Conditions</FooterLinkTitle>
            <FooterLink to="/terms-and-conditions">
              Terms & Conditions
            </FooterLink>
            <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>

        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Quick Links</FooterLinkTitle>
            <FooterLink to="/contact-us">Contact Us</FooterLink>
            <FooterLink to="/education-services">Education-Services</FooterLink>
            {/* <FooterLink to="/web-services">WebServices</FooterLink> */}
          </FooterLinkItems>
        </FooterLinksWrapper>
        {/*  */}
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <img src="/favicon/favicon.ico" alt="" />
            KRUXIGEN{" "}
          </SocialLogo>
          <WebsiteRights>KRUXIGEN © {date.getFullYear()} </WebsiteRights>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
