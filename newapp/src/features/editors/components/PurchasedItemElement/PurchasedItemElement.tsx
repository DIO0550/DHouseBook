// attributes設定するために無効
/* eslint-disable react/jsx-props-no-spreading */
import { memo } from 'react';
import { RenderElementProps } from 'slate-react';
import styles from './PurchasedItemElement.module.scss';

type PurchasedItemProps = RenderElementProps & {
  selected?: boolean;
};

const PurchasedItemElement = memo<RenderElementProps>((props) => (
  <div className={styles['item-render-container']} {...props.attributes}>
    {props.children}
  </div>
));

export { PurchasedItemElement };
