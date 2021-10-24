import { ITransaction } from 'services/TransactionsService';
import { IAppState } from './provider';

enum Actions {
  SET_TRANSACTIONS = 'SET_TRANSACTIONS',
  SET_STATE = 'SET_STATE'
}

export interface SetTransactionsAction {
  type: Actions.SET_TRANSACTIONS;
  payload: ITransaction[];
}

export interface SetStateAction {
  type: Actions.SET_STATE;
  payload: Partial<IAppState>;
}

export default Actions;
