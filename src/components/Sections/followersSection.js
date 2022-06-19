import FollowersHeader from "../FollowersHeader";
import UserList from "../userList";

export default function FollowersSection() {
  return (
    <>
      <div className="head">
        <FollowersHeader />
      </div>
      <div className="list follow-section">
        <UserList />
      </div>
    </>
  );
}
