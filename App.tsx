import AppLoading from 'expo-app-loading';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from './src/assets/styles/theme';
import Navigation from './src/routes';
import { init } from './src/services/database';

export default function App() {
  const [dbInitialized, setDbInitialized] = useState(false)



  useEffect(() => {
    init().then(() => {
      setDbInitialized(true)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  if (!dbInitialized) return <AppLoading />

  return (
    <ThemeProvider theme={defaultTheme}>
      <Navigation />
    </ThemeProvider>
  );
}