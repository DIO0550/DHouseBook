export type BeforeInputEvent = React.FormEvent<HTMLInputElement> & {
  data: string | null;
  target: HTMLInputElement;
  isComposing: boolean;
};
