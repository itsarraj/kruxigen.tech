import React, { useEffect } from 'react';
import { InfoSection } from '../../components';
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  // homeObjFour,
  homeObjFive,
  // homeObjSix,
  // homeObjSeven,
  homeObjEight,
  homeObjNine,
} from './Data';

function Home() {
  const infoSections = [
    homeObjOne,
    homeObjTwo,
    homeObjThree,
    homeObjFive,
    homeObjNine,
    homeObjEight,
    // homeObjSix,
    // homeObjFour,
    // homeObjSeven,
  ];

  return (
    <>
      {infoSections.map((section, index) => (
        <InfoSection key={index} {...section} />
      ))}
    </>
  );
}

export default Home;
