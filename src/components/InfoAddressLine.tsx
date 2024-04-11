import React from 'react';
import InfoLineBasic from '@components/InfoLineBasic';

interface Props {
  address?: string; // todo use an address object here
  icon?: string;
}

const InfoAddressLine = (props: Props) => {
  const { address, icon } = props;
  // todo process here the address
  return <InfoLineBasic icon={icon} value={address} />;
};

export default InfoAddressLine;
