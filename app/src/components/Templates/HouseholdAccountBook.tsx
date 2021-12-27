import React from 'react';
import DateControl from '../Molecules/DateControl';
import PurcahsedListFooter from '../Organisms/PurchasedListFooter';
import PurchasedList from '../Organisms/PurchasedList';

const HouseholdAccountBook: React.VFC = () => (
  <>
    <DateControl />
    <PurchasedList />
    <PurcahsedListFooter />
  </>
);

export default HouseholdAccountBook;
