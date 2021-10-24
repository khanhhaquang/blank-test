import Actions, { SetStateAction, SetTransactionsAction } from './actions';
import { IAppState } from './provider';

type AppAction = SetTransactionsAction | SetStateAction;

const appReducer = (state: IAppState, action: AppAction): IAppState => {
  switch (action.type) {
    case Actions.SET_STATE:
      return {
        ...state,
        ...action.payload
      };
    case Actions.SET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload
      };
    default:
      return state;
  }
};

export default appReducer;
