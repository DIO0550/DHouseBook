import { MessageBox } from './messageBox';

const UnsaveMessageBoxButtonLabel = {
  Save: '保存',
  NotSave: '保存しない',
  Cancel: 'キャンセル',
} as const;
type UnsaveMessageBoxButtonLabel =
  (typeof UnsaveMessageBoxButtonLabel)[keyof typeof UnsaveMessageBoxButtonLabel];

const UnsaveMessageBoxButtons: UnsaveMessageBoxButtonLabel[] = Object.values(
  UnsaveMessageBoxButtonLabel,
);
const CancelId =
  UnsaveMessageBoxButtons.findIndex(
    (button) => button === UnsaveMessageBoxButtonLabel.Cancel,
  ) ?? -1;

const UnsaveMessageBox = {
  sycnShow: () =>
    MessageBox.syncShow({
      buttons: UnsaveMessageBoxButtons,
      title: 'ファイルを保存しますか？',
      message: '未保存です。',
      cancelId: CancelId,
    }),
};

export { UnsaveMessageBox };
