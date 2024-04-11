import React from 'react';
import InfoLineBasic from '@components/InfoLineBasic';

interface Props {
  date?: string; // todo use an date object here
  hours?: string; // todo use an hour object here
  icon?: string;
}

const InfoDateLine = (props: Props) => {
  const { date, hours, icon } = props;
  // todo process here the address
  return <InfoLineBasic icon={icon} value={date + ', ' + hours} />;
};

export default InfoDateLine;
