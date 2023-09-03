import { useCallback, useState } from 'react';
import { HouseBookFile } from '../utils/houseBookFile';

const useHouseBookFiles = () => {
  const [files, setFiles] = useState<HouseBookFile[]>([]);

  const addFile = useCallback((file: HouseBookFile) => {
    setFiles((list) => [...list, file]);
  }, []);

  return {
    files,
    addFile,
  };
};

export { useHouseBookFiles };
