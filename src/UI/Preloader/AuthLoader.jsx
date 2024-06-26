import React from 'react';
import RingLoader from 'react-spinners/RingLoader';

export const AuthLoader = ({size}) => (
  <RingLoader size={size}
    css={{display: 'block'}} color="#ca00ed" />
);
