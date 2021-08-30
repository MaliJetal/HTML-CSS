import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <nav className="navbar">
          <ul className="navigation">
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
      <section>
        <h1> Welcome to Coding World</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
          error ratione doloribus sed dolorum, ipsum cumque reprehenderit
          dignissimos architecto veniam optio sint aliquam consectetur corrupti
          vero similique velit. Possimus eum consequatur delectus quia magni.
        </p>
      </section>
      {/* <header className="page-header App-header">
        <h1>Header Semantic Tag</h1>
      </header> */}
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
      <div>
        <div class="indexBox" id="box-1"></div>
        <div class="indexBox" id="box-2"></div>
        <div class="indexBox" id="box-3"></div>
        <div class="indexBox" id="box-4"></div>
      </div>
      <div className="flexContainer">
        <div className="item" id="item-1">
          First Box
        </div>
        <div className="item" id="item-2">
          Second Box
        </div>
        <div className="item" id="item-3">
          Third Box
        </div>
      </div>
      <div className="unitsContainer">
        <h1 className="unitsHeading" id="unitsH1">
          This is Heading 1
        </h1>
        <h1 className="unitsHeading" id="unitsH2">
          This is Heading 2
        </h1>
        <h1 className="unitsHeading" id="unitsH3">
          This is Heading 3
        </h1>
      </div>
      <div class="mediaBox" id="boxm1">
        {" "}
        Windows
      </div>
      <div class="mediaBox" id="boxm2">
        {" "}
        MacOS
      </div>
      <div class="mediaBox" id="boxm3">
        {" "}
        Kali Linux
      </div>
      <div class="mediaBox" id="boxm4">
        Android
      </div>
      <h1>This is more on selectors</h1>
      <div class="container">
        <div class="row">
          <ul>
            <li class="item">
              <p> this is another paragraph inside li</p>
            </li>
            <li>this will not get affected</li>
            <p>this is a para inside ul</p>
          </ul>
          <p>This is a paragraph</p>
        </div>
        <p>This is another paragraph</p>
      </div>
      <p>this is outermost paragraph</p>
      <div className="nthContainer">
        <form action="#" className="nthForm">
          Enter your Name
          <input type="text" name="name" />
          Enter your Email
          <input type="email" name="email" />
          Submit
          <input type="submit" name="submit" />
        </form>
        <ul>
          <li class="item" id="item-1">
            Item1
          </li>
          <li class="item" id="item-2">
            Item2
          </li>
          <li class="item" id="item-3">
            Item3
          </li>
          <li class="item" id="item-4">
            Item4
          </li>
          <li class="item" id="item-5">
            Item5
          </li>
          <li class="item" id="item-6">
            Item6
          </li>
          <li class="item" id="item-7">
            Item7
          </li>
          <li class="item" id="item-8">
            Item8
          </li>
          <li class="item" id="item-9">
            Item9
          </li>
          <li class="item" id="item-10">
            Item10
          </li>
        </ul>
      </div>
      <div className="cardcontainer">
        <div className="card" id="card-1">
          <h2>This is C++ Course</h2>
          <p>
            I have started C++ course which does not mean that we will stop this
            course. We will continue this course to completion. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Cumque laudantium,
            doloremque enim repellat impedit autem nostrum facilis odio omnis
            optio voluptates beatae mollitia temporibus voluptas consequuntur
            harum animi totam molestiae labore architecto ratione qui!
          </p>
        </div>
        <div class="card" id="card-2">
          <h2>This is HTML Course</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            placeat doloribus molestiae velit ipsum, aliquam officia ratione
            excepturi in officiis, incidunt quo est pariatur tempore ex,
            distinctio nostrum! Sint non doloribus rem obcaecati sunt.
          </p>
        </div>
        <div class="card" id="card-3">
          <h2>This is CSS Course</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In tenetur
            molestiae, placeat quas perferendis quibusdam atque omnis distinctio
            obcaecati dolor, tempora unde deserunt iure nam. Iste labore eveniet
            esse deserunt?
          </p>
        </div>
      </div>
      <div className="varContainer">
        <div className="varBox"></div>
        <div className="varBox"></div>
        <div className="varBox"></div>
      </div>
      <div className="aniContainer">
        <div className="aniBox">This is a box.</div>
      </div>
    </div>
  );
}

export default App;
