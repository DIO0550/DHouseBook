/* eslint-disable react/jsx-props-no-spreading */
import { memo } from 'react';
import { RenderLeafProps } from 'slate-react';

type Props = RenderLeafProps;

const PurchasedItemLeaf = memo<Props>(({ children, attributes }) => (
  <span {...attributes}>{children}</span>
));

export { PurchasedItemLeaf };
