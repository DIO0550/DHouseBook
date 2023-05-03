import type { BaseEditor } from 'slate';
import type { ReactEditor } from 'slate-react';
import type { HistoryEditor } from 'slate-history';
import type { CustomText } from '@/utils/editors/customText';
import type { PurchasedItemElement } from '@/utils/editors/purchasedItemElement';

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor & HistoryEditor;
    Element: PurchasedItemElement;
    Text: CustomText;
  }
}
