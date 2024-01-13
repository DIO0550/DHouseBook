import { ReactNode } from 'react';
import { useFileOpen } from '@/providers/files/hooks/useFileOpen';

const FileProvider = ({ children }: { children: ReactNode }) => {
  useFileOpen();

  return <>{children}</>;
};

export { FileProvider };
