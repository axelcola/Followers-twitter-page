import "./App.css";
import UserSection from "./userSection";
import SearchSection from "./components/searchSection";

function App() {
  return (
    <div className="App">
      <div className="nav-section"></div>
      <div className="users-section">
        <UserSection />
      </div>
      <div className="search-section">
        <SearchSection />
      </div>
    </div>
  );
}

export default App;
