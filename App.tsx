import { StatusBar } from 'expo-status-bar';

import './global.css';

import { HomeScreen } from './components/HomeScreen';

export default function App() {
  return (
    <>
      <HomeScreen />
      <StatusBar style="dark" />
    </>
  );
}
