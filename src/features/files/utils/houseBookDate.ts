export type HouseBookDate = {
  year: number;
  month: number;
};

export const HouseBookDate = {
  init: () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const newHouseBookDate: HouseBookDate = {
      year,
      month,
    };

    return newHouseBookDate;
  },
};
