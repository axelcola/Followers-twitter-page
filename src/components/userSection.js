import Head from "./Head";
import UserList from "./userList";

export default function UserSection() {
  return (
    <>
      <div className="head">
        <Head />
      </div>
      <div className="list">
        <UserList />
      </div>
    </>
  );
}
