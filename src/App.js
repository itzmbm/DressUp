import React from "react";

import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";

<<<<<<< HEAD
const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);
||||||| 81ed469
=======
import HomePage from "./pages/homepage/homepage.component";
>>>>>>> ee18b8aabf55a95edc9e8c995a0925538d65dcec
function App() {
<<<<<<< HEAD
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
||||||| 81ed469
  return <div>Hello World!!!</div>;
=======
  return (
    <div>
      <HomePage />
    </div>
  );
>>>>>>> ee18b8aabf55a95edc9e8c995a0925538d65dcec
}

export default App;
