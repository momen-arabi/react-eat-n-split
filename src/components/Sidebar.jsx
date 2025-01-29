import React, { useState } from "react";
import Friend from "./Friend";
import AddFriendForm from "./AddFriendForm";

export default function Sidebar({ friends, onAddFriend }) {
  const [toggleForm, setToggleForm] = useState(false);

  return (
    <div className="sidebar">
      <ul>
        {friends.map((friend) => (
          <Friend key={friend.id} friend={friend} />
        ))}
      </ul>
      {toggleForm ? <AddFriendForm onAddFriend={onAddFriend} /> : null}
      <button className="button text-xl" onClick={() => setToggleForm((prev) => !prev)}>
        {toggleForm ? "Close" : "Add friend"}
      </button>
    </div>
  );
}
