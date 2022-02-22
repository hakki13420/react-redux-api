import { Provider } from 'react-redux';
import './App.css';
import Pokemones from './components/Pokemones';
import { store } from './redux/store';

function App() {
  return (    
    <Provider store={store}>
      <Pokemones/>
    </Provider>    
  );
}

export default App;
