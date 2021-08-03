import './App.css';
import Confirmation from './components/Confirmation/Confirmation';
import Header from './components/Header/Header';
import Registration from './components/Registration/Registration';
import Success from './components/Success/Success';

const App = () => {
  return (
    <div className="App">
        <Header />
        <div className='form'>
          {/* <Registration /> */}
          <Confirmation />
          {/* <Success /> */}
        </div>
        
    </div>
  );
}

export default App;
