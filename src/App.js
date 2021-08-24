import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <nav className="navbar">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <div className="search">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search this website"
              />
            </div>
          </ul>
        </nav>
      </header>
      <header className="page-header App-header">
        <h1>Header Semantic Tag</h1>
      </header>
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
      <img src={logo} alt="Image" style={{ height: "50px" }} />
      {/* Block Element */}
      <h2>Block Element</h2>
      <h3>Heading</h3>
      <p>Paragragh</p>
      <div>Division</div>
      {/* HTML Entities */}
      <p
        style={{
          fontFamily: "Oswald, sans-serif",
          fontSize: "30px",
          lineHeight: "1.3 em",
          fontWeight: "bold",
        }}
      >
        {" "}
        {/*px- 1/96th of an inch */}
        My name is Jetal. &nbsp; I am a programmer.
      </p>
      <p id="p1id">I want to write &lt;p&gt;</p>
      <p id="p2id">Pound is written like &pound;</p>
      <p>Copyright is written like &copy;</p>
      <p id="p3id">Empty Character is written like &#8203;</p>
      <p>
        Lorem ipsum <strong>dolor</strong> sit amet consectetur{" "}
        <em>adipisicing</em> elit. Recusandae, <sub>delectus</sub>{" "}
        <sup>natus </sup> eligendi assumenda <mark>possimus</mark> dolorum?
      </p>
      <div className="container">
        <h3>This is a Box Model Illustration</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
          volup emo tenetur rem adipisci maxime possimus sunt officiis eaque
          eveniet nihil optio est numquam? Voluptatem, quaerat?
        </p>
      </div>
      <div className="container">
        <div id="fruit" className="item">
          <h3>Fruits</h3>
          <p id="fruitpara" className="para">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit quis
            quibusdam reprehenderit sed rem dolor vitae dignissimos ab, veniam
            nisi aspernatur, nihil magni. Ad incidunt minus omnis suscipit neque
            consequuntur.
          </p>
        </div>
        <div id="vegetable" className="item">
          <h3>Vegetables</h3>
          <p id="vegepara" className="para">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit quis
            quibusdam reprehenderit sed rem dolor vitae dignissimos ab, veniam
            nisi aspernatur, nihil magni. Ad incidunt minus omnis suscipit neque
            consequuntur.
          </p>
        </div>
        <div id="herb" className="item">
          <h3>Herbs</h3>
          <p id="herbpara" className="para">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit quis
            quibusdam reprehenderit sed rem dolor vitae dignissimos ab, veniam
            nisi aspernatur, nihil magni. Ad incidunt minus omnis suscipit neque
            consequuntur.
          </p>
        </div>
      </div>
      <div className="container" id="cont1">
        <h3>Button Link Styles Explore</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
          ipsam nulla eaque delectus magni enim dolorum qui sit consectetur,
          doloremque corporis voluptas, sint natus illo commodi recusandae
          officiis pariatur a?
        </p>
        <a href="https://www.google.com" className="btn">
          Read More...
        </a>
        <button className="btn">Contact Us</button>
      </div>
      <div className="container">
        <div className="box">
          <h4 className="heading">Heading</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            harum ipsam aliquid deleniti, vitae labore cum laudantium a
            blanditiis est voluptates dolorum consequuntur. Aliquam corporis,
            fuga consectetur rerum molestias consequatur tempora natus sed
            laborum recusandae fugit harum soluta inventore enim. Aspernatur
            aperiam cum reprehenderit!
          </p>
        </div>
        <div className="box">
          <h4 className="heading">Heading</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            harum ipsam aliquid deleniti, vitae labore cum laudantium a
            blanditiis est voluptates dolorum consequuntur. Aliquam corporis,
            fuga consectetur rerum molestias consequatur tempora natus sed
            laborum recusandae fugit harum soluta inventore enim. Aspernatur
            aperiam cum reprehenderit!
          </p>
        </div>
        <div className="box">
          <h4 className="heading">Heading</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            harum ipsam aliquid deleniti, vitae labore cum laudantium a
            blanditiis est voluptates dolorum consequuntur. Aliquam corporis,
            fuga consectetur rerum molestias consequatur tempora natus sed
            laborum recusandae fugit harum soluta inventore enim. Aspernatur
            aperiam cum reprehenderit!
          </p>
        </div>
      </div>
      <div className="position-container">
        <box className="positionBox" id="box1">
          1
        </box>
        <box className="positionBox" id="box2">
          2
        </box>
        <box className="positionBox" id="box3">
          3
        </box>
        <box className="positionBox" id="box4">
          4
        </box>
      </div>
    </div>
  );
}

export default App;
