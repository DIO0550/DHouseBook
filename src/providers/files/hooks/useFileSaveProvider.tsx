import { useEffect } from 'react';
import { useFileSave } from './useFileSave';

type Props = {
  id: string;
};

const useFileSaveProvider = ({ id }: Props) => {
  const { saveFile, saveStatus } = useFileSave({ id });

  useEffect(() => {
    const saveCallback = () => {
      void saveFile();
    };
    // イベントを受け取る
    const remove = window.api.on.saveFile(saveCallback);

    return () => {
      remove();
    };
  }, [saveFile]);

  return {
    saveFile,
    saveStatus,
  };
};

export { useFileSaveProvider };
