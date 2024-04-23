import { ReactNode, Suspense, useState } from 'react';
import { ThemeColor } from './ThemeColor';
import { ThemeProvider } from './ThemeProvider';

type Props = {
  children: ReactNode;
};

const LoadThemeColor = ({
  children,
  themeColor,
  setThemeColor,
}: Props & {
  themeColor: ThemeColor | undefined;
  setThemeColor: React.Dispatch<React.SetStateAction<ThemeColor | undefined>>;
}) => {
  if (!themeColor) {
    throw window.api.invoke.initialThemeColor().then((color) => {
      if (!color) {
        setThemeColor(ThemeColor.red);

        return;
      }
      setThemeColor(color);
    });
  }

  return <ThemeProvider initialValue={themeColor}>{children}</ThemeProvider>;
};

const ThemeColorProvider = ({ children }: Props) => {
  const [themeColor, setThemeColor] = useState<ThemeColor | undefined>();

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <LoadThemeColor themeColor={themeColor} setThemeColor={setThemeColor}>
        {children}
      </LoadThemeColor>
    </Suspense>
  );
};

export { ThemeColorProvider };
