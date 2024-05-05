import { PrimaryButton } from '@/components/Elements';
import { memo } from 'react';

type Props = {
  // 追加ボタンクリック
  onClick: () => void;
};

const AddPurchasedItemButton = memo<Props>(({ onClick }) => (
  <PrimaryButton title="アイテム追加" onClick={onClick} />
));

export { AddPurchasedItemButton };
