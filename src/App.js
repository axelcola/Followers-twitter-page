import logo from "./logo.svg";
import "./App.css";
import UserCard from "./components/userCard";

function App() {
  return (
    <div className="App">
      <h1>hola</h1>
      <div className="users-section">
        <UserCard />
      </div>
    </div>
  );
}

export default App;
