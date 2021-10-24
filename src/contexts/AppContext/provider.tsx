import { createContext, useContext, useReducer } from 'react';
import { ITransaction } from 'services/TransactionsService';
import reducer from './reducer';
import actions from './actions';

export interface IAppState {
  transactions: Array<ITransaction>;
}

export const initAppState: IAppState = {
  transactions: []
};

type ContextType = {
  state: IAppState;
  addTransaction: (transaction: ITransaction) => void;
  setState: (state: IAppState) => void;
};

const AppContext: React.Context<ContextType> = createContext<ContextType>({
  state: initAppState,
  setState: () => {},
  addTransaction: () => {}
});

const AppProvider = (props: any) => {
  const [state, dispatch] = useReducer(reducer, initAppState);

  // Set app state
  const setState = (newState: IAppState) => {
    dispatch({
      type: actions.SET_STATE,
      payload: newState
    });
  };

  // TODO: Complete the addTransaction method
  const addTransaction = (transaction: ITransaction) => {
    dispatch({
      type: actions.SET_TRANSACTIONS,
      payload: [transaction, ...state.transactions]
    });
  };

  return (
    <AppContext.Provider
      value={{
        state,
        setState,
        addTransaction
      }}>
      {props.children}
    </AppContext.Provider>
  );
};

const useApp = (): ContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
};

export { AppProvider, useApp };
