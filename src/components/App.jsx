import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar 
        imgURL="https://media.licdn.com/dms/image/v2/D4D03AQHn0_lQhXbvSg/profile-displayphoto-shrink_800_800/B4DZT8XcRbG8Ac-/0/1739400794507?e=1749686400&v=beta&t=VlWOJb46DirV3FXJ4_5p1J74spLaIKVv0siZoQYgUow" 
      />

      <Card
        name={contacts[0].name}
        imgURL={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        imgURL={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        imgURL={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;


