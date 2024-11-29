import { renderHook } from '@testing-library/react';
import { useInputMask } from './useInputMask';

describe('useInputMask', () => {
  describe('maskInput', () => {
    it('マスクの値になるか', () => {
      const mask = '111222333';
      const { result } = renderHook(() => useInputMask({ mask }));

      expect(result.current.maskInputValue('11123333')).toBe('1112');
    });
  });
});
