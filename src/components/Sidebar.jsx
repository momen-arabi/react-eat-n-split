import React, { useState } from "react";
import Friend from "./Friend";
import AddFriendForm from "./AddFriendForm";
import { FaUserPlus, FaTimes } from "react-icons/fa";

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

      {toggleForm && <AddFriendForm onAddFriend={onAddFriend} onToggleFriendForm={onToggleFriendForm} />}

      <button
        className={`button text-xl w-full mt-4 flex items-center justify-center gap-2 bg-orange-500 hover:brightness-110 transition-all duration-200`}
        onClick={onToggleFriendForm}
      >
        {toggleForm ? (
          <>
            <FaTimes /> Close
          </>
        ) : (
          <>
            <FaUserPlus /> Add friend
          </>
        )}
      </button>
    </div>
  );
}
