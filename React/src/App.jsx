import Card from "./components/Card"

// important image here from assets folder
import icon from "./assets/bookmark.png";
import google from "./assets/google.png";
import figma from "./assets/figma.png";
import apple from "./assets/apple.png";
import airbnb from "./assets/airbnb.png";
import amazon from "./assets/amazon.png";
import dribble from "./assets/dribble.png";

const jobs = [
                {
                  profile: amazon,
                  companyName: "Amazon",
                  days: "5 days ago",
                  tag: "Senior UI/UX Designer",
                  option1: "Part-Time",
                  option2: "Senior Level",
                  salary: "$120/hr",
                  location: "Mumbai, India",
                  save: icon,
                },
                {
                  profile: google,
                  companyName: "Google",
                  days: "30 days ago",
                  tag: "Graphic Designer",
                  option1: "Part-Time",
                  option2: "Flexible Schedule",
                  salary: "$150-220/hr",
                  location: "Kochi, India",
                  save: icon,
                },
                {
                  profile: dribble,
                  companyName: "Dribble",
                  days: "15 days ago",
                  tag: "Senior Motion Designer",
                  option1: "Contract",
                  option2: "Remote",
                  salary: "$85/hr",
                  location: "Chennai, India",
                  save: icon,
                },
                {
                  profile: figma,
                  companyName: "Figma",
                  days: "10 days ago",
                  tag: "UI Designer",
                  option1: "Full-Time",
                  option2: "Hybrid",
                  salary: "$200-250/hr",
                  location: "Bangalore, India",
                  save: icon,
                },
                {
                  profile: airbnb,
                  companyName: "Airbnb",
                  days: "8 days ago",
                  tag: "Junior UI/UX Designer",
                  option1: "Contract",
                  option2: "Remote",
                  salary: "$100/hr",
                  location: "Delhi, India",
                  save: icon,
                },
                {
                  profile: apple,
                  companyName: "Apple",
                  days: "2 days ago",
                  tag: "Graphic Designer",
                  option1: "Full-Time",
                  option2: "Flexible Schedule",
                  salary: "$85-120/hr",
                  location: "Kerala, India",
                  save: icon,
                },
              ];


function App() {

  return (
    <div className="parent">
      
      {jobs.map( (job, index) => (
        <Card key={index} profile={job.profile} companyName={job.companyName} days={job.days} tag={job.tag} option1={job.option1} option2={job.option2} salary={job.salary} location={job.location} save={job.save}/>
      ))}

    </div>


    
  )
}

export default App
