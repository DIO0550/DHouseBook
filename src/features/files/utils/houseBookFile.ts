import { v4 as uuidv4 } from 'uuid';
import { HouseBookData } from './houseBookData';
import { HouseBookFileProperty } from './houseBookFileProperty';

export type HouseBookFile = {
  id: string;
  property: HouseBookFileProperty;
  data: HouseBookData;
};

export const HouseBookFile = {
  initByFileOpen: ({
    filePath,
    text,
  }: {
    filePath: string;
    text: string | undefined;
  }) => {
    const fileProperty = HouseBookFileProperty.initWithFilePath({
      filePath,
    });

    let data: HouseBookData;
    if (text) {
      data = HouseBookData.fromJsonString(text) || HouseBookData.init();
    } else {
      data = HouseBookData.init();
    }

    const file: HouseBookFile = {
      id: uuidv4(),
      data,
      property: fileProperty,
    };

    return file;
  },
} as const;
