import { MessageBox } from './messageBox';

const UnsaveMessageBoxButton = {
  Save: '保存',
  NotSave: '保存しない',
  Cancel: 'キャンセル',
} as const;
type UnsaveMessageBoxButtonLabel =
  (typeof UnsaveMessageBoxButton)[keyof typeof UnsaveMessageBoxButton];

const UnsaveMessageBoxButtons: UnsaveMessageBoxButtonLabel[] = Object.values(
  UnsaveMessageBoxButton,
);
const CancelId =
  UnsaveMessageBoxButtons.findIndex(
    (button) => button === UnsaveMessageBoxButton.Cancel,
  ) ?? -1;
export const UnsaveMessageBoxButtonId = {
  Save:
    UnsaveMessageBoxButtons.findIndex(
      (button) => button === UnsaveMessageBoxButton.Save,
    ) ?? 0,
  NotSave:
    UnsaveMessageBoxButtons.findIndex(
      (button) => button === UnsaveMessageBoxButton.NotSave,
    ) ?? 0,
  Cancel: CancelId,
};

const UnsaveMessageBox = {
  sycnShow: (fileName: string) =>
    MessageBox.syncShow({
      buttons: UnsaveMessageBoxButtons,
      type: 'warning',
      title: `${fileName}に加えた変更を保存しますか？`,
      message: '保存していない場合は、変更が反映されません。',
      cancelId: CancelId,
      noLink: true,
    }),
};

export { UnsaveMessageBox };
