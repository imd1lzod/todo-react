import { useState } from "react";
import UsersPage from "./pages/usersPage";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UsersPage></UsersPage>
      {/* <div className="">
        <form action="">
          <label htmlFor="">firstname:</label>
          <input type="text" />
          <br />
          <label htmlFor="">lastname:</label>
          <input type="text" />
          <br />
          <label htmlFor="">age:</label>
          <input type="number" />
          <br />
          <label htmlFor="">location:</label>
          <input type="text" />
          <br />
          <label htmlFor="">gender:</label>
          <select name="" id="">
            <option value="">male</option>
            <option value="">female</option>
          </select>
        </form>
      </div> */}
    </>
  );
}

export default App;
