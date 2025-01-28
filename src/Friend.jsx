import React from "react";

export default function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3 className="font-bold">{friend.name}</h3>
      {friend.balance > 0 ? (
        <p className="green">
          {friend.name} owes you {friend.balance}€.
        </p>
      ) : friend.balance === 0 ? (
        <p>You and {friend.name} are even.</p>
      ) : (
        <p className="red">
          You owe {friend.name} {friend.balance * -1}€.
        </p>
      )}
      <button className="button text-xl">Select</button>
    </li>
  );
}
