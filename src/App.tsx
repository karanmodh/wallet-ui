import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import Header from './features/wallet/components/Header';
import { fetchWallets, getPage } from './features/wallet/actions/walletAction';
import { HomePage } from './features/wallet/components/HomePage';
import { Wallet } from './features/wallet/components/Wallet';

function App() {
  
  const onWalletPage = useAppSelector(getPage);
  const dispatch = useAppDispatch();
  dispatch(fetchWallets());

  return (
    <div className="App">
      <Header text="Wallet Service" />
      <hr/>
      {onWalletPage?<Wallet />:<HomePage />}
    </div>
  );
}

export default App;
