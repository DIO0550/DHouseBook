import { ReactNode } from 'react';
import { useFileOpen } from '@/providers/files/hooks/useFileOpen';
import { useNewFile } from '@/providers/files/hooks/useNewFile';
import { activeFileIdState } from '@/stores/atoms/activeFileIdState';
import { useRecoilValue } from 'recoil';
import { useFileSave } from '@/providers/files/hooks/useFileSave';

const FileProvider = ({ children }: { children: ReactNode }) => {
  const activeFileId = useRecoilValue(activeFileIdState);
  useFileOpen();
  useNewFile();
  useFileSave({ id: activeFileId });

  return <>{children}</>;
};

export { FileProvider };
