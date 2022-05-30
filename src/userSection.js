import Head from "./components/Head";
import UserList from "./components/userList";
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
