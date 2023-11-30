import React from 'react';
import styled from 'styled-components';

const PrivacyPolicyContainer = styled.div`
  color: #1c2237;
  background: #fff;
  padding: 80px 0;
`;

const PrivacyPolicyContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: left;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  color: #4b59f7;
`;

const Section = styled.div`
  margin-bottom: 40px;
`;

const Subtitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.5;
`;

function PrivacyPolicy() {
  return (
    <PrivacyPolicyContainer>
      <PrivacyPolicyContent>
        <Title>Privacy Policy for Kruxigen.tech</Title>

        <Section>
          <Subtitle>Our Commitment to Privacy</Subtitle>
          <Paragraph>
            At Kruxigen.tech, we are dedicated to safeguarding the privacy of
            our valued visitors. This Privacy Policy elucidates the types of
            information we collect and how it is employed.
          </Paragraph>
        </Section>

        <Section>
          <Subtitle>Information Collection and Usage</Subtitle>
          <Paragraph>
            We may gather personal information, such as your name, email
            address, phone number, and address when you willingly provide it.
            Additionally, if you directly contact us or register for an Account,
            we may acquire additional information.
          </Paragraph>
          <Paragraph>
            The information we collect serves various purposes, including the
            operation and maintenance of our website, enhancing and
            personalizing the user experience, analyzing website usage,
            developing new products and services, communicating with you for
            customer service and updates, and fraud prevention.
          </Paragraph>
        </Section>

        <Section>
          <Subtitle>Consent</Subtitle>
          <Paragraph>
            By utilizing our website, you express your consent to our Privacy
            Policy and agree to its terms.
          </Paragraph>
        </Section>

        <Section>
          <Subtitle>Scope</Subtitle>
          <Paragraph>
            This Privacy Policy exclusively pertains to our online activities
            and is applicable to visitors to our website. It does not extend to
            information collected offline or through channels other than our
            website.
          </Paragraph>
        </Section>

        <Section>
          <Subtitle>Log Files</Subtitle>
          <Paragraph>
            At Kruxigen.tech, we follow standard procedures by employing log
            files. These log files document visitor information upon accessing
            our website. This practice aligns with common industry standards
            among hosting companies and is employed for analytical purposes. The
            data collected includes internet protocol (IP) addresses, browser
            types, Internet Service Providers (ISPs), date and time stamps,
            referring/exit pages, and possibly the number of clicks. Crucially,
            this data is not linked to any personally identifiable information
            (PII). The objective behind collecting this information is to
            analyze trends, administer the site, monitor user activity on the
            website, and compile demographic data.
          </Paragraph>
        </Section>

        <Section>
          <Subtitle>Cookies and Web Beacons</Subtitle>
          <Paragraph>
            Similar to many other websites, Kruxigen.tech utilizes 'cookies.'
            These cookies are deployed to store information, encompassing
            visitor preferences and specific pages accessed or visited on the
            website. This data is leveraged to enhance the user experience by
            tailoring web page content based on visitor browser types and other
            pertinent information.
          </Paragraph>
        </Section>

        <Section>
          <Subtitle>Google DoubleClick DART Cookie</Subtitle>
          <Paragraph>
            Google, acting as a third-party vendor on our site, also employs
            cookies, known as DART cookies. These cookies serve the purpose of
            displaying ads to our site visitors based on their interactions with
            Kruxigen.tech and other websites across the internet. Notably,
            visitors have the option to decline the utilization of DART cookies
            by visiting the Google ad and content network Privacy Policy at the
            following URL:{' '}
            <a href="https://policies.google.com/technologies/ads">
              https://policies.google.com/technologies/ads
            </a>
          </Paragraph>
        </Section>

        <Section>
          <Subtitle>Our Advertising Partners</Subtitle>
          <Paragraph>
            Some of the advertisers featured on our site may employ cookies and
            web beacons. We have provided a list of our advertising partners
            below, and each of them maintains their own Privacy Policy regarding
            user data. For your convenience, we have furnished hyperlinks to
            their respective Privacy Policies:
          </Paragraph>
          <ul>
            <li>
              <a href="https://policies.google.com/technologies/ads">
                Google Privacy Policy
              </a>
            </li>
            {/* Add more advertising partners and their Privacy Policy links if applicable */}
          </ul>
        </Section>

        <Section>
          <Subtitle>Advertising Partners Privacy Policies</Subtitle>
          <Paragraph>
            You can consult this list to access the Privacy Policy of each of
            our advertising partners.
          </Paragraph>
        </Section>

        <Section>
          <Subtitle>Third-party Ad Servers and Technologies</Subtitle>
          <Paragraph>
            Third-party ad servers or ad networks employ technologies such as
            cookies, JavaScript, or Web Beacons in their respective
            advertisements and links featured on Kruxigen.tech. These
            technologies are directly transmitted to users' browsers.
            Consequently, these third-party servers automatically acquire your
            IP address. These technologies primarily serve the purpose of
            assessing the effectiveness of their advertising campaigns and
            personalizing advertising content displayed on websites you visit.
          </Paragraph>
          <Paragraph>
            Please be aware that Kruxigen.tech does not possess access to or
            control over these cookies utilized by third-party advertisers.
          </Paragraph>
        </Section>

        <Section>
          <Subtitle>Third Party Privacy Policies</Subtitle>
          <Paragraph>
            The Privacy Policy of Kruxigen.tech is not applicable to other
            advertisers or websites. Therefore, we strongly recommend that you
            consult the respective Privacy Policies of these third-party ad
            servers for comprehensive information. This may encompass their
            practices and guidelines for opting out of specific choices.
          </Paragraph>
        </Section>

        <Section>
          <Subtitle>Cookie Management</Subtitle>
          <Paragraph>
            You have the option to disable cookies through the settings in your
            individual web browser. For detailed guidance on managing cookies
            with specific web browsers, please refer to the official websites of
            the respective browsers.
          </Paragraph>
        </Section>

        <Section>
          <Subtitle>
            CCPA Privacy Rights (Do Not Sell My Personal Information)
          </Subtitle>
          <Paragraph>
            Under the California Consumer Privacy Act (CCPA), California
            consumers possess specific rights, including:
          </Paragraph>
          <ul>
            <li>
              Requesting that a business collecting a consumer's personal data
              disclose the categories and specific pieces of personal data
              collected about consumers.
            </li>
            <li>
              Requesting that a business delete any personal data about the
              consumer collected by the business.
            </li>
            <li>
              Requesting that a business that sells a consumer's personal data
              refrain from selling that data.
            </li>
          </ul>
          <Paragraph>
            If you wish to exercise any of these rights, please contact us. We
            have one month to respond to your request.
          </Paragraph>
        </Section>
      </PrivacyPolicyContent>
    </PrivacyPolicyContainer>
  );
}

export default PrivacyPolicy;
