import type { BaseEditor } from 'slate';
import type { ReactEditor } from 'slate-react';
import type { HistoryEditor } from 'slate-history';
import type {
  PurchasedItemElement,
  CustomText,
} from 'utils/editors/purchaseItemEditorConst';

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor & HistoryEditor;
    Element: PurchasedItemElement;
    Text: CustomText;
  }
}
