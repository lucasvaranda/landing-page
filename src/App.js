import logo from './logo.svg';
import './App.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import LoginScreen from './components/Login/index';

function App() {
  return (
    <div className="App">
      <LoginScreen />
    </div>
  );
}

export default App;
