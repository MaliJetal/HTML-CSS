import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <h2>This is HTML Forms</h2>
      <form action="backend.js">
        <div>
          Name: <input type="text" />
        </div>
        <div>
          Role: <input type="text" />
        </div>
        <div>
          Email: <input type="email" name="myEmail" />
        </div>
        <div>
          DOB: <input type="date" name="myDate" />
        </div>
        <div>
          Bonus: <input type="nmber" name="myBonus" />
        </div>
        <div>
          Are you eligible?: <input type="checkbox" name="myEligibility" />
        </div>
        <div>
          Gender: Male <input type="radio" name="myGender" /> Female{" "}
          <input type="radio" name="myGender" />
        </div>
        <div>
          <input type="submit" alue="Submit Now" />
        </div>
      </form>
    </div>
  );
}

export default App;
