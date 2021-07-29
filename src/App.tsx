import './App.css';
import { useAppSelector } from './app/hooks';
import Header from './features/wallet/components/Header';
import { getPage } from './features/wallet/actions/walletAction';
import { HomePage } from './features/wallet/components/HomePage';
import { Wallet } from './features/wallet/components/Wallet';

function App() {

  const onWalletPage = useAppSelector(getPage);


  return (
    <div className="App">
      <Header text="Wallet Service" />
      <hr/>
      {onWalletPage?<Wallet />:<HomePage />}
    </div>
  );
}

export default App;
