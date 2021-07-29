import './App.css';
import Header from './features/repo_search/Header';
import { HomePage } from './features/wallet/components/HomePage';
import { WalletPage } from './features/wallet/components/WalletPage';

function App() {

  const onWalletPage = true;

  return (
    <div className="App">
      <Header text="Wallet Service" />
      <hr/>
      {onWalletPage?<WalletPage />:<HomePage />}
    </div>
  );
}

export default App;
