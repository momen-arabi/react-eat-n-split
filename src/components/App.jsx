import { useState } from "react";
import Sidebar from "./Sidebar";
import SplitBillForm from "./SplitBillForm";

function App() {
  const initialFriends = [
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc?u=499476",
      balance: 0,
    },
  ];

  const [friends, setFriends] = useState(initialFriends);
  const [toggleSplitForm, setToggleSplitForm] = useState(false);

  function onAddFriend(id, name, image) {
    let newFriend = { id, name, image, balance: 0 };
    setFriends((friends) => [...friends, newFriend]);
  }

  return (
    <div className="app p-20">
      <Sidebar friends={friends} onAddFriend={onAddFriend} />
      <SplitBillForm />
    </div>
  );
}

export default App;
