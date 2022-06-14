import HomeHeader from "./components/HomeHeader";
import NewTweetHeader from "./components/NewTweetHeader";
import UserList from "./components/userList";

import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="head">
        <HomeHeader />
      </div>
      <NewTweetHeader />
      <div className="list home">
        <UserList />
      </div>
    </>
  );
};
export default Home;
