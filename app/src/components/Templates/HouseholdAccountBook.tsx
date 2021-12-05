import React from 'react';
import DateControl from '../Molecules/DateControl';
import PurchasedList from '../Organisms/PurchasedList';

const HouseholdAccountBook: React.VFC = () => {
  return (
    <>
      <DateControl />
      <PurchasedList />
    </>
  );
};

export default HouseholdAccountBook;
