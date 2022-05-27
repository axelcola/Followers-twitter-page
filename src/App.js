import logo from "./logo.svg";
import "./App.css";
import UserCard from "./components/userCard";

function App() {
  return (
    <div className="App">
      <div className="users-section">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  );
}

export default App;
