import usePurchasedInfo from '../../hooks/usePurchasedInfo';
import SumPriceLabel from '../../components/Atoms/SumPriceLabel';
import { formatPrice } from '../../util/converter';

const SumPrice: React.FC = () => {
  const { priceSum } = usePurchasedInfo();

  return <SumPriceLabel price={formatPrice(priceSum)} />;
};

export default SumPrice;
