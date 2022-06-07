import UserCard from "./userCard";
import GetUser from "./getUsers";
const UserList = () => {
  const { list } = GetUser();

  return list.map((item) => (
    <UserCard
      img={item.picture.medium}
      first={item.name.first}
      last={item.name.last}
      description={item.location.timezone.description}
    />
  ));
};
export default UserList;
