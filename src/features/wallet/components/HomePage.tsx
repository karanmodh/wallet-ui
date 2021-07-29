import { WalletCreateForm } from './WalletCreateForm';
import { WalletList } from './WalletListCard';

export const HomePage = () => {
    return (
      <div>
        <WalletCreateForm />
        <WalletList />
      </div>
    )
}