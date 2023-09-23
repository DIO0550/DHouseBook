import { HouseBookFileProperty } from '../../utils/houseBookFileProperty';

export type HouseBookSection = {
  year: number;
  month: number;
  files: HouseBookFileProperty[];
};
