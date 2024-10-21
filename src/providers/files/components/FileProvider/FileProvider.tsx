import { ReactNode } from 'react';
import { useFileOpen } from '@/providers/files/hooks/useFileOpen';
import { useNewFile } from '@/providers/files/hooks/useNewFile';
import { activeFileIdState } from '@/stores/atoms/activeFileIdState';
import { useRecoilValue } from 'recoil';
import { useFileSaveProvider } from '@/providers/files/hooks/useFileSaveProvider';

const FileProvider = ({ children }: { children: ReactNode }) => {
  const activeFileId = useRecoilValue(activeFileIdState);
  useFileOpen();
  useNewFile();
  useFileSaveProvider({ id: activeFileId });

  return <> {children}</>;
};

export { FileProvider };
