import { PrimaryButton } from '@/components/Elements';
import styles from './HouseBookDeleteItemButton.module.scss';

type Props = {
  onClick: () => void;
};

const HouseBookDeleteItemButton = ({ onClick }: Props) => (
  <div className={`${styles.container}`}>
    <PrimaryButton type="button" onClick={onClick}>
      削除
    </PrimaryButton>
  </div>
);

export { HouseBookDeleteItemButton };
