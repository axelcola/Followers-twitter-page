import "./App.css";
import FollowersSection from "./components/Sections/followersSection";
import SearchSection from "./components/Sections/searchSection";
import NavSection from "./components/Sections/navSection";
import Home from "./Home";
import { Route, Switch } from "wouter";
function App() {
  return (
    <div className="App">
      <div className="nav-section">
        <NavSection />
      </div>
      <div className="users-section">
        <Switch>
          <Route
            path="/Followers-twitter-page/profile/followers"
            component={FollowersSection}
          />
          <Route
            path="/Followers-twitter-page/profile/following"
            component={FollowersSection}
          />
          <Route path="/Followers-twitter-page/home" component={Home} />
          <Route path="/Followers-twitter-page" component={Home} />
        </Switch>
      </div>
      <div className="search-section">
        <SearchSection />
      </div>
    </div>
  );
}

export default App;
