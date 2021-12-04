import React from 'react';
import DateControlComponent from '../Molecules/DateControlComponent';
import PurchasedListComponent from '../Organisms/PurchasedListComponent';

const HouseholdAccountBook: React.VFC = () => {
  return (
    <>
      <DateControlComponent />
      <PurchasedListComponent />
    </>
  );
};
