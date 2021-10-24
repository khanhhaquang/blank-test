import { useApp } from 'contexts/AppContext';
import { useEffect, useState } from 'react';
import TransactionsService from 'services/TransactionsService';

const useFetchTransactions = () => {
  const { state, setState } = useApp();
  const [isLoading, setLoading] = useState<boolean>(false);
  const fetchList = async () => {
    setLoading(true);
    const data = await TransactionsService.getListOfTransactions();
    if (data) {
      setState({
        transactions: data
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    if (state.transactions.length) return;
    fetchList();
  }, []);

  return [isLoading];
};

export default useFetchTransactions;
