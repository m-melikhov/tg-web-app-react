import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import { Header } from '.src/components/Header/Header.jsx';

function App() {
  const { onToogleButton, tg } = useTelegram()

  useEffect(() => {
    tg.ready();
  }, [])

  return (
    <div className="App">
      <Header />
      <button onClick={onToogleButton}>togcscgle</button>
    </div>
  );
}

export default App;
