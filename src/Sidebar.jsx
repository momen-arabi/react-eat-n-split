import React from "react";
import Friend from "./Friend";
import AddFriendForm from "./AddFriendForm";

export default function Sidebar({ initialFriends }) {
  return (
    <div className="sidebar">
      <ul>
        {initialFriends.map((friend) => (
          <Friend key={friend.id} friend={friend} />
        ))}
      </ul>
      {/* <button className="button text-xl">Add friend</button> */}
      <AddFriendForm />
    </div>
  );
}
