import React from 'react';
import { Button } from '../../globalStyles';
import { GiCrystalBars, GiCutDiamond, GiRock } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardDescription,
  PricingCardFeatures,
  PricingCardFeature,
} from './Pricing.elements';

import { GigPricing, PackageDetails } from '../../types/gigTypes';

const Pricing = (gigPricing: GigPricing) => {
  // const { title, packages } = gigPricing;
  const iconMapping: {
    [key: number]: React.ReactNode;
  } = {
    1: <GiRock />,
    2: <GiCrystalBars />,
    3: <GiCutDiamond />,
  };

  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: '64' }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>{gigPricing.title}</PricingHeading>
          <PricingContainer>
            {Object.values(gigPricing.packages).map(
              (pricing: PackageDetails) => (
                <PricingCard
                  key={pricing.id}
                  to={pricing.gigUrl}
                  target="_blank"
                >
                  <PricingCardInfo>
                    <PricingCardIcon>
                      {iconMapping[pricing.id] || <GiCrystalBars />}
                    </PricingCardIcon>
                    <PricingCardPlan>{pricing.package}</PricingCardPlan>
                    <PricingCardCost>{pricing.price}</PricingCardCost>
                    <PricingCardDescription>
                      {pricing.description}
                    </PricingCardDescription>
                    <PricingCardFeatures>
                      {pricing.details && (
                        <>
                          {pricing.details.map((detail, index) => (
                            <PricingCardFeature key={index}>
                              {detail}
                            </PricingCardFeature>
                          ))}
                        </>
                      )}
                    </PricingCardFeatures>
                    <Button primary>Choose Plan</Button>
                  </PricingCardInfo>
                </PricingCard>
              )
            )}
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
};

export default Pricing;
