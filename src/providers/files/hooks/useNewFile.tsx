import { useCreateHouseBookFile } from '@/features/files/hooks/useCreateHouseBookFile';
import { useEffect } from 'react';

const useNewFile = () => {
  const { createNewFile } = useCreateHouseBookFile();

  useEffect(() => {
    const createNewFileCallback = () => {
      createNewFile();
    };

    // イベントを受け取る
    const remove = window.api.on.createNewFile(createNewFileCallback);

    return () => {
      remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export { useNewFile };
