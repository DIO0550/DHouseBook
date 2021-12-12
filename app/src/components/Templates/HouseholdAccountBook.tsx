import React from 'react';
import DateControl from '../Molecules/DateControl';
import OperateDataButtons from '../Organisms/OperateDataButtons';
import PurchasedList from '../Organisms/PurchasedList';

const HouseholdAccountBook: React.VFC = () => {
  return (
    <>
      <DateControl />
      <PurchasedList />
      <OperateDataButtons />
    </>
  );
};

export default HouseholdAccountBook;
