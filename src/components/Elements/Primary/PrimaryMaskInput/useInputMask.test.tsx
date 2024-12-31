import { renderHook } from '@testing-library/react';
import { useInputMask } from './useInputMask';

describe('useInputMask', () => {
  describe('defaultValue', () => {
    describe('maskのtypeがRegExpArray', () => {
      it('maskLengthがdefaultValueの文字数よりも大きい場合', () => {
        const { result } = renderHook(() =>
          useInputMask({
            defaultValue: '123',
            mask: ['1', '2', '3', '4'],
          }),
        );

        expect(result.current.defaultValue).toBe('1234');
      });

      it('maskLengthがdefaultValueの文字数よりも小さい場合', () => {
        const { result } = renderHook(() =>
          useInputMask({
            defaultValue: '1234',
            mask: ['1', '2', '3'],
          }),
        );

        expect(result.current.defaultValue).toBe('123');
      });

      it('マスクにマッチしない文字がdefaultValueに含まれている場合、その文字はマスクに置き換えられる', () => {
        const { result } = renderHook(() =>
          useInputMask({
            defaultValue: 'AAA',
            mask: ['1', '2', '3'],
          }),
        );

        expect(result.current.defaultValue).toBe('123');
      });

      it('Regexにマッチしない場合は、placeholderに置き換えられる', () => {
        const { result } = renderHook(() =>
          useInputMask({
            defaultValue: 'AA3',
            mask: ['9', '9', '9'],
            maskPlaceholder: '0',
          }),
        );

        expect(result.current.defaultValue).toBe('003');
      });

      it('defaultValueが空文字の場合', () => {
        const { result } = renderHook(() =>
          useInputMask({
            defaultValue: '',
            mask: ['1', '2', '3'],
          }),
        );

        expect(result.current.defaultValue).toBe('123');
      });
    });
  });
});
