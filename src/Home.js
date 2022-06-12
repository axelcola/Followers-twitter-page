import HomeHeader from "./components/HomeHeader";
import UserList from "./components/userList";
const Home = () => {
  return (
    <>
      <div className="head">
        <HomeHeader />
      </div>
      <div className="new-twit"></div>
      <div className="list home">
        <UserList />
      </div>
    </>
  );
};
export default Home;
