import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createCard(contact) {
  return <Card
    key={contact.id} 
    name={contact.name}
    imgURL={contact.imgURL}
    tel={contact.phone}
    email={contact.email}
  />;
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar 
        imgURL="https://media.licdn.com/dms/image/v2/D4D03AQHn0_lQhXbvSg/profile-displayphoto-shrink_800_800/B4DZT8XcRbG8Ac-/0/1739400794507?e=1749686400&v=beta&t=VlWOJb46DirV3FXJ4_5p1J74spLaIKVv0siZoQYgUow" 
      />

      {contacts.map(createCard)}

    </div>
  );
}

export default App;


