import { useState } from 'react';
import './Home.scss';
import { Success, TransactionsList, WithdrawSection } from './pages';

const Home = () => {
  const [page, setPage] = useState<number>(1);
  const [balance, setBalance] = useState<number>(100);

  const renderPage = () => {
    switch (page) {
      case 1:
        return <TransactionsList balance={balance} onPageChange={setPage} />;
      case 2:
        return <WithdrawSection balance={balance} setBalance={setBalance} onPageChange={setPage} />;
      default:
        return <Success onPageChange={setPage} />;
    }
  };

  return <main className="home">{renderPage()}</main>;
};

export default Home;
