import "./DataView.css";

// function Ellipse() {
//   return (
//     <div>
//       <div className="ellipse-1" />
//       <div className="ellipse-2" />
//       <div className="ellipse-3" />
//     </div>
//   );
// }

// function Rectanglegroup() {
//   return (
//     <div className="Rectanglegroup">
//       <Rectangle1 width="150px"></Rectangle1>
//       <Rectangle1 width="72px"></Rectangle1>
//       <Rectangle1 width="98px"></Rectangle1>
//       <Rectangle1 width="85px"></Rectangle1>
//       <Rectangle1 width="80px"></Rectangle1>
//     </div>
//   );
// }
//   function Rectangle2() {
//     return (
//       <div className="box-1">
//         <div className="rectangle-2">

//         </div>
//       </div>
//     );
//   }


// function Rectangleuser({ src }) {
//   return (
//     <div className="rectangleuser">
//       <div className="group-2.1">
//         <Rectangle1 width="35px"></Rectangle1>
//         <Rectangle1 width="59px"></Rectangle1>
//       </div>
//       <div>
//         <div className="img-1">
//           <img
//             src={src}
//             alt="happy black man"
//             style={{ height: "70px", width: "110px" }}
//           />
//         </div>
//       </div>
//       <div className="group-2.2">
//         <Rectangle1 width="35px" className=""></Rectangle1>
//         <Rectangle1 width="59px"></Rectangle1>
//       </div>
//     </div>
//   );
// }

// function Rectangleusergroup() {
//   return (
//     <div className="rectangleusergroup">
//       <Rectangleuser src="/Images/Ordinary Male - Happy - White.png"></Rectangleuser>
//       <Rectangleuser src="/Images/Ordinary Male - Happy - White.png"></Rectangleuser>
//       <Rectangleuser src="/Images/Ordinary Male - Happy - White.png"></Rectangleuser>
//       <Rectangleuser src="/Images/Ordinary Male - Happy - White.png"></Rectangleuser>
//       <Rectangleuser src="/Images/Ordinary Male - Happy - White.png"></Rectangleuser>
//       <Rectangleuser src="/Images/Ordinary Male - Happy - White.png"></Rectangleuser>
//     </div>
//   );
// }
// function Rectangle() {
//     return (
//       <div className="rectangle">
//         <Ellipse></Ellipse>
//         <Rectanglegroup></Rectanglegroup>
//         <div className="verline-1"></div>
//          <Rectangle1 width="112px"></Rectangle1>
//           <Rectangleusergroup></Rectangleusergroup>
//           <div className="verline-2"></div>
//       </div>
//     );
//   }
  
// const DataView = () => {
//   return(
//     <>
//     <Rectangle></Rectangle>
//     </>
//   );
// };
function Rectangle1({ width, bgcolor = "" }) {
  return (
    <div>
      <div
        style={{ width: width, background: bgcolor }}
        className="ractangle-1"
      ></div>
    </div>
  );
}

export default Rectangle1;
