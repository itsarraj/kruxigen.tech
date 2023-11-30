import React from 'react';

import { SpinnerCircular } from 'spinners-react';

export const Loading = () => {
  return (
    <div className="container">
      <div
        style={{
          margin: '0rem auto auto auto',
          textAlign: 'center',
          background: '#4B59F7',
        }}
      >
        <SpinnerCircular
          size="200"
          thickness={30}
          color="#101522"
          speed={100}
        />
      </div>
    </div>
  );
};
