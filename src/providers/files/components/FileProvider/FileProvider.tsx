import { ReactNode } from 'react';
import { useFileOpen } from '@/providers/files/hooks/useFileOpen';
import { useNewFile } from '@/providers/files/hooks/useNewFile';

const FileProvider = ({ children }: { children: ReactNode }) => {
  useFileOpen();
  useNewFile();

  return <>{children}</>;
};

export { FileProvider };
