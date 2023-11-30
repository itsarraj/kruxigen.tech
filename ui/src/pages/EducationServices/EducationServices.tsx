import React, { useEffect } from "react";
import { Pricing } from "../../components"; // Import your GigSection and Pricing components here
import {
  gigData1,
  gigPricing1,
  // gigData2,
  // gigPricing2,
  // gigData3,
  // gigPricing3,
  // gigData4,
  // gigPricing4,
  // gigData5,
  // gigPricing5,
  // gigData6,
  // gigPricing6,
} from "./Data";
import GigSection from "../../components/GigSection/GigSection";

function EducationServices() {
  const gigs = [
    { data: gigData1, pricing: gigPricing1 },
    // { data: gigData4, pricing: gigPricing4 },
    // { data: gigData2, pricing: gigPricing2 },
    // { data: gigData3, pricing: gigPricing3 },
    // { data: gigData5, pricing: gigPricing5 }, // Add gig 5
    // { data: gigData6, pricing: gigPricing6 }, // Add gig 6
  ];

  return (
    <>
      {gigs.map((gig, index) => (
        <React.Fragment key={index}>
          <GigSection {...gig.data} />
          <Pricing {...gig.pricing} />
        </React.Fragment>
      ))}
    </>
  );
}

export default EducationServices;
