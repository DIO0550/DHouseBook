import { useRef } from 'react';

const useTestRef = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return {
    inputRef,
  };
};

export default useTestRef;
