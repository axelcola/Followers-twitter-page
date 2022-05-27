import logo from "./logo.svg";
import "./App.css";
import UserList from "./components/userList";

function App() {
  return (
    <div className="App">
      <div className="users-section">
        <UserList />
      </div>
    </div>
  );
}

export default App;
