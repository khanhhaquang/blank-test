import { useApp } from 'contexts/AppContext';
import { useState } from 'react';
import TransactionsService from 'services/TransactionsService';
import { YOUR_ADDRESS } from '../constants';

type TProps = {
  balance: number;
  setBalance: React.Dispatch<React.SetStateAction<number>>;
  onPageChange: React.Dispatch<React.SetStateAction<number>>;
};

export const WithdrawSection: React.FC<TProps> = ({
  onPageChange,
  balance,
  setBalance
}: TProps) => {
  const { state, addTransaction } = useApp();
  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState<string>('');
  const [amountError, setAmountError] = useState<string>('');
  const [recipient, setRecipient] = useState<string>('');
  const [recipientError, setRecipientError] = useState<string>('');

  const handleRecipientChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRecipientError('');
    setRecipient(e.target.value);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmountError('');
    setAmount(e.target.value);
  };

  const handleSubmit = async () => {
    if (!recipient) return setRecipientError('Invalid recipient');
    if (!amount || +amount > balance) return setAmountError('Invalid amount');

    setIsLoading(true);
    const transactionService = new TransactionsService({ transactions: [] });
    const data = await transactionService.addTransaction({
      id: state.transactions.length + 1,
      from: YOUR_ADDRESS,
      to: recipient,
      value: +amount,
      createdAt: new Date().toString()
    });

    if (data) {
      setIsLoading(false);
      setBalance(balance - +amount);
      addTransaction(data);
      onPageChange(0);
    }
  };

  return (
    <section className="withdraw">
      <form className="input-section">
        <label htmlFor="recipient">
          Enter recipient address
          <input
            id="recipient"
            value={recipient}
            onChange={handleRecipientChange}
            placeholder="Recipient address..."></input>
          {recipientError && <span className="error-txt">{recipientError}</span>}
        </label>

        <label htmlFor="amount">
          Enter amount to withdraw
          <input
            id="amount"
            value={amount}
            onChange={handleAmountChange}
            type="number"
            placeholder="Amount..."></input>
          {amountError && <span className="error-txt">{amountError}</span>}
        </label>

        <button type="button" onClick={handleSubmit} id={'submit'}>
          {isLoading ? 'Submitting' : 'Submit'}
        </button>
      </form>
    </section>
  );
};

export default WithdrawSection;
