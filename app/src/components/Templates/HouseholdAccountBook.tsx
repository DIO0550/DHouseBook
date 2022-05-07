import React from 'react';
import DateControl from '../Molecules/DateControl';
import PurcahsedListFooter from '../Organisms/PurchasedListFooter';
import PurchasedList from '../Organisms/PurchasedList';
import SumPrice from '../Atoms/SumPrice';

const HouseholdAccountBook: React.VFC = () => (
  <>
    <DateControl />
    <PurchasedList />
    <PurcahsedListFooter />
    <SumPrice />
  </>
);

export default HouseholdAccountBook;
