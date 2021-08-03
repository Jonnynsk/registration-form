import './App.css';
import Header from './components/Header/Header';
import Registration from './components/Registration/Registration';

const App = () => {
  return (
    <div className="App">
        <Header />
        <div className='form'>
          <Registration />
        </div>
        
    </div>
  );
}

export default App;
