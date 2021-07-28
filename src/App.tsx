import './App.css';
import Header from './features/repo_search/Header';
import { WalletCreateForm } from './features/wallet/components/WalletCreateForm';

function App() {
  return (
    <div className="App">
      <Header text="Wallet Service" />
      <hr/>

      <WalletCreateForm />

    </div>
  );
}

export default App;
