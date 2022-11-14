import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from './src/assets/styles/theme';
import Navigation from './src/routes';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Navigation />
    </ThemeProvider>
  );
}