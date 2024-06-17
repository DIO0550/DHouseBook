import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

const useDidUpdateEffect = (effect: EffectCallback, deps?: DependencyList) => {
  const isMount = useRef(true);

  useEffect(() => {
    if (isMount.current) {
      isMount.current = false;

      return;
    }

    // eslint-disable-next-line consistent-return
    return effect();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export { useDidUpdateEffect };
