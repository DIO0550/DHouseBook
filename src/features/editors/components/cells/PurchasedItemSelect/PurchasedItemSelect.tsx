import { PrimaryCheckbox } from '@/components/Elements/Primary/PrimaryCheckbox';
import { memo } from 'react';
import { HouseBookEditorMode } from '@/features/editors/hooks/useHouseBookEditorMode';
import styles from './PurchasedItemSelect.module.scss';

type Props = {
  mode: HouseBookEditorMode;
  id: string;
  checked: boolean;
  onChange: (id: string) => void;
};

const PurchasedItemSelect = memo<Props>(({ mode, id, checked, onChange }) => {
  if (mode !== HouseBookEditorMode.Select) {
    return null;
  }

  return (
    <div
      className={`${styles['select-container']} ${styles['select-container-skin']}`}
    >
      <PrimaryCheckbox
        onChange={() => {
          onChange(id);
        }}
        checked={checked}
      />
    </div>
  );
});

export { PurchasedItemSelect };
