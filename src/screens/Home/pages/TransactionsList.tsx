import { useApp } from 'contexts/AppContext';
import { ITransaction } from 'services/TransactionsService';
import { YOUR_ADDRESS } from '../constants';
import { useFetchTransactions } from '../hooks/';

type TProps = {
  balance: number;
  onPageChange: React.Dispatch<React.SetStateAction<number>>;
};

const TransactionsList: React.FC<TProps> = ({ balance, onPageChange }: TProps) => {
  const { state: appState } = useApp();
  const [isFetching] = useFetchTransactions();

  return (
    <div className="transactions">
      <header className="header">
        <span>Address: {YOUR_ADDRESS}</span>
        <span>{balance} ETH</span>
        <button onClick={() => onPageChange(2)}>Send</button>
      </header>

      <section className="list">
        {isFetching && 'Loading...'}
        {!isFetching &&
          appState.transactions.map((t: ITransaction) => (
            <div className="item" key={t.id}>
              <span>Send Ether</span>
              <span>Amount: {t.value}</span>
              <span>To: {t.to}</span>
              <time>Time: {t.createdAt}</time>
            </div>
          ))}
      </section>
    </div>
  );
};

export default TransactionsList;
