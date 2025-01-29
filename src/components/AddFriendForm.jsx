import React, { useState } from "react";

export default function AddFriendForm({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc");

  function handleSubmit(e) {
    e.preventDefault();
    let id = Math.floor(Math.random() * 90000) + 10000;
    if (name && image) {
      onAddFriend(id, name, `${image}?u=${id}`);
      setName("");
      setImage("https://i.pravatar.cc");
    }
  }

  return (
    <form className="form-add-friend" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="friend_name">Friend Name</label>
      <input
        type="text"
        name="friend_name"
        id="friend_name"
        className="focus:outline-offset-0 focus:ring-0"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="image_url">Image URL</label>
      <input
        type="text"
        name="image_url"
        id="image_url"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="focus:outline-offset-0 focus:ring-0"
      />
      <button className="button text-xl" type="submit">
        Add
      </button>
    </form>
  );
}
