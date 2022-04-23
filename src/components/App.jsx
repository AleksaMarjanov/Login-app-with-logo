import React from "react";
import Form from "./Form";
import Navigation from './Navigation';


var userIsRegistered = true;


function App() {
  return (
    <div> 
       <Navigation />
      <div className="container">
      <Form 
      isRegistered={userIsRegistered}
      />
      </div>
    </div>
  );
}

export default App;
