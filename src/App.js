import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import { Header } from 'semantic-ui-react';

function App() {
  const { onToogleButton, tg } = useTelegram()

  useEffect(() => {
    tg.ready();
  }, [])

  return (
    <div className="App">
      <Header />
      <button onClick={onToogleButton}>toggle</button>
    </div>
  );
}

export default App;
