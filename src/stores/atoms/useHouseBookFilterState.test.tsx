import { renderHook } from '@testing-library/react';
import { RecoilRoot, SetRecoilState } from 'recoil';
import { ReactNode } from 'react';
import { useHouseBookFilterState } from './useHouseBookFilterState';
import {
  HouseBookFilter,
  HouseBookFilterCategory,
  HouseBookFilterNameCondition,
  houseBookFilterState,
} from './houseBookFilterState';

const wrapper =
  ({ filter }: { filter?: HouseBookFilter[] | undefined } = {}) =>
  // eslint-disable-next-line react/function-component-definition
  ({ children }: { children: ReactNode }) =>
    (
      <RecoilRoot
        initializeState={({ set }: { set: SetRecoilState }) => {
          set(houseBookFilterState, filter);
        }}
      >
        {children}
      </RecoilRoot>
    );

describe('useHouseBookFilterState.test', () => {
  describe('isApplyFilter', () => {
    it('フィルタが未設定（udenfined）ならfalse', () => {
      const { result } = renderHook(() => useHouseBookFilterState(), {
        wrapper: wrapper(),
      });

      expect(result.current.isApplyFilter).toBe(false);
    });

    it('フィルタが未設定（空配列）ならfalse', () => {
      const { result } = renderHook(() => useHouseBookFilterState(), {
        wrapper: wrapper({ filter: [] as HouseBookFilter[] }),
      });

      expect(result.current.isApplyFilter).toBe(false);
    });

    it('フィルタが設定されていればtrue', () => {
      const filter: HouseBookFilter[] = [
        {
          type: HouseBookFilterCategory.Name,
          value: 'Hoge',
          condition: HouseBookFilterNameCondition.Include,
          operation: undefined,
        },
      ];
      const { result } = renderHook(() => useHouseBookFilterState(), {
        wrapper: wrapper({ filter }),
      });

      expect(result.current.isApplyFilter).toBe(true);
    });
  });
});
