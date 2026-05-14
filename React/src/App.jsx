import Card from "./components/Card"

// important image here from assets folder
import icon from "./assets/save.png";
import google from "./assets/google.png";
import figma from "./assets/figma.png";
import apple from "./assets/apple.png";
import airbnb from "./assets/airbnb.png";
import amazon from "./assets/amazon.png";
import dribble from "./assets/dribble.png";




function App() {

  return (
    <div className="parent">
      <Card
        profile={amazon}
        companyName="Amazon"
        days="5 days ago"
        tag="Senior UI/UX Designer"
        option1="Part-Time"
        option2="Senior Level"
        salary="$120/hr"
        location="Mumbai, India"
        save={icon}
      />


      <Card
        profile={google}
        companyName="Google"
        days="30 days ago"
        tag="Graphic Designer"
        option1="Part-Time"
        option2="Flexible Schedule"
        salary="$150-220/hr"
        location="Kochi, India"
        save={icon}
      />



      <Card
        profile={dribble}
        companyName="Dribble"
        days="15 days ago"
        tag="Senior Motion Designer"
        option1="Contract"
        option2="Remote"
        salary="$85/hr"
        location="Chennai, India"
        save={icon}
      />



      <Card
        profile={figma}
        companyName="Figma"
        days="5 days ago"
        tag="UI Designer"
        option1="Full-Time"
        option2="In office"
        salary="$200-250/hr"
        location="Bangalore, India"
        save={icon}
      />



      <Card
        profile={airbnb}
        companyName="Airbnb"
        days="5 days ago"
        tag="Junior UI/UX Designer"
        option1="Contract"
        option2="Remote"
        salary="$100/hr"
        location="Delhi, India"
        save={icon}
      />



      <Card
        profile={apple}
        companyName="Apple"
        days="5 days ago"
        tag="Graphic Designer"
        option1="Full-Time"
        option2="Flexible Schedule"
        salary="$85-120/hr"
        location="Kerala, India"
        save={icon}
      />


    </div>


    
  )
}

export default App
