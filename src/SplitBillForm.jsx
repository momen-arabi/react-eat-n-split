import React, { useState } from "react";
import { Listbox } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

export default function SplitBillForm() {
  const [selected, setSelected] = useState({ value: "you", label: "You" });
  const options = [
    { value: "you", label: "You" },
    { value: "friend", label: "Friend" },
  ];

  return (
    <form className="form-split-bill">
      <h2 className="font-bold">Split a bill with Friend</h2>
      <label htmlFor="bill_value">Bill Value</label>
      <input type="number" name="bill_value" id="bill_value" className="focus:outline-offset-0 focus:ring-0" />
      <label htmlFor="your_expense">Your Expense</label>
      <input type="number" name="your_expense" id="your_expense" className="focus:outline-offset-0 focus:ring-0" />
      <label htmlFor="friend_expense">Friend Expense</label>
      <input type="number" name="friend_expense" id="friend_expense" className="focus:outline-offset-0 focus:ring-0 read-only:bg-gray-200" readOnly />
      <label htmlFor="who_pays">Who is paying the bill</label>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <Listbox.Button id="who-pays" className="relative w-full py-2 px-3 text-left bg-white border rounded-lg cursor-pointer focus:outline-none">
            <span>{selected.label}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Listbox.Options className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg">
            {options.map((option) => (
              <Listbox.Option
                key={option.value}
                value={option}
                className={({ active }) =>
                  `relative cursor-pointer select-none py-2 px-3 ${active ? "bg-orange-100 text-orange-900" : "text-gray-900"}`
                }
              >
                {option.label}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
      <button className="button text-xl">Split Bill</button>
    </form>
  );
}
