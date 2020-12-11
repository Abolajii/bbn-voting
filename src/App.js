import React from "react";

import Housemates from "./components/Housemates";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import LeaderBoard from "./components/LeaderBoard";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={"/"} component={Housemates} />
          <Route path={"/bbn/leaderboard"} component={LeaderBoard} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
