import "./App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import HireDevotees from "./Components/HireDevotees";
import PersonList from "./Components/PersonList";
import Section from "./Components/Section";
import { HireCallback, Bookcall, Starthiring } from "./Components/HireCallback";
import Rectangle1 from "./Components/DataView";

function Label5() {
  return (
    <div className="label-5">
      <div className="label-5-1">Hire the Talent you need in no time.</div>
      <div className="label-5-2">
        The talent that is passionate about building things, and is willing to
        go against the grain to do so.
      </div>
    </div>
  );
}
function Label6() {
  return (
    <div className="label-6">
      <img
        className="img-5"
        src="/Images/clock-svgrepo-com 1.png"
        alt="clock"
      ></img>
      <div className="label-6-1">
        <h3>{"<"}Hire in no time</h3>

        <p>
          <span className="text-wrapper-11">
            {" "}
            Select the candidates, you always needed
          </span>{" "}
          Unlock your dream, Team Anywhere
        </p>
      </div>
    </div>
  );
}
function Label7() {
  return (
    <div className="label-7">
      <img
        className="img-5"
        src="/Images/no-svgrepo-com 1.png"
        alt="close"
      ></img>
      <div className="label-7-1">
        <h3>No Trantrum</h3>
        <p className="wrapper-over">
          <span className="text-wrapper-12">
            {" "}
            Unlock the power of offshore talent that are not less than devotees,
          </span>
          Unlock Talent not Tantrum
        </p>
      </div>
    </div>
  );
}
function Labelgroup() {
  return (
    <div className="label-group">
      <Label5></Label5>
      <Label6></Label6>
      <Label7></Label7>
    </div>
  );
}
function Rectangle8() {
  return (
    <div className="rectangle-8">
      <div className="rectangle-8-1">
        <img
          className="img-6"
          src="/Images/lock-svgrepo-com (2) 1.png"
          alt="check"
        ></img>
        <Rectanglegroup2 width="180px"></Rectanglegroup2>
        <Rectanglegroup2 width="250px"></Rectanglegroup2>
        <Rectanglegroup2 width="140px"></Rectanglegroup2>
        <Rectanglegroup2 width="210px"></Rectanglegroup2>
        <Rectanglegroup2 width="90px"></Rectanglegroup2>
        <Rectanglegroup2 width="180px"></Rectanglegroup2>
      </div>
    </div>
  );
}
function Rectanglegroup2({ width }) {
  return (
    <div className="group-3">
      <div className="group-3-1">
        <Rectangle1 width={width}></Rectangle1>
      </div>
      <div className="group-3-2">
        <img
          className="img-7"
          src="/Images/check-svgrepo-com 1.png"
          alt="check"
        ></img>
      </div>
    </div>
  );
}
function Rectangle9() {
  return (
    <div className="rectangle-9">
      <div className="label-8">Hire the devotees to build your vision</div>
      <div className="text-wrapper-13">
        {" "}
        <Starthiring></Starthiring>
      </div>
      <div className="text-wrapper-14">
        <Bookcall></Bookcall>
      </div>
    </div>
  );
}
function Label8() {
  return (
    <div className="label-9">
      <h3 className="text-wrapper-15">How to get started</h3>
      <p className="text-wrapper-16">
        The process to get started is quite easy all you need to do is share the
        requirements {">"}
        screen the talent {">"} Hire
      </p>
    </div>
  );
}
function Getstarted() {
  return (
    <div className="get-started">
      <div className="text-wrapper-17">Get Started</div>
    </div>
  );
}

// function Rectangle10() {
//   return (
//     <div className="rectangle-10">
//       <div className="img-8">1</div>
//       <div className="text-wrapper-18">Share your requirment</div>
//       <div className="text-wrapper-19">
//         Share the requirement whether you need developers, designers, marketers,
//         customer support, etc
//       </div>
//       <div className="rectangle-10-1">
//         <div className="rectangle-10-2">
//           <img className="img-9" src="/Images/circle.png" alt="circle"></img>
//           <div className="rectangle-10-3"></div>
//         </div>
//       </div>
//     </div>
//   );
// }
function App() {
  return (
    <div className="App">
      <div className="bodyrectangle">
        <Navbar></Navbar>
        <Header></Header>
        <HireDevotees></HireDevotees>
        {/* <DataView></DataView> */}
        <PersonList></PersonList>
        <p className="lable-4">50+ Startups have already Hired with us!</p>
        <Section></Section>
        <HireCallback></HireCallback>
        <Labelgroup></Labelgroup>
        <Rectangle8></Rectangle8>
        <Rectangle9></Rectangle9>
        <Label8></Label8>
        <Getstarted></Getstarted>
        <div className="developer">designed by rahul in <span>React js</span> </div>
      </div>
    </div>
  );
}

export default App;
