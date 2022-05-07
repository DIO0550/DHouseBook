import usePurchasedInfo from '../../hooks/usePurchasedInfo';
import styles from './SumPrice.module.scss';

const SumPrice: React.FC = () => {
  const { priceSum } = usePurchasedInfo();

  return (
    <div className={styles['price-sum-container']}>
      <div>合計：</div>
      {priceSum}
    </div>
  );
};

export default SumPrice;
