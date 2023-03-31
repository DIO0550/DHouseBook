// attributes設定するために無効
/* eslint-disable react/jsx-props-no-spreading */
import { memo } from 'react';
import { RenderElementProps } from 'slate-react';
import styles from './PurchasedItemNameElement.module.scss';

type Props = {
  renderElementProps: RenderElementProps;
};

const PurchasedItemNameElement = memo<Props>(({ renderElementProps }) => (
  <div {...renderElementProps.attributes} className={styles['name-container']}>
    {renderElementProps.children}
  </div>
));

export { PurchasedItemNameElement };
