import "./Section.css";
const Section=()=> {
      return (
        <div className="Section">
          <div className="rectangle-6-1">
          <div className="img-4">
              <img
                style={{ borderRadius: "5px" }}
                src="/Images/clock-svgrepo-com 1.png"
                alt="clock gram"
              ></img>
            </div>
             <h3 className="text-wrapper-8">Superfast Hiring ...</h3>
            <p className="text-wrapper-9">
              We handle the entire recruiting, vetting, and screening process.
            </p>
          </div>
          <div className="rectangle-6-2">
            <div className="img-4">
              <img
                style={{ borderRadius: "5px" }}
                src="/Images/data-analysis.png"
                alt="data gram"
              ></img>
            </div>
            <h3 className="text-wrapper-8">Top 1% of Talent</h3>
            <p className="text-wrapper-9">
              For every move, virtual Assistants are ready to get the job done.
            </p>
          </div>
          <div className="rectangle-6-3">
            <div className="img-4">
              <img
                style={{ borderRadius: "5px" }}
                src="/Images/security.png"
                alt="security"
              ></img>
            </div>
            <h3 className="text-wrapper-8">Ready to Scale</h3>
            <p className="text-wrapper-9">
              Whether you need 2 or 20 team members, we’ve got your back.
            </p>
          </div>
        </div>
      );
    }
    export default Section; 