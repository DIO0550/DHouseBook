import { HouseBookFileState } from '@/features/files/utils/houseBookFileProperty';
import {
  houseBookItemsState,
  houseBookDateState,
} from '@/stores/atoms/houseBookState';
import { useSetHouseBookDateState } from '@/stores/atoms/useSetHouseBookDateState';
import useSetHouseBookFilePropertyState from '@/stores/atoms/useSetHouseBookFilePropertyState';
import useSetHouseBookItemsState from '@/stores/atoms/useSetHouseBookItemsState';
import { useRef, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { useEditor } from './useEditor';

type Props = {
  fileId: string;
};

const useHouseBookEditor = ({ fileId }: Props) => {
  const houseBookItems = useRecoilValue(houseBookItemsState({ id: fileId }));
  const houseBookDate = useRecoilValue(houseBookDateState({ id: fileId }));
  const { setFileState } = useSetHouseBookFilePropertyState({
    id: fileId,
  });
  const { setHouseBookItems } = useSetHouseBookItemsState(fileId);
  const { setHouseBookDate } = useSetHouseBookDateState({
    id: fileId,
  });

  const editor = useEditor({ initialPurchasedItems: houseBookItems });
  const isFirstRef = useRef(true);

  useEffect(() => {
    if (isFirstRef.current) {
      isFirstRef.current = false;
    } else {
      setHouseBookItems(editor.purchasedItems);
      setFileState(HouseBookFileState.Dirty);
    }
  }, [editor.purchasedItems, setFileState, setHouseBookItems]);
};

export { useHouseBookEditor };
