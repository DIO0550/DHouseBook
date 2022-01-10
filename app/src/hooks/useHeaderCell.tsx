import { SORT_TYPE } from '../store/bookDateSlice';
import useBookData from './useBooksDate';

// カスタムフックの返却値
type UseHeaderCell = {
  // ソートの種類
  sortType: SORT_TYPE;
  // ヘッダクリック時の処理
  onClickHeader: (type: SORT_TYPE) => void;
};

const useHeaderCell = (): UseHeaderCell => {
  const { sortType, changeSortType } = useBookData();

  /**
   * ヘッダクリック時の処理
   * @param type ソートするタイプ
   */
  const onClickHeader = (type: SORT_TYPE) => {
    changeSortType(type);
  };

  return {
    sortType,
    onClickHeader,
  };
};

export default useHeaderCell;
