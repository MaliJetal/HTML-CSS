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
      <div className="tranContainer">
        <div id="tranBox">This is my Box.</div>
      </div>
      <div className="transContainer">
        <div className="transBox">This is my Box.</div>
      </div>
      <div className="girdContainer">
        <div className="gridItem">This is my Box.</div>
        <div className="gridItem">This is my Box.</div>
        <div className="gridItem">This is my Box.</div>
        <div className="gridItem">This is my Box.</div>
        <div className="gridItem">This is my Box.</div>
        <div className="gridItem">This is my Box.</div>
      </div>
      <div className="grid">
        <div className="gridBox">This is a box-1</div>
        <div className="gridBox">This is a box-2</div>
        <div className="gridBox">This is a box-3</div>
        <div className="gridBox">This is a box-4</div>
        <div className="gridBox">This is a box-5</div>
        <div className="gridBox">This is a box-6</div>
        <div className="gridBox">This is a box-7</div>
        <div className="gridBox">This is a box-8</div>
        <div className="gridBox">This is a box-9</div>
        <div className="gridBox">This is a box-11</div>
        <div className="gridBox">This is a box-12</div>
        <div className="gridBox">This is a box-13</div>
        <div className="gridBox">This is a box-14</div>
      </div>
      <div class="classContainer">
        <div id="navbar" className="classItem">
          Home About Contact Us
        </div>
        <div id="section" className="classItem">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
          consequuntur quos accusamus iste omnis aut illo expedita facere
          veniam, sapiente ullam possimus suscipit. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Alias, rerum assumenda facere et
          voluptas praesentium dolores sequi dolorem dolorum labore vel
          asperiores, odit, saepe soluta quibusdam beatae quasi dignissimos
          minima! Obcaecati facere ducimus, beatae illo laboriosam officiis esse
          a rerum quibusdam. Autem laboriosam, veniam vel, voluptates, dolor
          voluptatem voluptatum fugiat unde tenetur quia ad dolorum tempore quas
          corporis! Ut distinctio inventore dolorum quis odio totam aliquam
          exercitationem! Debitis animi ipsum unde obcaecati sed, fugiat autem
          iste provident odio, illum asperiores, temporibus a veniam. Est
          eveniet sint recusandae ducimus mollitia accusamus doloremque
          dignissimos, iusto enim commodi, illo, sequi odit! Saepe doloremque
          labore aperiam incidunt pariatur. Necessitatibus mollitia expedita
          reprehenderit accusamus in animi officia voluptates. Similique
          voluptates ad nam, dolor vero nisi eos, ut eum illum cumque molestiae
          quod incidunt voluptatum, provident itaque dolorum nesciunt. Nisi
          omnis necessitatibus voluptatum cupiditate doloribus, magni quasi iste
          quos deleniti voluptas qui non ad, aliquid quam numquam in
          consequuntur possimus? Debitis, ipsum officiis libero maiores hic
          natus? Iste ipsam facere fugit quasi distinctio quos sit voluptatem
          quas adipisci veniam incidunt possimus aperiam maiores inventore eaque
          consectetur nam nulla, magni labore minima consequuntur! Quae
          molestiae distinctio eaque ipsam ab sit quis tenetur veritatis, id
          voluptatem recusandae, optio quas itaque ex possimus dignissimos enim
          nihil. Exercitationem accusantium quis fugiat quos, cumque molestiae
          architecto iure modi reprehenderit, eveniet doloribus hic aliquid
          quaerat deleniti magni impedit itaque inventore esse aspernatur qui.
          Sequi omnis laborum est eaque quaerat perspiciatis perferendis
          possimus nemo maxime, libero unde officia voluptates iusto accusantium
          quos mollitia eos porro odit, distinctio consectetur in. Magni, quam
          accusamus quibusdam eligendi nobis nulla, eveniet nesciunt hic
          perspiciatis maxime repudiandae excepturi, animi consequuntur. Nam
          tempore exercitationem ad laboriosam libero quis inventore iste minus
          illo totam? Rem, eligendi excepturi ducimus similique vero doloribus
          eveniet quas doloremque. Doloribus tenetur voluptatibus quo sit
          deserunt laboriosam doloremque. Eaque aliquam error incidunt? Illo rem
          quibusdam numquam omnis aliquam ipsam, doloremque sequi mollitia nobis
          harum eius suscipit officiis labore, fugit nemo quidem autem ex, eos
          quisquam iusto. Maxime totam debitis quis provident pariatur fugiat
          aliquam, alias praesentium? Laudantium sint, aliquam porro obcaecati
          numquam at explicabo totam harum iure debitis asperiores quod cumque
          neque dolores accusantium, tempore ipsa quo quae perspiciatis aperiam
          natus reprehenderit dolorum quam. Consectetur, laborum voluptatibus
          ullam libero voluptas perspiciatis maiores eligendi id dolorum
          suscipit perferendis blanditiis, dignissimos nemo consequuntur
          voluptate tempora velit numquam, eos maxime optio voluptatem odio.
          Sequi et tempore a quos praesentium.
        </div>
        <div id="aside" className="classItem">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas soluta
          expedita quis! Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Numquam beatae laudantium nihil aliquam quisquam, suscipit,
          tempora maxime excepturi vitae animi voluptatem dignissimos cumque
          nobis obcaecati, eius temporibus voluptas? Numquam ullam atque cum
          minima quod deleniti quae qui! Possimus doloribus ea odio explicabo
          vel. Nemo saepe suscipit ipsa eum tenetur quidem laborum alias
          corrupti! Ad doloribus voluptas laudantium fugiat odit temporibus,
          minima in assumenda cupiditate nihil aliquid sit ullam porro esse
          tempore neque! Error et illo sit deleniti voluptates. Exercitationem
          fuga quos, autem ea explicabo minima animi impedit, corporis obcaecati
          qui esse fugiat a illum dicta quam quis, non repellendus saepe dolores
          sequi vero eveniet ipsum! Qui enim soluta non eveniet pariatur totam
          ipsa alias vitae, eum minus rerum facere magnam nesciunt inventore
          exercitationem praesentium voluptatibus blanditiis mollitia ipsum illo
          asperiores animi quas distinctio veniam! Sit enim numquam,
          consequuntur eius inventore sint quidem praesentium iusto, commodi
          itaque eligendi atque expedita perferendis quam quae quod eaque totam
          culpa quia sed ad. Error nisi voluptates doloribus ab, enim porro
          tenetur? Nulla eligendi minus deleniti omnis quae blanditiis, tempora
          voluptas incidunt beatae obcaecati? Facilis animi delectus quaerat,
          rem quidem totam iure cum maiores dolore ut magni. Consequuntur cum
          magnam dolor officiis, harum ipsum blanditiis dicta amet iusto quos,
          sed eaque ipsa atque provident voluptas rem. Nesciunt minima esse,
          facilis recusandae quod adipisci magnam assumenda necessitatibus!
          Dolor blanditiis exercitationem quas vero officia quia ipsam, vel
          maiores distinctio minus autem eveniet consequuntur magni. Id nostrum,
          sunt cum nesciunt dolore quisquam eligendi dolorem recusandae, beatae
          quis eveniet, aut velit itaque neque necessitatibus quasi laudantium
          commodi illo adipisci minima! Id suscipit quae omnis. Veritatis,
          temporibus. Delectus, eligendi! Magnam itaque veritatis reprehenderit
          eos odit, explicabo recusandae incidunt vitae voluptate saepe hic
          blanditiis pariatur officia. Necessitatibus suscipit quo nostrum!
          Expedita nostrum dolore perspiciatis id, itaque repudiandae tempora
          doloribus amet quas, dicta quam! Nam dolorem voluptatum incidunt iure
          cum eos enim voluptate, iusto voluptatibus modi repudiandae quo,
          ipsum, quos qui soluta. Eos architecto, adipisci rem ipsam unde
          reiciendis officiis eveniet, suscipit eaque quae tempora omnis earum
          ipsum sapiente nostrum neque itaque consequuntur maiores. Saepe
          officia dolores inventore! Natus et aliquid dolorem eius delectus,
          architecto dolor non atque beatae aperiam ipsum numquam quae deserunt
          voluptates voluptate maxime, cum quis ex quia quaerat placeat illo.
          Distinctio, atque, adipisci officia alias excepturi facere iure minus
          non voluptas dolore quidem architecto impedit nostrum optio delectus
          expedita possimus hic, repudiandae iste ipsa eveniet tempore. Impedit,
          cupiditate.
        </div>
      </div>
      <footer className="item">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident quo
        libero cumque.
      </footer>
      <div className="mediaGridContainer">
        <nav className="bdr">
          <span>Home</span>
          <span>About</span>
          <span>Services</span>
          <span>Contact</span>
        </nav>
        <section className="bdr">
          <h2>Learn CSS in hindi</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
            nemo cupiditate distinctio et expedita. Delectus quaerat accusamus
            inventore tenetur error quam minus, provident fugit repellat
            necessitatibus? Architecto itaque quidem sequi blanditiis, facere
            accusantium hic.lorem122 Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Eligendi dignissimos ut rerum aut. Fuga delectus
            suscipit debitis libero. Itaque, ipsum dignissimos consequatur
            repellat distinctio enim dolorem, facilis esse dolorum illum earum
            aliquid numquam blanditiis ipsam reiciendis iure nobis quo cum
            maiores aperiam pariatur. Quas aliquam, quae non rerum, architecto
            eligendi blanditiis officia placeat dolor soluta explicabo.
            Voluptatem tenetur perspiciatis neque quidem ducimus velit id
            explicabo, illo magni quis voluptatum. Tempora quod, dicta illum
            ratione quo at dolores cupiditate aperiam laboriosam amet sequi
            quaerat similique incidunt eius deleniti deserunt accusamus eligendi
            nemo est veritatis fugiat ducimus! Modi ut vel et nihil asperiores
            mollitia obcaecati, neque accusantium corrupti, quisquam voluptatem
            rem? Possimus tempore et fugit cumque culpa aliquam doloremque odio
            hic, cum, minima nostrum!
          </p>
        </section>
        <aside className="bdr">
          <h1>More about us</h1>
        </aside>
      </div>
      <footer className="bdr">Copyright CodeWithHarry 2020</footer>
    </div>
  );
}

export default App;
