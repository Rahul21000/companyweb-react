import "./PersonList.css";
function CurcleImage({ src }) {
  return (
    <div className="circle-image">
      <img
        src={src}
        alt="human images"
        style={{ height: "54px", width: "54px" }}
      ></img>
    </div>
  );
}
function CurcleImagegroup() {
  return (
    <div className="circle-group">
      <CurcleImage src="/Images/Ellipse1.png"></CurcleImage>
      <CurcleImage src="/Images/Ellipse1.png"></CurcleImage>
      <CurcleImage src="/Images/Ellipse1.png"></CurcleImage>
      <CurcleImage src="/Images/Ellipse1.png"></CurcleImage>
      <CurcleImage src="/Images/Ellipse1.png"></CurcleImage>
      <CurcleImage src="/Images/Ellipse1.png"></CurcleImage>
      <CurcleImage src="/Images/Ellipse1.png"></CurcleImage>
    </div>
  );
}
const PersonList = () => {
  return (
    <>
      <CurcleImagegroup></CurcleImagegroup>
    </>
  );
};
export default PersonList;
