import "./App.css";
import UserSection from "./components/Sections/userSection";
import SearchSection from "./components/Sections/searchSection";
import NavSection from "./components/Sections/navSection";
import Home from "./Home";
function App() {
  return (
    <div className="App">
      <div className="nav-section">
        <NavSection />
      </div>
      <div className="users-section">
        <Home />
      </div>
      <div className="search-section">
        <SearchSection />
      </div>
    </div>
  );
}

export default App;
