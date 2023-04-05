/* eslint-disable @typescript-eslint/no-explicit-any */
// attributes設定するために無効
/* eslint-disable react/jsx-props-no-spreading */
import { memo } from 'react';
import { RenderElementProps } from 'slate-react';
import styles from './PurchasedItemPriceElement.module.scss';

type Props = Partial<RenderElementProps>;

const PurchasedItemPriceElement = memo<Props>(({ attributes, children }) => (
  <div {...attributes} className={styles['price-container']}>
    {children}
  </div>
));

export { PurchasedItemPriceElement };
