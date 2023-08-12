import "./Header.css";
const Header = () => {
//   const txt1 = [];
  return (
    <div className="header">
        
          <h1 className="text-wrapper-2"> A hiring heaven for</h1>
          <h1 className="text-wrapper-3">those who are building future</h1>
          <h1 className="hiring-delinquent">
          <span className="text-wrapper-4">Hiring </span>
          <span className="span">delinquent talent</span>
          <span className="text-wrapper-4">? Instead hire </span>
          <span className="text-wrapper-5">devotees</span>
          <span className="text-wrapper-4">
            {" "}
            that are passionate
            <br />
          </span>
          <span className="text-wrapper-6">
            &nbsp;&nbsp;to build your vision
          </span>
        </h1>
    </div>
  );
};
export default Header;
