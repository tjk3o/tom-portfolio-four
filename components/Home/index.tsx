import useDarkMode from '../../hooks/useDarkMode';
import { HomeWrapper } from './styles';
export default function Home() {
  const { handleSetIsDarkTheme, isDarkTheme } = useDarkMode();
  return (
    <HomeWrapper>
      <h1>Hello world</h1>
      <button onClick={handleSetIsDarkTheme}>Toggle dark mode</button>
    </HomeWrapper>
  );
}
