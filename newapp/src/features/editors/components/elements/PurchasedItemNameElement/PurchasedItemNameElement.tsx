// attributes設定するために無効
/* eslint-disable react/jsx-props-no-spreading */
import { memo } from 'react';
import { RenderElementProps } from 'slate-react';
import styles from './PurchasedItemNameElement.module.scss';

type Props = Partial<RenderElementProps>;

const PurchasedItemNameElement = memo<Props>(({ attributes, children }) => (
  <div {...attributes} className={styles['name-container']}>
    {children}
  </div>
));

export { PurchasedItemNameElement };
