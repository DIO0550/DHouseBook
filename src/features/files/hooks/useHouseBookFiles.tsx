import { useCallback, useState } from 'react';
import { HouseBookFileProperty } from '../utils/houseBookFileProperty';

const useHouseBookFiles = () => {
  const [files, setFiles] = useState<HouseBookFileProperty[]>([]);

  const addFile = useCallback((file: HouseBookFileProperty) => {
    setFiles((list) => [...list, file]);
  }, []);

  return {
    files,
    addFile,
  };
};

export { useHouseBookFiles };
