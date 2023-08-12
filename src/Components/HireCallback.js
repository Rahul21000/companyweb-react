import "./HireCallback.css";
  function HireCallback(){
    return(
        <div className="Hire-callback">
        <Starthiring></Starthiring>
        <Bookcall></Bookcall>
        </div>
    )
 }
function Starthiring() {
  return (
    <div className="start-hiring">
      <button href='#' className="text-wrapper-10">Start Hiring</button >
    </div>
  );
}
function Bookcall() {
  return (
    <div className="book-call">
      <button href='#' className="text-wrapper-10">Book a Call</button>
    </div>
  );
}
export {HireCallback,Bookcall,Starthiring} ;