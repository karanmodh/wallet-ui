import { Wallet } from "./Wallet";

export const WalletPage = () => {
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