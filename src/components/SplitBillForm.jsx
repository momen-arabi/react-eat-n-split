import React, { useState } from "react";

export default function SplitBillForm({ selectedFriend, friends }) {
  let currFriend = friends.find((friend) => friend.id === selectedFriend);
  const { id, name, image, balance } = currFriend;

  return (
    <form className="form-split-bill">
      <h2 className="font-bold">Split a bill with {name}</h2>
      <label htmlFor="bill_value">Bill Value</label>
      <input type="number" name="bill_value" id="bill_value" className="focus:outline-offset-0 focus:ring-0" />
      <label htmlFor="your_expense">Your Expense</label>
      <input type="number" name="your_expense" id="your_expense" className="focus:outline-offset-0 focus:ring-0" />
      <label htmlFor="friend_expense">{name} Expense</label>
      <input type="number" name="friend_expense" id="friend_expense" className="focus:outline-offset-0 focus:ring-0 read-only:bg-gray-200" readOnly />
      <label htmlFor="who_pays">Who is paying the bill</label>
      <select id="who_pays" className="focus:outline-offset-0 focus:ring-0">
        <option value="you">You</option>
        <option value={name}>{name}</option>
      </select>
      <button className="button text-xl">Split Bill</button>
    </form>
  );
}
