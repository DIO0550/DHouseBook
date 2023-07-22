/* eslint-disable @typescript-eslint/no-explicit-any */
// attributes設定するために無効
/* eslint-disable react/jsx-props-no-spreading */
import { memo } from 'react';
import { RenderElementProps } from 'slate-react';

type Props = Partial<RenderElementProps>;

const PurchasedItemTypeElement = memo<Props>(({ attributes, children }) => (
  <div {...attributes}>{children}</div>
));

export { PurchasedItemTypeElement };
