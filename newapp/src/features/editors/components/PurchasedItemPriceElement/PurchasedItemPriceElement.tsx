// attributes設定するために無効
/* eslint-disable react/jsx-props-no-spreading */
import { memo } from 'react';
import { RenderElementProps } from 'slate-react';
import styles from './PurchasedItemPriceElement.module.scss';

type Props = RenderElementProps;

const PurchasedItemNameElement = memo<Props>(({ attributes, children }) => (
  <div {...attributes} className={styles['price-container']}>
    {children}
  </div>
));

export { PurchasedItemNameElement };
