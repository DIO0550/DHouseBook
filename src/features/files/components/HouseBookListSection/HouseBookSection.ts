import { HouseBookFile } from '../../utils/houseBookFile';

export type HouseBookSection = {
  year: number;
  month: number;
  files: HouseBookFile[];
};
