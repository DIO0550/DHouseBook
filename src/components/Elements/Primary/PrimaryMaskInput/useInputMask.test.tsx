import { renderHook } from '@testing-library/react';
import { useInputMask } from './useInputMask';

describe('useInputMask', () => {
  describe('maskInput', () => {
    it('マスクの値になるか', () => {
      const mask = '111222333';
      const { result } = renderHook(() => useInputMask({ mask }));
    });
  });
});
