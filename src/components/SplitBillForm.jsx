import React, { useState } from "react";
import Select from "react-select";

export default function SplitBillForm({ selectedFriend, friends, onUpdateFriendBalance, onToggleSplitForm }) {
  let currFriend = friends.find((friend) => friend.id === selectedFriend);
  const { id, name, balance } = currFriend;

  const [billAmt, setBillAmt] = useState("");
  const [yourExp, setYourExp] = useState("");
  const [friendExp, setFriendExp] = useState("");
  const [whoPays, setWhoPays] = useState("you");

  const paymentOptions = [
    { value: "you", label: "You" },
    { value: name, label: name },
  ];

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "#ff922b" // dark orange
        : state.isFocused
        ? "#fff7ed"
        : "white", // light orange
      color: state.isSelected ? "#343a40" : "#334155",
      cursor: "pointer",
    }),
    control: (provided, state) => ({
      ...provided,
      borderColor: state.isFocused ? "#fb923c" : "#e2e8f0", // orange-400 when focused
      boxShadow: state.isFocused ? "0 0 0 1px #fb923c" : "none",
      "&:hover": {
        borderColor: "#fb923c", // orange-400
      },
    }),
    menu: (provided) => ({
      ...provided,
      borderColor: "#fb923c", // orange-400
    }),
  };

  function handleChange(total, your) {
    setFriendExp(+billAmt === 0 ? "" : +total - +your);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let friendBalance = whoPays === "you" ? balance + friendExp : balance - yourExp;
    onUpdateFriendBalance(id, friendBalance);
    onToggleSplitForm(id);
    setBillAmt("");
    setYourExp("");
    setFriendExp("");
    setWhoPays("you");
  }

  return (
    <form className="form-split-bill" onSubmit={(e) => handleSubmit(e)}>
      <h2 className="py-0 my-0">
        Split a Bill with <span className="font-extrabold">{name}</span>
      </h2>
      <hr className="divider h-px border-0 dark:bg-gray-700" />
      <label htmlFor="bill_value">Bill Value</label>
      <input
        type="number"
        name="bill_value"
        id="bill_value"
        className={`focus:outline-offset-0 focus:ring-0 read-only:bg-gray-200 ${billAmt === 0 && "text-gray-400"}`}
        value={billAmt}
        onChange={(e) => {
          if (+e.target.value >= 0) {
            setBillAmt(+e.target.value);
            handleChange(e.target.value, yourExp);
          }
        }}
      />
      <label htmlFor="your_expense">Your Expense</label>
      <input
        type="number"
        name="your_expense"
        id="your_expense"
        className={`focus:outline-offset-0 focus:ring-0 read-only:bg-gray-200 ${yourExp === 0 && "text-gray-400"}`}
        value={yourExp}
        onChange={(e) => {
          if (+e.target.value >= 0 && +e.target.value <= billAmt) {
            setYourExp(+e.target.value);
            handleChange(billAmt, e.target.value);
          }
        }}
      />
      <label htmlFor="friend_expense">{name}'s Expense</label>
      <input
        type="number"
        name="friend_expense"
        id="friend_expense"
        className={`focus:outline-offset-0 focus:ring-0 read-only:bg-gray-200 ${friendExp === 0 && "text-gray-400"}`}
        value={friendExp}
        readOnly
      />
      <label htmlFor="who_pays">Who is paying the bill</label>
      <Select
        id="who_pays"
        options={paymentOptions}
        value={paymentOptions.find((option) => option.value === whoPays)}
        onChange={(selectedOption) => setWhoPays(selectedOption.value)}
        className="basic-select"
        classNamePrefix="select"
        styles={customStyles}
      />
      <button className="button text-xl">Split Bill</button>
    </form>
  );
}
