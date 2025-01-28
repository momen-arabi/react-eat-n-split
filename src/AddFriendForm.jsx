import React from "react";

export default function AddFriendForm() {
  return (
    <form className="form-add-friend">
      <label htmlFor="friend_name">Friend Name</label>
      <input type="text" name="friend_name" id="friend_name" className="focus:outline-offset-0 focus:ring-0" />
      <label htmlFor="image_url">Image URL</label>
      <input type="text" name="image_url" id="image_url" value="https://i.pravatar.cc" className="focus:outline-offset-0 focus:ring-0" />
      <button className="button text-xl">Add</button>
    </form>
  );
}
