import { PrimaryCheckbox } from '@/components/Elements/Primary/PrimaryCheckbox';
import { memo } from 'react';
import styles from './PurchasedItemSelect.module.scss';

type Props = {
  id: string;
  checked: boolean;
  onChange: (id: string) => void;
};

const PurchasedItemSelect = memo<Props>(({ id, checked, onChange }) => (
  <div className={`${styles.container}`}>
    <PrimaryCheckbox
      onChange={() => {
        onChange(id);
      }}
      checked={checked}
    />
  </div>
));

export { PurchasedItemSelect };
