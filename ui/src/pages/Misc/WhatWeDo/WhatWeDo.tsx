import { InfoSection } from '../../../components';
import { WhatWeDoSection1Data, WhatWeDoSection2Data } from './Data';

function WhatWeDo() {
  return (
    <>
      <InfoSection {...WhatWeDoSection1Data} />
      <InfoSection {...WhatWeDoSection2Data} />
    </>
  );
}

export default WhatWeDo;
