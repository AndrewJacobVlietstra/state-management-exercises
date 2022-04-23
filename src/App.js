import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import CounterContext from "./context/counterContext";

import { useSelector } from "react-redux";

function App() {
  const userState = useSelector((state) => state.user);
  console.log(userState);

  return (
    <>
      <Header />
      {userState.isLoggedIn ? null : <Auth />}

      {userState.isLoggedIn ? (
        <>
          <UserProfile />
          <CounterContext>
            <Counter />
          </CounterContext>
        </>
      ) : null}
    </>
  );
}

export default App;
