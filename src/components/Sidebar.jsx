import React, { useState } from "react";
import Friend from "./Friend";
import AddFriendForm from "./AddFriendForm";

export default function Sidebar({ friends, onAddFriend, onToggleSplitForm, onSelectFriend, selectedFriend, toggleSplitForm }) {
  const [toggleForm, setToggleForm] = useState(false);

  function onToggleFriendForm() {
    setToggleForm((prev) => !prev);
  }

  return (
    <div className="sidebar">
      <ul>
        {friends.map((friend) => (
          <Friend
            key={friend.id}
            friend={friend}
            onToggleSplitForm={onToggleSplitForm}
            onSelectFriend={onSelectFriend}
            selectedFriend={selectedFriend}
            toggleSplitForm={toggleSplitForm}
          />
        ))}
      </ul>
      {toggleForm ? <AddFriendForm onAddFriend={onAddFriend} onToggleFriendForm={onToggleFriendForm} /> : null}
      <button
        className="button text-xl"
        onClick={() => {
          setToggleForm((prev) => !prev);
        }}
      >
        {toggleForm ? "Close" : "Add friend"}
      </button>
    </div>
  );
}
