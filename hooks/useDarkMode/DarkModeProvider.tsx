import {
  createContext,
  ReactNode,
  useState,
  useCallback,
  useEffect,
} from 'react';

type DarkModeContext = {
  isDarkTheme: boolean;
  handleSetIsDarkTheme: (preference: string) => void;
};
export const DarkModeContext = createContext<DarkModeContext>({
  isDarkTheme: true,
  handleSetIsDarkTheme: () => {},
});

type DarkModeProviderProps = {
  children: ReactNode;
};

export default function DarkModeProvider({ children }: DarkModeProviderProps) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleSetIsDarkTheme = useCallback(
    function () {
      setIsDarkTheme(!isDarkTheme);
    },
    [setIsDarkTheme, isDarkTheme]
  );

  const getMediaQueryPreference = () => {
    const mediaQuery = '(prefers-color-scheme: dark)';
    const mql = window.matchMedia(mediaQuery);
    const hasPreference = typeof mql.matches === 'boolean';
    if (hasPreference) {
      return mql.matches ? 'dark' : 'light';
    }
  };

  const storeUserSetPreference = (preference: string) => {
    // TODO use navigator.storage instead
    localStorage.setItem('theme', preference);
  };
  const getUserSetPreference = () => {
    return localStorage.getItem('theme');
  };

  useEffect(() => {
    const userSetPreference = getUserSetPreference();
    if (userSetPreference !== null) {
      setIsDarkTheme(userSetPreference === 'dark');
    } else {
      const mediaQueryPreference = getMediaQueryPreference();
      setIsDarkTheme(mediaQueryPreference === 'dark');
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkTheme !== undefined) {
      if (isDarkTheme) {
        root.setAttribute('data-theme', 'dark');
        storeUserSetPreference('dark');
        document
          .querySelector('meta[name="theme-color"]')
          .setAttribute('content', '#000000');
      } else {
        root.removeAttribute('data-theme');
        storeUserSetPreference('light');
        document
          .querySelector('meta[name="theme-color"]')
          .setAttribute('content', '#f7f7f7');
      }
    }
  }, [isDarkTheme]);

  return (
    <DarkModeContext.Provider value={{ handleSetIsDarkTheme, isDarkTheme }}>
      {children}
    </DarkModeContext.Provider>
  );
}
