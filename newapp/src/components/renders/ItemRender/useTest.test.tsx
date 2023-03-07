// eslint-disable-next-line import/no-extraneous-dependencies
import { renderHook } from '@testing-library/react';
import useTestRef from './useTest';

describe('', () => {
  it('', () => {
    const { result } = renderHook(() => {
      const test = useTestRef();
      <input ref={test.inputRef} />;

      return test;
    });

    // const { result } = renderHook(() => useTestRef());

    console.log(result.current.inputRef);
    console.log(document.getElementsByTagName('div'));
  });
});
