import FollowersHeader from "../components/FollowersHeader";
import UserList from "../components/userList";

export default function FollowingPage() {
  return (
    <>
      <div className="head">
        <FollowersHeader />
      </div>
      <div className="list">
        <UserList />
      </div>
    </>
  );
}
