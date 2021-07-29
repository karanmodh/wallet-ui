import './App.css';
import Header from './features/repo_search/Header';
import { Wallet } from './features/wallet/components/Wallet';
import { WalletCreateForm } from './features/wallet/components/WalletCreateForm';
import { WalletList } from './features/wallet/components/WalletListCard';

const WalletPage = () => {
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
    <div>
      <Wallet name="Karan Modh" amount={5000} transactions={transactions}/>
    </div>
  )
}

const HomePage = () => {
  return (
    <div>
      <WalletCreateForm />
      <WalletList />
    </div>
  )
}

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
