export const InputEventEx = {
  isInputEvent: (event: object): event is InputEvent =>
    event instanceof InputEvent,

  isComposing: (event: object) => {
    if (!InputEventEx.isInputEvent(event)) {
      return false;
    }

    return event.isComposing;
  },
} as const;
