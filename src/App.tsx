import './App.css';
import Header from './features/repo_search/Header';
import { Wallet } from './features/wallet/components/Wallet';
import { WalletCreateForm } from './features/wallet/components/WalletCreateForm';
import { WalletList } from './features/wallet/components/WalletListCard';

function App() {
  const transactions = [
    {
      "amount": 2000,
      "type": false
    },
    {
      "amount": 7000,
      "type": true
    }
  ];

  return (
    <div className="App">
      <Header text="Wallet Service" />
      <hr/>

      <WalletCreateForm />
      <WalletList />

      <hr />

      <Header text="Wallet Service" />
      <hr/>
      <Wallet name="Karan Modh" amount={5000} transactions={transactions}/>
    </div>
  );
}

export default App;
