export const ThemeColor = {
  red: 'red',
  purple: 'purple',
  blue: 'blue',
  cyan: 'cyan',
  green: 'green',
  yellow: 'yellow',
  orange: 'orange',
  gray: 'gray',
} as const;
export type ThemeColor = (typeof ThemeColor)[keyof typeof ThemeColor];
