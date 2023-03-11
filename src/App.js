import './Styling/App.css';
import Header from './Components/Header';
import NotificationsPage from './Components/NotificationsData';

function App() {
  return (
    <div className="App">
      <div className='page'>
        <Header />
        <NotificationsPage />
      </div>
    </div>
  );
}

export default App;
