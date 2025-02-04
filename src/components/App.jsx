import { useState } from "react";
import Sidebar from "./Sidebar";
import SplitBillForm from "./SplitBillForm";

function App() {
  const initialFriends = [
    {
      id: Math.floor(Math.random() * 90000) + 10000,
      name: "Clark",
      image: `https://i.pravatar.cc?u=${Math.floor(Math.random() * 90000) + 10000}`,
      balance: -7,
    },
    {
      id: Math.floor(Math.random() * 90000) + 10000,
      name: "Sarah",
      image: `https://i.pravatar.cc?u=${Math.floor(Math.random() * 90000) + 10000}`,
      balance: 20,
    },
    {
      id: Math.floor(Math.random() * 90000) + 10000,
      name: "Anthony",
      image: `https://i.pravatar.cc?u=${Math.floor(Math.random() * 90000) + 10000}`,
      balance: 0,
    },
  ];

  const [friends, setFriends] = useState(initialFriends);
  const [toggleSplitForm, setToggleSplitForm] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function onAddFriend(id, name, image) {
    let newFriend = { id, name, image, balance: 0 };
    setFriends((friends) => [...friends, newFriend]);
  }

  function onToggleSplitForm(id) {
    setToggleSplitForm((toggle) => (id === selectedFriend || !toggle ? !toggle : toggle));
  }

  function onSelectFriend(id) {
    setSelectedFriend(id);
  }

  function onUpdateFriendBalance(id, newBalance) {
    setFriends(
      friends.map((friend) => {
        return {
          ...friend,
          balance: id === friend.id ? newBalance : friend.balance,
        };
      })
    );
    console.log("Updated Friends Array", friends);
  }

  return (
    <div className="app p-20">
      <Sidebar
        friends={friends}
        onAddFriend={onAddFriend}
        onToggleSplitForm={onToggleSplitForm}
        onSelectFriend={onSelectFriend}
        selectedFriend={selectedFriend}
        toggleSplitForm={toggleSplitForm}
      />
      {toggleSplitForm ? (
        <SplitBillForm
          key={selectedFriend}
          selectedFriend={selectedFriend}
          friends={friends}
          onUpdateFriendBalance={onUpdateFriendBalance}
          onToggleSplitForm={onToggleSplitForm}
        />
      ) : null}
    </div>
  );
}

export default App;
