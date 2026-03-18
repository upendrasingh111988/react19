import logo from './logo.svg';
import './App.css';
import CreateUser from './component/CreateUser';
import UsersList from './component/UsersList';

function App() {
  return (
    <div className="App">
        <h1>hello world</h1>  
        <CreateUser></CreateUser>
        <UsersList></UsersList>
    </div>

  );
}

export default App;
