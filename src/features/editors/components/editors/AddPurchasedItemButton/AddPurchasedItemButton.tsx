import { PrimaryButton } from '@/components/Elements';
import { memo } from 'react';

type Props = {
  // 追加ボタンクリック
  handleAddButtonClick: () => void;
};

const AddPurchasedItemButton = memo<Props>(({ handleAddButtonClick }) => (
  <PrimaryButton title="追加" handleClick={handleAddButtonClick} />
));

export { AddPurchasedItemButton };
