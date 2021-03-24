import React from "react";
import ReactDOM from "react-dom";
import Data from "./Data";
import ScotchInfoBar from "./ScotchInfoBar";
import "./styles.css";

const user = {
  name: "Chris on Code",
  location: "Las Vegas",
  foodType: "Everything",
  age: 28,
  likes: "Coding into the wee hours of the morning",
  twitterUsername: "chrisoncode",
  avatar:
    "https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png"
};

function App() {
  return (
    <div className="App">
      <div className="user-deets">
        <img className="" alt="" src={user.avatar} />
        <a href={"https://twitter.com/" + user.twitterUsername}>
          <h3> {user.name} </h3>
        </a>
        <Data title="Location" data={user.location} />
        <br />
        <Data title="Eats" data={user.foodType} />
        <br />
        <Data title="Age" data={user.age} />
        <br />
        <Data title="Likes" data={user.likes} />
        <br />
        <div>
          <strong href="#">Twitter</strong>
          <a href="#">{"@" + user.twitterUsername}</a>
        </div>
      </div>
      <ScotchInfoBar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
