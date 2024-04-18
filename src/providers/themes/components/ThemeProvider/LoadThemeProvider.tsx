import { ReactNode, Suspense, useState } from 'react';
import { ThemeColor } from './ThemeColor';
import { ThemeProvider } from './ThemeProvider';

type Props = {
  children: ReactNode;
};

const WaitLoadTheme = ({
  children,
  themeColor,
  setThemeColor,
}: Props & {
  themeColor: ThemeColor | undefined;
  setThemeColor: React.Dispatch<React.SetStateAction<ThemeColor | undefined>>;
}) => {
  if (!themeColor) {
    throw window.api.invoke.initialThemeColor().then((color) => {
      if (!themeColor) {
        setThemeColor(ThemeColor.red);

        return;
      }
      setThemeColor(color);
    });
  }

  return <ThemeProvider initialValue={themeColor}>{children}</ThemeProvider>;
};

const LoadThemeProvider = ({ children }: Props) => {
  const [themeColor, setThemeColor] = useState<ThemeColor | undefined>();

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <WaitLoadTheme themeColor={themeColor} setThemeColor={setThemeColor}>
        {children}
      </WaitLoadTheme>
    </Suspense>
  );
};

export { LoadThemeProvider };
