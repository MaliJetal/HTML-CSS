import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <h2>This is HTML Forms</h2>
      <form action="backend.js">
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" name="myName" id="name" />
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
          <label htmlFor="car" name="car">
            Car
          </label>
          <select name="myCar" id="car">
            <option value="ind">Indica</option>
            <option value="swft" selected>
              Swift
            </option>
          </select>
        </div>
        <div>
          Write about yourself:{" "}
          <textarea name="myText" cols="30" rows="10"></textarea>
        </div>
        <div>
          <input type="submit" value="Submit Now" />
          <input type="reset" value="Reset Now" />
        </div>
      </form>
      <br />
      {/* Inline Element */}
      <h2>Inline Element</h2>
      <span>Span</span>
      <a href="#">Anchor</a>
      <input type="text" />
      Input
      <img src="../public/logo192.png" alt="Image" />
      {/* Block Element */}
      <h2>Block Element</h2>
      <h3>Heading</h3>
      <p>Paragragh</p>
      <div>Division</div>
      {/* HTML Entities */}
      <p>My name is Jetal. &nbsp; I am a programmer.</p>
      <p>I want to write &lt;p&gt;</p>
      <p>Pound is written like &pound;</p>
      <p>Copyright is written like &copy;</p>
      <p>Empty Character is written like &#8203;</p>
    </div>
  );
}

export default App;
