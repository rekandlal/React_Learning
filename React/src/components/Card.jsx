import { useState } from "react";

function Card({
  profile,
  companyName,
  days,
  tag,
  option1,
  option2,
  salary,
  location,
  save
}) {


  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    setIsSaved(!isSaved);
  };


  return (
    <div className="card">

      {/* Upper Section */}
      <div className="upper">

        <div className="images">
          <img
          src={profile}
          alt="company profile"
          className="profile-img"
        />
        </div>

        <div className="save" onClick={handleSave}>
          <h3>{isSaved ? "Saved" : "Save"}</h3>

          <img
            src={save}
            alt="save icon"
            className={`save-icon ${isSaved ? "active" : ""}`}
          />
        </div>

      </div>

      {/* Middle Section */}
      <div className="middle">

        <div className="company-info">
          <h3>{companyName}</h3>
          <h4>{days}</h4>
        </div>

        <h1 className="job-title">{tag}</h1>

        <div className="options">

          <div className="option">
            <h3>{option1}</h3>
          </div>

          <div className="option">
            <h3>{option2}</h3>
          </div>

        </div>

      </div>

      {/* Lower Section */}
      <div className="lower">

        <div className="salary">
          <h2>{salary}</h2>
          <h3>{location}</h3>
        </div>

        <button>Apply now</button>

      </div>

    </div>
  );
}

export default Card;