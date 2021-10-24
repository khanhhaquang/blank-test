import { BaseService } from './infrastructure/BaseService';

/**
 * The transaction object
 * Value is of type `number` for simplification
 */
export interface ITransaction {
  id: number;
  to: string;
  from: string;
  value: number;
  createdAt: string;
}

export interface ITransactionsServiceState {
  transactions: Array<ITransaction>;
}

/**
 * TransacionsService class
 * TODO: Complete the addTransaction and the getListOfTransactions methods
 */
class TransactionsService extends BaseService<ITransactionsServiceState> {
  constructor(initialState: ITransactionsServiceState) {
    super(
      initialState || {
        transactions: []
      }
    );
  }

  /**
   * It adds a transaction to the list
   * TODO: Complete addTransaction code inside the Promise resolve function
   */
  public async addTransaction(newTransaction: ITransaction): Promise<ITransaction> {
    return new Promise<ITransaction>((resolve) => {
      setTimeout(() => {
        resolve(newTransaction);
      }, 300);
    });
  }

  /**
   * It returns the list of transactions
   * TODO: Return the list via the promise resolve function
   */
  public async getListOfTransactions(): Promise<Array<ITransaction>> {
    return new Promise<Array<ITransaction>>((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            to: 'abc',
            from: 'xyz',
            value: 1,
            createdAt: 'Sun Oct 24 2021 12:20:44 GMT+0700 (Indochina Time)'
          },
          {
            id: 2,
            to: 'abc',
            from: 'xyz',
            value: 1,
            createdAt: 'Sun Oct 24 2021 12:20:44 GMT+0700 (Indochina Time)'
          }
        ]);
      }, 300);
    });
  }
}

export default new TransactionsService({ transactions: [] });
