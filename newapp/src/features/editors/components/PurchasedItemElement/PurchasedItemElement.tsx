// attributes設定するために無効
/* eslint-disable react/jsx-props-no-spreading */
import { memo } from 'react';
import { RenderElementProps } from 'slate-react';
import styles from './PurchasedItemElement.module.scss';

type PurchasedItemProps = RenderElementProps & {
  selected?: boolean;
};

const PurchasedItemElement = memo<PurchasedItemProps>(
  ({ children, attributes, selected = false }) => (
    <div
      className={`${styles['item-container']} ${
        selected ? styles.selected : ''
      }`}
      {...attributes}
    >
      {children}
    </div>
  ),
);

export { PurchasedItemElement };
