import "./App.css";
import UserList from "./components/userList";
import Head from "./components/Head";
function App() {
  return (
    <div className="App">
      <div className="users-section">
        <div className="head">
          <Head />
        </div>
        <UserList />
      </div>
    </div>
  );
}

export default App;
