import styles from './SumPrice.module.scss';

type Props = {
  price: string;
};

const SumPriceLabel = (props: Props): JSX.Element => {
  const { price } = props;

  return (
    <div className={styles['price-sum-container']}>
      <div>合計：</div>
      {price}
    </div>
  );
};

export default SumPriceLabel;
