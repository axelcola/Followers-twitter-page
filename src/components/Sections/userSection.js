import FollowersHeader from "../FollowersHeader";
import UserList from "../userList";

export default function UserSection() {
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
