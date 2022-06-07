import { useEffect, useState } from "react";

const GetUser = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUserList();
  }, []);

  const getUserList = async () => {
    setLoading(true);
    const data = await fetch("https://randomuser.me/api/?results=30");
    const users = await data.json();
    setList(users.results);
    setLoading(false);
  };
  return { list, loading };
};

export default GetUser;
