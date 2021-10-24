import { AppProvider } from 'contexts/AppContext';
import { Home } from './screens';

const App = () => {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
};

export default App;
