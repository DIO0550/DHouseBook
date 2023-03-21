// attributes設定するために無効
/* eslint-disable react/jsx-props-no-spreading */
import { memo } from 'react';
import { RenderElementProps } from 'slate-react';
import styles from './ItemRender.module.scss';

const PurchasedItemElement = memo<RenderElementProps>((props) => (
  <div className={styles.app} {...props.attributes}>
    {props.children}
  </div>
));

export { PurchasedItemElement };
