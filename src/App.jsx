import Sidebar from "./Sidebar";
import SplitBillForm from "./SplitBillForm";

function App() {
  const initialFriends = [
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc?u=499476",
      balance: 0,
    },
  ];

  return (
    <>
      <h1 class="mb-20 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-8xl text-center">
        <span class="text-transparent bg-clip-text bg-gradient-to-r to-orange-700 from-orange-400">Eat'n Split</span>
      </h1>
      <div className="app">
        <Sidebar initialFriends={initialFriends} />
        <SplitBillForm />
      </div>
    </>
  );
}

export default App;
